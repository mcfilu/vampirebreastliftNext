import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Media from '../components/Media'
import Awards from '../components/Awards'
import FooterBook from '../components/FooterBook'
import BookForm from './BookForm'

const Book = () => {
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
        <div className="flex flex-col bg-black pb-[8vh]" >
            <div className={`flex flex-col justify-center `}>
                <div className={`flex  w-full md:h-[100vh] mt-[10vh] md:mt-0 justify-center items-center `} >
                  <BookForm/>
              </div>
              {/* <div className={`flex  w-full justify-center items-center`} >
                  <ContactMap/>
              </div>
              <div className={`flex  w-full justify-center items-center mt-[8vh]`} >
                  <WakilClinic/>
              </div>
              <div className={`flex  w-full  justify-center items-center mt-[8vh]`} >
                  <BookNow/>
              </div> */}
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

export default Book