import { Flex, Box, Card, CardHeader, CardBody, CardFooter, Heading, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Login = () => {

  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value })
  }

  return (
    <Flex>
      <Card p={10}>
        <CardHeader>
          <Heading>Login</Heading>
        </CardHeader>
        <CardBody>
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={user.email} placeholder="johndoe@gmail.com" onChange={handleChange}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}/>
            </FormControl>
            <Button colorScheme="teal" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </CardBody>
        <CardFooter>
          <Text>Don't have an account? Register <Link to='/register' style={{color: 'teal'}}>here</Link></Text>
        </CardFooter>
      </Card>
    </Flex>
  )
}

export default Login