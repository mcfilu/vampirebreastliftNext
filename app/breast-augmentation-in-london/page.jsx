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

import AugmentationBenefits from './AugmentationBenefits'
import AugmentationCompare from './AugmentationCompare'
import AugmentationDetails from './AugmentationDetails'
import AugmentationFaqs from './AugmentationFaqs'
import AugmentationImage from './AugmentationImage'
import AugmentationOpening from './AugmentationOpening'
import AugmentationServices from './AugmentationServices'
import AugmentationSummary from './AugmentationSummary'
import AugmentationTreated from './AugmentationTreated'
import AugmentationVideo from './AugmentationVideo'

export const metadata = {
  title: 'Breast Augmentation in London | Vampire Breast Lift',
  description : "Enhance your beauty with the best breast augmentation in London at Vampire Breast Lift. Contact us today at +44 (0)20 3006 8459 for a free consultation.",
}

const Augmentation = () => {
  return (
    <div className={`bg- w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div id="augmentation_opening" className={`relative z-0 ` }>

                <AugmentationImage/>

        </div>
        <div className="flex flex-col bg-black" >
        <div className={`flex flex-col justify-center mx-auto w-full`}>
              <div className={`flex  w-full  justify-center mt-20`}>
                <AugmentationOpening/>
              </div>
              <div className={`flex  w-full  items-center justify-center mt-[7vh]`}>
                  <WakilSummary/>
              </div>
              <div className={`flex  w-full  justify-center  mt-[7vh]`}>
                <AugmentationDetails/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <AugmentationBenefits/>
              </div>
              <div className={`flex  w-full  items-center mt-[7vh] `}>
                  <AugmentationTreated/>
              </div>
              <div className={`flex  w-full  items-center  justify-center mt-[7vh]`}>
                  <AugmentationVideo/>
              </div>
              
              <div className={`flex  w-full items-center mt-[7vh]`}>
                  <AugmentationSummary/>
              </div>
              <div className={`flex  w-full md:hidden items-center mt-[7vh]`}>
                  <AugmentationCompare/>
              </div>
              <div className={`flex  w-full  md:hidden items-center mt-[7vh]`}>
                  <AugmentationFaqs/>
              </div>
             
              <div className={`hidden md:flex flex-row w-full h-auto    mt-[7vh] `}>
                <div className={`flex w-1/2 border-r-gold1 border-r-2`}>
                  <AugmentationFaqs/>
                </div>
                <div className={`flex w-1/2`}>
                    <AugmentationCompare/>
                </div>
              </div>
              {/* <div className={`flex  w-full h-auto  justify-center items-center  mt-[7vh] `}>
                  
              </div> */}
              <div className={`flex  w-full  justify-center items-center  mt-[7vh]`}>
                <YoutubeTestimonials/>
              </div>
              <div className={`flex  w-full  justify-center items-center`}>
                  <BookNow/>
              </div>
              
              
              
             
              
              
              <div className={`flex flex-col w-full  mt-[7vh]`}>
                  <TrustPilotSlider/>
              </div>
              
              <div className={`flex  w-full  items-center mt-[7vh]`}>
                  <AugmentationServices/>
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

export default Augmentation