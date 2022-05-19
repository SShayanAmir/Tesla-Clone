import React from 'react'

import SolarPanelsImage from '../assets/SolarPanels.jfif'

const SolarPanels = () => {
  return (
    <div className='mt-[125px]'>
    <div className='w-full'>
      <img src={SolarPanelsImage} alt="/" className='absolute w-screen h-screen object-cover md:h-screen md:w-full md:object-cover'/>
    </div>
    <div className='max-w-[1240px] mx-auto relative text-center'>
      <h1 className='pt-[110px] text-5xl font-semibold transition-all animate-fadeIn'>Solar Panels</h1>
      <p className='mt-2 text-lg animate-fadeIn font-normal text-slate-500'>Lowest Cost Solar Panels in America </p>
    </div>
    <div className='grid md:grid-cols-2 relative text-center mt-[300px] gap-x-7 sm:mr-5 mx-16 gap-y-7 js-show-on-scroll'>
        <div className='rounded-full bg-zinc-700 text-stone-200 font-semibold text-lg sm:ml-[370px] cursor-pointer animate-fadeIn'>
          <h1 className='py-2 uppercase'>Order Now</h1>
        </div>
        <div className='rounded-full bg-stone-200 text-zinc-700 font-semibold text-lg sm:mr-[370px] cursor-pointer animate-fadeIn'>
          <h1 className='py-2 uppercase'>Learn more</h1>
        </div>
    </div>
  </div>
  )
}

export default SolarPanels