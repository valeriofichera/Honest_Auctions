import { useState } from "react";
import longlogo from "../assets/Logo_horizontal.svg";
import { WalletBtn } from "./WalletBtn";


function Header() {

  return (
    // change to grid system 
    <div className="bg-[#8699c2]">
      <header className="flex justify-center items-center m-6 py-[25px] rounded-xl h-24 bg-[#0B0C15]/90">
      <div className="grid grid-cols-4 gap-1 sm:grid-cols-6 sm:gap-2 md:grid-cols-8 md:gap-3 lg:grid-cols-12 lg:gap-4 items-center lg:pr-28 xl:pr-0 lg:mr-12 xl:mr-0">
      <div className="col-start-1 col-span-3">
        <div className="flex flex-row justify-start">
          <img className="hidden sm:inline-block h-16 pl-5 fadeInLeft" src={longlogo} alt="" />
        </div>
        </div>

        {/* desktop nav */}
        <div className='col-start-9 col-span-3 items-center pb-1'>
        <nav className="hidden lg:flex gap-5 items-center fadeInRight">
          
          <a href="/auction/:00012" className="text-white hover:text-[#2E396D] font-bold text-xl flex flex-col items-center">
            Auctions
          </a>
          <div className="text-white hover:text-[#2E396D] font-bold text-xl flex flex-col mx-5 items-center">
            <WalletBtn />
          </div>
        </nav>
        </div>
        </div>

      </header>
    </div>
  );
}

export default Header;