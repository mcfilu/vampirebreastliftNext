import React from 'react'
import boobs10 from '../../public/boobs10.png'
import Link from 'next/link'
import Image from 'next/image'

const AugmentationBenefits = () => {
  return (
//     <div className={`flex w-11/12 flex-row bg-black bg-opacity-20 ml-[4%] mr-[4%] h-[55vh] rounded-[9px] p-[2vh] hover:bg-opacity-30 hover:shadow-[0px_0px_50px_10px_#744210] hover:ease-in-out duration-500`}>
//         <div className={`w-1/2 h-[100%] flex items-center`}>
//             <video src={augmentation_vid} autoPlay loop muted className={`rounded-[9px] object-cover h-[100%]`}></video>
//         </div>
//         <div className={`flex flex-col w-1/2 p-[3vh] bg-black bg-opacity-70 rounded-[9px] ml-[0.8vw]`}>
//             <h1 className={`text-gold1 text-[4vh] text-center font-poppins`}>Breast Augmentation Benefits</h1>
//             <p className={`text-white font-poppins text-[1.7vh] text-justify mt-[2.5vh] mb-[1vh]`}>The primary objective of a breast augmentation procedure is to enhance the size and shape of the breasts, creating a more balanced, symmetrical figure. Based on feedback from patients, the benefits of this surgery can include:

// </p>
//             <ul className={`text-white text-[1.7vh] font-poppins `}>
//                 <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Fuller, more voluminous breasts</li>
//                 <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Achieve a well-defined, more pronounced bustline</li>
//                 <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved symmetry between breasts</li>
//                 <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Restoration of breast volume lost after pregnancy or weight loss</li>
//                 <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Reduction in the appearance of 'sagging' or drooping breasts</li>
//                 <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved self-esteem and body image</li>
//             </ul>
//         </div>
    
//     </div>
<div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
<div className={`hidden md:flex w-[45%]  flex  relative`}>
    {/* <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
    <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs10}></Image>
</div>
<div className={`hidden md:flex flex flex-col w-[55%] p-[2vh]  items-center `}>
    <h1 className={`text-gold1 text-[5vh] text-center font-header`}>Breast Augmentation Benefits</h1>
    <p className={`text-white font-main text-[2.1vh] text-justify mt-[3vh] mb-[2vh]`}>The primary objective of a breast augmentation procedure is to enhance the size and shape of the breasts, creating a more balanced, symmetrical figure. Based on feedback from patients, the benefits of this surgery can include:</p>
    <ul className={`text-white text-[2.1vh] font-main w-full items-left`}>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Fuller, more voluminous breasts</li>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Achieve a well-defined, more pronounced bustline</li>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved symmetry between breasts</li>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Restoration of breast volume lost after pregnancy or weight loss</li>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Reduction in the appearance of 'sagging' or drooping breasts</li>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved self-esteem and body image</li>
    </ul>
    <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh]`}>Book Consultation</button></Link>
</div>


<div className={`md:hidden flex flex-col items-center`}>
<h1 className={`text-gold1 text-[5vh] text-center font-header`}>Breast Augmentation Benefits</h1>
{/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
<div className={`flex w-full h-[30vh] relative`}> 
        <Image src={boobs10} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
      </div>
<p className={`text-white font-main text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh]`}>The primary objective of a breast augmentation procedure is to enhance the size and shape of the breasts, creating a more balanced, symmetrical figure. Based on feedback from patients, the benefits of this surgery can include:</p>
    <ul className={`text-white text-[2.1vh] font-main pl-[1vh]`}>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Fuller, more voluminous breasts</li>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Achieve a well-defined, more pronounced bustline</li>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved symmetry between breasts</li>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Restoration of breast volume lost after pregnancy or weight loss</li>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Reduction in the appearance of 'sagging' or drooping breasts</li>
        <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved self-esteem and body image</li>
    </ul>
    <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh]`}>Book Consultation</button></Link>
</div>

</div>
  )
}

export default AugmentationBenefits