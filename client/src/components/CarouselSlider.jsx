import React from 'react';
import { Carousel } from 'flowbite-react';

function CarouselSlider() {
  return (
    

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
      <img src="src/images/sale.jpg" alt="..." style={{  width: '100%', height: '100%' }} />
      <img src="src/images/sale2.jpg" alt="..." style={{ width: '100%', height: '100%' }} />
      </Carousel>
    </div>
  );
}

export default CarouselSlider;