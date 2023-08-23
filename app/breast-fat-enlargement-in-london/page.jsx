import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookNow from './components/BookNow'
import Awards from './components/Awards'
import Media from './components/Media'
import YoutubeTestimonials from './components/YoutubeTestimonials'
import WakilSummary from './components/WakilSummary'
import TrustPilotSlider from './components/TrustPilotSlider'
import FooterBook from './components/FooterBook'


import FatBenefits from './FatBenefits'
import FatCompare from './FatCompare'
import FatDetails from './FatDetails'
import FatFaqs from './FatFaqs'
import FatImage from './FatImage'
import FatOpening from './FatOpening'
import FatServices from './FatServices'
import FatSummary from './FatSummary'
import FatTreated from './FatTreated'
import FatVideo from './FatVideo'


export const metadata = {
  title: 'Breast Fat Enlargement in London | Vampire Breast Lift',
  description : "Get the best breast fat enlargement in London at Vampire Breast Lift with Dr. Sherif Wakil. Call us at +44 (0)20 3006 8459 for a free consultation.",
}

const Fat = () => {
  return (
    <div className={`bg- w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>

                <FatImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div id="fat_opening" className={`flex  w-full  justify-center mt-20`}>
                <FatOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <FatDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <FatBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <FatTreated/>
              </div>
              
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <FatVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <FatSummary/>
              </div>
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <FatCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <FatFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <FatFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <FatCompare/>
                </div>
              </div>
              {/* <div className={`flex  w-full h-auto  justify-center items-center  mt-[7vh] `}>
                  
              </div> */}
              <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full  justify-center items-center `}>
                  <BookNow/>
              </div>
              
              
              
             
              
              
              <div className={`flex flex-col w-full  mt-[7vh]`}>
                  <TrustPilotSlider/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <FatServices/>
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

export default Fat