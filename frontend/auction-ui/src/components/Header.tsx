import { useState } from "react";
import longlogo from "../assets/Logo_horizontal.svg.svg";

import "../styles/Animations.css";

import { HashLink as Link} from 'react-router-hash-link';

function Header() {

  return (
    // change to grid system 
    <>
      <header className="flex justify-around items-center mt-2 sm:mt-[-20px] mb-72 md:mb-0 md:mt-3 lg:mt-6 lg:mx-24 xl:mx-0 py-[25px] rounded-2xl h-24 bg-[#0B0C15]/90">
      <div className="grid grid-cols-4 gap-1 sm:grid-cols-6 sm:gap-2 md:grid-cols-8 md:gap-3 lg:grid-cols-12 lg:gap-4 items-center lg:pr-28 xl:pr-0 lg:mr-12 xl:mr-0">
      <div className="col-start-1 col-span-3">
        <div className="flex flex-row justify-start">
          <img className="hidden sm:inline-block h-16 pl-5 fadeInLeft" src={longlogo} alt="" />
        </div>
        </div>

        {/* desktop nav */}
        <div className='col-start-9 col-span-3 items-center pb-1'>
        <nav className="hidden lg:flex gap-5 items-center fadeInRight">
          
          <Link to='#Dashboard' smooth className="text-white hover:text-[#2E396D] font-bold text-xl flex flex-col items-center">
            Dashboard
          </Link>
          <Link to='#SDK' smooth className="text-white hover:text-[#2E396D] font-bold text-xl flex flex-col items-center">
            SDK
          </Link>
          <a href="https://turtleshell.gitbook.io/introduction/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#2E396D] font-bold text-xl flex flex-col items-center">
            Docs
          </a>
          <Link to='#Community' smooth className="text-white hover:text-[#2E396D] font-bold text-xl flex flex-col items-center">
            Community
          </Link>
        </nav>
        </div>
        </div>

      </header>
    </>
  );
}

export default Header;