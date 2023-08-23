import React from 'react'

import Image from 'next/image';
import oshot from '../../public/oshot.jpeg';
import clinic2 from '../../public/clinic2.jpeg';
import pshot from '../../public/pshot.jpeg';

const OtherServices2 = () => {

  return (
    
    <div className={`flex flex-col  w-full pl-[4%] pr-[4%]`}>

    
    <div className={`flex flex-col md:flex-row w-full justify-between mt-[2vh] md:min-h-[65vh] `}>
    
        
        {/* <div  className={` flex flex-col items-center bg-gold1 mt-[10vh] md:mt-[0px] w-[100%] md:w-[29%] shadow-[0px_0px_20px_1px_#ad9444] `}> */}
        <div  className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <a href="https://www.pshot.co.uk">
            <div  className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={pshot}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold1 text-[5.5vh] text-left font-header`}>The P-Shot</h1>
                    <h1 className={` text-gold1 text-[5.5vh] text-left font-header`}>Penis PRP</h1>
                </div>
            </div>
            
            <div className={`relative flex flex-col w-full  items-center py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>P-Shot® is a part of the ground-breaking treatment, The O Concept™. The P-Shot® procedure works by using the body’s natural ability to heal andrejuvenate itself by injecting growth factor rich Platelet Rich Plasma (PRP) into the penis to stimulate a regenerative process.</p>
                
            </div>
            {/* <NavLink to={`/breast-augmentation-in-london`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></NavLink> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white  md:mt-[0px]`}>Read More</button> */}
        </a>
        </div>

        <div  className={` flex flex-col  bg-gold1 items-center w-[100%] md:w-[29%]  shadow-[0px_0px_20px_1px_#ad9444]`}>
        <a href="https://www.oshot.uk">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black `}>
        <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={oshot}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left font-header`}>The O-Shot</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left font-header`}>Vagina PRP</h1>
                </div>
            </div>
            <div className={`relative items-center flex flex-col w-full  py-[1vh] px-[2vh]`}>
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>The O-Shot ®  is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina. It is a nonsurgical technique that uses the growth factors each woman has in her own body to stimulate vaginal and clitoral rejuvenation to activate the Female Orgasm System.</p>
                
                
            </div>
            {/* <Link to={`/breast-fat-enlargement`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            {/* <button className={`absolute -bottom-[6vh] text-[3vh] px-[1vh]  bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px]`}>Read More</button> */}
        </a>
        </div>

        <div  className={` flex flex-col  bg-gold1   w-[100%] md:w-[29%] mt-[10vh] md:mt-[0px] shadow-[0px_0px_20px_1px_#ad9444] `}>
        <a href="https://www.drswclinics.co.uk">
        <div className={`relative flex w-full h-[40vh] overflow-hidden bg-black`}>
        <Image objectFit="cover" objectPosition="center" fill="true" alt="" className={`flex w-full h-full  ease-in-out duration-500 object-cover hover:scale-125 transition cursor-pointer`} src={clinic2}></Image>
                <div className={`absolute w-full top-[10vh] left-[2vw] `}>
                    <h1 className={`text-gold2 text-[5.5vh] text-left font-header`}>Dr. SW</h1>
                    <h1 className={` text-gold2 text-[5.5vh] text-left font-header`}>Clinics</h1>
                </div>
            </div>
            <div className={` flex flex-col w-full  pt-[2vh] pb-[2.5vh] px-[1vh] md:px-[2vh]`}>
                {/* <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Explore the innovative and expertly tailored treatments offered at Dr. SW's Clinics, where we specialize in aesthetic enhancements and sexual rejuvenation therapies. We invite you to visit our website to learn about the myriad of transformative possibilities we provide.</p> */}
                <p className={`flex text-black text-[2.1vh] text-justify font-main`}>Dr Wakil runs the finest Aesthetic Clinics UK in Harley Street and has performed more than 19,000 procedures to date and has introduced a number of new treatments to the UK, including the P-Shot and the O-Shot, Vampire Breast lift, Vampire facelift, as well as being a pioneer of the soft surgery approach.</p>
                
            </div>
            {/* <Link to={`/breast-reduction`}><button className={`p-[1vh] pl-[2vh] pr-[2vh] absolute -bottom-[2.2vh] bg-white text-black text-[2vh] bg-opacity left-1/2  transform -translate-x-1/2  hover:bg-gold1 hover:text-white`}>READ MORE</button></Link> */}
            
        </a>
        </div>
        
        
    
        
    
        
    </div>

    
    
    
    </div>
  )
}

export default OtherServices2



