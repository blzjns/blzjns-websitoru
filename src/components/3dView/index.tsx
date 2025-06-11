import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { RefObject, useRef } from 'react';
import { Glasses } from './Glasses';
import { RetroComputer } from './RetroComputer';

interface _3dViewProps {
  targetViewRef: RefObject<HTMLDivElement | null>;
  endFn: Function;
  selfRef: RefObject<HTMLDivElement | null>;
}

export default function _3dView({ targetViewRef, endFn }: _3dViewProps) {
  const glassRef = useRef(null);
  const computerRef = useRef(null);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 55, position: [0, 0, 6] }}>
      <Environment preset="city" />
      <Glasses
        callbackFn={endFn}
        selfRef={glassRef}
        targetViewRef={targetViewRef}
      />
      <RetroComputer selfRef={computerRef} />
      <OrbitControls />
    </Canvas>
  );
}
