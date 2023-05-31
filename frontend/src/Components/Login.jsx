import React, { useState } from 'react'
import { Button, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login() {
  const navigate=useNavigate()
  const [credential, setCredential] = useState({
    'email': '',
    'password': ''
  })
  const handleSubmit = async () => {
    // console.log(credential.email, credential.password);
    try {
      axios.defaults.withCredentials = true;
      await axios.post('http://localhost:400/login', { 'email': credential.email, 'password': credential.password },{withCredentials:true})
        .then(res => {
          if(res?.data?.error){
            alert(res?.data?.error)
          }
          else{
            alert('login succesful')
            navigate('/home')
          }
          console.log(res)
        })
        // .catch(err => { throw new Error(err) })

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
      <Input name='email' placeholder='email' onChange={(e) => handleChange(e)} value={credential.email} />
      <Input name='password' placeholder='password' onChange={(e) => handleChange(e)} value={credential.password} />
      <Button onClick={() => handleSubmit()}>submit</Button>
    </>
  )
}

export default Login