import React from 'react'

const ContactOpening = () => {
  return (
    <div className={`flex flex-col md:flex-row w-full items-center`}>
        <div className={`flex md:w-1/2 p-[2vh] items-center justify-end`}>
            <p className={`text-gold1 font-header text-[5vh] text-right w-[70%]`}>We want all our patients to feel happy and reassured</p>
        </div>
        <div className={`flex flex-col md:w-1/2 p-[2vh]`}>
            <p className={`text-white text-[2.1vh] text-left md:w-[70%]`}>As a specialist clinic offering a complex range of medical aesthetic, sexual health, pain management, regenerative medical and life optimisation treatments, we know that visiting a medical clinic can be a daunting prospect for some people, so feel it might be helpful for you to know what to expect from us, and how everything works.</p>
            <p className={`text-white text-[2.1vh] text-left mt-[2vh] md:w-[70%]`}>We want all our patients to feel happy and reassured, and know that our team will do all that we can to ensure you have the best experience at Dr SW Clinics and get the best results from the treatments that you receive. This information is designed to put your mind at rest, but if you have any further questions, do feel free to ask our reception team when you call to book a consultation appointment or send us an email with any queries.</p>
        </div>
    </div>
  )
}

export default ContactOpening