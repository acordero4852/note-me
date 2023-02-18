import { Flex, Box, Card, CardHeader, CardBody, CardFooter, Heading, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Register = () => {
  const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: ''});

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value })
  }

  return (
    <Flex>
      <Card p={10}>
        <CardHeader>
          <Heading>Register</Heading>
        </CardHeader>
        <CardBody>
          <form>
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
            <Button colorScheme="teal" mt={4} type="submit">
              Register
            </Button>
          </form>
        </CardBody>
        <CardFooter>
          <Text>Already have an account? Login <Link to='/login' style={{color: 'teal'}}>here</Link></Text>
        </CardFooter>
      </Card>
    </Flex>
  )
}

export default Register