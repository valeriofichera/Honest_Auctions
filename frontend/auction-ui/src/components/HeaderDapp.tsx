// import { useState } from "react";
// import longlogo from "../assets/Logo_horizontal.svg";
// import { WalletBtn } from "./WalletBtn";

// function Header() {

//   return (
//     // change to grid system
//     <div className="bg-[#8699c2]">
//       <header className="flex justify-center items-center m-6 py-[25px] rounded-xl h-24 bg-[#0B0C15]/90">
//       <div className="grid grid-cols-4 gap-1 sm:grid-cols-6 sm:gap-2 md:grid-cols-8 md:gap-3 lg:grid-cols-12 lg:gap-4 items-center lg:pr-28 xl:pr-0 lg:mr-12 xl:mr-0">
//       <div className="col-start-1 col-span-3">
//         <div className="flex flex-row justify-start">
//           <img className="hidden sm:inline-block h-16 pl-5 fadeInLeft" src={longlogo} alt="" />
//         </div>
//         </div>

//         {/* desktop nav */}
//         <div className='col-start-9 col-span-3 items-center pb-1'>
//         <nav className="hidden lg:flex gap-5 items-center fadeInRight">

//           <a href="/auction/:00012" className="text-white hover:text-[#2E396D] font-bold text-xl flex flex-col items-center">
//             Auctions
//           </a>
//           <div className="text-white hover:text-[#2E396D] font-bold text-xl flex flex-col mx-5 items-center">
//             <WalletBtn />
//           </div>
//         </nav>
//         </div>
//         </div>

//       </header>
//     </div>
//   );
// }

// export default Header;

import { useState } from "react";
import logo from "../assets/Logo.svg";
import longlogo from "../assets/Logo_horizontal.svg";
import Hamburger from "./Hamburger";

import "../styles/Animations.css";

import { HashLink as Link } from "react-router-hash-link";
import { WalletBtn } from "./WalletBtn";

function Header() {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    // change to grid system
    <>
      <header className="flex justify-center items-center m-6 py-[25px] rounded-xl h-24 bg-[#0B0C15]/90">
        <div className="grid grid-cols-4 gap-1 sm:grid-cols-6 sm:gap-2 md:grid-cols-8 md:gap-3 lg:grid-cols-12 lg:gap-4 items-center lg:pr-28 xl:pr-0 lg:mr-12 xl:mr-0">
          <div className="col-start-1 col-span-3">
            <div className="flex flex-row justify-start">
              <img
                className="hidden sm:inline-block h-16 pl-5 fadeInLeft"
                src={longlogo}
                alt=""
              />
              <img className="sm:hidden h-16 fadeInLeft" src={logo} alt="" />
            </div>
          </div>

          {/* desktop nav */}
          <div className="col-start-10 col-span-3 items-center pb-1">
            <nav className="hidden lg:flex gap-5 items-center fadeInRight">
              <WalletBtn />
            </nav>
          </div>
        </div>

        {/* hamburger */}
        {nav ? (
          // close button
          <i
            className="md:block lg:hidden fixed right-[30px] fa fa-times text-3xl z-50"
            aria-hidden="false"
            onClick={showNav}
          >
            <Hamburger />
          </i>
        ) : (
          <i
            className="md:block lg:hidden fa fa-bars text-3xl"
            aria-hidden="false"
            onClick={showNav}
          >
            <Hamburger />
          </i>
        )}

        {/* mobile nav */}
        <nav
          className={`h-[100vh] fixed top-[0px] flex flex-col justify-around items-center w-full bg-black text-white text-bold text-5xl z-40 duration-1000 ${nav ? "right-[0px]" : "right-[-400vw]"} `}
        >
          <a href="#" className=""></a>
          <Link to="#HowItWorks" smooth className="text-white">
            How it Works
          </Link>
          <Link to="#" smooth className="text-white ">
            123
          </Link>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            q
          </a>
          <div className="flex flex-row gap-10">
            {/* <a href="" target="_blank" rel="noopener noreferrer" className="">
              <img className="h-20" src={Twitter} alt="" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="">
              <img className="h-20" src={Telegram} alt="" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="">
              <img className="h-20" src={medium} alt="" />
            </a> */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
