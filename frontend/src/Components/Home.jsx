import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import ImageSlider from './ImageSlider'

function Home() {
  const images = [
    { url: "https://www.pngitem.com/pimgs/m/451-4510416_mclaren-houston-tx-cars-most-expensive-white-background.png" },
    { url: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-A8-200920222145.jpg&w=872&h=578&q=75&c=1" },
    { url: "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=248J&client=byo&paint=P0300&fabric=FVASW&sa=S01E4,S02VW,S0302,S0319,S0322,S03AG,S03DZ,S0402,S0415,S0416,S0453,S04FM,S04HB,S04L8,S04NB,S05AC,S05AZ,S06AC,S06AK,S06C4,S06NW,S06U3,S06WD,S0710,S0715,S0760,S0775&quality=70&bkgnd=transparent&resp=png&angle=60" }
  ]
  const containerStyles = {
    maxWidth: '60vw',
    height: '40vh',
    margin:'0 auto'
  }
  return (
    <>
      <div style={containerStyles}>
        <ImageSlider slides={images} />
      </div>
      <Link to={"/dealer"} >Seller </Link>
      <Link to={"/user"} >Buyer </Link>
    </>
  )
}

export default Home