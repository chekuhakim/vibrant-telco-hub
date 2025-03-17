
import React, { useRef, useState, useMemo, forwardRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Line } from '@react-three/drei';

interface NodeProps {
  position: [number, number, number];
  color: string;
  size?: number;
  isHovered?: boolean;
}

const Node = forwardRef<THREE.Mesh, NodeProps>(({ position, color, size = 0.3, isHovered }, ref) => {
  // Pulse animation
  useFrame(({ clock }) => {
    if (ref && 'current' in ref && ref.current) {
      if (isHovered) {
        ref.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 3) * 0.1);
      } else {
        // Return to normal size when not hovered
        ref.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <mesh ref={ref} position={position} castShadow>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        emissive={isHovered ? color : '#000000'} 
        emissiveIntensity={isHovered ? 0.5 : 0}
        metalness={0.8} 
        roughness={0.2} 
      />
    </mesh>
  );
});

Node.displayName = 'Node';

interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  active?: boolean;
}

const Connection: React.FC<ConnectionProps> = ({ start, end, active }) => {
  const color = active ? "#ff7f4d" : "#aaaaaa";
  const lineWidth = active ? 2 : 1;
  
  return (
    <Line
      points={[start, end]}
      color={color}
      lineWidth={lineWidth}
      dashed={!active}
      transparent
      opacity={active ? 1 : 0.5}
    />
  );
};

const NetworkVisualization: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const { raycaster, camera, mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<Array<THREE.Mesh | null>>([]);

  // Create network structure
  const { nodes, connections } = useMemo(() => {
    const nodeCount = 20;
    const nodePositions: [number, number, number][] = [];
    
    // Generate nodes in a distributed sphere-like arrangement
    for (let i = 0; i < nodeCount; i++) {
      // Use fibonacci sphere distribution for evenly spaced points
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      
      // Radius between 5 and 8 for a sphere with some randomness
      const radius = 5 + Math.random() * 3;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      nodePositions.push([x, y, z]);
    }
    
    // Generate connections between nodes
    const nodeConnections: { start: number; end: number }[] = [];
    
    // Connect to nearby nodes with some randomness
    for (let i = 0; i < nodeCount; i++) {
      // Each node connects to 2-4 other nodes
      const connectionCount = Math.floor(Math.random() * 3) + 2;
      
      for (let j = 0; j < connectionCount; j++) {
        // Find a random node to connect to
        const targetNode = Math.floor(Math.random() * nodeCount);
        
        // Don't connect to self
        if (targetNode !== i) {
          nodeConnections.push({ start: i, end: targetNode });
        }
      }
    }
    
    return { nodes: nodePositions, connections: nodeConnections };
  }, []);

  // Check for hover on nodes
  useFrame(() => {
    if (!groupRef.current) return;
    
    // Update rotation based on mouse position
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.5,
      0.05
    );
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouse.y * 0.3,
      0.05
    );
    
    // Reset raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Filter out null values and create an array of valid meshes
    const validNodes = nodesRef.current.filter(node => node !== null) as THREE.Mesh[];
    
    // Get all intersections
    const intersects = raycaster.intersectObjects(validNodes);
    
    // If we found an intersection
    if (intersects.length > 0) {
      // Find the index of the node
      const nodeIndex = nodesRef.current.findIndex(node => node === intersects[0].object);
      setHoveredNode(nodeIndex);
    } else {
      setHoveredNode(null);
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Render connections */}
      {connections.map((connection, idx) => {
        const isActive = hoveredNode === connection.start || hoveredNode === connection.end;
        return (
          <Connection 
            key={`connection-${idx}`}
            start={nodes[connection.start]} 
            end={nodes[connection.end]}
            active={isActive}
          />
        );
      })}
      
      {/* Render nodes */}
      {nodes.map((position, idx) => {
        const isServerNode = idx % 5 === 0; // Every 5th node is a "server" node
        
        return (
          <Node 
            key={`node-${idx}`}
            position={position}
            color={isServerNode ? '#ff7f4d' : '#4d8fff'}
            size={isServerNode ? 0.4 : 0.25}
            isHovered={hoveredNode === idx}
            ref={el => {
              nodesRef.current[idx] = el;
            }}
          />
        );
      })}
      
      {/* Central hub */}
      <Node 
        position={[0, 0, 0]} 
        color="#ff5a1f" 
        size={0.6}
        isHovered={false}
        ref={el => {}}
      />
    </group>
  );
};

export default NetworkVisualization;
