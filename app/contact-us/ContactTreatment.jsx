import React from 'react'
// import { clinic_room} from '../assets'
import clinic_room from '../../public/clinic_room.jpeg';
import Image from 'next/image';

const ContactTreatment = () => {
  return (
    <div className={`flex w-full flex-row min-h-[60vh]  md:pr-[0px] md:p-[2vh] `}>
        <div className={`hidden md:flex w-[45%] flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={clinic_room}></Image>
        </div>
        <div className={`hidden md:flex w-[55%] h-[100%]  px-[2vh] flex flex-col items-left justify-between `}>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[6vh] text-center text-gold1 font-header `}>Treatment</p>
                <p className={`text-white text-left text-[2.1vh] mt-[4vh] font-main`}>Appointments to attend the clinic for treatments will be scheduled according to any time separations required for healing, follow-ups, expert monitoring or where courses of treatment sessions are needed once every few weeks.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>You will be supplied with any relevant information to allow you to attend the appointment, ready and prepared for treatment to commence. This may include without wearing make-up, having shaved an area, particularly in the case of sexual health treatments, or at certain times during the female menstrual cycle.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Prior to your first treatment, and at follow-up appointments, our policy is to record your progress by taking photographs which will serve as before and after comparisons within our medical records, so we can both assess how effective a particular treatment is for you. These photographs are securely stored with your patient information as part of your treatment history. They will not be used by our clinic for marketing purposes unless you expressly give permission for this use. If you would like to allow us to use your images, or if you wish to record a video of your journey, or provide a testimonial, our team will be more than happy to discuss how you can offer consent to do this, in line with GDPR data protection regulations.</p>

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
        

        <div className={`md:hidden flex flex-col items-center `}>
            <p className={`flex text-gold text-[6vh] text-center text-gold1 font-header`}>Treatment</p>
            <div className={`flex w-full h-[30vh] relative`}>
            <Image  objectFit="cover" objectPosition="center" fill="true" alt="" src={clinic_room}></Image>
            </div>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Appointments to attend the clinic for treatments will be scheduled according to any time separations required for healing, follow-ups, expert monitoring or where courses of treatment sessions are needed once every few weeks.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}> You will be supplied with any relevant information to allow you to attend the appointment, ready and prepared for treatment to commence. This may include without wearing make-up, having shaved an area, particularly in the case of sexual health treatments, or at certain times during the female menstrual cycle.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Prior to your first treatment, and at follow-up appointments, our policy is to record your progress by taking photographs which will serve as before and after comparisons within our medical records, so we can both assess how effective a particular treatment is for you. These photographs are securely stored with your patient information as part of your treatment history. They will not be used by our clinic for marketing purposes unless you expressly give permission for this use. If you would like to allow us to use your images, or if you wish to record a video of your journey, or provide a testimonial, our team will be more than happy to discuss how you can offer consent to do this, in line with GDPR data protection regulations.</p>
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default ContactTreatment