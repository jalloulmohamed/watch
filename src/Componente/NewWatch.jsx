import React, { useState } from 'react'
import { Modelcard } from './Modelcard'
import { useEffect } from 'react';
import axios  from "axios";
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";

export const NewWatch = () => {
    const[data,setData] = useState([]);
    const param =useParams()
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
      setLoading(true);
       axios.get(process.env.React_App_API,{ params: {day: param.type,}}).then((item) =>{
         setData(item.data.data)
         setLoading(false);
      })       
    },[param])
    const show1 = data.map((ele, index)=>{
      if(ele.url)
        return (<Modelcard  data={ele} ></Modelcard>); 
      })
    const show2 = data.map((ele, index)=>{
        if(!ele.url)
          return (<Modelcard  data={ele} ></Modelcard>); 
      })
  return (
    <div className='z-0 grid grid-cols-2 md:grid-cols-4 auto-rows-max  overflow-auto gap-4   p-[10px]'>
      {loading && <div className='col-span-4 pt-[100px] text-center w-[100%]'>
        <ReactLoading className='m-auto' type="spin" color="#06C149"
          height={100} width={50} />
      </div>}
      {
        !loading && <>{show1} {show2}</>
      }
      {
        !loading && !show1.length && !show2.length && <div className='col-span-4 pt-[100px] text-center w-[100%]'> 
              <img className='m-auto' src="/img/empty.svg" alt="" srcset=""  width={200}/>
              <h1 className='text-[35px] mt-[20px] text-[#06C149]'>No Release Schedule</h1>
              <p className='text-[15px] text-[#616161]' >Sorry, there is no anime release schedule on this date</p>
        </div>
      }
      
    </div>
      )
}
