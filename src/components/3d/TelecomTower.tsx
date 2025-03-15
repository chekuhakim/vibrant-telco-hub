
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function TelecomTower(props: any) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Simple tower model created with primitives
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        state.mouse.x * Math.PI * 0.2,
        0.1
      );
    }
  });

  return (
    <group ref={meshRef} {...props} dispose={null}>
      {/* Base of the tower */}
      <mesh position={[0, -2, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.5, 2]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      
      {/* Main tower structure */}
      <mesh position={[0, 3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.5, 10, 8]} />
        <meshStandardMaterial color="#CCCCCC" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Tower sections */}
      {[-2, 0, 2].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} castShadow receiveShadow>
          <torusGeometry args={[1, 0.1, 8, 12]} />
          <meshStandardMaterial color="#AAAAAA" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
      
      {/* Antennas */}
      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
        <group key={i} rotation={[0, angle, 0]} position={[0, 4, 0]}>
          <mesh position={[0.8, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.1, 1, 0.3]} />
            <meshStandardMaterial color="#FF7F4D" />
          </mesh>
        </group>
      ))}
      
      {/* Signal waves */}
      {[1, 2, 3].map((scale, i) => (
        <mesh key={i} position={[0, 8, 0]} scale={[scale, scale, scale]} renderOrder={-1}>
          <torusGeometry args={[1, 0.02, 16, 32]} />
          <meshBasicMaterial color="#FF7F4D" transparent opacity={0.3 - i * 0.1} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}
