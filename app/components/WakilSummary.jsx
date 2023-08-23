import React from "react";
// import { icon1, icon2, icon3 } from "../assets";
// import { PopupButton } from "react-calendly";

function WakilSummary() {
    
  return (
    
    
        <div  className={` flex flex-col md:w-[60%] h-auto min-h-[35vh]  `}>
            <div className={`flex flex-col w-full h-full`}>
                <h1 className={`text-gold1 text-[5vh] font-header text-center`}>Impressive Achievements by Dr Sherif Wakils</h1>
                <div className={`flex flex-col md:flex-row justify-between px-[3vh] mt-[4vh] md:mt-[8vh]`}>
                    <div className="inner-item flex flex-col items-center text-white ">
                        <i  className={`text-gold1 fa-solid fa-hourglass text-[6vh]`}></i>
                        <h4 className="text-[3vh] font-medium mt-[2vh] font-main">25</h4>
                        <p className="text-[2.5vh] font-light font-main">Years of Experience</p>
                        {/* <span className="text-[1.7vh] font-light">Approx 40mins</span> */}
                        
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white mt-[5vh] md:mt-0">
                        <i  className={`text-gold1 fa-solid fa-syringe text-[6vh]`}></i>
                        <h4 className="text-[3vh] font-medium mt-[2vh] font-main">25 000</h4>
                        <p className="text-[2.5vh] font-light font-main">Procedures Performed</p>
                        {/* <span className="text-[1.7vh] font-light">Approx 40mins</span> */}
                        
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white mt-[5vh] md:mt-0">
                        <i  className={`text-gold1 fa-solid fa-graduation-cap text-[6vh]`}></i>
                        <h4 className="text-[3vh] font-medium mt-[2vh] font-main">2000</h4>
                        <p className="text-[2.5vh] font-light font-main">Medical Professionals Taught</p>
                        {/* <span className="text-[1.7vh] font-light">Approx 40mins</span> */}
                        
                        
                    </div>
                </div>
                
                
            </div>
            

        </div>
    
    
        
    )
}
export default WakilSummary