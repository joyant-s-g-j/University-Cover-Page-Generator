import { Box, Button, Dialog, Field, Fieldset, For, Input, NativeSelect, Portal, Stack } from '@chakra-ui/react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import React, { useState } from 'react'
import { PDFDocument } from './PDFView'
import { toaster } from './ui/toaster';
import { useNavigate } from 'react-router-dom';

const universities = [
    { id: 'adust', name: 'Atish Dipankar University of Science and Technology', logo: 'adust.png' },
    { id: 'seu', name: 'South East University', logo: 'seu.png' },
    { id: 'uiu', name: 'United International University', logo: 'uiu.png' },
    { id: 'iubat', name: 'International University of Business Agriculture and Technology', logo: 'iubat.png' },
    { id: 'cuet', name: 'Chittagong University of Engineering and Technology', logo: 'cuet.png' }
];

const FormField = ({ onFormDataChange }) => {
    const [formData, setFormData] = useState({})
    const [readyToDownload, setReadyToDownload] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const navigate = useNavigate()
    const designations = [
        'Lecturer',
        'Senior Lecturer',
        'Assistant Professor',
        'Associate Professor',
        'Professor',
        'Adjunct Professor',
        'Distinguished Professor',
        'Visiting Professor',
        'Research Professor',
        'Emeritus Professor',
        'Instructor',
        'Teaching Assistant',
        'Postdoctoral Researcher',
        'Department Head',
        'Dean',
    ];
    
    const departments = [
        'Agribusiness',
        'Business Administration',
        'Civil Engineering',
        'Computer Science and Engineering',
        'Economic',
        'Electrical and Electronic Engineering',
        'English',
        'Fashion Design and Technology',
        'Journalism and Media Studies',
        'Law',
        'Mechanical Engineering',
        'Pharmacy',
        'Public Health',
        'Robotics and Automation Engineering',
        'Textile Engineering',
    ];  
    
    const [inputData, setInputData] = useState({
        university: '',
        pageType: '',
        pageTitle: '',
        courseTitle: '',
        courseId: '',
        submissionDate: '',
        teacherName: '',
        teacherDesignation: '',
        teacherDepartment: '',
        studentName: '',
        studentId: '',
        batchNo: '',
        section: '',
        session: '',
        studentDepartment: '',
    })

    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputData.university) {
            toaster.error({ title: 'Please select a university' });
            return;
        }
        console.log('Submitted formData:', inputData);
                setFormData(inputData)
                onFormDataChange?.(inputData)
        setReadyToDownload(true)
        setIsDialogOpen(true)
    }

    const handleDownloadClick = () => {
        setTimeout(() => {
          toaster.success({ title: 'PDF downloaded successfully' });
          setTimeout(() => {
            navigate('/')
          }, 1000)
        }, 500);
    };

  return (
    <Box as="form" onSubmit={handleSubmit} display="flex" flexDirection="column">
        <Box 
            display="flex" 
            style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }} 
            flexDirection={{base: "column", lg: "row"}} 
            alignItems={{md: "center", lg: "start"}} 
            justifyContent="space-between"
        >
            {/* Assignment Details */}
            <Fieldset.Root size="lg" maxW="md" paddingX={1}>
                <Stack borderBottom="2px gray solid">
                    <Fieldset.Legend paddingBottom="1">Assignment Details</Fieldset.Legend>
                </Stack>
                
                <Fieldset.Content>
                    <Field.Root>
                        <Field.Label>University</Field.Label>
                        <Field.HelperText>Select your university</Field.HelperText>
                        <NativeSelect.Root>
                            <NativeSelect.Field name="university" border="2px gray solid" onChange={handleChange} placeholder='Select your university'>
                            <For each={universities}>
                                {(uni) => (
                                <option key={uni.id} value={uni.id}>
                                    {uni.name}
                                </option>
                                )}
                            </For>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>

                    <Field.Root>
                    <Field.Label>Cover Page Type</Field.Label>
                        <Field.HelperText>Enter your page type</Field.HelperText>
                        <NativeSelect.Root>
                            <NativeSelect.Field name="pageType" border="2px gray solid" onChange={handleChange} placeholder='Select page type'>
                            <For each={["Assignment", "Lab Report", "Project"]}>
                                {(item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                                )}
                            </For>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Cover Page Title</Field.Label>
                        <Field.HelperText>Enter your page title</Field.HelperText>
                        <Input name="pageTitle" border="2px gray solid" placeholder='e.g. Implementing Inheritance in OOP' onChange={handleChange} />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Course Title</Field.Label>
                        <Field.HelperText>Enter your course title</Field.HelperText>
                        <Input name="courseTitle" border="2px gray solid" placeholder='e.g. Object Oriented Programming' onChange={handleChange} />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Course Id</Field.Label>
                        <Field.HelperText>Enter your course id</Field.HelperText>
                        <Input name="courseId" border="2px gray solid" placeholder='e.g. CSE 212' onChange={handleChange} />
                    </Field.Root>

                </Fieldset.Content>
            </Fieldset.Root>

            {/* Teacher details */}
            <Fieldset.Root mt={{base: "2", lg: "0"}} size="lg" maxW="md" paddingX={1}>
                <Stack borderBottom="2px gray solid">
                    <Fieldset.Legend paddingBottom="1">Teacher Details</Fieldset.Legend>
                </Stack>
                <Fieldset.Content>
                    <Field.Root>
                        <Field.Label>Course Teacher's Name</Field.Label>
                        <Field.HelperText>Enter your course teacher's name</Field.HelperText>
                        <Input name="teacherName" border="2px gray solid" placeholder='e.g. Mahmudur Rahman Roni' onChange={handleChange} />           
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Course Teacher's Designation</Field.Label>
                        <Field.HelperText>Select your course teacher's designation</Field.HelperText>
                        <NativeSelect.Root>
                            <NativeSelect.Field name="teacherDesignation" border="2px gray solid" placeholder="e.g. Lecturer"  onChange={handleChange}>
                            <For each={designations}>
                                {(item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                                )}
                            </For>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Course Teacher's Department</Field.Label>
                        <Field.HelperText>Enter your course teacher's</Field.HelperText>
                        <NativeSelect.Root>
                            <NativeSelect.Field name="teacherDepartment" border="2px gray solid" placeholder="e.g. Computer Science and Engineering" onChange={handleChange}>
                            <For each={departments}>
                                {(item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                                )}
                            </For>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Submission Date</Field.Label>
                        <Field.HelperText>Enter submission date</Field.HelperText>
                        <Input name="submissionDate" type='date' border="2px gray solid" placeholder='e.g. 24/05/2025' onChange={handleChange} />
                    </Field.Root>            
                </Fieldset.Content>
            </Fieldset.Root>

            {/* Student Details */}
            <Fieldset.Root mt={{base: "2", lg: "0"}} size="lg" maxW="md">
                <Stack borderBottom="2px gray solid">
                    <Fieldset.Legend paddingBottom="1">Student Details</Fieldset.Legend>
                </Stack>
                <Fieldset.Content>
                    <Field.Root>
                        <Field.Label>Student name</Field.Label>
                        <Field.HelperText>Enter your name</Field.HelperText>
                        <Input name="studentName" border="2px gray solid" placeholder='e.g. Joyant Sheikhar Gupta Joy' onChange={handleChange} />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Student Id</Field.Label>
                        <Field.HelperText>Enter your student id</Field.HelperText>
                        <Input name="studentId" border="2px gray solid" placeholder='e.g. 241-0200-203' onChange={handleChange} />
                    </Field.Root>
                    <Box display="flex" gap={1}>
                        <Field.Root>
                            <Field.Label>Batch No</Field.Label>
                            <Field.HelperText>Enter batch number</Field.HelperText>
                            <Input name="batchNo" border="2px gray solid" placeholder='e.g. CSE 241' onChange={handleChange} />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Section</Field.Label>
                            <Field.HelperText>Enter your section</Field.HelperText>
                            <Input name="section" border="2px gray solid" placeholder='e.g. A' onChange={handleChange} />
                        </Field.Root>
                    </Box>

                    <Field.Root>
                        <Field.Label>Session</Field.Label>
                        <Field.HelperText>Enter your session</Field.HelperText>
                        <NativeSelect.Root>
                            <NativeSelect.Field name="session" border="2px gray solid" placeholder='e.g. Summer' onChange={handleChange}>
                            <For each={["Spring", "Summer", "Fall"]}>
                                {(item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                                )}
                            </For>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Department</Field.Label>
                        <Field.HelperText>Enter your department</Field.HelperText>
                        <NativeSelect.Root>
                            <NativeSelect.Field name="studentDepartment" border="2px gray solid" placeholder="e.g. Computer Science and Engineering" onChange={handleChange}>
                            <For each={departments}>
                                {(item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                                )}
                            </For>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Field.Root>
                    
                </Fieldset.Content>
            </Fieldset.Root>
        </Box>
        <Button 
            type="submit" 
            variant="ghost"
            width={{ base: "60%", md: "40%", lg: "33%" }}
            alignSelf="center"
            backgroundColor="#d2c7bc"
            borderRadius="full"
            color="blackAlpha.800"
            _hover={{backgroundColor: "#d0b79e"}}
            style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }}
            top={{base: "3", lg: "-10"}}         
        >
            Submit
        </Button>
        <Dialog.Root
            open={isDialogOpen}
            placement="center"
            onOpenChange={(details) => setIsDialogOpen(details.open)}
        >
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content
                        style={{ fontFamily: "'Saira', sans-serif" }}
                        borderRadius="20px"
                        bg="#f4f1ee"
                        p={4}
                    >
                        <Dialog.Header>
                            <Dialog.Title>Download Your PDF</Dialog.Title>
                        </Dialog.Header>

                        <Dialog.Body>
                            <Box>
                                Your cover page is ready! Click below to download the PDF.
                            </Box>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <Button
                                    variant="outline"
                                    mr={3}
                                    style={{ fontFamily: "'Saira', sans-serif", fontWeight: '600' }}
                                >
                                    Cancel
                                </Button>
                            </Dialog.CloseTrigger>
                            {readyToDownload && (
                                <PDFDownloadLink
                                    document={<PDFDocument formData={formData} />}
                                    fileName='coverByJS.pdf'
                                >
                                    {({ loading }) => (
                                        <Button
                                            isDisabled={loading}
                                            backgroundColor="#d2c7bc"
                                            borderRadius="full"
                                            color="gray.800"
                                            _hover={{ backgroundColor: '#d0b79e' }}
                                            style={{ fontFamily: "'Saira', sans-serif", fontWeight: '600' }}
                                            onClick={handleDownloadClick}
                                        >
                                            {loading ? 'Loading document...' : 'Download PDF'}
                                        </Button>
                                    )}
                                </PDFDownloadLink>
                            )}
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
        
    </Box>
  )
}

export default FormField