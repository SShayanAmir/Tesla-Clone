import React from 'react'

const Footer = () => {
  return (
      <div className='flex-cols sm:flex justify-center mt-16 relative'>
          <div className='px-2 mx-[130px] sm:mx-0 text-center py-1 sm:py-0'>
              <h1 className='cursor-pointer font-normal text-slate-700 '>Tesla © 2022</h1>
          </div>
          <div className='sm:px-2 mx-[130px] sm:mx-0 text-center py-1 sm:py-0'>
                <h1 className='cursor-pointer font-normal text-slate-700 '> Privacy & Legal</h1>
          </div>
          <div className='sm:px-2 mx-[130px] sm:mx-0 text-center py-1 sm:py-0'>
              <h1 className='cursor-pointer font-normal text-slate-700 '> Vehicle Recalls</h1>
          </div>
          <div className='sm:px-2 mx-[130px] sm:mx-0 text-center py-1 sm:py-0 hidden sm:flex'>
              <h1 className='cursor-pointer font-normal text-slate-700'> Contact </h1>
          </div>
          <div className='sm:px-2 mx-[130px] sm:mx-0 text-center py-1 sm:py-0'>
              <h1 className='cursor-pointer font-normal text-slate-700 '> Careers </h1>
          </div>
          <div className='sm:px-2 mx-[130px] sm:mx-0 text-center py-1 sm:py-0'>
              <h1 className='cursor-pointer font-normal text-slate-700 '> News </h1>
          </div>
          <div className='sm:px-2 mx-[130px] sm:mx-0 text-center py-1 sm:py-0 hidden sm:flex'>
              <h1 className='cursor-pointer font-normal text-slate-700 '> Enage </h1>
          </div>
          <div className='sm:px-2 mx-[130px] sm:mx-0 text-center py-1 sm:py-0 hidden sm:flex'>
              <h1 className='cursor-pointer font-normal text-slate-700'> Locations </h1>
          </div>
      </div>
  )
}

export default Footer