import React from 'react'
// import { clinic2} from '../assets'
import Image from 'next/image'
import clinic2 from '../../public/clinic2.jpeg'

const WakilClinic = () => {
  return (
    <div className={`flex w-full flex-row min-h-[60vh]  md:pr-[0px] md:p-[2vh] `}>
        
        <div className={`hidden md:flex w-1/2 h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[6vh] text-center text-gold1 font-header `}>Dr SW Clinics</p>
                <p className={`text-white text-center text-[2.1vh] mt-[6vh] font-main`}>Welcome to the esteemed Dr SW Clinic, a renowned establishment with locations in London, Dubai, and Egypt. This exceptional clinic was brought to life by the visionary celebrity doctor, Dr. Sherif Wakil, who has been recognized as a finalist in prestigious awards such as the Aesthetic Awards and MyFaceMyBody Awards.</p>
                {/* <p className={`text-white text-center text-[2.1vh] mt-[3vh] font-main`}> Dr. Wakil's unwavering professionalism and expertise in the realm of medical aesthetics, regenerative medicine, pain management, life optimization, and sexual aesthetic gynecology place him among the leading experts in his field..</p> */}
                <p className={`text-white text-center text-[2.1vh] mt-[3vh] font-main`}>Under the innovative leadership of Dr. Sherif Wakil, our dedicated team is empowered to prioritize our clients' aesthetic needs. We specialize in combating signs of aging for both the face and body, including treatments for intimate areas, and consistently remain at the forefront of new advancements in pain management and regenerative techniques. Moreover, our clinic is at the forefront of bio-hacking methodologies that aim to enhance health and optimize lifestyle, making us trailblazers in the field.</p>
            </div>
            {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face.</p>
            </div>
            <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p> */}
        </div>
        <div className={`hidden md:flex w-1/2 flex items-center`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={clinic2}></Image>
        </div>

        <div className={`md:hidden flex flex-col items-center `}>
            <p className={`flex text-gold text-[6vh] text-center text-gold1 font-header`}>Dr SW Clinics</p>

            <div className={`flex w-full h-[35vh] relative`}>
            <Image  objectFit="cover" objectPosition="center" fill="true" alt="" src={clinic2}></Image>
            </div>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
                <p className={`text-white text-center text-[2.1vh] mt-[3vh] font-main`}>Welcome to the esteemed Dr SW Clinic, a renowned establishment with locations in London, Dubai, and Egypt. This exceptional clinic was brought to life by the visionary celebrity doctor, Dr. Sherif Wakil, who has been recognized as a finalist in prestigious awards such as the Aesthetic Awards and MyFaceMyBody Awards.</p>
                {/* <p className={`text-white text-center text-[2.1vh] mt-[3vh] font-main`}> Dr Wakil’s professionalism and expertise in the world of medical aesthetics, regenerative medicine, pain management, life optimisation and sexual aesthetic gynaecology puts him amongst the leaders in his field.</p> */}
                <p className={`text-white text-center text-[2.1vh] mt-[3vh] font-main`}>Under the innovative leadership of Dr. Sherif Wakil, our dedicated team is empowered to prioritize our clients' aesthetic needs. We specialize in combating signs of aging for both the face and body, including treatments for intimate areas, and consistently remain at the forefront of new advancements in pain management and regenerative techniques. Moreover, our clinic is at the forefront of bio-hacking methodologies that aim to enhance health and optimize lifestyle, making us trailblazers in the field.</p>
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default WakilClinic