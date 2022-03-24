import { Container, Heading} from '@chakra-ui/react';

export default function HelloWorld() {


  return (
    <>
      <Heading fontWeight={'900'} fontSize={'30px'} textAlign='center' mt={'10px'} bg={'0xf1f1f1'}>
        Ben Murray
      </Heading>

      <Heading fontWeight={'100'} fontSize={['60px','80px','100px']} textAlign='center' mt={'110px'}>
        Hello World
      </Heading>
    </>
    
  )
}
