import { Text, HStack, Image, VStack, TableContainer, TableCaption, Thead, Table, Th, Tr, Box, List, ListItem, Input, Checkbox, Radio, RadioGroup, Stack, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import UserCard from './UserCard';
import Pagination from './Pagination';
import Footer from './Footer';

function User() {
  const [list, setList] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  const [radio, setRadio] = useState('1');
  const [loading, setLoading] = useState(false);
  const [elementPerPage, setElementPerPage] = useState(4);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      let { data } = await axios.get('http://localhost:400/customer/list');
      setList(data);
      // setFilteredList(data)
      // changeList('1')
      setLoading(false);
    }
    fetch()
  }, []);
  const funcSetPage = (pageNo) => {
    window.scroll(0, 0);
    return setPage(pageNo)
  };
  const changeList = (range) => {
    setPage(1);
    let sec = [...list.filter((e) => {
      if (range == '2')
        return e.price >= 100000 && e.price < 500000;
      else if (range == '3') {
        return e.price >= 500000 && e.price < 1000000;
      }
      else if (range == '4') {
        return e.price >= 1000000 && e.price < 5000000;
      }
      else if (range == '5') {
        return e.price >= 5000000;
      }
      return e.price > 0;
    })];
    filteredList.length = 0;
    sec.map(e => filteredList.push(e));
    // console.log(filteredList)
  }
  const lastIndex = page * elementPerPage;
  const startIndex = lastIndex - elementPerPage;

  if (list.length < 1)
    return "empty";
  return (
    <Box mb='0'>
      {/* {filteredList.length} */}
      <Heading textAlign='center'>List Of Available Cars For You</Heading>
      <HStack>
        filters
        <VStack minW='10%' marginTop='0' position='relative'>
          <Box>
            <RadioGroup onChange={setRadio} value={radio}>
              <Stack>
                <Radio isChecked value='1' onChange={() => changeList('1')}>All</Radio>
                <Radio value='2' onChange={() => changeList('2')}>1 to 5 lakhs</Radio>
                <Radio value='3' onChange={() => changeList('3')}>5 to 10 lakhs</Radio>
                <Radio value='4' onChange={() => changeList('4')}>10 to 50 lakhs</Radio>
                <Radio value='5' onChange={() => changeList('5')}>above 50 lakhs</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </VStack>
        <VStack mb='5vh'>
          {
            filteredList
              .slice(startIndex, lastIndex)
              .map(element => {
                return <UserCard key={element._id} props={element} />;
              })
          }
        </VStack>
      </HStack>
      <Pagination elements={filteredList.length} elementPerPage={elementPerPage} setPageNumber={funcSetPage} />
      {/* <Footer /> */}
    </Box>
  )
}

export default User;