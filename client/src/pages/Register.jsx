import { Flex, Center, Card, CardHeader, CardBody, CardFooter, Heading, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const Register = () => {
  const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: ''});

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <Flex justify="center" align="center" height="100vh" bg="#008CC9" color="#000e14">
      <Card p={10}>
        <CardHeader>
          <Heading textAlign="center">Register</Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" value={user.username} placeholder="johndoe1234" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel mt={4}>Email</FormLabel>
              <Input type="email" name="email" value={user.email} placeholder="johndoe@gmail.com" onChange={handleChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" name="confirmPassword" value={user.confirmPassword} placeholder="Confirm your password" onChange={handleChange} />
            </FormControl>
            <Center mt={6}>
              <Button colorScheme="linkedin" type="submit">
                Register
              </Button>
            </Center>
          </form>
        </CardBody>
        <CardFooter>
          <Text textAlign="center">Already have an account? Login <Link to='/login' style={{color: '#008CC9'}}>here</Link></Text>
        </CardFooter>
      </Card>
    </Flex>
  )
}

export default Register