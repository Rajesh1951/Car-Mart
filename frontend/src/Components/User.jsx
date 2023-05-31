import { Text, HStack, Image, VStack, TableContainer, TableCaption, Thead, Table ,Th,Tr} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

function User() {
  const [list, setList] = useState([]);
  const fetch = async () => {
    let { data } = await axios.get('http://localhost:400/customer/list');
    setList(data);
  }
  useEffect(() => {
    fetch()
  }, [])
  if (!list)
    return "empty";
  return (
    <VStack>
      return <TableContainer>
        {/* <Image boxSize={'sm'} src={element.image} alt='image' />
          <Text fontSize='20'>{element.model} {element.year} {element.price} {element.colors} {element.mileage} {element.power} {element.Km}{element.Scratches} {element.accidents} {element.previousBuyers} {element.registrationPlace}</Text> */}
        <Table variant='striped'>
          <TableCaption>Available cars</TableCaption>
          <Thead>
            <Tr>
              <Th>image</Th>
              <Th>model</Th>
              <Th>year</Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>


    </VStack>
  )
}

export default User;