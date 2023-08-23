import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import boobs1 from '../../public/boobs1.jpg';
import breast_fat2 from '../../public/breast_fat2.jpeg';
import breast_augmentation2 from '../../public/breast_augmentation2.png';



const ReductionServices = () => {

  return (
    
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

    <p className={`text-[5vh] text-gold1 text-center font-header`}>Related Treatments</p>
    
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[65vh] `}>
    
        
        
        <div  className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <Link href="/breast-augmentation-in-london">
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={breast_augmentation2}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold1 text-[5.5vh] text-left font-header`}>Breast</h1>
                    <h1 className={` text-gold1 text-[5.5vh] text-left font-header`}>Augmentation</h1>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Breast augmentation, a widely sought-after surgery procedure, aims to enhance and improve the size and shape of the breasts. It is a popular choice for those seeking to achieve a fuller and more balanced bust, whether driven by aesthetic preferences or the desire to boost their self-assurance.</p>
                
            </div>
            {/* <Link href="/breast-augmentation-in-london`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
    
        <div className={` flex flex-col items-center bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[29%] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link href="/breast-fat-enlargement-in-london">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black `}>
        <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={breast_fat2}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left font-header`}>Breast Fat</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left font-header`}>Enlargement</h1>
                </div>
            </div>
            <div className={`relative items-center flex flex-col w-full  py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Breast enlargement with fat, is a sophisticated cosmetic procedure that offers an alternative to traditional breast augmentation using implants. This innovative technique involves harvesting excess fat from other areas of the body and redistributing it to the breast area to enhance size, shape, and contour.</p>
                
                
            </div>
            {/* <Link href="/breast-fat-enlargement-in-london`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px]`}>Read More</button> */}
        </Link>
        </div>
        
    
        <div className={` flex flex-col  bg-gold1   w-[100%] md:w-[29%] mt-[10vh] md:mt-[0px] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <Link href="/">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
        <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={boobs1}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left font-header`}>Vampire</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left font-header`}>BreastLift</h1>
                </div>
            </div>
            <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>The Vampire Breast Lift is a non-surgical procedure designed to subtly enhance and rejuvenate the natural appearance and shape of the breasts. It harnesses the healing power of your own blood to stimulate new tissue growth and improve the tone and texture of your skin.</p>
                
            </div>
            {/* <Link href="/breast-reduction-in-london`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            
        </Link>
        </div>
        
        
    
        
    
        
    </div>
    
    
    </div>
  )
}

export default ReductionServices