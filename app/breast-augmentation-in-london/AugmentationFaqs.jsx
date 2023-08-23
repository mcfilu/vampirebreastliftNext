'use client'

import React, { useState } from "react";

const AugmentationFaqs = () => {

    const [openSecond, setSecond] = useState(true);
    const [openThird, setThird] = useState(false);
    const [openFourth, setFourth] = useState(false);
    const [openFifth, setFifth] = useState(false);
    const [openSixth, setSixth] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <section className={` w-full`}>
            <div className={` p-[2vh]   `}>
                <h1 className={`text-gold1 font-header text-center text-[5vh] mb-[1vh]`}>Frequently Asked Questions</h1>

                
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSecond(!openSecond)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSecond ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSecond ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Am i suitable for this treatment?</h1>
                    </div>
                    <div className={`flex ${openSecond ? '' : 'hidden'} flex-col md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                             <p className={`text-white text-[2.1vh] text-justify font-main`}>
                         Your suitability for breast augmentation will be assessed by our surgeon who will decide if you are the correct candidate for the procedure. A full medical history will also be taken to make sure that there are no contraindications for you to have the procedure, such as any medication that you may be taking, your wound healing history, or past breast surgeries.
                         </p>
                         <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                         In general, most women are suitable for breast implant surgery, if they are in good health. Pregnant and breast-feeding women are not suitable for surgical procedures.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setThird(!openThird)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openThird ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openThird ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Does it hurt?</h1>
                    </div>
                    <div className={`flex ${openThird ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                    <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The breast enhancement surgery will be performed using general anaesthesia so you will not feel the procedure.
                         </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFourth(!openFourth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFourth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFourth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>How long does it take?</h1>
                    </div>
                    <div className={`flex ${openFourth ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The operation can take 60-90 minutes to perform.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openFifth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Is there any downtime/recovery time?</h1>
                    </div>

                    <div className={`flex flex-col ${openFifth ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                    <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                         After the surgery, and once the anaesthesia has worn off, your chest will feel tender and tight. Some people do experience mild side effects because of the anaesthesia so you will be monitored before you are discharged from our care.
                         </p>
                         <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                         You will need to wear a support bra or post-surgical garment 24/7 in the 12 weeks following your surgery to aid healing and support the tissue as your incisions heal.
                         </p>
                         <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                         Depending on the timing of your surgery, you may leave to go home the same day or be required to stay overnight. This will be discussed during your consultation.
                         </p>
                         <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                         Pain, swelling, bruising, and tightness are common for the first few days and weeks post-surgery. Any pain and discomfort post-surgery can be managed with over-the-counter pain medication or medicines prescribed by our surgeon.
                         </p>
                         <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                         Many patients take one to two weeks off work before returning to normal activities and their job (depending on how strenuous the work). You should avoid strenuous exercise for at least a month. It is advised to avoid driving for 1-2 weeks too, partly due to the medical implications, but also because it may invalidate your vehicle insurance.
                         </p>
                         <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                         The full recovery from breast implant surgery can take up to three months.
                         </p>
                     </div>
                    
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h1 className={`${openSixth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>What kind of results can I expect?</h1>
                    </div>
                    <div className={`flex ${openSixth ? '' : 'hidden'} flex-col md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                    <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                         The full results of breast augmentation will be visible after approximately 6-12 weeks once much of the swelling has gone, the skin has healed, and the breast area feels more natural.
                         </p>
                         <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                         After 3 months, you will have achieved the increase in size to your breast and be able to wear your desired clothes without the need for support garments.
                         </p>
                         <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                         Results of this surgery should last ten to fifteen years, depending on the breast implant type and how your body reacts to the implant. In some cases, revision surgery may be required if complications occur that affect scar tissue formation (capsular contraction), or if the implant gets damaged at any point. All the potential risks will be discussed during your consultation.
                         </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default AugmentationFaqs