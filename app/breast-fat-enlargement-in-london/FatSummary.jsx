import React from "react";
import icon1 from '../../public/icon1.png';
import icon2 from '../../public/icon2.png';
import icon3 from '../../public/icon3.png';
import Link from "next/link";

function FatSummary() {

  return (
    
    
    
    <div className={`relative md:ml-[13vw] bg-black bg-opacity-100 p-[3vh] md:my-[5vh] flex flex-col md:w-[60%] h-auto min-h-[68vh]  md:pr-[14vh] hover:bg-opacity-100 md:shadow-[0px_0px_20px_1px_#ad9444] hover:ease-in-out duration-500`}>
            <div className={` w-[100%] mx-auto h-[100%]`}>
                <h2 className={`text-gold1 text-[5vh] font-header text-center`}>Treatment Summary at a glance</h2>
                <div className={`flex flex-col md:flex-row justify-between px-[3vh] my-[5vh]`}>
                    <div className="inner-item flex flex-col items-center text-white">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon1.src} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light font-main">Procedure Time</p>
                        {/* <span className="text-[2vh] font-light">Approx 40mins</span> */}
                        <p className="text-[2.5vh] font-medium mt-[1vh] font-main">Up to 4 hours</p>
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white mt-[5vh] md:mt-[0px]">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon2.src} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light font-main">Recommended No. of Treatments</p>
                        {/* <span className="text-[2vh] font-light"></span> */}
                        <p className="text-[2.5vh] font-medium mt-[1vh] font-main">One-Two</p>
                        
                    </div>

                    <div className="inner-item flex flex-col items-center text-white mt-[5vh] md:mt-[0px]">
                        <div className="icon mb-2">
                        <img className={`h-[9vh]`} src={icon3.src} alt="" />
                        </div>
                        <p className="text-[1.9vh] font-light font-main">Anaesthetic</p>
                        {/* <span className="text-[2vh] font-light"></span> */}
                        <p className="text-[2.5vh] font-medium mt-[1vh] font-main">General</p>
                        
                    </div>
                </div>
                <div>
                    <hr className={`mt-[1.5vh] mb-[1.5vh]`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium text-gold1 w-[30%] font-main">Side Effects:</span>
                        <p className="text-[2vh] font-light text-white w-[70%] font-main">Pain, swelling, bruising and tightness to the chest.</p>
                    </div>

                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1 font-main">Results:</span>
                        <p className="text-[2vh] font-light text-white w-[70%] font-main">
                        Enhancement in the size and contour of the breasts, along with the correction of  asymmetry.
                        </p>
                    </div>

                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1 font-main">Duration of results:</span>
                        <p className="text-[2vh] font-light text-white w-[70%] font-main">
                        Permanent
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1 font-main">Back to work:</span>
                        <p className="text-[2vh] font-light text-white w-[70%] font-main">
                        After 1-4 weeks
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                    <div className={`flex flex-row`}>
                        <span className="text-[2vh] font-medium w-[30%] text-gold1 font-main">Full Recovery:</span>
                        <p className="text-[2vh] font-light text-white w-[70%] font-main">
                        1-2 months
                        </p>
                    </div>
                    <hr className={`mt-[2vh] mb-4`}></hr>
                </div>
                
            </div>
            <div className={`md:absolute bg-gold1  bg-opacity-100  shadow-[0px_0px_20px_2px_#ad9444] ease-in-out duration-500 top-[22%] -right-[17.5vw] md:w-[24vw]   p-[2vh] mt-[5vh] md:mt-[0px]`}>
                    <p className={` text-[4vh] mt-[2vh] font-medium font-header text-black`}>Treatment Cost</p>
                    <p className={`font-main text-[1.7vh] mt-[2vh]  text-black`}>Price from:</p>
                    <p className={`font-main font-bold text-[5.5vh] text-black`}>£ TBA</p>
                    <p className={`text-[1.6vh] font-main text-black`}>* After consultation the doctor will confirm the cost.</p>
                    <Link href="/book-now"><button className={`bg-black text-gold1 text-[4vh] md:text-[2.5vh] mt-[4vh] p-[1vh]`}>Book Now</button></Link>
                </div>

        </div>
    
    
        
    )
}
export default FatSummary