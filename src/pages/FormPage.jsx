import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Form from '../components/Form'
import PDFView from '../components/PDFView'

const FormPage = () => {
  const [formData, setFormData] = useState({})

  return (
    <Box 
      display='flex'
      flexDirection={{base: "column", lg: "row"}} 
      backgroundColor="#f4f1ee" 
      justifyContent={{base: "none", lg: "space-around"}} 
    >
        <Form onFormDataChange={setFormData} />
        <PDFView formData={formData} />
    </Box>
  )
}

export default FormPage