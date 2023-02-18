import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Box, Center, Button, Flex, Heading, Image, Stack } from '@chakra-ui/react'

const Landing = () => {
  
  const navigate = useNavigate();

  return (
    <Box bgImage="url('https://images.unsplash.com/photo-1531256379416-9f000e90aacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80')" height="100vh" bgPosition='center' bgRepeat='no-repeat'>
      <Flex justify="space-between" align="center" py={4} px={8} bg="white">
        <Link to="/">
          <Image src="/note-me-logo.png" alt="logo" boxSize="65"/>
        </Link>
        <Stack direction="row" spacing={5}>
          <Button colorScheme="linkedin" variant="outline" onClick={() => navigate('./login')}>Log In</Button>
          <Button colorScheme="linkedin" onClick={() => navigate('./register')}>Sign Up</Button>
        </Stack>
      </Flex>
      <Center height="75%">
        <Stack direction="column" spacing={5} px={40}>
          <Heading as="h1" fontSize={64} fontWeight="bold" color="#000e14" textAlign="center" px={32}>
            Introducing a revolutionary note-taking app designed for students, by students
          </Heading>
          <Heading as="h1" fontSize={32} fontWeight="bold" color="#000e14" textAlign="center" px={48}>
            Whether you're a college student, a high schooler, or someone in between, our app is the perfect tool to help you stay organized and succeed in your academic pursuits.
          </Heading>
          <Center>
            <Button colorScheme="linkedin" onClick={() => navigate('./login')}>Try Note.me</Button>
          </Center>
        </Stack>
      </Center>
    </Box>
  )
}

export default Landing