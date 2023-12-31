'use client'
import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Image from 'next/image';

import fat1_before from '../../public/fat1_before.jpg';
import fat1_after from '../../public/fat1_after.jpg';
import fat3_before from '../../public/fat3_before.jpg';
import fat3_after from '../../public/fat3_after.jpg';
import implant_fat1_before from '../../public/implant_fat1_before.jpg';
import implant_fat1_after from '../../public/implant_fat1_after.jpg';
import implant_fat3_before from '../../public/implant_fat3_before.jpg';
import implant_fat3_after from '../../public/implant_fat3_after.jpg';
import fat_before10 from '../../public/fat_before10.jpeg';
import fat_after10 from '../../public/fat_after10.jpg';
import fat_before11 from '../../public/fat_before11.jpg';
import fat_after11 from '../../public/fat_after11.jpg';
import fat_before12 from '../../public/fat_before12.jpeg';
import fat_after12 from '../../public/fat_after12.jpg';

const FatCompare = () => {
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    const [hov3, setHov3] = useState(false);
    const [hov4, setHov4] = useState(false);
    const [hov5, setHov5] = useState(false);
    const [hov6, setHov6] = useState(false);
    const [hov7, setHov7] = useState(false);
    const [vis3, set3] = useState(false);
    const [vis4, set4] = useState(false);
    const [vis5, set5] = useState(false);
    const [vis6, set6] = useState(false);
    const [vis7, set7] = useState(false);

    const [buttonVis, setButton] = useState(true);
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
            setButton(false);
        }
    }
  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h2 className={`text-gold1 font-header text-center text-[5vh] mb-[1vh]`}>Treatment Effects</h2>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h2 className={`text-[3.5vh] text-white font-main`}>Before</h2>
                <h2 className={`text-[3.5vh] text-white font-main`}>After</h2>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={fat1_before.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={fat1_after.src} srcSet={fat1_after.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={fat1_before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={fat1_after}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={implant_fat1_before.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={implant_fat1_after.src} srcSet={implant_fat1_after.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={implant_fat1_before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={implant_fat1_after}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={fat3_before.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={fat3_after.src} srcSet={fat3_after.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={fat3_before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={fat3_after}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={implant_fat3_before.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={implant_fat3_after.src} srcSet={implant_fat3_after.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={implant_fat3_before}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={implant_fat3_after}></Image>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHov5(true)} onMouseLeave={() => {setHov5(false)}} className={`${vis5 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov5 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={fat_before10.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={fat_after10.src} srcSet={fat_after10.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov5 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={fat_before10}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={fat_after10}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov6(true)} onMouseLeave={() => {setHov6(false)}} className={`${vis6 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov6 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={fat_before11.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={fat_after11.src} srcSet={fat_after11.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov6 ? 'hidden' : ''} ease-in-out duration-500`}>
                <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={fat_before11}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={fat_after11}></Image>
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHov7(true)} onMouseLeave={() => {setHov7(false)}} className={`${vis7 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov7 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={fat_before12.src} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={fat_after12.src} srcSet={fat_after12.src} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov7 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <div className={`mr-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={fat_before12}></Image>
                    </div>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <div className={`ml-[3vh] w-[47%] md:w-[43%] object-cover relative`}>
                        <Image objectFit="cover" objectPosition="center" fill="true" alt="" src={fat_after12}></Image>
                    </div>
                </div>
            </div>
            <button onClick={() => handleImages()} className={`flex mx-auto px-[1vh] py-[0.5vh] bg-black border-2 border-gold1 text-gold1 text-[2.5vh] ${buttonVis ? "":"hidden"}  mt-[1vh]`}>Load More</button>
        </div>
    </div>
    
  )
}

export default FatCompare