import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Table, Tr, Stack, Box, Image, Button, VStack, HStack, Input, Menu, MenuButton, MenuItem, MenuList, Text, TableContainer, Thead, Th, Tbody, Td } from '@chakra-ui/react';
function Dealer() {
  const [dealerList, setDealerList] = useState([]);
  const [dealerData, setdealerData] = useState({});
  const [input, setInput] = useState({
    Km: '',
    Scratches: '',
    paint: '',
    accidents: '',
    previousBuyers: '',
    registrationPlace: ''
  })
  const fetch = async () => {
    const { data } = await axios.get('http://localhost:400/dealer/list');
    setDealerList(data);
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name,value);
    setInput((previous) => {
      // console.log(previous,name,value)
      return {
        ...previous,
        [name]: value
      }
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(dealerData)
    await axios.post('http://localhost:400/submit', {
      "model": dealerData.model,
      "year": dealerData.year,
      "price": dealerData.price,
      "colors": dealerData.colors,
      "mileage": dealerData.mileage,
      "power": dealerData.power,
      "maxSpeed": dealerData.maxSpeed,
      "Km": input.Km,
      "Scratches": input.Scratches,
      "paint": input.paint,
      "accidents": input.accidents,
      "previousBuyers": input.previousBuyers,
      "registrationPlace": input.registrationPlace,
      "image": dealerData.image
    })
      .catch((error) => {
        console.error(error);
      });
    // setInput({
    //   Km: '',
    //   Scratches: '',
    //   paint: '',
    //   accidents: '',
    //   previousBuyers: '',
    //   registrationPlace: ''
    // })

  }
  useEffect(() => {
    fetch();
  }, [])
  if (dealerList.length === 0)
    return <Text fontSize='5xl'>Login to Access</Text>
  // console.log(dealerList[0])
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          {console.log('dealerList', dealerList)}
          {dealerList.map((element) =>
            <MenuItem key={element._id} onClick={() => setdealerData(element)}>{element.model}</MenuItem>
          )
          }
        </MenuList>
      </Menu>
      {/* <p>{dealerData.model} {dealerData.colors} {dealerData.year} {dealerData.price}</p> */}
      {(dealerData.model) &&
        <TableContainer w='80%' m='auto auto'>
          <Table variant='striped'>
            <Thead>
              <Tr>
                <Th>Vehicle Name</Th>
                <Th>Color</Th>
                <Th>Manf. Year</Th>
                <Th>Price(Rs.)</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{dealerData.model}</Td>
                <Td>{dealerData.colors}</Td>
                <Td>{dealerData.year}</Td>
                <Td>{dealerData.price}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      }
      {Object.keys(dealerData).length > 0 ?
        <VStack>
          <Box >
            <Image h='400px' w='700' src={dealerData.image} alt='Dan Abramov' />
          </Box>
          {/* <FormControl > */}
          <Stack direction={['column', 'row']}>
            <Input minW='30' type='number' variant="outline" onChange={(e) => handleChange(e)} name={"Km"} value={input.Km} placeholder='Kms' />
            <Input type="number" variant="outline" onChange={(e) => handleChange(e)} name={'Scratches'} value={input.Scratches} placeholder='Scratches' />
            <Input type='text' variant="outline" onChange={(e) => handleChange(e)} name={'paint'} value={input.paint} placeholder='color' />
            <Input type='number' variant="outline" onChange={(e) => handleChange(e)} name={'accidents'} value={input.accidents} placeholder='Accidents' />
            <Input type='number' variant="outline" onChange={(e) => handleChange(e)} name={'previousBuyers'} value={input.previousBuyers} placeholder='Previous Buyers' />
            <Input type='text' variant="outline" onChange={(e) => handleChange(e)} name={'registrationPlace'} value={input.registrationPlace} placeholder='Registration Place' />
          </Stack>
          {/* </FormControl> */}
          <Button colorScheme='teal' variant='solid' type='submit' onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </VStack>
        : <Text fontSize='3xl'>Select vehicle from menu</Text>
      }
    </div>
  )
}

export default Dealer;