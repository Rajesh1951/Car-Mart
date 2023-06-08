import { Box, Button, HStack, Heading, List, Menu, MenuButton, MenuItem, MenuList, Show, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import axios from 'axios'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyContext from '../Contexts/AuthContext'
function Header() {
  const navigate = useNavigate();
  const { loggedIn, logout } = useContext(MyContext);
  const logoutHandle = async (req, res) => {
    const result = await axios.get('http://localhost:400/logout')
    logout();
    navigate('/')
  }
  return (
    <div style={{ top: '0', position: 'sticky', zIndex: '1' }}>
      <HStack h='20' bg='grey' justifyContent='space-between' pr='5'>
        <Link to={loggedIn ? "/home" : '/'}><Heading noOfLines='1' ml='3'>Vehicle Mart</Heading></Link>
        <Box w='30' dir='row' justifyContent='space-evenly' >
          <Show below='425px'>
            <Menu >
              <MenuButton as={Button} ><HamburgerIcon size={['lg']} /></MenuButton>
              <MenuList>
                <Link to={"/home"} >
                  <MenuItem>
                    Home
                  </MenuItem>
                </Link>
                <Link to={'/contact'}>
                  <MenuItem>
                    Contact
                  </MenuItem>
                </Link>
                <Link to={"/about"} >
                  <MenuItem>
                    About
                  </MenuItem>
                </Link>
                {loggedIn &&
                  <Text onClick={() => logoutHandle()}>
                    <MenuItem>
                      Logout
                    </MenuItem>
                  </Text>
                }
              </MenuList>
            </Menu>
          </Show>
          <Show above='425px'>
            <HStack flexWrap='wrap'>
              <Text fontSize={['md', 'lg', 'xl', '3xl']}><Link to={"/home"} >Home</Link></Text>
              <Text fontSize={['md', 'lg', 'xl', '3xl']}><Link to={"/contact"} >Contact</Link></Text>
              <Text fontSize={['md', 'lg', 'xl', '3xl']}><Link to={"/about"} >About</Link></Text>
              {loggedIn && <Button onClick={() => logoutHandle()}>Logout</Button>}
            </HStack>
          </Show>
        </Box>
      </HStack>
    </div>
  )
}

export default Header