import React from 'react'
import {  clinic_bg } from '../assets'

const ContactImage = () => {
  return (
    <div className={`relative`}>
        <img className={`w-screen h-screen object-cover`} src={clinic_bg}></img>
        <div className={`absolute left-[1.5vw] top-[35%] md:top-[30%] md:w-[45%]`}>
        {/* <div className={`flex flex-col justify-center items-left h-screen w-[35%] ml-[3vh]`}> */}
                    {/* <h1 className={`text-gold1 text-[8vh] font-header mb-[3vh] mt-20 text-left`}>Vampire Breast Lift™ </h1> */}
                    <h1 className={`text-gold1 text-[8vh] font-header  mt-[3vh] text-left`}>Contact Us</h1>
                {/* <h2 className={`text-gold1 text-[8vh] font-header mb-[1vh] text-left`}>Dr. SW Clinics</h2> */}
                        <h2 className={`text-white text-[2.2vh] md:text-[3vh] font-main mb-[1vh] text-left  w-[65%]`}>Contact Dr. SW Clinics and obtain any information about the Patient Journey in our clinic. </h2>
                        <a href="#contact_opening" className={`text-gold1 hover-underline-animation2 text-left text-[2vh] font-main `}>READ MORE</a>
                       
                    {/* </div> */}
        </div>
        {/* <i className={`pl-6 pr-6 pt-5 pb-5 text-[20px] absolute fa-solid fa-arrow-down bg-white rounded-full left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce`}></i> */}
    </div>
  )
}

export default ContactImage