import React from 'react'
// import { harley_street } from '../assets'
import harley_street from '../../public/harley_street.jpg'
import Image from 'next/image'

const WakilPreOpening = () => {
  return (
    <div id="wakil_opening" className={`flex w-full flex-row md:min-h-[55vh]  md:p-[2vh] md:pl-[0px]`}>
        <div className={`hidden md:flex w-[45%]  flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image  src={harley_street} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
        </div>
        
        <div className={`hidden md:flex w-[55%] h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={` flex flex-col w-[100%]  bg-opacity-40  items-center justify-center my-auto`}>
            {/* <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-left text-[1.3vw]`}></i> */}
            <p className={`flex  text-[5vh] text-left text-gold1  font-header`}>Dr. SW Clinics</p>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>The prestigious Dr SW Clinic, located in London, Dubai and Egypt, was founded through the vision of celebrity doctor, Aesthetic Awards and MyFaceMyBody Awards finalist Dr Sherif Wakil.</p>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>Dr Wakil’s professionalism and expertise in the world of medical aesthetics, regenerative medicine, pain management, life optimisation and sexual aesthetic gynaecology puts him amongst the leaders in his field. His forward thinking and leadership means that his friendly and professional team at Dr SW Clinics understand the importance of making our aesthetic clients look and feel their best.</p>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>Effectively treating the symptoms of ageing, in both the face and body, including the male and female intimate parts, as well as being at the cutting edge of new thinking when addressing pain management through regenerative techniques and getting your health back on track through bio-hacking approaches to refocus and optimise your body and lifestyle.</p>
                {/* <i className={`fa-solid fa-quote-right mr-[0.9vw] text-left text-gold1 text-[5vh] md:text-[1.3vw] mt-[2vh]`}></i> */}
                
            </div>
            
        </div>
        
        


        <div className={`md:hidden flex flex-col w-full items-center`}>
        <p className={`flex text-[4.5vh] text-gold1 mt-[2vh] font-header text-center`}>Dr. SW Clinics</p>

            <div className={`flex w-full h-[30vh] relative`}>
                <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={harley_street}></Image>
            </div>
            
            {/* <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-left text-[4vh] mt-[1vh]`}></i> */}
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh] text-gold1 mt-[2vh] font-main`}>The prestigious Dr SW Clinic, located in London, Dubai and Egypt, was founded through the vision of celebrity doctor, Aesthetic Awards and MyFaceMyBody Awards finalist Dr Sherif Wakil.</p>
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh] mt-[2vh] text-gold1 mt-[2vh] font-main`}>Dr Wakil’s professionalism and expertise in the world of medical aesthetics, regenerative medicine, pain management, life optimisation and sexual aesthetic gynaecology puts him amongst the leaders in his field. His forward thinking and leadership means that his friendly and professional team at Dr SW Clinics understand the importance of making our aesthetic clients look and feel their best.</p>
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh] mt-[2vh] text-gold1 mt-[2vh] font-main`}>Effectively treating the symptoms of ageing, in both the face and body, including the male and female intimate parts, as well as being at the cutting edge of new thinking when addressing pain management through regenerative techniques and getting your health back on track through bio-hacking approaches to refocus and optimise your body and lifestyle.</p>
            {/* <i className={`fa-solid fa-quote-right mr-[0.9vw] text-left text-gold1 text-[4vh] `}></i> */}
            
            

        </div>
       
        
    
    </div>
  )
}

export default WakilPreOpening