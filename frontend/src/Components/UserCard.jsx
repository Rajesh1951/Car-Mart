import { Icon, Box, Card, HStack, Text, Image, Stack, Heading, CardBody, CardFooter, Button, VStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import React from 'react'

function UserCard({ props }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      maxW={['60%']}
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '40%' }}
        src={props.image}
        alt={props.model}
      />
      <Stack minW='60%'>
        <CardBody minW='100%'>
          <HStack justifyContent='space-between'>
            <Heading size='md'>{props.model}</Heading>
            <Heading size='sm'>Rs.{props.price}</Heading>
          </HStack>
          <HStack justifyContent='space-around'>
            <VStack>
              <Text>{props.ratings}<Icon as={StarIcon} boxSize='3' pb='0' mb='0' color='gold' /></Text>
              <Text>{props.mileage}</Text>
              <Text>{props.Km}Kms</Text>
            </VStack>
            <VStack>
              <Text>{props.seats}</Text>
              <Text>previous buyers:{props.previousBuyers}</Text>
              <Text>color:{props.paint}</Text>
            </VStack>
          </HStack>
        </CardBody>

        <CardFooter pt='0' pb='0'>
          <Button variant='solid' colorScheme='green' >
            Buy
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default UserCard;