import React from 'react'
import Image from 'next/image';
import difference_icon from '@/public/difference_icon.png';
import aesthetic_icon from '@/public/aesthetic_icon.png';
import augmentation_icon2 from '@/public/augmentation2.png';

const AugmentationTreated = () => {
  return (
        
        <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

        <p className={`text-[5vh] text-gold1 text-center md:mb-[5vh] font-header`}>Conditions Treated</p>
        
        <div className={`flex flex-col md:flex-row w-full items-center md:items-start justify-center mt-[2vh]  `}>
        
            
            
            
            <div  className={`relative flex flex-col       mt-[5vh] md:mt-[0px] hover:bg-opacity-80  hover:ease-in-out duration-500 items-center`}>
            
                <div className={`flex flex-col bg-black justify-center items-center`}>
                    <div className={`flex h-[15vh] w-[25vw] md:w-[10vw] relative`}>
                    <Image src={augmentation_icon2} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
                    </div>
                    
                    <h2 className={`text-gold1 text-[4vh] text-center font-main md:mt-[2vh]`}>Size Increase</h2>
                    {/* <h2 className={`text-gold1 text-[4vh] text-left font-main `}>Increase</h2> */}
                    {/* <h2 className={` text-gold2 text-[5.5vh] text-left`}>Size</h2> */}
                </div>
                
        
        
            </div>
        
            <div  className={`relative flex flex-col      mt-[5vh] md:mt-[0px] hover:bg-opacity-80 ] hover:ease-in-out duration-500 mx-[10vw] items-center`}>
            
                <div className={`flex flex-col bg-black justify-center items-center`}>
                    <div className={`flex h-[15vh]  w-[25vw] md:w-[10vw] relative`}>
                        <Image src={aesthetic_icon} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
                    </div>
                    
                    <h2 className={`text-gold1 text-[4vh] text-center font-main md:mt-[2vh]`}>Aesthetic Enhancement</h2>
                    {/* <h2 className={` text-white text-[5.5vh] text-left`}>Texture</h2> */}
                </div>
                
        
        
            </div>
            
        
            <div  className={`relative flex flex-col     mt-[5vh] md:mt-[0px] hover:bg-opacity-80  hover:ease-in-out duration-500 items-center`}>
            
                <div className={`flex flex-col bg-black justify-center items-center`}>
                    <div className={`flex h-[15vh]  w-[25vw] md:w-[10vw] relative`}>
                    <Image src={difference_icon} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
                    </div>
                    
                    <h2 className={`text-gold1 text-[4vh] text-center font-main md:mt-[2vh]`}>Breast Shape</h2>
                    {/* <h2 className={` text-gold2 text-[5.5vh] text-left`}>Rippling</h2> */}
                </div>
                
        
        
            </div>
            
        
            
        
            
        </div>
        
        
        </div>
  )
}

export default AugmentationTreated