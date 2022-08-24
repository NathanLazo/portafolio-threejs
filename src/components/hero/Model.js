import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame} from "@react-three/fiber";
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Environment } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF('3d/scene.gltf')
  const eth =  useRef(null);

  useFrame(({clock}) => {
    eth.current.rotation.y = 0.4 * clock.getElapsedTime();
  });
  return (
    <group {...props} dispose={null} ref={eth}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={.014}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['default']} />
      </group>
    </group>
  )
}

const ModelEth = () => {
  return (
    <Canvas
      shadows={true}
      camera={{
        position: [-2, 2, 12],
      }}
    >
      <Model position={[0, 2, 0]} />
      <OrbitControls enableZoom={false}/>
      <ambientLight color={"white"} intensity={0.2} />
      <Environment
        background={false}
        files={["garden.hdr"]}
        path={"/"}
        preset={"sunset"}
      />
    </Canvas>
  );
};

export default ModelEth;
