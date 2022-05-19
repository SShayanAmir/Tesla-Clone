import React from 'react'

import AccessoriesImage from '../assets/Accessories.jfif'

const Accessories = () => {
  return (
    <div className="mt-[125px]">
    <div className="w-full">
      <img
        src={AccessoriesImage}
        alt="/"
        className="absolute w-screen h-screen object-cover md:h-screen md:w-full md:object-cover"
      />
    </div>
    <div className="max-w-[1240px] mx-auto relative text-center">
      <h1 className="pt-[110px] text-5xl font-semibold transition-all animate-fadeIn">
      Accessories
      </h1>
    </div>
    <div className="grid relative text-center justify-center mt-[325px] gap-x-7 sm:mr-5 mx-16 gap-y-7">
      <div className="rounded-full bg-black text-stone-200 font-semibold text-sm sm:mr-[500px] sm:ml-[450px] cursor-pointer animate-fadeIn mt-[20px] sm:mt-0 mb-6">
        <h1 className="px-20 py-3 sm:py-3 sm:px-28 uppercase">Shop Now</h1>
      </div>
    </div>
  </div>
  )
}

export default Accessories