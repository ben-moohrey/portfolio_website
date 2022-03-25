import React from "react"
import { Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionHeading = motion(Heading)


export default function HelloWorld() {


  return (
    <>
      <MotionHeading fontFamily={'roboto'} fontWeight={'900'} fontSize={'30px'} textAlign='center' mt={'10px'} bg={'0xf1f1f1'}>
        Ben Murray
      </MotionHeading>

      <MotionHeading letterSpacing={'6px'} fontFamily={'Ubuntu, sans-serif'} fontWeight={'100'} fontSize={['60px','80px','100px']} textAlign='center' mt={'110px'}>
        Hello World
      </MotionHeading>
    </>
    
  )
}



