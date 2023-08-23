

'use client'
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import { useEffect } from 'react';
// import { boobs1, boobs2, boobs3 } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import { useEffect, useState } from 'react';

const YoutubeTestimonials = () => {
  const [sliderValue, setSliderValue] = useState(1);
  

  useEffect(() => {
    const changeSlider = () => {
      if (window.screen.width > 1000) {
        setSliderValue(3);
      } else {
        setSliderValue(1);
      }
    };

    // Call the function initially and add an event listener for window resize
    changeSlider();
    window.addEventListener('resize', changeSlider);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', changeSlider);
    };
  }, []);
      

    const settings = {
      className: "center ",
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: sliderValue,
      // slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
      // variableWidth: true,
    };

  return (
  
    <div className={`flex flex-col p-[2vh]  w-full `}>
      
        <h1 className={`text-gold1 text-[5vh] font-header text-center`}>Patients Testimonials</h1>
        
      <div className=" w-[95%] mx-auto my-auto ">
      <Slider {...settings}>
          <div className={`md:min-h-[65vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
                {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/Fph7J8NK4so?controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                <LiteYouTubeEmbed
                  id="Fph7J8NK4so"
                  title="Vampire Breastlift youtube testimonial"
                />
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>I had my breast implants removed a year ago, and my condfidence just went with them. I didnt want to have surgery so I looked into alternate procedures and met Dr. Wakil. I am so happy with the results, I feel so confident now, it just makes me feel more of a woman again.</p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>MAYA</h1>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>42 Years Old, UK</h3>
              </div>
            </div>
          </div>



          <div className={`md:min-h-[65vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
                {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/TmsESS0zn74?controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                <LiteYouTubeEmbed
                  id="TmsESS0zn74"
                  title="Vampire Breastlift youtube testimonial"
                />
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>In the past I had breast implants, but after breastfeeding they didnt look good. I researched some other options and came across Dr. Wakil. I didnt feel any pain at all and was able to just walk away from the treatment as normal. Im really please with the results, especially with the lift and the shape. Thats excatly what I wanted.</p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>CLAUDIA</h1>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>28 Years Old, BRISTOL</h3>
              </div>
            </div>
          </div>

          <div className={`md:min-h-[65vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
                {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/M0GiG9xyxJo?controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                <LiteYouTubeEmbed
                  id="M0GiG9xyxJo"
                  title="Vampire Breastlift youtube testimonial"
                />
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>Several years ago I had breast surgery which left me with some nerve damage on one side. Dr. Sherif introduced to me Vampire BreastLift, I tolerated it very well, it was not painfull at all. After 2 months from the precudeure I started to get the sensation back again and now its complemetely back. Its just been amazinng and Im so thankfull to Dr. Sherif. </p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>CHRISTINE</h1>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>60 Years Old, UK</h3>
              </div>
            </div>
          </div>

          <div className={`md:min-h-[65vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
              {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/EbBj4Hitfyo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
              <LiteYouTubeEmbed
                  id="EbBj4Hitfyo"
                  title="Vampire Breastlift youtube testimonial"
                />
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>I always wanted to do something with my breast but didnt want to go down the road with plastic surgery I'm acutally thrilled that this gives me the results I wanted. This is non-invasive and it's something that gives me the natural results I wanted so much.</p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>HIMA</h1>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>39 Years Old, UK</h3>
              </div>
            </div>
          </div>
          
          
          
        </Slider>
        
      </div>
  </div>
  )
}

export default YoutubeTestimonials

