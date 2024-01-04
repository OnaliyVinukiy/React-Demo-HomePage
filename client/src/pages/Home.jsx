import React from "react";
import { Carousel } from 'flowbite-react';
import Header from "../components/Header";


export default function Home() {
  return (
    <div>
    
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
        <img src="src/images/emotion.png" alt="..." style={{  width: '100%', height: '100%' }} />
        <img src="src/images/emotion.png" alt="..." style={{ width: '100%', height: '100%' }} />
        </Carousel>
      </div>
    </div>
  );
}
