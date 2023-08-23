import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookNow from '../components/BookNow'
import Media from '../components/Media'
import Awards from '../components/Awards'
import FooterBook from '../components/FooterBook'

import ContactMap from './ContactMap'
import ContactImage from './ContactImage'
import ContactAftercare from './ContactAftercare'
import ContactTreatment from './ContactTreatment'
import ContactConsultation from './ContactConsultation'
import ContactBooking from './ContactBooking'
import ContactPersonalised from './ContactPersonalised'
import ContactOpening from './ContactOpening'

export const metadata = {
    title: 'Contact P-Shot | Sexual Aesthetics Doctor in UK',
    description : 'Enhance sexual aesthetics with P-Shot! Contact our UK-based doctor for sexual treatments. Reclaim your confidence and satisfaction today. Call +44 (0)20 3006 8459.',
  }

export default function Contact() {
  return (
    <div className={`bg-primary w-full`}>

        <div className={`fixed z-30 `}>
            <Navbar/>
        </div>
        <div className={`fixed w-full bottom-0 left-0 z-20 `}>
            <FooterBook/>
        </div>
        <div className={`relative z-0 ` }>
            <ContactImage/>
        </div>
        <div className="flex flex-col bg-black pb-[8vh]" >
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


