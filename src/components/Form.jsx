import { Box, List, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import DialogForm from './DialogForm'

const items = [
  "Click the 'Form' button below to open the form",
  "Fill up all required fields accurately",
  "Double-check Name, Course Title, ID, Batch, and Submission Date",
  "Ensure all information is correct before submitting"
]

const Form = ({ onFormDataChange }) => {
  return (
    <Box 
      mt={{base: "32", lg: "0"}} 
      style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: "400" }} 
      display="flex" 
      flexDirection="column" 
      alignItems="start" 
      justifyContent="center"
      paddingX={10}
    >
      <motion.div
        initial={{ opacity: 0, x:-20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
          <Text fontSize={{base: "2xl", lg: "5xl"}} color="gray.700" mb={4}>
            Important Instructions:
          </Text>
          <List.Root color="gray.700" fontSize="2xl">
            {items.map((item, index) => (
              <List.Item key={index}>
                {item}
              </List.Item>
            ))}
          </List.Root>
          <DialogForm onFormDataChange={onFormDataChange} />
      </motion.div>
    </Box>
  )
}

export default Form