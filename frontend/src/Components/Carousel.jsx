import { Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  const styles = {
    'max-width': '60%'
  }
  return (
    <div style={{  overflow: 'hidden' }}>
      <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false} style={{ height: '100%' }}>
        <div >
          <img style={styles} src="https://www.pngitem.com/pimgs/m/451-4510416_mclaren-houston-tx-cars-most-expensive-white-background.png" alt="Image 1" />
        </div>
        <div >
          <img style={styles} src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-A8-200920222145.jpg&w=872&h=578&q=75&c=1" alt="Image 2" />
        </div>
        <div >
          <img style={styles} src="https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=248J&client=byo&paint=P0300&fabric=FVASW&sa=S01E4,S02VW,S0302,S0319,S0322,S03AG,S03DZ,S0402,S0415,S0416,S0453,S04FM,S04HB,S04L8,S04NB,S05AC,S05AZ,S06AC,S06AK,S06C4,S06NW,S06U3,S06WD,S0710,S0715,S0760,S0775&quality=70&bkgnd=transparent&resp=png&angle=60" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
