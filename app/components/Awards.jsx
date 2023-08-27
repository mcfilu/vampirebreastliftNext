'use client'
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import { award1, award2, award3, award4, award5, award6 } from '../assets';
import award1 from '../../public/award1.png';
import award2 from '../../public/award2.png';
import award3 from '../../public/award3.png';
import award4 from '../../public/award4.png';
import award5 from '../../public/award5.png';
import award6 from '../../public/award6.png';
import { useEffect, useState} from 'react';
import Image from 'next/image';
// import img from 'next/img';



{/* <img  src={award1.src} alt="First clinic Award img"  role="presentation" />, */}

const Awards = () => {
const handleDragStart = (e) => e.preventDefault();
const [items, setItems] = useState([]);
useEffect(() => {
  setItems([
    <div className={`pl-2 pr-2 h-[17vh] object-contain mx-auto`} onDragStart={handleDragStart}><Image objectFit="contain" objectPosition="center" fill="true" alt="" src={award1}></Image></div>,
    <div className={`pl-2 pr-2 h-[17vh] object-contain mx-auto`} onDragStart={handleDragStart}><Image objectFit="contain" objectPosition="center" fill="true" alt="" src={award2}></Image></div>,
    <div className={`pl-2 pr-2 h-[17vh] object-contain mx-auto`} onDragStart={handleDragStart}><Image objectFit="contain" objectPosition="center" fill="true" alt="" src={award3}></Image></div>,
    <div className={`pl-2 pr-2 h-[17vh] object-contain mx-auto`} onDragStart={handleDragStart}><Image objectFit="contain" objectPosition="center" fill="true" alt="" src={award4}></Image></div>,
    <div className={`pl-2 pr-2 h-[17vh] object-contain mx-auto`} onDragStart={handleDragStart}><Image objectFit="contain" objectPosition="center" fill="true" alt="" src={award5}></Image></div>,
    <div className={`pl-2 pr-2 h-[17vh] object-contain mx-auto`} onDragStart={handleDragStart}><Image objectFit="contain" objectPosition="center" fill="true" alt="" src={award6}></Image></div>,
    // <img className={`pl-2 pr-2 h-[17vh] object-contain mx-auto`} src={award2.src} alt="yours lawfully logo" onDragStart={handleDragStart} role="presentation" />,
    // <img className={`pl-2 pr-2 h-[17vh] object-contain mx-auto`} src={award3.src} alt="yours lawfully logo" onDragStart={handleDragStart} role="presentation" />,
    // <img className={`pl-2 pr-2 h-[17vh] object-contain mx-auto`} src={award4.src} alt="yours lawfully logo" onDragStart={handleDragStart} role="presentation" />,
    // <img className={`pl-2 pr-2 h-[17vh] object-contain mx-auto`} src={award5.src} alt="yours lawfully logo" onDragStart={handleDragStart} role="presentation" />,
    // <img className={`pl-2 pr-2 h-[17vh] object-contain mx-auto `} src={award6.src} alt="yours lawfully logo" onDragStart={handleDragStart} role="presentation" />,
  ]);
}, [])

  return (
    <div className={`flex flex-col   w-full  mx-auto  p-[2vh]  md:px-[4vh] `}>
        <div className={`md:w-1/3 flex flex-col justify-center  `}>
            <p className={`text-white text-[3vh]`}>Dr. SW Clinics</p>
            <h2 className={`text-gold1 text-[5vh] font-header text-left md:text-left`}>An award winning clinic</h2>
            {/* <p className={`text-white text-[2.1vh] font-main mt-[3vh] text-left md:text-justify`}>This renowned clinic has gained a reputation for excellence, with numerous prestigious awards acknowledging its outstanding medical care and patient satisfaction.</p> */}
        </div>
        <div className={`md:w-full flex items-center justify-center mt-[2vh] relative`}>
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
                // swipeDelta={100}
                // paddingLeft={20}
            />
        </div>
        
    </div>
  )
}

export default Awards