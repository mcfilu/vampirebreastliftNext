import React from 'react';
// import {  footer1, footer2, footer4, logo_no_border, bcam} from '../assets';
// import { PopupWidget, PopupButton } from 'react-calendly';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'

// import { Link } from 'react-router-dom';
import Link from 'next/link';
import logo_no_border from '../../public/logo_no_border.svg';
import footer1 from '../../public/footer1.png';
import footer2 from '../../public/footer2.png';
import footer4 from '../../public/footer4.png';
import bcam from '../../public/bcam.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 pb-[1vh] border-gold1 border-t-4 pb-[6vh]">
      <div className="w-full flex flex-col md:flex-row justify-between ">
        {/* Logo */}
        <div className="flex flex-col ml-[3vh] items-center justify-center">
          <img src={logo_no_border.src} alt="Logo" className={`h-[12vh] flex `} />
        </div>
        
        {/* Contact Information */}
        <div className="text-[0.9vw] flex flex-col items-center ">
            <h1 className={`text-[4vh] text-gold1 md:text-[3vh] text-center md:text-left font-bold mb-[3vh] mt-[1.5vh] font-header`}>Contact Us</h1>
          <p className="mb-[0.9vh] text-[2vh] md:text-[1.1vw] font-main"><a className={`hover:text-gold1 flex items-center`} href='mailto:info@drswclinics.co.uk'><i className="fas fa-envelope mr-[0.9vw] text-gold1 text-[3vh] md:text-[1.3vw]"></i>Info@drswclinics.co.uk</a></p>
          <p className="mb-[0.9vh] text-[2vh] md:text-[1.1vw] font-main"><a className={`hover:text-gold1 flex items-center`} href="tel:+44 (0)20 3006 8459"><i className="fas fa-phone mr-[0.9vw] text-gold1 text-[3vh] md:text-[1.3vw]"></i>+44 (0)20 3006 8459 </a></p>
          <Link href="/book-now"><button className={`bg-black border-gold1 border-2 hover:bg-white text-gold1 text-[3vh] md:text-[1.2vw] md:w-[8vw] font-main px-[1vh]`}>Book Now</button></Link>
        </div>

        {/* Find us */}
        <div className="text-[0.9vw] flex flex-col">
            <h1 className={`text-[4vh] text-gold1 md:text-[3vh] text-center md:text-left font-bold mb-[3vh] mt-[1.5vh] font-header`}>Find Us</h1>
            <div className={`flex flex-row mx-auto `}>
                <div className={`flex items-center`}>
                    <i className="fas fa-map-marker-alt text-gold1 text-[5vh] md:text-[1.8vw] mr-[0.6vw]"></i>
                </div>
                <div className={`text-[2vh] md:text-[1.1vw] font-main`}>
                    <p className="mb-[0.9vh]">Dr SW Clinics  </p>
                    <p className="mb-[0.9vh]">77 Harley Street</p>
                    <p className="mb-[0.9vh]">London W1G 8QN</p>
                </div>
            </div>
            
          
        </div>

        {/* Social Media Links */}
        <div className="text-[0.9vw] flex flex-col">
            <h1 className={`text-[4vh] md:text-[3vh] text-gold1 text-center md:text-left font-bold mb-[3vh] mt-[1.5vh] font-header`}>Follow Us</h1>
          <div className={`flex flex-row md:flex-col mx-auto text-[2vh] md:text-[1.1vw] font-main`}>
            <p className="mb-[0.9vh] mr-[1.5vh] md:mr-[0px]"><a href="https://www.facebook.com/drswclinics" className={`hover:text-gold1 flex items-center`}><i className={`fab fa-facebook mr-[0.9vw] text-gold1 text-[3vh] md:text-[1.3vw]`}></i>Facebook</a></p>
            <p className="mb-[0.9vh]  mr-[1.5vh] md:mr-[0px]"><a href="https://www.twitter.com/DrSWclinics" className={`hover:text-gold1 flex items-center`}><i className="fab fa-twitter mr-[0.9vw] text-gold1 text-[3vh] md:text-[1.3vw]"></i>Twitter</a></p>
            <p className="mb-[0.9vh]  mr-[1.5vh] md:mr-[0px]"><a href="https://www.instagram.com/drswclinics/" className={`hover:text-gold1 flex items-center`}><i className="fab fa-instagram mr-[1.1vw] text-gold1 text-[3vh] md:text-[1.3vw]"></i>Instagram</a></p>
          </div>
          
        </div>
        
        {/* Other Useful Information */}
        <div className="text-[0.7vw] flex flex-col md:mr-[3vh] md:w-[20vw]">
            <h1 className={`text-[4vh] md:text-[3vh] text-gold1 text-center md:text-left font-bold mb-[3vh] mt-[1.5vh] text-center font-header`}>Accredited</h1>
            <div className={`grid grid-cols-2 md:grid-cols-4 place-items-center`}>
                <img src={footer1.src} alt="Logo" className="h-[8vh] m-[0.9vh] ml-0" />
                <img src={footer2.src } alt="Logo" className="h-[8vh] m-[0.9vh]" />
                <img src={bcam.src} alt="Logo" className="h-[8vh] m-[0.9vh]" />
                <img src={footer4.src } alt="Logo" className="h-[8vh] m-[0.9vh]" />
            </div>
         
        </div>
      </div>
      {/* <hr className={`mt-[2vh]`}></hr> */}
      <h1 className={`text-center text-[1.5vh] mt-[1.5vh] font-main`}>Treatment Provided By Dr SW Clinics | All Right Reserved ®</h1>

    </footer>
    
  );
};

export default Footer;
