'use client'
import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Image from 'next/image';

import augmentation1_before from '../../public/augmentation1_before.jpg';
import augmentation1_after from '../../public/augmentation1_after.jpg';
import augmentation5_before from '../../public/augmentation5_before.jpg';
import augmentation5_after from '../../public/augmentation5_after.jpg';
import augmentation7_before from '../../public/augmentation7_before.jpg';
import augmentation7_after from '../../public/augmentation7_after.jpg';
import augmentation8_before from '../../public/augmentation8_before.jpg';
import augmentation8_after from '../../public/augmentation8_after.jpg';


const AugmentationCompare = () => {
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    const [hov3, setHov3] = useState(false);
    const [hov4, setHov4] = useState(false);
    const [vis3, set3] = useState(false);
    const [vis4, set4] = useState(false);
    const [buttonVis, setButton] = useState(true);
    const handleImages = () => {
        if (vis3 == false & vis4 == false){
            set3(true);
        }
        else if (vis4 == false){
            set4(true);
            setButton(false);
        }
    }
  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h1 className={`text-gold1 font-header text-center text-[5vh] mb-[1vh]`}>Treatment Effects</h1>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h1 className={`text-[3.5vh] font-main text-white`}>Before</h1>
                <h1 className={`text-[3.5vh] font-main text-white`}>After</h1>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={augmentation8_before.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={augmentation8_after.src} srcSet={augmentation8_after.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={augmentation8_before}></Image>
                    </div>
                    {/* <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={augmentation8_before}></img> */}
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={augmentation8_after}></Image>
                    </div>
                    {/* <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={augmentation8_after}></img> */}
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={augmentation1_before.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={augmentation1_after.src} srcSet={augmentation1_after.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={augmentation1_before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={augmentation1_after}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={augmentation5_before.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={augmentation5_after.src} srcSet={augmentation5_after.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={augmentation5_before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={augmentation5_after}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={augmentation7_before.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={augmentation7_after.src} srcSet={augmentation7_after.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={augmentation7_before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={augmentation7_after}></Image>
                    </div>
                </div>
            </div>
            <button onClick={() => handleImages()} className={`flex mx-auto px-[2vh] py-[1vh] bg-black border-2 border-gold1 text-gold1 text-[2.5vh]  ${buttonVis ? "":"hidden"} font-main mt-[1vh]`}>Load More</button>
        </div>
    </div>
    
  )
}

export default AugmentationCompare