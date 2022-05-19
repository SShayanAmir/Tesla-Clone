import React, {useState} from "react";
import teslaLogo from "../assets/tesla-logo-png-2244.png";

import {XIcon, GlobeAltIcon, ChevronRightIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const navHandler = () => setNav(!nav)

  return (
    <div className="w-screen h-[80px] z-10 bg-transparent fixed drop-shadow-sm">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className={!nav ? "flex items-center" : "flex items-center blur-sm"}>
          <img
            src={teslaLogo}
            alt="/"
            className=" h-[15px] sm:h-[15px] justify-centersm:px-10 px-6 mr-32 cursor-pointer"
          />
          <ul className="hidden md:flex justify-between mt-1 ml-20 text-gray-700 font-semibold mr-36">
            <li className="py-1 px-3 hover:bg-slate-300 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer">Model S</li>
            <li className="py-1 px-3 hover:bg-slate-300 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer">Model 3</li>
            <li className="py-1 px-3 hover:bg-slate-300 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer">Model X</li>
            <li className="py-1 px-3 hover:bg-slate-300 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer">Model Y</li>
            <li className="py-1 px-3 hover:bg-slate-300 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer">Solar Roof</li>
            <li className="py-1 px-3 hover:bg-slate-300 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer">Solar Panels</li>
          </ul>
          <ul className="hidden md:flex justify-between mt-1 ml-4 text-gray-700 font-semibold">
              <li className="py-1 px-3 hover:bg-slate-300 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer">Shop</li>
              <li className="py-1 px-3 hover:bg-slate-300 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer">Account</li>
          </ul>
          <ul className="md:flex justify-between mt-1 ml-2 text-gray-700 font-semibold">
              <li className="py-1 px-2 bg-slate-300 sm:bg-transparent sm:hover:bg-slate-300 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer" onClick={navHandler}>Menu</li>
          </ul>
        </div>
      </div>
          <ul className={!nav ?  'hidden' : "absolute transition-all duration-700 ease-in right-0 h-screen inset-y-0 w-[310px] bg-white overflow-y-scroll scroll-smooth"}>
              <li className="w-[25px] ml-[240px] mt-6 mb-6 text-black hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer" onClick={navHandler}><XIcon /></li>
              <li className="text-gray-700 font-semibold ml-10 py-1 sm:hidden mt-14 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Model X</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 sm:hidden hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Model 3</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 sm:hidden hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Model S</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 sm:hidden hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Solar Roof</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 sm:hidden hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Solar Panels</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 sm:mt-8 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Exisiting Inventory</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Used Inventoey</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Trade-in</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Test Drive</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Insurance</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Cybertruck</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Roadster</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Semi</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Charging</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Powerwall</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Commercial energy</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Utilities</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Find Us</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Support</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Investor Relations</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 sm:hidden hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Shop</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 sm:hidden hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px]">Accout</li>
              <li className="text-gray-700 font-semibold ml-10 py-1 my-2 sm:hidden hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px] flex">More <ChevronRightIcon className="h-6 ml-[150px]"/></li>
              <div className="text-gray-700 font-semibold ml-10 hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-500 cursor-pointer pl-2 w-[220px] mt-5">
                <li className=" flex"><GlobeAltIcon className="h-5 mr-2 mt-1"/> United States </li>
                <li className="ml-[30px] font-normal text-gray-500">English </li>
              </div>
          </ul>
    </div>
  );
}

export default Navbar;
