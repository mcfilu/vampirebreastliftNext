
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
// import { useEffect, useRef } from 'react';

const BreastLiftDetails = () => {
    // useEffect(() => {
    //     const video = document.querySelector("video");

    //     function handleIntersection(entries) {
    //     entries.map(async (entry) => {
    //         if (entry.isIntersecting) {
    //         const res = await fetch("/blood_cells_desktop.mp4");
    //         const data = await res.blob();
    //         video.src = URL.createObjectURL(data);
    //         }
    //     });
    //     }

    //     const observer = new IntersectionObserver(handleIntersection);
    //     observer.observe(video);
    // }, [])
  return (
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does the Vampire Breast Lift™ work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>Through utilising regenerative growth factors derived from your own blood, our UK non-surgical breast lift offers a remarkable solution to enhance cleavage and restore lost volume in the upper breast area, achieving a more pronounced and captivating appearance.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Vampire Treatments, also known as PRP or Platelet Rich Plasma Rejuvenation, have garnered significant attention as one of the most sought-after rejuvenation procedures in recent years. Harnessing the body's innate healing and regenerative capabilities, this groundbreaking technique effectively combats facial aging while lifting and enhancing the breasts, earning acclaim among celebrities.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>As the sole UK doctor and the exclusive European practitioner certified by the inventor of Vampire treatments, and listed on the official Vampire Facelift™ website, Dr. Wakil stands as a leading authority in this pioneering methodology.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The procedure involves obtaining a small blood sample, which is then processed in a centrifuge to extract Platelet Rich Plasma (PRP). This concentrated plasma, abundant in growth factors that facilitate rejuvenation and regeneration, is skilfully injected into the targeted area, specifically the breasts in this case. This is where the name “PRP breast enhancement” comes from.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main w-full text-left`}>Continue reading to discover our Vampire Breast Lift™ UK cost.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalisation and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[2vh] font-main`}>Book Consultation</button></Link>
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
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center`}>

            <video src="/blood_cells_desktop.mp4" autoPlay loop muted className={` object-cover w-[100%] h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>

        <div className={`flex flex-col md:hidden items-center`}>
            <p className={`flex text-gold1 text-[6vh] text-center font-header`}>How does the Vampire Breast Lift™ work?</p>
            <div className={`flex w-full h-[35vh]`}>
                <video src="/blood_cells_mobile.mp4" autoPlay loop muted playsInline className={` object-cover h-full w-full`}></video>
            </div>
            
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>Through utilising regenerative growth factors derived from your own blood, our UK non-surgical breast lift offers a remarkable solution to enhance cleavage and restore lost volume in the upper breast area, achieving a more pronounced and captivating appearance.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Vampire Treatments, also known as PRP or Platelet Rich Plasma Rejuvenation, have garnered significant attention as one of the most sought-after rejuvenation procedures in recent years. Harnessing the body's innate healing and regenerative capabilities, this groundbreaking technique effectively combats facial aging while lifting and enhancing the breasts, earning acclaim among celebrities.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>As the sole UK doctor and the exclusive European practitioner certified by the inventor of Vampire treatments, and listed on the official Vampire Facelift™ website, Dr. Wakil stands as a leading authority in this pioneering methodology.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The procedure involves obtaining a small blood sample, which is then processed in a centrifuge to extract Platelet Rich Plasma (PRP). This concentrated plasma, abundant in growth factors that facilitate rejuvenation and regeneration, is skilfully injected into the targeted area, specifically the breasts in this case. This is where the name “PRP breast enhancement” comes from.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main w-full text-left`}>Continue reading to discover our Vampire Breast Lift™ UK cost.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>The PRP contains a large concentration of growth factors, crucial cells responsible for revitalisation and renewal in our bodies, making it a potent and natural approach to rejuvenation.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default BreastLiftDetails