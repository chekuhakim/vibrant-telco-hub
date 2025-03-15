
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import NetworkVisualization from './NetworkVisualization';

const TelecomScene: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        shadows 
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true 
        }}
        camera={{ position: [0, 0, 20], fov: 50 }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#ffffff00']} />
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <NetworkVisualization />
          <Environment preset="sunset" />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.3}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
            makeDefault
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TelecomScene;
