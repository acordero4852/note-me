import { Flex, Tag, Stack, HStack, Text, Card, Heading, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react"
import { BsPencil, BsTrash, BsEye } from "react-icons/bs"
import React, {useState} from 'react'

const NoteCard = () => {
  const tags = ['Reading', 'Writing', 'Math', 'Science']

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card width={400} p={6}>
        <Stack spacing={4}>
          <Flex justify="space-between" align="center">  
            <Heading fontSize={24} noOfLines={1}>Hello</Heading>
            <HStack spacing={2}>
              <IconButton icon={<BsPencil />} size='xs' aria-label='Edit note' colorScheme='teal'/>
              <IconButton icon={<BsEye />} size='xs' aria-label="View note" colorScheme='linkedin'/>
              <IconButton icon={<BsTrash />} size='xs' aria-label="Delete note" colorScheme='red' onClick={onOpen}/>
            </HStack>
          </Flex>
          <HStack spacing={2} noOfLines={1}>
            {tags.map((tag, index) => (
              <Tag key={index} colorScheme='cyan' variant='subtle'>{tag}</Tag>
              ))}
          </HStack>
          <Text noOfLines={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          <Text fontSize={16} textAlign="end">June 10 2021</Text>
        </Stack>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Delete Note</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            Are you sure you want to delete this note?
          </ModalBody>
          <ModalFooter>
            <HStack spacing={2}>
              <Button colorScheme='red' onClick={onClose}>Yes</Button>
              <Button colorScheme='linkedin' onClick={onClose}>No</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NoteCard