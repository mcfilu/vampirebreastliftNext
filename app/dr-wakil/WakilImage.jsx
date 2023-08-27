import React from 'react'

import Image from 'next/image'
import sherif_bg from '../../public/sherif_bg.jpeg';
import sherif_bg_mobile from '../../public/sherif_bg_mobile.jpeg';

const WakilImage = () => {
  return (
    
    <div className={`flex w-full h-screen relative`}>
    <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={sherif_bg } priority></Image>
    <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={sherif_bg_mobile } priority></Image>
    <div className={`absolute left-[1.5vw] top-[28%] md:w-[45%]`}>
    {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
    <p className={`text-white text-[3vh] font-main md:mt-[10vh]`}>World-Renown Specialist</p>
                <h1 className={`text-gold1 text-[8vh] font-header md:mb-[3vh]  text-left`}>Dr Sherif Wakil</h1>
                    <h2 className={`text-white text-[2.2vh] md:text-[2.5vh] font-main mb-[3vh] text-left  md:w-[75%] w-full`}>Dr. Wakil is passionately dedicated to making a profound impact on people's lives, driven by the joy of seeing patients happy and regaining their self-esteem. This immense satisfaction fuels his unwavering commitment to continually refine, improve, and expedite his protocols.</h2>
                    <a href="#wakil_opening" className={`text-gold1 hover-underline-animation2 text-left text-[2vh] font-main `}>READ MORE</a>
                   
                {/* </div> */}
    </div>
    {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
</div>
  )
}

export default WakilImage