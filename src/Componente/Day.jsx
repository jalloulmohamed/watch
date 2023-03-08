import {React,useState} from 'react'


export const Day = ({day,name,func,select}) => {
  const[datenew,setDatenew] = useState(new Date());
  return (
    <div  className=" text-[#616161] cursor-pointer  flex justify-center items-center">
      <div onClick={() =>{func(day)}} className={`${(datenew.getDate() === day) ? " text-[#fff] ": "" } ${(select === day) ? "bg-[#06C149]  text-[#fff]" : ""}   rounded-full   p-[10px]`}>
        <h3>{name}</h3>
        <h3 className=''>{day}</h3>
      </div>
    </div>
  )
}
