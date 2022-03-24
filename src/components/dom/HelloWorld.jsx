import { Container, Heading} from '@chakra-ui/react';

export default function HelloWorld() {


  return (
    <>
      <Heading fontSize={'30px'} textAlign='center' mt={'10px'}>
        Ben Murray
      </Heading>

      <Heading fontWeight={'100'} fontSize={['60px','80px','100px']} textAlign='center' mt={'110px'}>
        Hello World
      </Heading>
    </>
    
  )
}
