import { Text, HStack, Image, VStack, TableContainer, TableCaption, Thead, Table, Th, Tr, Box, List, ListItem, Input, Checkbox, Radio, RadioGroup, Stack, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import UserCard from './UserCard';

function User() {
  const [list, setList] = useState([]);
  const [radio, setRadio] = useState('1');
  const fetch = async () => {
    let { data } = await axios.get('http://localhost:400/customer/list');
    setList(data);
  }
  useEffect(() => {
    fetch()
  }, [])
  if (list.length < 1)
    return "empty";
  return (
    <>
      <Heading textAlign='center'>List Of Available Cars For You</Heading>
      <HStack>
        filters
        <VStack minW='10%' marginTop='0'position='relative'>
          <Box>
            <RadioGroup onChange={setRadio} value={radio}>
              <Stack>
                <Radio value='1' >All</Radio>
                <Radio value='2' >1 to 5 lakhs</Radio>
                <Radio value='3' >5 to 10 lakhs</Radio>
                <Radio value='4' >Above 10 lakhs</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </VStack>
        <VStack>
          {
            list.filter(e => {
              if (radio === '2')
                return e.price >= 100000 && e.price <= 500000;
              else if (radio === '3') {
                return e.price >= 500000 && e.price <= 1000000;
              }
              else if (radio === '3') {
                return e.price >= 1000000
              }
              return e;
            })
              .map(element => {
                return <UserCard props={element} />;

              })
          }
        </VStack>
      </HStack>
    </>
  )
}

export default User;