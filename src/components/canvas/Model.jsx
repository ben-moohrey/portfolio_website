/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/nanoplanet.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere_1.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere_2.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[0.36, 0.96, 0.03]}
        rotation={[0.09, -0.02, -0.4]}
        scale={[0.7, 0.7, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[0.32, 0.98, -0.03]}
        rotation={[-0.08, 0.05, -0.4]}
        scale={[0.68, 0.68, 0.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        position={[0.2, 1.01, -0.05]}
        rotation={[-0.08, 0.06, -0.13]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[0.21, 1.01, 0.04]}
        rotation={[0.1, 0.03, -0.13]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={nodes.Plane004.material}
        position={[0.29, 0.98, 0.12]}
        rotation={[0.18, 0.02, -0.24]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={nodes.Plane005.material}
        position={[0.26, 0.99, -0.12]}
        rotation={[-0.15, 0.1, -0.24]}
        scale={0.51}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[0.39, 0.95, 0.12]}
        rotation={[0.11, 0.01, -0.4]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={nodes.Plane007.material}
        position={[0.16, 1, 0.19]}
        rotation={[0.17, -0.01, -0.24]}
        scale={0.51}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={nodes.Plane008.material}
        position={[0.81, 0.69, 0.31]}
        rotation={[0.38, -0.13, -0.82]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={nodes.Plane009.material}
        position={[0.84, 0.6, 0.39]}
        rotation={[0.38, -0.13, -0.82]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={nodes.Plane010.material}
        position={[0.88, 0.61, 0.28]}
        rotation={[0.26, 0, -0.85]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={nodes.Plane011.material}
        position={[0.79, 0.61, -0.5]}
        rotation={[-0.07, 0.4, -0.91]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={nodes.Plane012.material}
        position={[0.72, 0.68, -0.51]}
        rotation={[-0.16, 0.49, -0.75]}
        scale={0.51}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={nodes.Plane013.material}
        position={[0.72, 0.61, -0.6]}
        rotation={[-0.3, 0.6, -0.74]}
        scale={[0.61, 0.61, 0.61]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={nodes.Plane014.material}
        position={[0.8, 0.65, -0.42]}
        rotation={[-0.08, 0.39, -0.9]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={nodes.Plane015.material}
        position={[0.81, 0.53, -0.56]}
        rotation={[-0.2, 0.55, -1.08]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={nodes.Plane016.material}
        position={[0.32, -0.47, 0.96]}
        rotation={[1.65, -0.8, -0.42]}
        scale={0.53}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={nodes.Plane017.material}
        position={[0.42, -0.49, 0.91]}
        rotation={[1.61, -0.78, -0.62]}
        scale={[0.59, 0.59, 0.59]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={nodes.Plane018.material}
        position={[0.29, -0.59, 0.92]}
        rotation={[1.87, -0.86, -0.21]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={nodes.Plane019.material}
        position={[0.34, -0.54, 0.92]}
        rotation={[1.61, -0.78, -0.62]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={nodes.Plane020.material}
        position={[0.2, -0.55, 0.95]}
        rotation={[1.87, -0.86, -0.21]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={nodes.Plane021.material}
        position={[0.33, -0.65, 0.85]}
        rotation={[1.79, -0.84, -0.61]}
        scale={0.74}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={nodes.Plane022.material}
        position={[0.39, -0.58, 0.87]}
        rotation={[1.63, -0.76, -0.6]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={nodes.Plane023.material}
        position={[0.46, -0.58, 0.84]}
        rotation={[1.63, -0.76, -0.6]}
        scale={[0.62, 0.62, 0.62]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={nodes.Plane024.material}
        position={[0.22, -0.72, 0.82]}
        rotation={[2.02, -0.9, -0.38]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={nodes.Plane025.material}
        position={[0.11, 0.28, -0.99]}
        rotation={[-1.19, 1.03, -0.03]}
        scale={[0.61, 0.61, 0.61]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={nodes.Plane026.material}
        position={[-0.02, 0.28, -0.99]}
        rotation={[-1.19, 1.03, -0.03]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={nodes.Plane027.material}
        position={[-0.06, 0.14, -1.02]}
        rotation={[-1.4, 1.03, 0]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={nodes.Plane028.material}
        position={[0.11, 0.14, -1.01]}
        rotation={[-1.23, 1.02, -0.3]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={nodes.Plane029.material}
        position={[0.02, 0.16, -1.02]}
        rotation={[-1.4, 1.03, 0]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={nodes.Plane030.material}
        position={[-0.23, 0.23, -0.98]}
        rotation={[-1.85, 0.96, 0.56]}
        scale={[0.69, 0.69, 0.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane031.geometry}
        material={nodes.Plane031.material}
        position={[-0.11, 0.24, -1]}
        rotation={[-1.4, 1.03, 0]}
        scale={[0.64, 0.64, 0.64]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane032.geometry}
        material={nodes.Plane032.material}
        position={[-0.19, 0.14, -1]}
        rotation={[-1.72, 1.01, 0.3]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane033.geometry}
        material={nodes.Plane033.material}
        position={[-0.07, 0.02, -1.03]}
        rotation={[-1.72, 1.01, 0.3]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane034.geometry}
        material={nodes.Plane034.material}
        position={[0.06, 0.02, -1.03]}
        rotation={[-1.24, 1.01, -0.29]}
        scale={0.67}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane035.geometry}
        material={nodes.Plane035.material}
        position={[-0.03, -0.12, -1.02]}
        rotation={[-1.75, 1.05, 0]}
        scale={0.36}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane036.geometry}
        material={nodes.Plane036.material}
        position={[-0.2, -0.04, -1.01]}
        rotation={[-1.92, 1.03, 0.31]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane037.geometry}
        material={nodes.Plane037.material}
        position={[-0.3, 0.05, -0.99]}
        rotation={[-1.93, 1.03, 0.63]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane038.geometry}
        material={nodes.Plane038.material}
        position={[-0.37, 0.18, -0.94]}
        rotation={[-1.93, 1.03, 0.63]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane039.geometry}
        material={nodes.Plane039.material}
        position={[-0.48, 0.32, -0.86]}
        rotation={[-2.14, 0.89, 1.11]}
        scale={0.62}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane040.geometry}
        material={nodes.Plane040.material}
        position={[-0.62, 0.08, -0.82]}
        rotation={[-2.2, 0.81, 1]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane041.geometry}
        material={nodes.Plane041.material}
        position={[-0.53, 0.2, -0.86]}
        rotation={[-2.2, 0.81, 1]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane042.geometry}
        material={nodes.Plane042.material}
        position={[-0.45, 0, -0.93]}
        rotation={[-2.12, 0.88, 0.79]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane043.geometry}
        material={nodes.Plane043.material}
        position={[-0.37, -0.11, -0.96]}
        rotation={[-2.14, 0.87, 0.49]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane044.geometry}
        material={nodes.Plane044.material}
        position={[-0.26, -0.18, -0.98]}
        rotation={[-2.14, 0.87, 0.49]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane045.geometry}
        material={nodes.Plane045.material}
        position={[0.47, 0.96, 0.41]}
        rotation={[0.36, -0.12, -0.52]}
        scale={[0.71, 0.71, 0.71]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane046.geometry}
        material={nodes.Plane046.material}
        position={[0.32, 0.93, 0.58]}
        rotation={[0.43, -0.15, -0.35]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane047.geometry}
        material={nodes.Plane047.material}
        position={[0.49, 0.89, 0.52]}
        rotation={[0.43, -0.15, -0.35]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane048.geometry}
        material={nodes.Plane048.material}
        position={[0.3, 0.85, 0.69]}
        rotation={[0.59, -0.2, -0.3]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={nodes.Plane049.material}
        position={[0.61, 0.87, 0.41]}
        rotation={[0.37, -0.1, -0.52]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane050.geometry}
        material={nodes.Plane050.material}
        position={[-0.33, 0.77, 0.61]}
        rotation={[0.6, 0.15, 0.19]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane051.geometry}
        material={nodes.Plane051.material}
        position={[-0.48, 0.76, 0.5]}
        rotation={[0.28, 0.45, 0.54]}
        scale={0.51}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane052.geometry}
        material={nodes.Plane052.material}
        position={[-0.37, 0.79, 0.56]}
        rotation={[0.32, 0.5, 0.36]}
        scale={[0.61, 0.61, 0.61]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane053.geometry}
        material={nodes.Plane053.material}
        position={[-0.37, 0.75, 0.62]}
        rotation={[0.79, 0.08, 0.23]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane054.geometry}
        material={nodes.Plane054.material}
        position={[-0.23, 0.76, 0.66]}
        rotation={[0.59, 0.18, 0.19]}
        scale={0.82}
      />
      <group
        position={[0.45, 0.74, 0.74]}
        rotation={[0.73, -0.16, -0.41]}
        scale={1.08}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={nodes.Plane002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={nodes.Plane002_2.material}
        />
      </group>
      <group
        position={[-0.34, 0.68, 0.7]}
        rotation={[0.85, -0.17, 0.24]}
        scale={0.81}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={nodes.Plane002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={nodes.Plane002_2.material}
        />
      </group>
      <group
        position={[0.83, 0.55, -0.5]}
        rotation={[-1.49, -0.47, -1.12]}
        scale={[0.69, 0.69, 0.69]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={nodes.Plane002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={nodes.Plane002_2.material}
        />
      </group>
      <group
        position={[0.4, 0.94, -0.09]}
        rotation={[-1.02, -1.08, -0.99]}
        scale={[0.69, 0.69, 0.69]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={nodes.Plane002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={nodes.Plane002_2.material}
        />
      </group>
      <group
        position={[0.39, -0.42, 0.96]}
        rotation={[-0.88, -0.78, -2.72]}
        scale={[0.69, 0.69, 0.69]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={nodes.Plane002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={nodes.Plane002_2.material}
        />
      </group>
      <group
        position={[0.81, 0.53, 0.55]}
        rotation={[0.32, -0.49, -1.02]}
        scale={[0.69, 0.69, 0.69]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={nodes.Plane002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={nodes.Plane002_2.material}
        />
      </group>
      <group
        position={[0.88, 0.51, 0.43]}
        rotation={[-0.21, -0.54, -1.21]}
        scale={[0.69, 0.69, 0.69]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={nodes.Plane002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={nodes.Plane002_2.material}
        />
      </group>
      <group
        position={[0.86, 0.43, 0.54]}
        rotation={[0.32, -0.49, -1.02]}
        scale={[0.69, 0.69, 0.69]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={nodes.Plane002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={nodes.Plane002_2.material}
        />
      </group>
      <group
        position={[0.77, 0.45, 0.66]}
        rotation={[0.68, -0.25, -0.89]}
        scale={[0.75, 0.75, 0.75]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={nodes.Plane002_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={nodes.Plane002_2.material}
        />
      </group>
      <group
        position={[-0.15, 0.97, 0.21]}
        rotation={[0.18, 0.81, 0.13]}
        scale={[0.79, 0.79, 0.79]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={nodes.Plane003_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={nodes.Plane003_2.material}
        />
      </group>
      <group
        position={[0.85, -0.51, -0.16]}
        rotation={[-0.62, 0.4, -1.85]}
        scale={0.75}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={nodes.Plane003_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={nodes.Plane003_2.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={nodes.Icosphere002.material}
        position={[-0.94, 0.95, -0.12]}
        rotation={[2.48, -0.48, 2.24]}
        scale={[0.65, 0.65, 0.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={nodes.Icosphere003.material}
        position={[-0.02, 0.15, 1.33]}
        rotation={[-1.67, 0.46, 3.13]}
        scale={[0.65, 0.65, 0.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={nodes.Icosphere004.material}
        position={[0.58, 1.05, -0.6]}
        rotation={[2.96, -0.61, -2.59]}
        scale={[0.65, 0.65, 0.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={nodes.Icosphere005.material}
        position={[-1.18, -0.32, 0.56]}
        rotation={[-0.57, 0.25, 2.01]}
        scale={[0.65, 0.65, 0.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere006.geometry}
        material={nodes.Icosphere006.material}
        position={[0.03, 1.31, -0.54]}
        rotation={[2.98, -1.09, -2.9]}
        scale={[0.9, 0.9, 0.9]}
      />
      <group
        position={[0.52, 0.09, 0.85]}
        rotation={[1.28, -0.38, -0.51]}
        scale={[0.78, 0.78, 0.78]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_2.geometry}
          material={nodes.Plane005_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_3.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={nodes.Icosphere007.material}
        position={[-1.21, 0.51, 0.39]}
        scale={0.88}
      />
    </group>
  );
}

useGLTF.preload("/nanoplanet.glb");



