import { Box } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/Sidebar'

const EditorView = () => {
  return (
    <Box>
      <Sidebar />
      <Box p={4} ml={200}>
        <CKEditor
          editor={ClassicEditor}
          data={textContent}
          onChange={(event, editor) => {
            setTextContent(editor.getData())
          }}
        />
        <Heading mt={20}>Content</Heading>
        <Text>{textContent}</Text>
      </Box>
    </Box>
  )
}

export default EditorView