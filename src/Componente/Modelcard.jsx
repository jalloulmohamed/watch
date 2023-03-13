import React, { useEffect, useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import {CiTimer} from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'


export const Modelcard = ({data}) => {
     const[play,setPlay] = useState("");
     const navigate = useNavigate()


  return (

    <div>
      <div onClick={()=>{ if(data.url){setPlay(data.url + "/Witanimecom_DA_EP_01_FHD.html")}}} className='  cursor-pointer bg-cover z-10   m-auto relative rounded-[8px]'>
       
        <img className=' rounded-[8px]  w-[100%]   ' src={data.img}  alt=""   />
        <div className=' w-[100%] rounded-[8px]  absolute  h-[100%]  opacity-70 left-0 bottom-0 right-0 top-0 m-auto  bg-[#181A20]'>
        </div>
        <h1 className='text-[#fff] absolute top-[5px] bg-[#06C149] rounded-[5px] px-[5px] right-[10px]  text-[15px]'>7.9</h1>
        <div className='  left-[10px]  absolute bottom-0 right-0 m-auto py-[10px]'>
          <h1 className=' text-[14px] md:text-[20px] font-[300] text-[#fff] text-start ' >Attack on taiten</h1>
          <h1 className=' text-[14px] text-[#fff] text-start ' >Episode 09</h1>
        </div>
        {
          !data.url && <div className=' w-[100%] rounded-[8px]  absolute  h-[100%]  opacity-70 left-0 bottom-0 right-0 top-0 m-auto  bg-[#0d0d0d]'>
            <div className='flex p-[10px] ] items-center	'>
              <h1 className='text-[#06C149]   text-[14px] ' >Unavailable</h1>
              <CiTimer className='text-[#06C149] ml-[10px]'></CiTimer>
            </div>
          </div>
        }
        
      </div>
        <>{play &&  <div className=' z-20  absolute left-0 bottom-0 bg-[#0000006d] right-0 top-0 w-[100vw] '>
                      <div className=' absolute   bg-[#181A20] w-[100%] h-[100%]  xl:w-[1000px]  xl:h-[500px] left-0   bottom-0 right-0 top-0  m-auto'>
                        <video  src="https://dc596.4shared.com/img/w2WM_YR-iq/f215fabc/dlink__2Fdownload_2Fw2WM_5FYR-iq_3Fsbsr_3D9087d6767f59819d0552eeb16692108dad7_26bip_3DNjIuMjUxLjE2MS44OA_26lgfp_3D20_26bip_3DNjIuMjUxLjE2MS44OA_26bip_3DNjIuMjUxLjE2MS44OA/preview.mp4" className='  w-[100%] h-[100%]  ' controls >

                        </video>
                          <IoMdClose onClick={()=>{setPlay(!play)}} className=' text-[25px] md:text-[25px] text-[#fff] absolute top-0 right-0  m-[10px] '></IoMdClose>
                      </div>
                      
                  </div>
        }</>

    </div>
    
  )
}
