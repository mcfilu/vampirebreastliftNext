'use client'
import React from 'react'
import Link from 'next/link'
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

const BreastLiftVideo = () => {
  return (
    <div className={`bg- flex flex-col items-center justify-center w-full md:p-[2vh] md:py-0 md:pr-0 `}>
      {/* <p className={`text-gold1 text-[5vh] text-center`}>Vampire Breastlift Explained</p>
      <div className={`w-[41%] h-[40vh] shadow-[0px_0px_50px_20px_#744210] mt-[6vh]`} > 
      <iframe className={`w-full h-full`} src="https://www.youtube.com/embed/WsHXew0UZUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div> */}
      
        <div className={`hidden md:flex`}>
          <div className={`flex flex-row justify-between w-full h-full mt-[2vh]`}>
         
              <div className={`flex flex-col justify-center items-center w-[55%] h-full md:p-[2vh]`}>
                <p className={`text-gold1 text-[5vh] text-center font-header`}>Vampire Breastlift Explained</p>
                  <p className={`text-white text-left text-[2.5vh] mt-[7vh] md:pb-[5vh] font-main`}>We warmly invite you to watch a detailed video where Dr. Sherif Wakil, a highly respected expert in the field, carefully explains every part of the treatment process. In this video, Dr. Wakil breaks down the procedure into simple steps, using easy-to-understand language that makes the complex treatment procedure more accessible to everyone. This is an excellent opportunity to learn more about the procedure from an acknowledged authority in the field.</p>
                  <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px] font-main`}>Book Consultation</button></Link>
              </div>
              <div className={`flex items-center justify-end w-[45%]   overflow-hidden`}> 
                  
                  {/* <iframe width="90%" height="100%" src="https://www.youtube.com/embed/EbBj4Hitfyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                  {/* <iframe className={`w-[100%] h-full`} src="https://www.youtube.com/embed/WsHXew0UZUQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                  <LiteYouTubeEmbed
                  className={`w-full h-full`}
                  wrapperClass=""
                  id="WsHXew0UZUQ"
                  title="o-concept-video"
                />
              </div>

              
          </div>
        </div>
        <div className={`flex flex-col md:hidden items-center`}>
          <p className={`text-gold1 text-[4.5vh] text-center font-header`}>Vampire Breastlift Explained</p>
          {/* <iframe className={`w-[100%] h-[25vh] md:h-[100%]`} src="https://www.youtube.com/embed/WsHXew0UZUQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
          <LiteYouTubeEmbed
                  className={`w-full h-full`}
                  wrapperClass=""
                  id="WsHXew0UZUQ"
                  title="o-concept-video"
                />
          <p className={`text-white text-left text-[2.2vh] mt-[3vh] pl-[1vh] font-main`}>We warmly invite you to watch a detailed video where Dr. Sherif Wakil, a highly respected expert in the field, carefully explains every part of the treatment process. In this video, Dr. Wakil breaks down the procedure into simple steps, using easy-to-understand language that makes the complex treatment procedure more accessible to everyone. This is an excellent opportunity to learn more about the procedure from an acknowledged authority in the field.</p>
          <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px] font-main`}>Book Consultation</button></Link>
        </div>
        
       
        {/* <div className={`flex items-center justify-center bg-black bg-opacity-50 rounded-[9px] h-full w-[45%] p-[2vh]`}>
            <p className={`text-[3vh] text-center text-gold1`}>We warmly invite you to watch a detailed video where Dr. Sherif Wakil, a highly respected expert in the field, carefully explains every part of the treatment process</p>
        </div>
        <div className={`flex items-center justify-center h-full w-[50%] ml-[4vh]`}> */}
            
        {/* </div> */}
    </div>
  )
}

export default BreastLiftVideo