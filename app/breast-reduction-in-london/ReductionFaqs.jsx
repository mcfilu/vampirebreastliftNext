'use client'

import React, { useState } from "react";

const ReductionFaqs = () => {

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
                <h2 className={`text-gold1 font-header text-center text-[5vh] mb-[1vh]`}>Frequently Asked Questions</h2>

                
                <hr className={`border-gold1 mt-[2vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSecond(!openSecond)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSecond ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openSecond ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Am i suitable for this treatment?</h2>
                    </div>
                    <div className={`flex flex-col ${openSecond ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        Your suitability for breast reduction will be assessed by our surgeon who will decide if you are the correct candidate for the procedure. A full medical history will also be taken to make sure that there are no contraindications for you to have the procedure, such as any medication that you may be taking, underlying health conditions, your wound healing history, or past breast surgeries.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Pregnant and breast-feeding women are not suitable for surgical procedures.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Breast reduction surgery may also lead to an inability to breast feed in future. If this is important to you, please discuss it with our surgeon who can endeavour to preserve vital tissue required for breast feeding.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setThird(!openThird)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openThird ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openThird ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Does it hurt?</h2>
                    </div>
                    <div className={`flex ${openThird ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The breast reduction surgery will be performed using general anaesthesia so you will not feel the procedure.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFourth(!openFourth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFourth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openFourth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>How long does it take?</h2>
                    </div>
                    <div className={`flex ${openFourth ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The operation can take 1-3 hours to perform.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openFifth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Is there any downtime/recovery time?</h2>
                    </div>
                    <div className={`flex flex-col ${openFifth ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        After the surgery, and once the anaesthesia has worn off, your chest will feel tender and tight. Some people do experience mild side effects because of the anaesthesia so you will be monitored before you are discharged from our care.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        You will need to wear a support bra or post-surgical garment 24/7 in the 3-4 weeks following your surgery to aid healing and support the breast tissue as your incisions heal. After that you should always wear a sports bra during the day but can remove it to sleep.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        You should try to walk around as much as you can during the first week after surgery as improving your circulation will aid healing. Initially movement may hurt and cause a pulling sensation over your chest. Over time, and as you heal, your breasts will become softer and feel more natural; it is a gradual process due to the extent of disruption to the tissue, with different people taking different amounts of time to recover.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Depending on the timing of your surgery, you may leave to go home the same day or be required to stay overnight. This will be discussed during your consultation.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Pain, swelling, bruising, and tightness are common for the first few days and weeks post-surgery. Any pain and discomfort post-surgery can be managed with over-the-counter pain medication or medicines prescribed by our surgeon.
                        </p>
                        <p className={`text-white text-[2.1vh] text-justify font-main mt-[2vh]`}>
                        Many patients take up to 2 weeks off work before returning to most normal activities and their job, depending on the type of work. You should avoid strenuous exercise or heavy lifting for at least a month. It is advised to avoid driving for 4-6 weeks too, partly due to the medical implications and discomfort from wearing a seat belt, but also because it may invalidate your vehicle insurance.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openSixth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>What kind of results can I expect?</h2>
                    </div>
                    <div className={`flex flex-col ${openSixth ? '' : 'hidden'} flex-col md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The full results of breast reduction surgery can be life changing. Woman often feel more confident with a sense of freedom, unencumbered by their previously heavy breasts. Physical movement and posture improve over time, there is relief from back and shoulder pain, as well as skin irritation and shoulder dips. You will be able to attempt more sports and types of exercise, and often the freedom to do more improves social, work, and family life.
                        </p>
                        
                        <p className={`text-white text-[2.1vh] font-main mt-[2vh]`}>The results from breast reduction surgery are permanent but can be affected in future by ageing or weight gain, hence, it is important to maintain a healthy lifestyle.</p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default ReductionFaqs