import { Box, Button, HStack, Heading, List } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyContext from '../Contexts/AuthContext'
function Header() {
  const navigate = useNavigate();
  const { loggedIn, logout } = useContext(MyContext);
  const logoutHandle = async (req, res) => {
    const result = await axios.get('http://localhost:400/logout')
    // console.log(result)
    logout();
    navigate('/')
  }
  // console.log('header', authContext);
  return (
    <div style={{ top: '0', position: 'sticky',zIndex:'1' }}>
      <HStack h='20' bg='grey' justifyContent='space-between'>
        <Link to={"/"}><Heading ml='3'>Vehicle Mart</Heading></Link>
        <Box w='30' dir='row' justifyContent='space-evenly'>
          <List>
            <Link to={"/home"} >home </Link>
            <Link to={"/contact"} >contact </Link>
            <Link to={"/about"} >about</Link>
            {/* <Link to={"/logout"}>logout</Link> */}
            {loggedIn && <Button onClick={() => logoutHandle()}>logout</Button>}
          </List>
        </Box>
      </HStack>
    </div>
  )
}

export default Header