import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactMap from '../components/ContactMap'
// import Contact2 from '../components/Contact2'
import BookNow from '../components/BookNow'
import Media from '../components/Media'
import Awards from '../components/Awards'

import WakilClinic from '../components/WakilClinic'
import FooterBook from '../components/FooterBook'
import ContactImage from '../components/ContactImage'
import ContactAftercare from '../components/ContactAftercare'
import ContactTreatment from '../components/ContactTreatment'
import ContactConsultation from '../components/ContactConsultation'
import ContactBooking from '../components/ContactBooking'
import ContactPersonalised from '../components/ContactPersonalised'
import ContactOpening from '../components/ContactOpening'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <div className={`bg-primary w-full`}>
        <Helmet>
            <title>Contact P-Shot | Sexual Aesthetics Doctor in UK</title>
            <meta name='description' content="Enhance sexual aesthetics with P-Shot! Contact our UK-based doctor for sexual treatments. Reclaim your confidence and satisfaction today. Call +44 (0)20 3006 8459." />
        </Helmet>

        <div className={`fixed z-10 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>
            <ContactImage/>
        </div>
        <div className="flex flex-col bg-black " >
            <div className={`flex flex-col justify-center `}>
              {/* <div className={`flex  w-full justify-center items-center`} >
                  <ContactOpening/>
              </div> */}
              <div className={`flex  w-full justify-center items-center mt-[8vh]`} >
                  <ContactMap/>
              </div>
              <div className={`flex  w-full justify-center items-center mt-[4vh]`} >
                  <ContactBooking/>
              </div>
              <div className={`flex  w-full justify-center items-center mt-[8vh]`} >
                  <ContactConsultation/>
              </div>
              <div className={`flex  w-full justify-center items-center mt-[8vh]`} >
                  <ContactPersonalised/>
              </div>
              <div className={`flex  w-full justify-center items-center mt-[8vh]`} >
                  <ContactTreatment/>
              </div>
              <div className={`flex  w-full justify-center items-center mt-[8vh]`} >
                  <ContactAftercare/>
              </div>
              {/* <div className={`flex  w-full justify-center items-center mt-[8vh]`} >
                  <WakilClinic/>
              </div> */}
              <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <BookNow/>
              </div>
              <div className={`flex flex-col  justify-center mt-[8vh]`}>
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

export default Contact