import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';

import { Suspense } from 'react';
import { TextureLoader } from 'three';
import profilePic from '../../profilePic.jpg';

export default function ProfilePic() {
  const profilePicTexture = useLoader(TextureLoader, profilePic);

  return (
    <>
      <Canvas
        className="max-w-[170px]"
        shadows
        dpr={[1, 2]}
        camera={{ fov: 55, position: [0, 0, 6] }}
      >
        <Suspense fallback={null}>
          <mesh scale={0.5} rotation={[1.6, 1.6, 0]}>
            <cylinderGeometry args={[6, 6, 0.5, 50]} />
            <meshBasicMaterial map={profilePicTexture} />
            <OrbitControls autoRotate={true} />
          </mesh>
        </Suspense>
      </Canvas>
    </>
  );
}
