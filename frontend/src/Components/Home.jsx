import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'

function Home() {
  
  return (
    <>
    <Carousel/>
      <Link to={"/dealer"} >Seller </Link>
      <Link to={"/user"} >Buyer </Link>
    </>
  )
}

export default Home