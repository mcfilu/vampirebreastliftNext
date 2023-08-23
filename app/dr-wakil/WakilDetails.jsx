import React from 'react'


// import { sherif_standing } from '../assets';
import sherif_standing from '../../public/sherif_standing.jpeg';
import Image from 'next/image';

import '@fortawesome/fontawesome-free/css/all.min.css';

const WakilDetails = () => {
    

  return (
    <div className={`flex w-full flex-row  md:p-[2vh] md:pl-0`}>
        <div className={`hidden md:flex w-[40%] flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            {/* <video src={augmentation_vid} autoPlay loop muted className={`object-cover h-[100%]`}></video> */}
            <Image src={sherif_standing} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
        </div>
        <div className={`hidden md:flex w-[60%] h-[100%] p-[1vh] flex flex-col items-left justify-between ml-[1.5vh]`}>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto`}>
            
                <p className={`flex text-gold text-[5vh] text-center text-gold1  font-header`}>World Renown Specialist</p>
                <p className={`text-white text-left text-[2.1vh] mt-[4vh] font-main`}>He is a pioneer in many treatments and techniques, often being the first to introduce them to the United Kingdom. Of significance is his introduction of The O Concept™ for treating male and female sexual dysfunction. He was also the first practitioner in the UK to introduce the soft surgery approach, including the non-surgical blepharoplasty, as well as Platelet Rich Plasma (PRP) therapies such as the Vampire Facelift™ and the Vampire Breast Lift™. He is also known for his signature treatments, which include the Dr SW Face-Lift and the Organic Face-Lift.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Dr Wakil is at the forefront of the field of sexual aesthetics and aesthetic gynaecology, being one of the first to start offering a broad range of aesthetic treatment solutions to treat both male and female sexual dysfunction, restoring sexual well-being and genital health through his original, bespoke, combination treatment programme – The O Concept™.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Dr Wakil has treated tens of thousands of patients for symptoms related to sexual dysfunction in men and women, which has led him to become an international trainer and speaker, as well as founder of the International Association of Aesthetic Gynaecology and Sexual Well-being (IAAGSW).</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>His thirst for increased knowledge in his field and his drive for perfection, means that Dr Wakil continues to pioneer more treatments at Dr SW Clinics, constantly educating himself by attending congresses and further learning opportunities around the globe.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Innovation and increased scientific research means that more and more regenerative medical and life optimising techniques are available to use as bio-hacking tools to encourage the natural healing and repair qualities of the body, using stem cells, growth factors, hormones and your own blood products to regenerate, rejuvenate, rebuild and restore natural function.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Being at the cutting edge is what Dr Wakil does, which means that he is pioneering a revolutionary life optimisation process which delves deep into how the biology of your own body works, to deliver a bespoke treatment plan to make your life better, optimise your health and refocus your body function through a number of options which can include supplementation, expert dietician devised programmes, prescription and non-prescription medication to manage weight and hormonal imbalances, intravenous nutritional therapies, life coaching, sexual therapy, plus kinetic body movement therapy.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>It is an exciting time, and you can be sure that Dr Sherif Wakil is paving the way with many novel and ground-breaking options for aesthetic and regenerative medical, life optimisation, pain management and sexual health treatments.</p>
                {/* <p className={`text-white text-left text-[2.1vh] mt-[2vh]`}></p> */}
            </div>
            {/* <div className={`flex flex-col w-[100%]  bg-opacity-70 rounded-[9px] my-[1vh]`}>

                <p className={`text-white font-poppins text-[2.1vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face by harnessing the natural healing powers of the human body to repair damaged skin and stimulate new skin cell growth.</p>
                <p className={`text-white font-poppins text-[2.1vh] my-[1vh] text-justify`}>This non-surgical treatment can be used to restore natural health and youthfulness to the skin on the face.</p>
            </div>
            <p className=" h-[6vh] w-[12vw] bg-gold1 text-white text-[2.5vh] bg-opacity-80 rounded-[9px] flex items-center justify-center hover:text-gold1 hover:bg-white"><PopupButton
                url="https://calendly.com/nikekarta2/30min"


                rootElement={document.getElementById("root")}
                text="Book Consultation"
                textColor="#ffffff"
                color="#ffffff"
                /></p> */}
        </div>
        <div className={`md:hidden flex flex-col w-full `}>
            <p className={`flex text-gold text-[5vh] text-center text-gold1 font-header`}>World Renown Specialist</p>
            {/* <video ref={videoRef} src={augmentation_vid} autoPlay loop muted playsInline className={`w-[100%]`}></video> */}
            {/* <Image src={sherif_standing} object-fit="cover" fill={true} className={`w-full h-full object-cover`}></Image> */}
            <div className={`flex w-full h-[60vh] relative`}>
            <Image  objectFit="cover" objectPosition="center" fill="true" alt="" src={sherif_standing}></Image>
            </div>
            <div className={`flex flex-col w-[100%] items-center justify-center my-auto p-[1vh]`}>
            
                
                <p className={`text-white text-left text-[2.1vh] mt-[4vh] font-main`}>He is a pioneer in many treatments and techniques, often being the first to introduce them to the United Kingdom. Of significance is his introduction of The O Concept™ for treating male and female sexual dysfunction. He was also the first practitioner in the UK to introduce the soft surgery approach, including the non-surgical blepharoplasty, as well as Platelet Rich Plasma (PRP) therapies such as the Vampire Facelift™ and the Vampire Breast Lift™. He is also known for his signature treatments, which include the Dr SW Face-Lift and the Organic Face-Lift.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Dr Wakil is at the forefront of the field of sexual aesthetics and aesthetic gynaecology, being one of the first to start offering a broad range of aesthetic treatment solutions to treat both male and female sexual dysfunction, restoring sexual well-being and genital health through his original, bespoke, combination treatment programme – The O Concept™.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Dr Wakil has treated tens of thousands of patients for symptoms related to sexual dysfunction in men and women, which has led him to become an international trainer and speaker, as well as founder of the International Association of Aesthetic Gynaecology and Sexual Well-being (IAAGSW).</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>His thirst for increased knowledge in his field and his drive for perfection, means that Dr Wakil continues to pioneer more treatments at Dr SW Clinics, constantly educating himself by attending congresses and further learning opportunities around the globe.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>Innovation and increased scientific research means that more and more regenerative medical and life optimising techniques are available to use as bio-hacking tools to encourage the natural healing and repair qualities of the body, using stem cells, growth factors, hormones and your own blood products to regenerate, rejuvenate, rebuild and restore natural function.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh]`}>Being at the cutting edge is what Dr Wakil does, which means that he is pioneering a revolutionary life optimisation process which delves deep into how the biology of your own body works, to deliver a bespoke treatment plan to make your life better, optimise your health and refocus your body function through a number of options which can include supplementation, expert dietician devised programmes, prescription and non-prescription medication to manage weight and hormonal imbalances, intravenous nutritional therapies, life coaching, sexual therapy, plus kinetic body movement therapy.</p>
                <p className={`text-white text-left text-[2.1vh] mt-[2vh] font-main`}>It is an exciting time, and you can be sure that Dr Sherif Wakil is paving the way with many novel and ground-breaking options for aesthetic and regenerative medical, life optimisation, pain management and sexual health treatments.</p>
            </div>
        </div>
        
       
        
    
    </div>
  )
}

export default WakilDetails