import { Box, HStack, Heading, List } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <HStack h='20' bg='grey'  justifyContent='space-between'>
        <Link to={"/"}><Heading ml='3'>SellMyCar.com</Heading></Link>
        <Box w='30' dir='row' justifyContent='space-evenly'>
          <List>
            <Link to={"/contact"} >contact </Link>
            <Link to={"/about"} >about</Link>
          </List>
        </Box>
      </HStack>
    </>
  )
}

export default Header