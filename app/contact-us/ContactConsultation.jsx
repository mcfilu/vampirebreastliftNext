import React from 'react'
// import { sherif_consultation} from '../assets'
import sherif_consultation from '../../public/sherif_consultation.jpeg';
import Image from 'next/image';

const ContactConsultation = () => {
  return (
    <div className={`flex w-full flex-row min-h-[60vh]  md:pr-[0px] md:p-[2vh] `}>
        <div className={`hidden md:flex w-[50%] flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={sherif_consultation}></Image>
        </div>
        <div className={`hidden md:flex w-[50%] h-[100%]  px-[2vh] flex flex-col items-left justify-between `}>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[6vh] text-left text-gold1 font-header `}>Consultation Detail</p>
                <p className={`text-white text-left text-[2.1vh] mt-[4vh] font-main`}>You will be given time to take all the information away with you, to think about the treatment options and to book a further consultation with Dr Sherif Wakil, or another member of our medical team. A fee is applicable for consultations with Dr Wakil, which is redeemable against your treatment costs if you are happy to proceed.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>During this consultation, a full medical history and evaluation will be undertaken to further assess your suitability for treatment in more detail, and to discuss a personalised treatment plan to address your skin, face, body, pain, sexual or health concerns. This will include full disclosure of any risks, side effects or potential complications, as well as any downtime you can expect afterwards.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>At all stages, you will be encouraged to ask as many questions as you wish so that you have a full understanding of what is involved in any treatments, and can make an informed decision, providing appropriate consent for treatment.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Delivering safe treatments, which are effective, evidence-based and focused on addressing specific concerns is our priority. To do this, it is important that you understand everything that is involved and the consent process is an important part of your journey, so that we can both feel secure that you are making an informed choice about the treatments you are going to have. We ask that you thoroughly read through treatment information and consent forms before you sign to give consent that you have understood everything.</p>

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
        

        <div className={`md:hidden flex flex-col items-center `}>
            <p className={`flex text-gold text-[6vh] text-center text-gold1 font-header`}>Consultation Detail</p>
            <div className={`flex w-full h-[30vh] relative`}>
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={sherif_consultation}></Image>
            </div>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>You will be given time to take all the information away with you, to think about the treatment options and to book a further consultation with Dr Sherif Wakil, or another member of our medical team. A fee is applicable for consultations with Dr Wakil, which is redeemable against your treatment costs if you are happy to proceed.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>During this consultation, a full medical history and evaluation will be undertaken to further assess your suitability for treatment in more detail, and to discuss a personalised treatment plan to address your skin, face, body, pain, sexual or health concerns. This will include full disclosure of any risks, side effects or potential complications, as well as any downtime you can expect afterwards.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>At all stages, you will be encouraged to ask as many questions as you wish so that you have a full understanding of what is involved in any treatments, and can make an informed decision, providing appropriate consent for treatment.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Delivering safe treatments, which are effective, evidence-based and focused on addressing specific concerns is our priority. To do this, it is important that you understand everything that is involved and the consent process is an important part of your journey, so that we can both feel secure that you are making an informed choice about the treatments you are going to have. We ask that you thoroughly read through treatment information and consent forms before you sign to give consent that you have understood everything.</p>
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default ContactConsultation