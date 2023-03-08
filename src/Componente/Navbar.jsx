import React from 'react'


export const Navbar = () => {
  return (
    <div className='py-[20px]  px-[5px] items-center justify-between bg-[#181A20]   flex text-[#fff]'>
        <div className='flex items-end'>
            <img src="./img/logo.svg" alt=""  width={50}/>
            <h1 className='text-[25px] ml-[10px]'>Anime</h1>
        </div>
        {/* <div className=' '>
          <a href="https://www.buymeacoffee.com/medjalal19g"><img width={170} src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=medjalal19g&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
        </div> */}
    </div>
  )
}
