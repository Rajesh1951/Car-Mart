import React, { useState, useContext } from 'react'
import { Button, Stack, Hide, HStack, Input, Box, VStack, Image, Text, extendTheme, Show } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyContext from '../Contexts/AuthContext';
function Login() {
  const navigate = useNavigate();
  const { login } = useContext(MyContext);
  const [credential, setCredential] = useState({
    'email': '',
    'password': ''
  });
  const breakPoints = {
    base: '340px',
    sm: '768px',
    md: '685px',
    lg: '960px',
    xl: '1040px',
  }
  const theme = extendTheme(breakPoints);
  const [loginBool, setLoginBool] = useState(true);
  const handleSubmit = async () => {
    try {
      await axios.post(loginBool ? 'http://localhost:400/login' : 'http://localhost:400/signup', { 'email': credential.email, 'password': credential.password }, { withCredentials: true })
        .then(res => {
          if (res?.data?.error) {
            alert(res?.data?.error)
          }
          else {
            login();
            alert('login succesful');
            navigate('/home');
          }
        })
        .catch(err => { throw new Error(err) })

    }
    catch (error) {
      console.log(error)
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setCredential((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  return (
    <Box h='83vh'>
      <Box w='80%' borderRadius={{ xl: '50', lg: '40',md:'20',base:'10' }} boxShadow='dark-lg'
        // m={{ sm: '10 10 auto auto', md: 'auto auto', lg: 'auto auto' }} 
        m='auto auto'
        p='auto auto'>
        <HStack p='5' mt={{ '2xl': '10', md: '4' }} borderRadius='50' justifyContent='space-around'>
          <Hide below='680px'>
            <Image boxSize={{ '2xl': 'lg', xl: 'md' }} src='https://www.logomyway.com/logos_new/16126/Sel_my_Car5_474394384860.png' />
          </Hide>
          <VStack p={{ '2xl': '10', md: '0' }} w={{ sm: '100%', md: '40%' }}>
            <HStack>
              <Button
                size={['sm', 'md', 'lg']}
                w='100%' bg={loginBool ? 'green' : 'grey'} onClick={() => setLoginBool(true)}>Login</Button>
              <Button
                size={['sm', 'md', 'lg']}
                w='100%' bg={loginBool ? 'grey' : 'green'} onClick={() => setLoginBool(false)}>Signup</Button>
            </HStack>
            <Box >
              <Text fontSize={{ '2xl': '2xl' }} mt={{ '2xl': '10', md: '2', base: '5' }}>Enter Your Email</Text>
              <Input size={['sm', 'md', 'lg']} name='email' placeholder='email' onChange={(e) => handleChange(e)} value={credential.email} />
              <Text fontSize={{ '2xl': '2xl', md: 'md' }} mt={{ '2xl': '10', md: '2', base: '5' }}>Enter Your Password</Text>
              <Input size={['sm', 'md', 'lg']} name='password' placeholder='password' onChange={(e) => handleChange(e)} value={credential.password} />
              <Button size={['sm', 'md', 'lg']} mt={{ '2xl': '10', md: '2' }} onClick={() => handleSubmit()}>Submit</Button>
            </Box>
          </VStack>
        </HStack>
      </Box >
    </Box>
  )
}

export default Login