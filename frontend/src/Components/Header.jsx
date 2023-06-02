import { Box, Button, HStack, Heading, List } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate();
  const logoutHandle=async (req,res)=>{
    const result=await axios.get('http://localhost:400/logout')
    console.log(result)
    navigate('/')
  }
  return (
    <>
      <HStack h='20' bg='grey'  justifyContent='space-between'>
        <Link to={"/"}><Heading ml='3'>SellMyCar.com</Heading></Link>
        <Box w='30' dir='row' justifyContent='space-evenly'>
          <List>
            <Link to={"/contact"} >contact </Link>
            <Link to={"/about"} >about</Link>
            {/* <Link to={"/logout"}>logout</Link> */}
            <Button onClick={()=>logoutHandle()}>logout</Button>
          </List>
        </Box>
      </HStack>
    </>
  )
}

export default Header