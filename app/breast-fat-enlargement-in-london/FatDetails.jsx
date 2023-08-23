import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const FatDetails = () => {
  return (
    
    <div className={` flex w-full flex-row     `}>
         
        <div className={`hidden md:flex w-[55%] h-[100%]   flex flex-col items-left justify-between md:p-[2vh] pt-[0px] `}>
            <div className={`flex flex-col w-[100%]   items-center justify-center my-auto p-[1vh]`}>

                <p className={`flex text-gold1 text-[6vh] text-center`}>How does it work?</p>
                <p className={`flex text-white text-[2.2vh] mt-[5vh]`}>This method of breast augmentation does not use any artificial implants, but instead uses autologous fat from your own body. This procedure is therefore also called fat grafting, autologous fat transfer, and lipofilling to the breast.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh]`}>The procedure involves the initial harvesting of the fat cells using liposuction from the donor area(s); the suctioned fat is then processed to extract only the yellow fat cells into a syringe ready for re-injection, (this removes any other liquid or blood gathered as part of the liposuction procedure). The second procedure places the fat into the breast, the recipient area, through re-injection.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh]`}>The aim of the procedure is to naturally enhance the breast shape and augment the size, but without the need to place a silicone breast implant. Some women prefer the concept of a more natural result, using their own fat, which is a 100% natural product, rather than inserting an artificial implant.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh]`}>Unlike with an implant, the resulting size of the breast augmentation cannot be guaranteed because the transplanted fat must settle and develop a blood supply to survive in its new location. Inevitably, a proportion of the cells will perish and be reabsorbed by the body (metabolised) as part of the process, (this is expected and usually the quantity transferred it a little more than required to account for a percentage loss in fat cells). You may often be advised to have a repeat procedure to build up the augmentation, allowing each fat transfer to integrate, or if the resultant breast size is not as desired.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh]`}>The plasma has a high concentration of growth factors, the cells in our body, which are responsible for rejuvenation and regeneration, and is a powerful and natural method of rejuvenation.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

            </div>
            
        </div>
        <div className={`hidden md:flex w-[45%] h-[100%] flex items-center`}>
            <video src="/fat_cells.mp4" autoPlay loop muted className={` object-cover w-[100%] h-[100%]`}></video>
            {/* <img className={`w-full h-full object-cover`} src={sherif}></img> */}
        </div>

        <div className={`flex flex-col md:hidden items-center`}>
            <p className={`flex text-gold1 text-[6vh] text-center`}>How does it work?</p>
            <video src="/fat_cells.mp4" autoPlay loop muted playsInline className={` object-cover h-[100%]`}></video>
                <p className={`flex text-white text-[2.2vh] mt-[5vh] ml-[1vh]`}>This method of breast augmentation does not use any artificial implants, but instead uses autologous fat from your own body. This procedure is therefore also called fat grafting, autologous fat transfer, and lipofilling to the breast.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh]`}>The procedure involves the initial harvesting of the fat cells using liposuction from the donor area(s); the suctioned fat is then processed to extract only the yellow fat cells into a syringe ready for re-injection, (this removes any other liquid or blood gathered as part of the liposuction procedure). The second procedure places the fat into the breast, the recipient area, through re-injection.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh]`}>The aim of the procedure is to naturally enhance the breast shape and augment the size, but without the need to place a silicone breast implant. Some women prefer the concept of a more natural result, using their own fat, which is a 100% natural product, rather than inserting an artificial implant.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh]`}>Unlike with an implant, the resulting size of the breast augmentation cannot be guaranteed because the transplanted fat must settle and develop a blood supply to survive in its new location. Inevitably, a proportion of the cells will perish and be reabsorbed by the body (metabolised) as part of the process, (this is expected and usually the quantity transferred it a little more than required to account for a percentage loss in fat cells). You may often be advised to have a repeat procedure to build up the augmentation, allowing each fat transfer to integrate, or if the resultant breast size is not as desired.</p>
                <p className={`flex text-white text-[2.2vh] mt-[1.5vh] ml-[1vh]`}>The plasma has a high concentration of growth factors, the cells in our body, which are responsible for rejuvenation and regeneration, and is a powerful and natural method of rejuvenation.</p>
                <Link href="/book-now"><button className={` text-[3vh] px-[2vh] py-[0.5vh] bg-black border-gold1 border-2 text-gold1 hover:bg-white mt-[5vh]  md:mt-[1vh] font-main`}>Book Consultation</button></Link>

        </div>
       
       
        
    
    </div>
  )
}

export default FatDetails