import { useGLTF } from '@react-three/drei';

import retroComputer from '../../3dModels/retro_computer.glb';

import { useFrame } from '@react-three/fiber';
import { RefObject } from 'react';
import { UseGLTFProps } from './constants';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

export function RetroComputer({ selfRef }: { selfRef: RefObject<null> }) {
  // const controls = useControls(
  //   defaultControls([0.7, -2, 0], [5, 0, 0], [0.03, 0.03, 0.03])
  // );
  const { nodes, materials } = useGLTF(
    retroComputer
  ) as unknown as UseGLTFProps;

  useFrame(({ clock }) => {
    if (!selfRef?.current) {
      return;
    }

    (selfRef.current as any).rotation.z = clock.elapsedTime / 2;
    (selfRef.current as any).rotation.y = clock.elapsedTime / 2;
    (selfRef.current as any).position.y =
      (selfRef.current as any).position.y + clock.elapsedTime / 500;
    (selfRef.current as any).position.x =
      (selfRef.current as any).position.x + clock.elapsedTime / 500;
  });

  return (
    <>
      <group
        ref={selfRef}
        dispose={null}
        scale={[0.03, 0.03, 0.03]}
        position={[-3, -5, 0]}
        rotation={[4.5, 0, 0]}
        // scale={[controls['scale.x'], controls['scale.y'], controls['scale.z']]}
        // position={[
        //   controls['position.x'],
        //   controls['position.y'],
        //   controls['position.z']
        // ]}
        // rotation={[
        //   controls['rotation.x'],
        //   controls['rotation.y'],
        //   controls['rotation.z']
        // ]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry
          }
          material={materials.retro_computer_setup_Mat}
        />
      </group>
    </>
  );
}

useGLTF.preload(retroComputer);
