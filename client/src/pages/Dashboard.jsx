import { Box, Flex, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import NoteCard from '../components/NoteCard'


const Dashboard = () => {
  
  const [textContent, setTextContent] = useState('');

  const navigate = useNavigate();

  return (
    <Box>
      <Sidebar />
      <Box ml={300} p={4}>
        <Flex justify="space-between" align="center" my={4}>
          <Heading as="h1" fontSize={32}>Dashboard</Heading>
          <Box>
            <Button leftIcon={<BsPlusLg />} colorScheme="teal" onClick={() => navigate('/edit')}>Add new notes</Button>
          </Box>
        </Flex>
        <SimpleGrid minChildWidth='350px' spacing={10}>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Dashboard