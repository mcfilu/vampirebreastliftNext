import React from 'react'
// import { InlineWidget } from 'react-calendly'
// import { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Link from 'next/link'


const BookNow = () => {

    // let hasRun = false;
    // const widthPercentage = 0;
    // function calculateViewportPercentage() {
    // if (hasRun) return;
    
    // const viewportWidth = window.innerWidth;
    // const viewportHeight = window.innerHeight;

    // const widthPercentage = viewportWidth * 0.6;
    // const heightPercentage = viewportHeight * 0.5;
    // widthPercentage = widthPercentage + "px";
    // heightPercentage = heightPercentage + "px";

    // console.log(`Width: ${widthPercentage}, Height: ${heightPercentage}`);
    
    // hasRun = true;
    // }


  return (
    
        <div className={`flex bg-black flex-row items-center justify-between  w-full md:h-[30vh]  p-[4vh] `} >
            <div className={`flex flex-col md:flex-row justify-center items-center w-full `}>

            
                {/* <div className={`   flex flex-col h-full justify-center items-left  p-[1vh] `}>
                    <h1 className={`text-gold1 font-header mt-8 text-[6vh] text-center`}>Book a Consultation</h1>
                    <h1 className={`text-gold1 font-main mt-8 text-[2.5vh] text-center w-9/12 mx-auto`}>To request a consultation with Dr Sherif Wakil MD FACS please complete this form.</h1>
                </div> */}
                <Link href='/book-now'><button className={`md:w-[30vw] text-[4vh] p-[1vh] font-main bg-black border-gold1 border-4 text-gold1 hover:bg-white mt-[5vh] md:mt-[0px]`}>Book Now</button></Link>
            </div>
            {/* <div style={{position: "relative", minWidth: "1320px", minHeight: "750px"}} className={`flex`}>
            <iframe
                src="https://calendly.com/nikekarta2/30min"
                width="100%"
                height="100%"
                frameborder="0"
            ></iframe> */}
                {/* <InlineWidget url="https://calendly.com/drswclinics/" 
                    utm={{
                    utmCampaign: 'Spring Sale 2019',
                    utmContent: 'Shoe and Shirts',
                    utmMedium: 'Ad',
                    utmSource: 'Facebook',
                    utmTerm: 'Spring'
                    }} 
                    styles={{
                        height: "80vh", width: "60vw",
                    }} 
                    pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '000000',
                    textColor: '000000'
                    }}
                /> */}
                {/* <div
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/nikekarta2/30min"
                    style={{position: "relative", minWidth: "320px", height: "750px"}}
                    data-processed="true"
                /> */}
            {/* </div> */}
        </div>
    
  )
}

export default BookNow