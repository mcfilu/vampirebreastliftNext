import React from 'react'
import boobs10 from '../../public/boobs10.png'
import Link from 'next/link'
import Image from 'next/image'

const FatBenefits = () => {
  return (

    <div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
        <div className={`hidden md:flex w-[45%]  flex  relative`}>
            {/* <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs10}></Image>
        </div>
        <div className={`hidden md:flex flex flex-col w-[55%] p-[2vh]  items-center `}>
            <h2 className={`text-gold1 text-[5vh] text-center font-header`}>Breast Fat Enlargement Benefits</h2>
            <p className={`text-white font-main text-[2.1vh] text-justify mt-[3vh] mb-[2vh]`}>The goal of Breast Enlargement with Fat is to enhance the size and shape of the breasts using the patient's own fat. It promotes a natural-looking enlargement while also refining the overall silhouette of the body. According to client reports, benefits of the procedure include:</p>
            <ul className={`text-white text-[2.1vh] font-main w-full items-left `}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Naturally fuller, proportionate breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Enhanced contour and cleavage</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved symmetry between breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Smoother skin texture</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Utilization of body's own fat, offering a natural and organic solution</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Increased self-confidence and body image satisfaction</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h2 className={`text-gold1 text-[5vh] text-center font-header`}>Breast Fat Enlargement Benefits</h2>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <div className={`flex w-full h-[30vh] relative`}> 
        <Image src={boobs10} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
      </div>
      <p className={`text-white font-main text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh]`}>The goal of Breast Enlargement with Fat is to enhance the size and shape of the breasts using the patient's own fat. It promotes a natural-looking enlargement while also refining the overall silhouette of the body. According to client reports, benefits of the procedure include:</p>
            <ul className={`text-white text-[2.1vh] font-main pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Naturally fuller, proportionate breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Enhanced contour and cleavage</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved symmetry between breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Smoother skin texture</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Utilization of body's own fat, offering a natural and organic solution</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Increased self-confidence and body image satisfaction</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>
      </div>
    
    </div>
  )
}

export default FatBenefits