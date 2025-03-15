
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import TelecomTower from './TelecomTower';

const TelecomScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas shadows>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={40} />
          <TelecomTower position={[0, -3, 0]} scale={[0.6, 0.6, 0.6]} />
          <Environment preset="sunset" />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TelecomScene;
