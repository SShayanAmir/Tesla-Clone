import React from 'react'

import ModelYImage from '../assets/ModelY.jfif'

const ModelY = () => {
  return (
    <div className='mt-[125px]' id='ModelY'>
      <div className='w-full'>
        <img src={ModelYImage} alt="/" className='absolute w-screen h-screen object-cover md:h-screen md:w-full md:object-cover'/>
      </div>
      <div className='max-w-[1240px] mx-auto relative text-center'>
        <h1 className='pt-[110px] text-5xl font-semibold transition-all animate-fadeIn'>Model Y</h1>
        <p className='mt-2 text-lg animate-fadeIn font-normal text-slate-500'> Order Online for <span className='underline hover:text-black font-semibold cursor-pointer'> Touchless Delivery</span> </p>
      </div>
      <div className='grid md:grid-cols-2 relative text-center mt-[300px] gap-x-7 sm:mr-5 mx-16 gap-y-7 js-show-on-scroll'>
          <div className='rounded-full bg-zinc-700 text-stone-200 font-semibold text-lg sm:ml-[370px] cursor-pointer animate-fadeIn'>
            <h1 className='py-2 uppercase'>Custom Order</h1>
          </div>
          <div className='rounded-full bg-stone-200 text-zinc-700 font-semibold text-lg sm:mr-[370px] cursor-pointer animate-fadeIn'>
            <h1 className='py-2 uppercase'>Exisiting Inventory</h1>
          </div>
      </div>
    </div>
  )
}

export default ModelY