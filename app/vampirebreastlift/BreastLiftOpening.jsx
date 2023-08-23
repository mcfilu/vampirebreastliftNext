import React from 'react'
import sherif_new from '../../public/sherif_new.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';

const BreastLiftOpening = () => {
  return (
    <div className={`flex w-full flex-row md:min-h-[55vh]  md:p-[2vh] md:pl-[0px]`}>
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={sherif_new} ></Image>
        </div>
        <div className={`hidden md:flex w-[55%] h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={` flex flex-col w-[100%]  bg-opacity-40  items-center justify-center my-auto`}>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[1.3vw]`}></i>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>Discover the extraordinary Vampire Breast Lift™, an innovative and pioneering breakthrough in non-surgical breast enhancements. This exceptional procedure harnesses the power of your body's own growth factors to delicately enhance and revitalize the breasts, gracefully improving their shape and volume without resorting to conventional surgery or implants. </p>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[5vh] md:text-[1.3vw] mt-[2vh]`}></i>
                <p className={`flex  text-[4.5vh] text-center font-header text-gold1 mt-[5vh]`}>Dr. Sherif Wakil</p>
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
        


        <div className={`md:hidden flex flex-col w-full items-center`}>
        <p className={`flex text-[4.5vh] font-header text-gold1 mt-[2vh]`}>Dr. Sherif Wakil</p>
            <div className={`flex w-full h-[30vh] relative`}>
                <Image  objectFit="cover" objectPosition="center" fill="true" alt="" src={sherif_new} ></Image>
            </div>
            
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-center text-[4vh] mt-[1vh]`}></i>
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh] text-gold1 `}>The Vampire Breast Lift™ represents an exciting and groundbreaking innovation in the realm of non-surgical breast enhancements. This procedure, as intriguing as its name implies, utilizes your body's natural growth factors to subtly augment and rejuvenate the appearance of the breasts, improving their shape and volume without the need for traditional surgery or implants.</p>
            <i className={`fa-solid fa-quote-right mr-[0.9vw] text-center text-gold1 text-[4vh] `}></i>
            
            

        </div>
       
        
    
    </div>
  )
}

export default BreastLiftOpening