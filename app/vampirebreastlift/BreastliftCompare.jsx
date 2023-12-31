'use client'
import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Image from 'next/image';

import boobs1Before from '@/public/boobs1Before.jpeg';
import boobs1After from '@/public/boobs1After.jpeg';
import boobs2Before from '@/public/boobs2Before.jpeg';
import boobs2After from '@/public/boobs2After.jpeg';
import boobs3Before from '@/public/boobs3Before.jpeg';
import boobs3After from '@/public/boobs3After.jpeg';
import boobs4Before from '@/public/boobs4Before.jpeg';
import boobs4After from '@/public/boobs4After.jpeg';
import breastlift_before9 from '@/public/breastlift_before9.jpg';
import breastlift_after9 from '@/public/breastlift_after9.jpg';
import breastlift_before10 from '@/public/breastlift_before10.jpg';
import breastlift_after10 from '@/public/breastlift_after10.jpg';
import breastlift_before12 from '@/public/breastlift_before12.jpg';
import breastlift_after12 from '@/public/breastlift_after12.jpg';
import breastlift_before13 from '@/public/breastlift_before13.jpg';
import breastlift_after13 from '@/public/breastlift_after13.jpg';
import breastlift_before15 from '@/public/breastlift_before15.jpg';
import breastlift_after15 from '@/public/breastlift_after15.jpg';
import breastlift_before22 from '@/public/breastlift_before22.jpg';
import breastlift_after22 from '@/public/breastlift_after22.jpg';

const BreastliftCompare = () => {
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    const [hov3, setHov3] = useState(false);
    const [hov4, setHov4] = useState(false);
    const [hov5, setHov5] = useState(false);
    const [hov6, setHov6] = useState(false);
    const [hov7, setHov7] = useState(false);
    const [hov8, setHov8] = useState(false);
    const [hov9, setHov9] = useState(false);
    const [hov10, setHov10] = useState(false);
    
    const [vis3, set3] = useState(false);
    const [vis4, set4] = useState(false);
    const [vis5, set5] = useState(false);
    const [vis6, set6] = useState(false);
    const [vis7, set7] = useState(false);
    const [vis8, set8] = useState(false);
    const [vis9, set9] = useState(false);
    const [vis10, set10] = useState(false);
    const [buttonVis, setButton] = useState(true);
    3
    const handleImages = () => {
        if (vis3 == false ){
            set3(true);
        }
        else if (vis4 == false){
            set4(true);
        }
        else if (vis5 == false){
            set5(true);
        }
        else if (vis6 == false){
            set6(true);
        }
        else if (vis7 == false){
            set7(true);
        }
        else if (vis8 == false){
            set8(true);
        }
        else if (vis9 == false){
            set9(true);
        }
        else if (vis10 == false){
            set10(true);
            setButton(false);
        }
         
    
    }

    const [banner, setBanner] = useState(true);
    const [disabled, setDisabled] = useState(false)
  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h2 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Treatment Effects</h2>
            <div className={`${banner ? 'hidden' : ''} flex flex-row justify-between w-[50%] mx-auto`}>
                <h2 className={`text-[3.5vh] text-white font-main`}>Before</h2>
                <h2 className={`text-[3.5vh] text-white font-main`}>After</h2>
            </div>
            <div className={`${banner ? '' : 'hidden'} flex flex-col w-[90%] h-[60vh] md:h[80vh] bg-gold2 items-center justify-center text-white`}>
                <div className={`${disabled ? 'hidden' : ''}`}>
                    <p className=' text-[2.5vh] my-[1vh] text-center'>Sensitive Content</p>
                    <p className=' text-[2.5vh] my-[1vh] text-center'>These photos contain nudity. You must be at least 18 years old to continue.</p>
                    <p className=' text-[2.5vh] my-[1vh] text-center'>Are you over 18 years of age?</p>
                    <div className='flex flex-row items-center justify-center mt-[5vh]'>
                        <button onClick={() => {setDisabled(true)}} className='py-[1vh] px-[2vh] border-black border-2 mr-[1vw]'>NO</button>
                        <button onClick={() => setBanner(false)} className='text-gold2 bg-black py-[1vh] px-[2vh] border-black border-2 ml-[1vw]'>YES</button>
                    </div>
                </div>
                <div className={`${disabled ? '' : 'hidden'} flex flex-col items-center justify-center text-white`}>
                    <p className=' text-[2.5vh] my-[1vh] text-center'>Due to your age</p>
                    <p className=' text-[2.5vh] my-[1vh] text-center'>Unfortunately we can't show you the sensitive content.</p>
                </div>
            </div>
            <div className={`${banner ? 'hidden' : ''} w-full`}>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between  ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs1Before}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs1After}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs1Before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs1After}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs2Before}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs2After}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs2Before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs2After}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs3Before}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs3After}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs3Before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs3After}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs4Before}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs4After}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs4Before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={boobs4After}></Image>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHov5(true)} onMouseLeave={() => {setHov5(false)}} className={`${vis5 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov5 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before9}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after9}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov5 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before9}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after9}></Image>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHov6(true)} onMouseLeave={() => {setHov6(false)}} className={`${vis6 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov6 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                    <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before10}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after10}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov6 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before10}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after10}></Image>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHov7(true)} onMouseLeave={() => {setHov7(false)}} className={`${vis7 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov7 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before12}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after12}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov7 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before12}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after12}></Image>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHov8(true)} onMouseLeave={() => {setHov8(false)}} className={`${vis8 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov8 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before13}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after13}></Image>
                                    </div>}  
                        />
                    </div>
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov8 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before13}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after13}></Image>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHov9(true)} onMouseLeave={() => {setHov9(false)}} className={`${vis9 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov9 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before15}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after15}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov9 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before15}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after15}></Image>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHov10(true)} onMouseLeave={() => {setHov10(false)}} className={`${vis10 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov10 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto  h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before22}></Image>
                                    </div>}
                            itemTwo={<div className={`flex w-[80vw] md:w-[20vw] h-[25vh] relative`}>
                                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after22}></Image>
                                    </div>}  
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov10 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[1vh] md:mr-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_before22}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[1vh] md:ml-[3vh] w-[48%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={breastlift_after22}></Image>
                    </div>
                </div>
            </div>
            </div>
            <button onClick={() => handleImages()} className={`${banner ? 'hidden' : ''} flex mx-auto px-[1vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 text-[2.5vh]  ${buttonVis ? "":"hidden"} mt-[1vh] font-main`}>Load More</button>
        </div>
    </div>
    
  )
}

export default BreastliftCompare