import { Box, Heading, Stack, Input, HStack, IconButton, Flex, Text, Tag, TagLabel, TagCloseButton } from '@chakra-ui/react'
import { BsSave, BsEye, BsArrowLeft } from 'react-icons/bs'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useNavigate } from 'react-router-dom'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../components/ckeditorheight.css'

const EditorView = () => {

  const [title, setTitle] = useState('')
  const [tags, setTags] = useState([])
  const [tagValue, setTagValue] = useState('');
  const [textContent, setTextContent] = useState('');

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setTagValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = tagValue.trim();
      if (newTag) {
        setTags([...tags, newTag]);
        setTagValue("");
      }
    }
  };

  const handleTagDelete = (tagToDelete) => {
    const newTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(newTags);
  };

  return (
    <Box>
      <Sidebar />
      <Box p={16} ml={300}>
        <Flex justify="space-between" align="center">
          <HStack spacing={2}>
            <IconButton icon={<BsArrowLeft />} aria-label='Back' onClick={() => navigate('/dashboard')}/>
            <Heading as="h1" fontSize={32}>Note Editor</Heading>
          </HStack>
          <HStack spacing={2}>
            <IconButton icon={<BsSave />} aria-label='Save note' colorScheme='teal' onClick={() => navigate('/dashboard')}/>
            <IconButton icon={<BsEye />} aria-label="View note" colorScheme='linkedin' onClick={() => navigate('/view')}/>
          </HStack>
        </Flex>
        <Stack spacing={4} mt={8}>
          <Box>
            <Heading fontSize={20}>Note Name</Heading>
            <Input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note name"
            />
          </Box>
          <Box>
            <Heading fontSize={20}>Tag</Heading>
            <HStack spacing={2} my={2}>
              {tags.map((tag, index) => (
                <Tag key={index} variant="subtle" colorScheme="cyan" borderRadius="full">
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => handleTagDelete(tag)} />
                </Tag>
              ))}
            </HStack>
            <Input 
              type="text"
              value={tagValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              placeholder="Enter a tag and press enter..."
            />
          </Box>
          <Box>
            <CKEditor
              editor={ClassicEditor}
              data={textContent}
              onChange={(event, editor) => {
                setTextContent(editor.getData())
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default EditorView