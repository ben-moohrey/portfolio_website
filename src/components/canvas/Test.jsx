import useStore from '@/helpers/store'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, Suspense } from 'react'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import Model from './Model'

const visibleHeightAtZDepth = ( depth, camera ) => {
  // compensate for cameras not positioned at z=0
  const cameraOffset = camera.position.z;
  if ( depth < cameraOffset ) depth -= cameraOffset;
  else depth += cameraOffset;

  // vertical fov in radians
  const vFOV = camera.fov * Math.PI / 180; 

  // Math.abs to ensure the result is always positive
  return 2 * Math.tan( vFOV / 2 ) * Math.abs( depth );
};

const visibleWidthAtZDepth = ( depth, camera ) => {
  const height = visibleHeightAtZDepth( depth, camera );
  return height * camera.aspect;
};


const ModelComponent = ({ route }) => {
  // const router = useStore((s) => s.router)
  // // This reference will give us direct access to the THREE.Mesh object
  // const mesh = useRef(null)
  // // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false)
  // // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) =>
  //   mesh.current
  //     ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
  //     : null
  // )
  // // Return the view, these are regular Threejs elements expressed in JSX

  const { viewport } = useThree();

  const { camera } = useThree();

  // eslint-disable-next-line no-console

  return (
    <>
      {/* <mesh
      position={[0,-visibleHeightAtZDepth(0, camera)/2,0]}
      >
        <boxBufferGeometry args={[1, 1, 1]} />

      </mesh> */}
      <Model/>
      {/* <Model /> */}

     
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  )
}
export default ModelComponent
