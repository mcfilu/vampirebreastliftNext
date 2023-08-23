'use client'
import React from 'react'
// import { independent, thesun, media4, tatler, sky, channel4 } from '../assets'
import independent from '../../public/independent.png';
import thesun from '../../public/thesun.png';
import media4 from '../../public/media4.png';
import tatler from '../../public/tatler.png';
import sky from '../../public/sky.png';
import channel4 from '../../public/channel4.png';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState, useEffect } from 'react';

const handleDragStart = (e) => e.preventDefault();

const items = [
  
];

const Media = () => {
  const handleDragStart = (e) => e.preventDefault();
const [items, setItems] = useState([]);
useEffect(() => {
  setItems([
  <img className="pl-2 pr-2 h-[11vh] object-contain mx-auto" src={independent.src} onDragStart={handleDragStart} role="presentation" />,
  <img className="pl-2 pr-2 h-[11vh] object-contain mx-auto" src={sky.src} onDragStart={handleDragStart} role="presentation" />,
  <img className="pl-2 pr-2 h-[11vh] object-contain mx-auto" src={thesun.src} onDragStart={handleDragStart} role="presentation" />,
//   <div className={`flex items-center justify-center h-[11vh]`}><p className={`flex items-center justify-center text-white`}>ajdfklsdf</p></div>
  <img className="pl-2 pr-2 h-[11vh] object-contain mx-auto" src={tatler.src} onDragStart={handleDragStart} role="presentation" />,
  <img className="pl-2 pr-2 h-[11vh] object-contain mx-auto " src={channel4.src} onDragStart={handleDragStart} role="presentation" />
  ]);
}, [])

  return (
    <div className="flex flex-col   w-full   p-[2vh]  px-[4vh]">
      <div className="flex flex-col md:w-1/3 justify-center ">
        <h1 className="text-gold1 text-[5vh] text-start md:text-left font-header ">As Seen On</h1>
        <p className="text-white text-start md:text-justify text-[2.1vh] font-main mt-[1vh]">Dr Sherif Wakil is regularly interviewed by the mainstream press as an expert in the subject of sexual health and well-being.</p>
      </div>
      <div className="md:w-full flex items-center justify-center mt-[2vh] ">
        <AliceCarousel mouseTracking 
          items={items} 
          responsive={{
            0: { items: 3 },
            1200: { items: 4 },
            1500: {items: 5},
          }}
          disableButtonsControls={true} 
          disableDotsControls={true} 
          infinite={true} 
          autoPlay={true} 
          autoPlayInterval={1200}
          animationDuration={1000}
          autoHeight={false}
        />
      </div>
    </div>
  )
}

export default Media;
