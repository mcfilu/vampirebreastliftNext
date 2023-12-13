import React from 'react'
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookNow from './components/BookNow'
import Awards from './components/Awards'
import Media from './components/Media'
import YoutubeTestimonials from './components/YoutubeTestimonials'
import WakilSummary from './components/WakilSummary'
import TrustPilotSlider from './components/TrustPilotSlider'
import FooterBook from './components/FooterBook'
import OtherServices from './components/OtherServices'

import BreastLiftBenefits from './vampirebreastlift/BreastLiftBenefits'
// import BreastLiftDetails from './vampirebreastlift/BreastLiftDetails'
import BreastLiftOpening from './vampirebreastlift/BreastLiftOpening'
import BreastLiftSummary from './vampirebreastlift/BreastLiftSummary'
import BreastLiftTreated from './vampirebreastlift/BreastLiftTreated'
import BreastLiftVideo from './vampirebreastlift/BreastLiftVideo'
import BreastliftFaqs from './vampirebreastlift/BreastliftFaqs'
import BreastliftImage from './vampirebreastlift/BreastliftImage'
import BreastliftCompare from './vampirebreastlift/BreastliftCompare'

const BreastLiftDetails = dynamic(() => import('./vampirebreastlift/BreastLiftDetails'))

export const metadata = {
  title: 'Vampire Breast Lift™ | Non Surgical Breast Lift UK | PRP Breast Lift',
  description : "Get the best non-surgical breast lift in London, UK with the Vampire Breast Lift by Dr. Sherif Wakil. Call us at +44 (0)20 3006 8459 for a natural breast lift",
}

const VampireBreastLift = () => {
  
  return (
    <div className={`w-full`}>
      
        <div className={`w-full fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <BreastliftImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="breastlift_opening" className={`flex  w-full  justify-center mt-20`}>
                <BreastLiftOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <BreastLiftDetails/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <BreastLiftBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <BreastLiftTreated/>
              </div>
             
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <BreastLiftVideo/>
              </div>
              
              <div className={`flex  w-full bg-black  items-center mt-[7vh]`}>
                  <BreastLiftSummary/>
              </div>
              
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <BreastliftCompare/>
              </div>
              
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <BreastliftFaqs/>
              </div>

             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <BreastliftFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <BreastliftCompare/>
                </div>
              </div>

              
              <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full  justify-center items-center  `}>
                  <BookNow/>
              </div>
              
              
              
             
              
              
              <div className={`flex flex-col w-full  mt-[7vh]`}>
                  <TrustPilotSlider/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <OtherServices/>
              </div>
              <div className={`flex flex-col  justify-center  my-[7vh]`}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[2vh]`}>
                        <Awards/>
                    </div>
                </div>
              

          </div>
        </div>
        
        <div className={`relative z-0 ` }>
          <Footer/>
        </div>
    </div>
  )
}

export default VampireBreastLift