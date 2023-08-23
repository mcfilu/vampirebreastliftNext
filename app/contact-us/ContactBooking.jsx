import React from 'react'
// import { clinic_reception} from '../assets'
import clinic_reception from '../../public/clinic_reception.jpeg';
import Image from 'next/image';

const ContactBooking = () => {
  return (
    <div className={`flex w-full flex-row min-h-[60vh]  md:pr-[0px] md:p-[2vh] `}>
        
        <div className={`hidden md:flex w-[55%] h-[100%] my-auto px-[2vh] flex flex-col items-left justify-between `}>
            <div className={`flex flex-col w-[100%] items-center justify-center `}>
            
                <p className={`flex text-gold text-[6vh] text-center text-gold1 font-header  `}>Booking Process</p>
                <p className={`text-white text-left text-[2.1vh] mt-[4vh] font-main`}>The first stage of the process involves booking a consultation with our experienced and trained patient adviser who will discuss your concerns and the aesthetic, regenerative medicine, pain management and sexual rejuvenation treatments available in our clinic, as well as our life optimisation programmes.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main font-bold w-full `}>You can book a free appointment with a patient adviser by calling 020 3006 8459.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Our highly trained patient advisers operate with maximum discretion in a relaxed and private atmosphere within the clinic. You will have an informal chat and be asked to complete a medical and lifestyle questionnaire which will help our team to initially assess your suitability for the treatments that we provide. It is helpful for all if you complete this with as much detail and honesty as possible so we can better understand your health status and lifestyle considerations.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>During this consultation we will listen to your concerns and the problems that you are experiencing, as well as the solutions that you are hoping to achieve. We will discuss all aspects of what is involved with any treatments which may be suitable for you and to answer any questions or concerns that you may have.</p>

            </div>
            {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical Personalised Treatment Plan can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
                <p className={`text-white font-poppins text-[2vh] my-[1vh] text-justify`}>This non-surgical Personalised Treatment Plan can be used to restore natural health and youthfulness to the skin on the face.</p>
            </div>
            <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p> */}
        </div>
        <div className={`hidden md:flex w-[45%] flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={clinic_reception}></Image>
        </div>

        <div className={`md:hidden flex flex-col items-center`}>
            <p className={`flex text-gold text-[6vh] text-center text-gold1 font-header`}>Booking Process</p>
            <div className={`flex w-full h-[30vh] relative`}>
            <Image  objectFit="cover" objectPosition="center" fill="true" alt="" src={clinic_reception}></Image>
            </div>
            
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>The first stage of the process involves booking a consultation with our experienced and trained patient adviser who will discuss your concerns and the aesthetic, regenerative medicine, pain management and sexual rejuvenation treatments available in our clinic, as well as our life optimisation programmes.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main font-bold`}>You can book a free appointment with a patient adviser by calling 020 3006 8459.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Our highly trained patient advisers operate with maximum discretion in a relaxed and private atmosphere within the clinic. You will have an informal chat and be asked to complete a medical and lifestyle questionnaire which will help our team to initially assess your suitability for the treatments that we provide. It is helpful for all if you complete this with as much detail and honesty as possible so we can better understand your health status and lifestyle considerations.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>During this consultation we will listen to your concerns and the problems that you are experiencing, as well as the solutions that you are hoping to achieve. We will discuss all aspects of what is involved with any treatments which may be suitable for you and to answer any questions or concerns that you may have.</p>
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default ContactBooking