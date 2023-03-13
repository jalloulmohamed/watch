import React, { useEffect } from 'react'
import {useState} from 'react';
import { Day } from './Day';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useNavigate } from 'react-router-dom'

const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};


export const Calendar = () => {
    const navigate = useNavigate()
    const[datenew,setDatenew] = useState(new Date());
    const[numbreofday,setNumbreofday] = useState();
    const week = ["Mon","Tue","Wed","Thu","Frid","Satu","Sun"];
    const[select,setSelect] = useState(datenew.getDate());


    useEffect(() =>{
      setNumbreofday(getDays(datenew.getFullYear(),datenew.getMonth()+1));
    },[datenew.getMonth()])


    useEffect(()=>{
      navigate('/' + select + "_" +(datenew.getMonth()+1)+"_"+datenew.getFullYear())
     },[select])



    const list = []
    for (let  i = datenew.getDate(); i <= numbreofday; i++) {
      list.push(
                <SplideSlide >
                    <Day select={select} func={setSelect}  day={i} name={week[i%7]} ></Day>
                </SplideSlide>)
    }
  return (
    <div className=' bg-[#181A20]   text-center '>
      <div className='flex items-center justify-end '>
        <h1 className='text-[#fff] pb-[5px]  md:pb-[20px] px-[10px] text-[20px] md:text-[30px]'>
        Release Calendar
        </h1>
      </div>
      <Splide  options={{
                          perPage:7,
                          arrows:false,
                          pagination:false,
                          drag   : 'free',
                          autoWidth: false,
                          
                        }}>
        {list}
      </Splide>
    </div>
  )
}
