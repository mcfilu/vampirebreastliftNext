import React from 'react'
// import { clinic_hallway} from '../assets'
// import clinic_hallway from '../../public/clinic_hallway.jpeg';
import Image from 'next/image'
const ContactAftercare = () => {
  return (
    <div className={`flex w-full flex-row min-h-[60vh]  md:pr-[0px] md:p-[2vh] `}>
        
        <div className={`hidden md:flex w-[60%] h-[100%]  px-[2vh] flex flex-col items-left justify-between `}>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[6vh] text-left text-gold1 font-header `}>Aftercare</p>
                <p className={`text-white w-full text-left text-[2.1vh] mt-[4vh] font-main`}>After your treatment, it is important that we make sure that everything has worked as expected and that your body is reacting normally. We will provide you with aftercare advice so that you know what to do when you get home in terms of pain medication, cleansing, aftercare product use etc.</p>
                <p className={`text-white w-full text-left text-[2.1vh] mt-[2vh] font-main`}>We will also give you details of our emergency aftercare telephone line which you can use to call us if you have any concerns about your recovery.</p>
                <p className={`text-white w-full text-left text-[2.1vh] mt-[2vh] font-main`}>You can expect a call from our team the day after your treatment to make sure that you are happy, and everything is as expected. After a week, one of our nursing team will also call to provide a medical check-up with some questions and assessment of your progress. You will be invited in for a follow-up appointment after two weeks to check on your results from treatment and to discuss the next stage.</p>
                <p className={`text-white w-full text-left text-[2.1vh] mt-[2vh] font-main`}>Should any correction work, or emergency treatment following a complication be required, you can be assured that our medical team, led by Dr Sherif Wakil have a considerable understanding and skill in dealing with any adverse reactions which can sometimes occur. If you think you may be experiencing a complication from your treatment, we urge you to call the emergency aftercare telephone number provided to you.</p>
                <p className={`text-white w-full text-left text-[2.1vh] mt-[2vh] font-main`}>Patient safety, great results, a positive experience, and happy patients and practitioners is our goal at Dr SW Clinics.</p>
                <p className={`text-white w-full text-left text-[2.1vh] mt-[2vh] font-main`}>Now you know what to expect, why not take that first step and book an appointment today.</p>
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
        <div className={`hidden md:flex w-[40%] flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" src="/clinic_hallway.jpeg"></Image>
        </div>

        <div className={`md:hidden flex flex-col items-center relative`}>
            <p className={`flex text-gold text-[6vh] text-center text-gold1 font-header`}>Aftercare</p>
            <div className={`flex w-full h-[50vh] relative`}>
            <Image  objectFit="cover" objectPosition="center" fill="true" alt="" src="/clinic_hallway.jpeg"></Image>
            </div>
            {/* <Image className={`w-full h-full object-cover `} object-fit="contain" fill={true} src="/clinic_hallway.jpeg"></Image> */}
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>After your treatment, it is important that we make sure that everything has worked as expected and that your body is reacting normally. We will provide you with aftercare advice so that you know what to do when you get home in terms of pain medication, cleansing, aftercare product use etc.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>We will also give you details of our emergency aftercare telephone line which you can use to call us if you have any concerns about your recovery.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>You can expect a call from our team the day after your treatment to make sure that you are happy, and everything is as expected. After a week, one of our nursing team will also call to provide a medical check-up with some questions and assessment of your progress. You will be invited in for a follow-up appointment after two weeks to check on your results from treatment and to discuss the next stage.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Should any correction work, or emergency treatment following a complication be required, you can be assured that our medical team, led by Dr Sherif Wakil have a considerable understanding and skill in dealing with any adverse reactions which can sometimes occur. If you think you may be experiencing a complication from your treatment, we urge you to call the emergency aftercare telephone number provided to you.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Patient safety, great results, a positive experience, and happy patients and practitioners is our goal at Dr SW Clinics.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Now you know what to expect, why not take that first step and book an appointment today.</p>
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default ContactAftercare