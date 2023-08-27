import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';


const AugmentationDetails = () => {
  return (
    
    // </div>
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>Breast augmentation, also known as breast enlargement surgery, involves the use of breast implants to increase breast size and enhance shape. The implants are typically placed either under the breast tissue or under the chest muscle, utilizing silicone implants.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[5vh]`}>Some women feel very self-conscious about small or under-developed breasts, or if they have asymmetries which means that there are differences between the sizes of each breast, thus they seek a solution to enhance their natural breast. Others would simply like a larger breast size to feel more attractive or look better in clothes.</p> */}
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Breast implant surgery is colloquially called a ‘boob job’ and is one of the most performed cosmetic surgery procedures.</p> */}
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Referred to informally as a "boob job," breast implant surgery is a highly popular cosmetic procedure. However, it is seldom available through the NHS, except for medical cases such as severe asymmetry or breast malformation. If funded, breast enlargement is a more general option, but our surgeon can personalize the procedure to achieve your desired size and shape.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>During the consultation, our surgeon will discuss various options regarding implant types, sizes, and shapes. Most implants are filled with soft or firm silicone gel, though saline alternatives are also available.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>You have the freedom to choose the desired appearance of your new breasts, including shape and projection. This allows for a natural drooping effect with less projection at the top or increased volume at the top for a more rounded appearance in low-cut clothing. The appearance of your cleavage is also taken into consideration. Implant options include round or tear-drop shaped implants with low or high-profile projections, empowering you to shape your breasts according to your desired outcome.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>It's important to note that breast implants are not permanent and typically require future surgery for replacement within 10-15 years. Many women select different implant types based on factors such as age, lifestyle, and the desired aesthetic look they wish to achieve at that particular time.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh]`}>Book Consultation</button></Link>
            </div>
           
        </div>
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center`}>
            <video src="/augmentation_vid.webm" autoPlay loop muted className={` object-cover w-[100%] h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>

        <div className={`flex flex-col md:hidden items-center`}>
            <p className={`flex text-gold1 text-[6vh] text-center font-header`}>How does it work?</p>
            <video src="/augmentation_vid.webm" autoPlay loop muted playsInline className={` object-cover h-[100%]`}></video>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>Breast augmentation, also known as breast enlargement surgery, involves the use of breast implants to increase breast size and enhance shape. The implants are typically placed either under the breast tissue or under the chest muscle, utilizing silicone implants.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Referred to informally as a "boob job," breast implant surgery is a highly popular cosmetic procedure. However, it is seldom available through the NHS, except for medical cases such as severe asymmetry or breast malformation. If funded, breast enlargement is a more general option, but our surgeon can personalize the procedure to achieve your desired size and shape.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>During the consultation, our surgeon will discuss various options regarding implant types, sizes, and shapes. Most implants are filled with soft or firm silicone gel, though saline alternatives are also available.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>You have the freedom to choose the desired appearance of your new breasts, including shape and projection. This allows for a natural drooping effect with less projection at the top or increased volume at the top for a more rounded appearance in low-cut clothing. The appearance of your cleavage is also taken into consideration. Implant options include round or tear-drop shaped implants with low or high-profile projections, empowering you to shape your breasts according to your desired outcome.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>It's important to note that breast implants are not permanent and typically require future surgery for replacement within 10-15 years. Many women select different implant types based on factors such as age, lifestyle, and the desired aesthetic look they wish to achieve at that particular time.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh]`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default AugmentationDetails