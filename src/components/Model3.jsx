import React from 'react';
import {ChevronDownIcon} from '@heroicons/react/outline'
import {Link} from 'react-scroll';

import Model3Image from '../assets/Model3.png'

const Model3 = () => {

  return (
    <div>
      <div className='w-full'>
        <img src={Model3Image} alt="/" className='absolute w-screen h-screen object-cover md:h-screen md:w-full md:object-cover'/>
      </div>
      <div className='max-w-[1240px] mx-auto relative text-center'>
        <h1 className='pt-[110px] text-5xl font-semibold transition-all animate-fadeIn'>Model 3</h1>
        <p className='mt-2 text-lg animate-fadeIn font-normal text-slate-500'> Order Online for <span className='underline hover:text-black font-semibold cursor-pointer'> Touchless Delivery</span> </p>
      </div>
      <div className='grid md:grid-cols-2 relative text-center mt-[300px] gap-x-7 sm:mr-5 mx-16 gap-y-7'>
          <div className='border rounded-full bg-zinc-700 text-stone-200 font-semibold text-lg sm:ml-[370px] cursor-pointer animate-fadeIn'>
            <h1 className='py-2'>Custom Order</h1>
          </div>
          <div className='border rounded-full bg-stone-200 text-zinc-700 font-semibold text-lg sm:mr-[370px] cursor-pointer animate-fadeIn'>
            <h1 className='py-2'>Exisiting Inventory</h1>
          </div>
      </div>
      <div className='mt-[80px] absolute ml-[180px] sm:ml-[660px] mb-7 cursor-pointer animate-bounce animate-fadeIn'>
        <Link to='ModelY' smooth={true}><ChevronDownIcon className='h-8'/></Link>
      </div>
    </div>
  )
}

export default Model3