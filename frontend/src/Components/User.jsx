import { Text, HStack, VStack, Box, Radio, RadioGroup, Stack, Heading, Divider, Flex, extendTheme, Input, Button } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import UserCard from './UserCard';
import Pagination from './Pagination';

function User() {
  const breakPoint = {
    base: '490px',
    sm: '768px',
    md: '1100px',
    lg: '1200px',
    xl: '1300px',
  }

  const theme = extendTheme(breakPoint);
  const [list, setList] = useState([]);
  let [filteredList, setFilteredList] = useState(list);
  const [radio, setRadio] = useState('1');
  const [sortRadio, setSortRadio] = useState('0');
  const [elementPerPage] = useState(6);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetch = async () => {
      let { data } = await axios.get('http://localhost:400/customer/list');
      setList(data);
    }
    fetch();
  }, []);
  useEffect(() => {
    setFilteredList(list);
  }, [list])
  useEffect(() => {
    window.scroll(0, 0);
  }, [radio, sortRadio, page])
  const funcSetPage = (pageNo) => {
    return setPage(pageNo)
  };
  const changeList = (range) => {
    setPage(1);
    setSortRadio('0');
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
    setFilteredList(sec);
  }
  const sortList = (param, order) => {
    if (order == 0)
      filteredList.sort((x, y) => x[param] - y[param]);
    else
      filteredList.sort((x, y) => y[param] - x[param]);

  }
  const lastIndex = page * elementPerPage;
  const startIndex = lastIndex - elementPerPage;

  if (list.length < 1)
    return "Loading ...";
  return (
    <Box w={{ xl: '60%', lg: '80%', md: '90%' }} ml={{ xl: '9%', lg: '8%', md: '5%' }}>
      <Stack>
        <Heading textAlign='center'>List Of Available Cars For You</Heading>
        <Input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button type='search'>search</Button>
      </Stack>
      <Flex flexDir={{ md: 'row', sm: 'column', base: 'column', }}>
        <Box minW='20%'>
          <Heading size='md' textAlign='center'>Filters</Heading>
          <Divider />
          <Box>
            <Heading size='sm'>Price</Heading>
            <RadioGroup onChange={setRadio} value={radio}>
              <Stack flexDir={{ sm: 'row', md: 'column' }} flexWrap='wrap'>
                <Radio value='1' onChange={() => changeList('1')}>All</Radio>
                <Radio value='2' onChange={() => changeList('2')}>1 to 5 lakhs </Radio>
                <Radio value='3' onChange={() => changeList('3')}>5 to 10 lakhs </Radio>
                <Radio value='4' onChange={() => changeList('4')}>10 to 50 lakhs </Radio>
                <Radio value='5' onChange={() => changeList('5')}>above 50 lakhs </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Divider />
          <Box>
            <Heading size='sm'>Sort</Heading>
            <RadioGroup onChange={setSortRadio} value={sortRadio}>
              <Stack flexDir={{ sm: 'row', md: 'column' }} flexWrap='wrap'>
                <Radio value='1' onClick={() => sortList('price', 0)}>Price low to high<ArrowDownIcon />  </Radio>
                <Radio value='2' onClick={() => sortList('price', 1)}>Price high to low <ArrowUpIcon /></Radio>
                <Radio value='3' onClick={() => sortList('Km', 0)}>Kms. low to high <ArrowDownIcon /></Radio>
                <Radio value='4' onClick={() => sortList('Km', 1)}>Kms. high to low <ArrowUpIcon /></Radio>
                <Radio value='5' onClick={() => sortList('ratings', 0)}>Ratings low to high <ArrowDownIcon /></Radio>
                <Radio value='6' onClick={() => sortList('ratings', 1)}>Ratings high to low <ArrowUpIcon /></Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Box h='75vh' ml={{ xl: '9%', lg: '8%', md: '5%', sm: '10%', base: '5%' }} mr={{ sm: '10%', base: '5%' }} overflowY='scroll'>
          {
            filteredList
              .slice(startIndex, lastIndex)
              .map(element => {
                return <UserCard key={element._id} props={element} />;
              })
          }
        </Box>
      </Flex >
      <Pagination elements={filteredList.length} elementPerPage={elementPerPage} setPageNumber={funcSetPage} />
    </Box >
  )
}

export default User;