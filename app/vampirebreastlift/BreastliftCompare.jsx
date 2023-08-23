'use client'
import React, {useState} from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import boobs1Before from '@/public/boobs1before.jpeg';
import boobs1After from '@/public/boobs1after.jpeg';
import boobs2Before from '@/public/boobs2before.jpeg';
import boobs2After from '@/public/boobs2after.jpeg';
import boobs3Before from '@/public/boobs3before.jpeg';
import boobs3After from '@/public/boobs3after.jpeg';
import boobs4Before from '@/public/boobs4before.jpeg';
import boobs4After from '@/public/boobs4after.jpeg';
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
  return (
    <div className={` py-[2vh] w-full `}>
        <div className={`w-full flex flex-col justify-center items-center `}>
            <h1 className={`text-gold1  text-center text-[5vh] mb-[1vh] font-header`}>Treatment Effects</h1>
            <div className={`flex flex-row justify-between w-[50%] mx-auto`}>
                <h1 className={`text-[3.5vh] text-white font-main`}>Before</h1>
                <h1 className={`text-[3.5vh] text-white font-main`}>After</h1>
            </div>
            <div onMouseEnter={() => setHov1(true)} onMouseLeave={() => {setHov1(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov1 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs1Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs1After} srcSet={boobs1After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov1 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs1Before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs1After}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov2(true)} onMouseLeave={() => {setHov2(false)}} className={`flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov2 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs2Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs2After} srcSet={boobs2After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov2 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs2Before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs2After}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov3(true)} onMouseLeave={() => {setHov3(false)}} className={`${vis3 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov3 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs3Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs3After} srcSet={boobs3After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov3 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs3Before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs3After}></img>
                </div>
            </div>
            <div onMouseEnter={() => setHov4(true)} onMouseLeave={() => {setHov4(false)}} className={`${vis4 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov4 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={boobs4Before} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={boobs4After} srcSet={boobs4After} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov4 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs4Before}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={boobs4After}></img>
                </div>
            </div>

            <div onMouseEnter={() => setHov5(true)} onMouseLeave={() => {setHov5(false)}} className={`${vis5 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov5 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={breastlift_before9} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={breastlift_after9} srcSet={breastlift_after9} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov5 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_before9}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_after9}></img>
                </div>
            </div>

            <div onMouseEnter={() => setHov6(true)} onMouseLeave={() => {setHov6(false)}} className={`${vis6 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov6 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={breastlift_before10} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={breastlift_after10} srcSet={breastlift_after10} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov6 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_before10}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_after10}></img>
                </div>
            </div>

            <div onMouseEnter={() => setHov7(true)} onMouseLeave={() => {setHov7(false)}} className={`${vis7 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov7 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={breastlift_before12} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={breastlift_after12} srcSet={breastlift_after12} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov7 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_before12}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_after12}></img>
                </div>
            </div>

            <div onMouseEnter={() => setHov8(true)} onMouseLeave={() => {setHov8(false)}} className={`${vis8 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov8 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={breastlift_before13} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={breastlift_after13} srcSet={breastlift_after13} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov8 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_before13}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_after13}></img>
                </div>
            </div>

            <div onMouseEnter={() => setHov9(true)} onMouseLeave={() => {setHov9(false)}} className={`${vis9 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov9 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={breastlift_before15} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={breastlift_after15} srcSet={breastlift_after15} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov9 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_before15}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_after15}></img>
                </div>
            </div>

            <div onMouseEnter={() => setHov10(true)} onMouseLeave={() => {setHov10(false)}} className={`${vis10 ? '' : 'hidden'} flex flex-row justify-between w-full h-[25vh] my-[1vh]`}>
                <div className={`flex w-full h-full justify-between ${hov10 ? '' : 'hidden'} ease-in-out duration-500`}>
                    <div className={`flex w-full md:w-[50%] mx-auto  h-full justify-center`}>
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src="sjfksldfj" srcSet={breastlift_before22} alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage src={breastlift_after22} srcSet={breastlift_after22} alt="Image two" />}
                        />
                    </div>
                    
                </div>
                <div className={`flex w-full h-full justify-between md:justify-center ${hov10 ? 'hidden' : ''} ease-in-out duration-500`}>
                    <img className={`md:mr-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_before22}></img>
                    <div className={`h-full w-[0.2vh] bg-gold1`}></div>
                    <img className={`md:ml-[3vh] w-[47%] md:w-[43%] object-cover`} src={breastlift_after22}></img>
                </div>
            </div>
            <button onClick={() => handleImages()} className={`flex mx-auto px-[1vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 text-[2.5vh]  ${buttonVis ? "":"hidden"} mt-[1vh] font-main`}>Load More</button>
        </div>
    </div>
    
  )
}

export default BreastliftCompare