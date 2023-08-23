import React from 'react'
import augmentation2 from '../../public/augmentation2.jpg';
import Image from 'next/image';

const AugmentationImage = () => {
  return (

    <div className={`relative flex w-full h-screen`}>
<Image objectFit="cover" objectPosition="center" fill="true" alt="" src={augmentation2}></Image>
    <div className={`absolute left-[1.5vw] top-[22%] md:w-[45%]`}>
    {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
                <h1 className={`text-gold1 text-[7vh] md:text-[8vh] font-header  mt-[3vh] text-left w-[60%]`}>Breast  Augmentation In London</h1>

                    <h2 className={`text-white text-[2.2vh] md:text-[2.5vh] font-main mb-[3vh] text-left  md:w-[75%]`}>Enhance your natural beauty and embrace your desired silhouette with Breast Augmentation - the transformative procedure that helps you achieve the breast shape, size, and firmness you've always desired. Experience the artistry of breast augmentation and rediscover a more confident you.</h2>
                    <a href="#augmentation_opening" className={`text-gold1 hover-underline-animation2 text-left text-[2vh] font-main `}>READ MORE</a>
                   
                {/* </div> */}
    </div>
    {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
</div>
  )
}

export default AugmentationImage