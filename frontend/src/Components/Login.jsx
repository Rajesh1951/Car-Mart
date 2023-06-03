import React, { useState, useContext } from 'react'
import { Button, HStack, Input, Box, VStack, Image, Text } from '@chakra-ui/react';
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
  const [loginBool, setLoginBool] = useState(true);
  const handleSubmit = async () => {
    // console.log(credential.email, credential.password);
    try {
      await axios.post(loginBool ? 'http://localhost:400/login' : 'http://localhost:400/signup', { 'email': credential.email, 'password': credential.password }, { withCredentials: true })
        .then(res => {
          if (res?.data?.error) {
            alert(res?.data?.error)
          }
          else {
            login();
            alert('login succesful')
            navigate('/home')
          }
          console.log(res)
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
    <>
      <Box w='80%' borderRadius='50' boxShadow='dark-lg' m='auto auto' p='auto auto'>
        <HStack p='5' mt='10' borderRadius='50' justifyContent='space-around'>
          <Image boxSize='lg' src='https://www.logomyway.com/logos_new/16126/Sel_my_Car5_474394384860.png' />
          <VStack p='10' w='40%'>
            <HStack>
              <Button size='lg' w='100%' bg={loginBool ? 'green' : 'grey'} onClick={() => setLoginBool(true)}>Login</Button>
              <Button size='lg' w='100%' bg={loginBool ? 'grey' : 'green'} onClick={() => setLoginBool(false)}>Signup</Button>
            </HStack>
            <Box >
              <Text fontSize='2xl' mt='10'>Enter Your Email</Text>
              <Input size='lg' name='email' placeholder='email' onChange={(e) => handleChange(e)} value={credential.email} />
              <Text fontSize='2xl' mt='10'>Enter Your Password</Text>
              <Input size='lg' name='password' placeholder='password' onChange={(e) => handleChange(e)} value={credential.password} />
              <Button size='lg' mt='10' onClick={() => handleSubmit()}>Submit</Button>
            </Box>
          </VStack>
        </HStack>
      </Box >
    </>
  )
}

export default Login