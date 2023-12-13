'use client'

import React, { useState } from "react";

const BreastliftFaqs = () => {

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
                <h2 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Frequently Asked Questions</h2>

                
                <hr className={`border-gold1 mt-[2vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSecond(!openSecond)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSecond ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openSecond ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Am i suitable for this treatment?</h2>
                    </div>
                    <div className={`flex ${openSecond ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The Vampire Breast Lift™ is ideal for women who do not want to have the recovery time associated with traditional surgical procedures such as breast lifts or breast implants or who want a more subtle, natural enhancement of the breasts. The PRP breast enhancement can be used to address loss of volume and sagging in the breasts due to ageing, weight loss or breast feeding, to improve skin texture on the chest and to target creased skin on the cleavage. It can also be used to correct inverted nipples.
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
                        This natural breast lift treatment does involve injections so it can be a little uncomfortable but local anaesthetic is used to minimise any discomfort and most patients find the treatment very tolerable with many experiencing no pain at all.
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
                        The treatment takes approximately 40 minutes.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setFifth(!openFifth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openFifth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openFifth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>Is there any downtime/recovery time?</h2>
                    </div>
                    <div className={`flex ${openFifth ? '' : 'hidden'} md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        One of the main advantages of this treatment is the fact there is no down time or recovery time involved, unlike with surgical breast enhancement procedures. You can even return to work/normal activities straight away. There is a small chance of developing some minimal bruising at the injection sites, but this will only last a couple of days.
                        </p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
                <div className={`flex flex-col md:ml-[5%]`} onClick={() => {setSixth(!openSixth)}}>
                    <div className={`flex flex-row justify-left`}>
                        <i className={`fa-regular ${openSixth ? 'fa-square-minus' : 'fa-square-plus'} mr-4 text-gold1 text-[3vh] flex items-center`}></i>
                        <h2 className={`${openSixth ? 'text-white' : 'text-white'} font-main text-[2.8vh]`}>What kind of results can I expect?</h2>
                    </div>
                    <div className={`flex ${openSixth ? '' : 'hidden'} flex-col md:w-[40vw] mt-[2vh] mb-[1vh] ml-[5%]`}>
                        <p className={`text-white text-[2.1vh] text-justify font-main`}>
                        The Vampire Breast Lift™ aims to lift the breasts and give a fuller looking cleavage as well as enhancing the skin on the chest area to achieve a more youthful appearance. Patients report:
                        </p>
                        <ul className={`text-white text-[2.1vh] font-main my-[1vh] mb-6`}>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Firmer, more shapely breasts</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>A lifted and rounder cleavage</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Restore sensitivity lost through breastfeeding or previous implants</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Perkier nipples</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Increased nipple sensitivity</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Smoother skin</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Fill implant “rippling”</li>
                            <li className={`flex items-center`}><i  className={`mr-4 fa-solid fa-circle text-[12px] text-gold1`}></i>Lift inverted nipples</li>
                        </ul>
                        <p className={`text-white text-[2.1vh] font-main`}>Like other Vampire Procedures, the Vampire Breast Lift™ injections will last about 12-24 months, depending on individual patients.</p>
                    </div>
                </div>
                <hr className={`border-gold1 mt-[1.4vh] mb-[1.4vh] w-[90%] mx-auto`}></hr>
            </div>
        </section>
        )
    }

export default BreastliftFaqs