import React from 'react'
import { Avatar, Box, Center, Image, Flex, Heading, Button } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <Box width={300} height="100%" bg="#008CC9" p={4} pos="fixed">
      <Center>
        <Image src="/note-me-logo.png" alt="logo" boxSize={70}/>
      </Center>
      <Flex mt={4} justify="center" align="center">
        <Avatar mr={2} size='sm'/>
        <Heading fontSize={18} color="white">John Doe</Heading>
      </Flex>
      <Center mt={4}>
        <Button size="sm">Log Out</Button>
      </Center>
    </Box>
  )
}

export default Sidebar