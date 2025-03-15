
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import TelecomTower from './TelecomTower';

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
        camera={{ position: [0, 0, 15], fov: 40 }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['transparent']} />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <TelecomTower position={[0, -3, 0]} scale={[0.6, 0.6, 0.6]} />
          <Environment preset="sunset" />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            makeDefault
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TelecomScene;
