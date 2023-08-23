import React from 'react'
// import { sherif_hands } from '../assets'
import Image from 'next/image'
import sherif_hands from '../../public/sherif_hands.jpeg'

const WakilOpening = () => {
  return (
    <div className={`flex w-full flex-row md:min-h-[55vh]  md:p-[2vh] md:pl-[0px]`}>
        <div className={`hidden md:flex w-[45%]  flex items-center relative`}>
            {/* <video src={BloodCells} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video> */}
            <Image  src={sherif_hands} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
        </div>
        <div className={`hidden md:flex w-[55%] h-[100%]  p-[2vh] flex flex-col items-left justify-between `}>
            <div className={` flex flex-col w-[100%]  bg-opacity-40  items-center justify-center my-auto`}>
            {/* <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-left text-[1.3vw]`}></i> */}
            <p className={`flex  text-[5vh] text-left text-gold1  font-header`}>Dr Sherif Wakil</p>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>Having degrees in both medicine and the arts, Dr Wakil applies a philosophy to his practice that creating beauty is art. With his keen personal interest in art and sculpting, he can deliver more natural-looking results, so individuals do not look overdone and fake.</p>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>This is the reason why patients travel from around to world to see him. He believes in only offering treatments which are safe, effective and minimally invasive to achieve the desired natural, yet enhanced, look. He also understands that each patient is an individual and carefully tailors his treatments accordingly.</p>
                <p className={`flex text-white text-[2.5vh] text-left text-gold1 mt-[2vh] font-main`}>He is a registered doctor with the General Medical Council (GMC), a Fellow of the International College of Surgeons, a Member of the American Cosmetic Cellular Medicine Association, the British College of Aesthetic Medicine (BCAM) and the British Association of Body Sculpting (BABS), as well as President and Founder of the International Association of Aesthetic Gynaecology and Sexual Wellbeing (IAAGSW).</p>
                {/* <i className={`fa-solid fa-quote-right mr-[0.9vw] text-left text-gold1 text-[5vh] md:text-[1.3vw] mt-[2vh]`}></i> */}
                
            </div>
            
        </div>
        
        


        <div className={`md:hidden flex flex-col w-full items-center `}>
        <p className={`flex text-[4.5vh] text-gold1 mt-[2vh] font-header`}>Dr. Sherif Wakil</p>
            {/* <Image className={`w-full h-full object-cover `} src={sherif_hands} href="Dr Sherif Wakil opening image in his office in London" object-fit="cover" fill={true}></Image> */}
            <div className={`flex w-full h-[30vh] relative`}>
            <Image  objectFit="cover" objectPosition="center" fill="true" alt="" src={sherif_hands}></Image>
            </div>
            
            {/* <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-left text-[4vh] mt-[1vh]`}></i> */}
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh] text-gold1 mt-[2vh] font-main`}>Having degrees in both medicine and the arts, Dr Wakil applies a philosophy to his practice that creating beauty is art. With his keen personal interest in art and sculpting, he can deliver more natural-looking results, so individuals do not look overdone and fake.</p>
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh] mt-[2vh] text-gold1 mt-[2vh] font-main`}>This is the reason why patients travel from around to world to see him. He believes in only offering treatments which are safe, effective and minimally invasive to achieve the desired natural, yet enhanced, look. He also understands that each patient is an individual and carefully tailors his treatments accordingly.</p>
            <p className={`flex text-white text-[2.2vh] text-left ml-[1vh] mt-[2vh] text-gold1 mt-[2vh] font-main`}>He is a registered doctor with the General Medical Council (GMC), a Fellow of the International College of Surgeons, a Member of the American Cosmetic Cellular Medicine Association, the British College of Aesthetic Medicine (BCAM) and the British Association of Body Sculpting (BABS), as well as President and Founder of the International Association of Aesthetic Gynaecology and Sexual Wellbeing (IAAGSW).</p>
            {/* <i className={`fa-solid fa-quote-right mr-[0.9vw] text-left text-gold1 text-[4vh] `}></i> */}
            
            

        </div>
       
        
    
    </div>
  )
}

export default WakilOpening