import React from 'react'
// import { sherif_plan} from '../assets'
import sherif_plan from '../../public/sherif_plan.jpeg';
import Image from 'next/image';

const ContactPersonalised = () => {
  return (
    <div className={`flex w-full flex-row   md:pr-[0px] md:p-[2vh] `}>
        
        <div className={`hidden md:flex w-[55%]  px-[2vh] flex flex-col items-left  `}>
            <div className={`flex flex-col w-[100%] items-center justify-center h-full`}>
                <p className={`flex text-gold text-[6vh] text-center text-gold1 font-header `}>Personalised Treatment Plan</p>
                <p className={`text-white text-left text-[2.1vh] mt-[4vh] font-main`}>We know that every patient is different so we provide a bespoke and personalised treatment plan that will address all your anti-ageing, pain management, lifestyle, sexual health or body concerns to achieve the optimal results for you. We also pride ourselves on creating a bespoke O Concept™ to restore sexual health and well-being for both men and women, as well as life optimisation programmes which use bio-hacking to help get your health and life back on track through a variety of biologically tailored treatments from our experts.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>A full medical assessment will be undertaken to enable our medical team to create a programme of treatments, and a timescale for them, which will suit your particular concerns; we do not operate with a one-size-fits-all portfolio of treatments. This means that we can discuss all the options with you, recommending the most suitable treatment or combination of treatments, ensuring that we explain in detail the procedures involved and how they will address the concerns that you have over time. You will be able to take home details of your bespoke plan.</p>
                {/* <p className={`text-white text-left text-[2.1vh] mt-[3vh] font-main`}>Prior to your first Personalised Treatment Plan, and at follow-up appointments, our policy is to record your progress by taking photographs which will serve as before and after comparisons within our medical records, so we can both assess how effective a particular Personalised Treatment Plan is for you. These photographs are securely stored with your patient information as part of your Personalised Treatment Plan history. They will not be used by our clinic for marketing purposes unless you expressly give permission for this use. If you would like to allow us to use your images, or if you wish to record a video of your journey, or provide a testimonial, our team will be more than happy to discuss how you can offer consent to do this, in line with GDPR data protection regulations.</p> */}
            </div>
        </div>
        <div className={`hidden md:flex w-[45%] flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={sherif_plan}></Image>
        </div>

        <div className={`md:hidden flex flex-col items-center `}>
            <p className={`flex text-gold text-[6vh] text-center text-gold1 font-header`}>Personalised Treatment Plan</p>
            <div className={`flex w-full h-[35vh] relative`}>
            <Image  objectFit="cover" objectPosition="center" fill="true" src="/sherif_plan.jpeg" alt=""></Image>
            </div>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>We know that every patient is different so we provide a bespoke and personalised treatment plan that will address all your anti-ageing, pain management, lifestyle, sexual health or body concerns to achieve the optimal results for you. We also pride ourselves on creating a bespoke O Concept™ to restore sexual health and well-being for both men and women, as well as life optimisation programmes which use bio-hacking to help get your health and life back on track through a variety of biologically tailored treatments from our experts.</p>
                {/* <p className={`text-white text-left text-[2.1vh] mt-[3vh] font-main`}> Dr Wakil’s professionalism and expertise in the world of medical aesthetics, regenerative medicine, pain management, life optimisation and sexual aesthetic gynaecology puts him amongst the leaders in his field.</p> */}
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>A full medical assessment will be undertaken to enable our medical team to create a programme of treatments, and a timescale for them, which will suit your particular concerns; we do not operate with a one-size-fits-all portfolio of treatments. This means that we can discuss all the options with you, recommending the most suitable treatment or combination of treatments, ensuring that we explain in detail the procedures involved and how they will address the concerns that you have over time. You will be able to take home details of your bespoke plan.</p>
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default ContactPersonalised