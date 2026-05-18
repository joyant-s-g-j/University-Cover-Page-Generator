import { Box, Button, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import heroimage from '../assets/heroImage.jpg'
import { Link } from 'react-router-dom';
import { PlusIcon, User } from 'lucide-react';

const Hero = () => {
  return (
    <Box 
        display="flex" 
        minH="100vh" 
        alignItems="center"
        justifyContent={{base: "center", md: "space-around"}}
        textAlign={{base: "center", md: "start"}}
        flexDirection={{base: "column", md: "row"}}
        marginX={{base: "5", md: "7", lg: "none"}}
    >      
        <motion.div
            initial={{ opacity: 0, x:-20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
        >
            <Image 
                mt={10} 
                src={heroimage} 
                alt='Hero Image' 
                boxSize={{base: "300px", md: "400px", lg: "500px", xl: "600px"}} 
                objectFit="contain"
                mb={{base: 8, md: 0}} 
            />      
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
        >
            <Text 
                fontSize={{base: "2xl", md: "3xl", lg: "4xl", xl: "6xl"}} 
                textAlign="start" 
                color="blackAlpha.800"
                style={{fontFamily: "'Anton', sans-serif", fontWeight: "400"}}    
            >
                Create Your Perfect Cover <br /> with Just a Few Clicks
            </Text>
            <Text 
                fontSize={{base: "xl", md: "2xl", lg: "2xl", xl: "3xl" }} 
                textAlign="start" 
                color="gray.600" 
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: "500" }} 
            >
                Create, Download — Totally Free, Fast, and Easy!
            </Text>
            <Box display="flex" gap={2}>
                <Link to="/formpage">
                    <Button 
                        variant="ghost" 
                        mt={3} 
                        display="flex" 
                        backgroundColor="#d2c7bc"
                        borderRadius="full"
                        color="blackAlpha.800"
                        _hover={{backgroundColor: "#d0b79e"}}
                        style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }}
                    >
                        <Icon as={PlusIcon} />
                        Create Cover Page
                    </Button>
                </Link>
                <Link to="https://joyant.me/" target="_blank">
                    <Button 
                        variant="ghost" 
                        mt={3} 
                        display="flex" 
                        backgroundColor="#d2c7bc"
                        borderRadius="full"
                        color="blackAlpha.800"
                        _hover={{backgroundColor: "#d0b79e"}}
                        style={{ fontFamily: "'Saira', sans-serif", fontWeight: "600" }}
                    >
                        <Icon as={User} />
                        About Me
                    </Button>
                </Link>
            </Box>
            
        </motion.div>
               
    </Box>
    
  )
}

export default Hero