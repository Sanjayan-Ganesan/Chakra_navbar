import React from 'react'
import { Image,Box } from '@chakra-ui/react'
import { Text,Stack } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>

<div id='nav'>


<Box boxSize='sm'>
  <Image src='https://miro.medium.com/max/900/0*9hcinRdaHicrNpNE.jpg' alt='Dan Abramov' id='logo' />
</Box>


<div id='movers'>

<Text fontSize='15px' fontWeight='bold' color='white'>
  Inspiration
</Text>

<Text fontSize='15px' fontWeight='bold' color='white'>
  Find Work
</Text>

<Text fontSize='15px' fontWeight='bold' color='white'>
  Learn Design
</Text>

<Text fontSize='15px' fontWeight='bold' color='white'>
  Hire Designers
</Text>


</div>




<div id='movers_button'>
<Stack spacing={2} direction='row' align='center' gap={`40px`}>
  
  
  <Button backgroundColor={`black`} size='md' borderRadius='7px' color={`white`} fontSize={`medium`}>
    Sign in
  </Button>
  <Button  size='md' borderRadius='7px' backgroundColor={`pink`} color={'white'} fontSize={`medium`}>
    Sign up
  </Button>
  
  
</Stack>

</div>

</div>





    </div>
  )
}

export default Navbar