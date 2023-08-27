import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const ReductionDetails = () => {
  return (
    
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[5vh] text-center font-header`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] font-main`}>Breast reduction surgery, also known as reduction mammoplasty, is a surgical procedure designed to decrease the size of the breasts and improve their shape and proportions.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[5vh]`}>Some women feel very self-conscious about small or under-developed breasts, or if they have asymmetries which means that there are differences between the sizes of each breast, thus they seek a solution to enhance their natural breast. Others would simply like a larger breast size to feel more attractive or look better in clothes.</p> */}
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>During breast reduction surgery, excess breast tissue, fat, and skin are removed to achieve the desired breast size and shape. The surgeon will carefully reshape the remaining breast tissue and reposition the nipple to create a natural and aesthetically pleasing result.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Breast reduction surgery is typically performed to address physical discomfort and improve quality of life, it can also have significant aesthetic benefits. Our experienced surgeon can discuss your specific goals and concerns, tailoring the procedure to give you the size and shape that best suits your desires and enhances your overall well-being.</p>
                {/* <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Breast implants come in a variety of types, sizes, and shapes, all of which will be discussed with our surgeon.Most implants are soft or firm silicone gel filled, but saline options are available.</p> */}
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>It's important to note that breast reduction surgery does not typically involve the use of implants. Instead, the procedure focuses on reducing breast size and reshaping the breasts using your natural breast tissue.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] font-main`}>Ultimately, breast reduction surgery aims to improve your physical comfort, enhance your body proportions, and boost your self-confidence, allowing you to enjoy a more balanced and harmonious breast appearance.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>
            </div>
            
        </div>
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center`}>
            <video src="/augmentation_vid.webm" autoPlay loop muted className={` object-cover w-[100%] h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>

        <div className={`flex flex-col md:hidden items-center`}>
            <p className={`flex text-gold1 text-[6vh] text-center font-header`}>How does it work?</p>
            <video src="/augmentation_vid.webm" autoPlay loop muted playsInline className={` object-cover h-[100%]`}></video>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh] font-main`}>Breast reduction surgery, also known as reduction mammoplasty, is a surgical procedure designed to decrease the size of the breasts and improve their shape and proportions.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>During breast reduction surgery, excess breast tissue, fat, and skin are removed to achieve the desired breast size and shape. The surgeon will carefully reshape the remaining breast tissue and reposition the nipple to create a natural and aesthetically pleasing result.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Breast reduction surgery is typically performed to address physical discomfort and improve quality of life, it can also have significant aesthetic benefits. Our experienced surgeon can discuss your specific goals and concerns, tailoring the procedure to give you the size and shape that best suits your desires and enhances your overall well-being.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>It's important to note that breast reduction surgery does not typically involve the use of implants. Instead, the procedure focuses on reducing breast size and reshaping the breasts using your natural breast tissue.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh] font-main`}>Ultimately, breast reduction surgery aims to improve your physical comfort, enhance your body proportions, and boost your self-confidence, allowing you to enjoy a more balanced and harmonious breast appearance.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default ReductionDetails