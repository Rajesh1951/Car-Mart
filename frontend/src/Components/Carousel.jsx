import { Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/carousel.css'
const MyCarousel = () => {
  return (
    <div style={{ 'max-height': '50vh', overflow: 'hidden' }}>
      <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false} style={{ height: '100%' }}>
        <div className='responsive'>
          <img src="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/4A2B2Y/2023.png?wid=850" alt="Image 1" />
        </div>
        <div className='responsive'>
          <img src="https://imgd-ct.aeplcdn.com/1280x720/cw/ec/30181/RollsRoyce-Phantom-VIII-Exterior-124069.jpg?wm=0&q=75" alt="Image 2" />
        </div>
        <div className='responsive'>
          <img src="https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=248J&client=byo&paint=P0300&fabric=FVASW&sa=S01E4,S02VW,S0302,S0319,S0322,S03AG,S03DZ,S0402,S0415,S0416,S0453,S04FM,S04HB,S04L8,S04NB,S05AC,S05AZ,S06AC,S06AK,S06C4,S06NW,S06U3,S06WD,S0710,S0715,S0760,S0775&quality=70&bkgnd=transparent&resp=png&angle=60" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
