import React from 'react'
import boobs10 from '../../public/boobs10.png'
import Link from 'next/link'
import Image from 'next/image'

const ReductionBenefits = () => {
  return (

    <div className={`flex w-full flex-row  md:min-h-[55vh]   `}>
        <div className={`hidden md:flex w-[45%]  flex  relative`}>
            {/* <video src={breastliftvideo} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
            <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs10}></Image>
        </div>
        <div className={`hidden md:flex flex flex-col w-[55%] p-[2vh] items-center  `}>
            <h2 className={`text-gold1 text-[5vh] text-center font-header`}>Breast Reduction Benefits</h2>
            <p className={`text-white font-main text-[2.1vh] text-justify mt-[3vh] mb-[2vh]`}>
Experience a transformation with Breast Reduction, a surgical procedure designed to alleviate physical discomfort and enhance your natural contours. This innovative technique reduces breast size, relieving the strain on your back, neck, and shoulders while improving your overall body proportions. Benefit from a shapelier, more balanced silhouette and a newfound sense of confidence as you embrace a more comfortable and harmonious lifestyle. Discover the positive effects of this procedure as reported by our satisfied clients:</p>
            <ul className={`w-full text-white text-[2.1vh] font-main items-left`}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Balanced, well-proportioned breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Relief from physical discomfort</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved posture and reduction in skin irritations</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Better fitting clothing and expanded wardrobe choices</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Enhanced self-esteem and confidence</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Increase in physical activity comfort and overall quality of life</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>
        </div>
        

      <div className={`md:hidden flex flex-col items-center`}>
      <h2 className={`text-gold1 text-[5vh] text-center font-header`}>Breast Reduction Benefits</h2>
      {/* <video src={boobs10} autoPlay loop muted className={` object-cover h-[100%] w-[100%]`}></video> */}
      <div className={`flex w-full h-[30vh] relative`}> 
        <Image src={boobs10} objectFit="cover" objectPosition="center" fill="true" alt=""></Image>
      </div>
      <p className={`text-white font-main text-[2.1vh] text-left pl-[1vh] mt-[3vh] mb-[2vh]`}>
Experience a transformation with Breast Reduction, a surgical procedure designed to alleviate physical discomfort and enhance your natural contours. This innovative technique reduces breast size, relieving the strain on your back, neck, and shoulders while improving your overall body proportions. Benefit from a shapelier, more balanced silhouette and a newfound sense of confidence as you embrace a more comfortable and harmonious lifestyle. Discover the positive effects of this procedure as reported by our satisfied clients:</p>
            <ul className={`text-white text-[2.1vh] font-main pl-[1vh]`}>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Balanced, well-proportioned breasts</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Relief from physical discomfort</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Improved posture and reduction in skin irritations</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Better fitting clothing and expanded wardrobe choices</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Enhanced self-esteem and confidence</li>
                <li className={`flex items-center mt-[1vh]`}><i class="" className={`text-gold1 mr-4 fa-solid fa-circle text-[1.6vh]`}></i>Increase in physical activity comfort and overall quality of life</li>
            </ul>
            <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>
      </div>
    
    </div>
  )
}

export default ReductionBenefits