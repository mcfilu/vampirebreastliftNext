import React from 'react'
import boobs1 from '../../public/boobs1.jpg';
import Image from 'next/image';

const BreastliftImage = () => {
  return (
    <div className={`relative flex w-full h-screen`}>
        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs1} priority></Image>
        {/* <img src={boobs1.src} alt="" className={`w-full h-full object-cover flex`}></img> */}
        <div className={`absolute left-[1.5vw] top-[22%] md:w-[45%]`}>
        {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
                    {/* <h1 className={`text-gold1 text-[8vh] font-header mb-[3vh] mt-20 text-left`}>Vampire Breast Lift™ </h1> */}
                    <h2 className={`text-gold1 text-[7vh] md:text-[8vh] font-header  mt-[3vh] text-left`}>Vampire</h2>
                    <h2 className={`text-gold1 text-[7vh] md:text-[8vh] font-header mb-[3vh] text-left`}> Breast Lift™ </h2>
                        <h1 className={`text-white text-[2.2vh] md:text-[2.5vh] font-main mb-[3vh] text-left  w-full md:w-[75%]`}>Rejuvanate your Cleavage with Non Surgical Breast Lift in London</h1>
                        <a href="#breastlift_opening" className={`text-gold1 hover-underline-animation2 text-left text-[2vh] font-main `}>READ MORE</a>
                       
                    {/* </div> */}
        </div>
        {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
    </div>
  )
}

export default BreastliftImage