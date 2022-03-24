import dynamic from 'next/dynamic';


import HelloWorld from '@/components/dom/HelloWorld';

import { Box } from "@chakra-ui/react";

const Test = dynamic(() => import('@/components/canvas/Test'), {
  ssr: false,
})

// import Shader from '@/components/canvas/Shader/Shader'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const DOM = () => {
  return (
    // Step 5 - delete Instructions components
    <>
      <HelloWorld align="center"/>
    </>
  )
}

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Test route='/' />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
