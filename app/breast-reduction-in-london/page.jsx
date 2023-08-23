import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookNow from '../components/BookNow'
import Awards from '../components/Awards'
import Media from '../components/Media'
import YoutubeTestimonials from '../components/YoutubeTestimonials'
import WakilSummary from '../components/WakilSummary'
import TrustPilotSlider from '../components/TrustPilotSlider'
import FooterBook from '../components/FooterBook'


import ReductionBenefits from './ReductionBenefits'
import ReductionCompare from './ReductionCompare'
import ReductionDetails from './ReductionDetails'
import ReductionFaqs from './ReductionFaqs'
import ReductionImage from './ReductionImage'
import ReductionOpening from './ReductionOpening'
import ReductionServices from './ReductionServices'
import ReductionSummary from './ReductionSummary'
import ReductionTreated from './ReductionTreated'
import ReductionVideo from './ReductionVideo'


export const metadata = {
  title: 'Breast Reduction in London | Vampire Breast Lift',
  description : "Get the best breast reduction in London at Vampire Breast Lift with Dr. Sherif Wakil. Call us now at +44 (0)20 3006 8459 for a free consultation.",
}

const Reduction = () => {
  return (
    <div className={`bg- w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div id="reduction_opening" className={`relative z-0 ` }>

                <ReductionImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              {/* <div className={`flex  w-full  justify-center mt-20`}>
                <ReductionOpening/>
              </div> */}
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <ReductionDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <ReductionBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <ReductionTreated/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <ReductionVideo/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <ReductionSummary/>
              </div>
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <ReductionCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <ReductionFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <ReductionFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <ReductionCompare/>
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
                  <ReductionServices/>
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

export default Reduction