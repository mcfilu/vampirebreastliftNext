import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Media from '../components/Media'
import Awards from '../components/Awards'
import BookNow from '../components/BookNow'
import FooterBook from '../components/FooterBook'
import OtherServices from '../components/OtherServices'
import OtherServices2 from './OtherServices2'


const OtherTreatments = () => {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>
            {/* <Contact2/> */}
        </div>
        <div className="flex flex-col bg-black pt-[15vh] md:pt-[15vh] pb-[8vh]" >
            <div className={`flex flex-col justify-center`}>
              <div className={`flex flex-col w-full  justify-center items-center`} >                
                  <OtherServices/>
              </div>
              <div className={`flex flex-col w-full  justify-center items-center mt-[10vh]`} >
                <div className={`flex items-center justify-center w-full mb-[2vh]`}>
                  <h2 className={`text-gold1 text-center text-[5vh] font-header`}>Find Out about other Treatments of Dr Sherif Wakil</h2>
                </div>
                  <OtherServices2/>
              </div>
              <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <BookNow/>
              </div>
              <div className={`flex flex-col justify-center mt-[10vh]`}>
                    <div>
                        <Media/>
                    </div>
                    
                    <div className={`mt-[8vh]`}>
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

export default OtherTreatments