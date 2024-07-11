"use client"
import { Link } from 'react-scroll/modules';
import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import '../utils/Navber.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(!false);
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (linkId) => {
      setActiveLink(linkId);
  };
  return (
    //Navbar code start
    <div className=" sticky -top-1 bg-opacity-50   backdrop-blur-3xl   lg:h-[80px] w-full  h-auto   bg-[#fef9f6]  ">
    <div className="max-w-7xl mx-auto ">
      <nav className="px-6 py-3 flex lg:flex-row flex-row-reverse justify-between items-center">
        <div className="flex items-center ">
          <Link to="/" offset={-90}  smooth={true} className=" font-bold">
          <h2 className='text-[#18233B] cursor-pointer invisible lg:visible md:text-2xl text-xl font-medium'>Hope<span class='text-[#068278]'>Aid</span> </h2>
          </Link>

          <div className=" lg:invisible visible" >
                  <button className="bg-[#FFF] border-[#068278] border text-[#068278] hover:bg-[#068278] btn rounded-3xl px-7 py-2 hover:text-white hover:border-0">
                   
                  Signup
                  </button>
                </div>
        </div>
         {/* lg: device navbar    */}
        <ul className="hidden cursor-pointer lg:flex justify-between items-center gap-8 text-base text-[#18233B] font-normal ">
          <li>
            <Link to='/' smooth={true} offset={-90}
             className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'home' ? 'clicked' : ''}`}
             onClick={() => handleClick('home')}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='donation' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'donation' ? 'clicked' : ''}`}
             onClick={() => handleClick('donation')}
            >
            Donation
              
            </Link>
          </li>
          <li>
            <Link
              to='features' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'features' ? 'clicked' : ''}`}
             onClick={() => handleClick('features')}
            >
             Features
              
            </Link>
          </li>

          <li>
            <Link
              to='volunteer' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'volunteer' ? 'clicked' : ''}`}
             onClick={() => handleClick('volunteer')}
            >
              Volunteer
            </Link>
          </li>

          <li>
            <Link
              to='blog' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'blog' ? 'clicked' : ''}`}
             onClick={() => handleClick('blog')}
            >
            Blog
            </Link>
          </li>
        
        </ul>

        <div className="flex items-center  gap-x-3">
          {/* Mobile device navbar */}
          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className="lg:hidden order-2"
          >
            {toggleMenu === true ? (
              <svg  className="lg:hidden -ml-[150px]  text-3xl font-semibold text-[#18233B] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M5.49762 12H18.5027" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.49762 16.0017H18.5027" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.49728 7.99832H18.5024" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ) : (
              <IoClose className="lg:hidden -ml-[150px] text-2xl text-[#18233B] cursor-pointer" />
            )}

            <ul
              className={`mt-[150px] absolute w-full h-[300px] rounded-md top-full right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-[#FFF] backdrop-blur-3xl text-[#18233B] p-8 z-50 flex flex-col items-center  gap-y-4 text-xl font-medium lg:hidden ${toggleMenu ? "hidden" : ""
                }`}
            >
                 <li>
            <Link to='/' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'home' ? 'clicked' : ''}`}
             onClick={() => handleClick('home')}
            >
              Home
            </Link>
          </li>
         
          <li>
            <Link
              to='donation' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'donation' ? 'clicked' : ''}`}
             onClick={() => handleClick('donation')}
            >
              Donation
            </Link>
          </li>
          <li>
            <Link
              to='features' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'features' ? 'clicked' : ''}`}
             onClick={() => handleClick('features')}
            >
            Features
              
            </Link>
          </li>
          <li>
            <Link
              to='volunteer' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'volunteer' ? 'clicked' : ''}`}
             onClick={() => handleClick('volunteer')}
            >
             Volunteer
            </Link>
          </li>

          <li>
            <Link
             to='blog' smooth={true} offset={-90} 
             className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'blog' ? 'clicked' : ''}`}
            onClick={() => handleClick('blog')}
            >
             Blog
            </Link>
          </li>
            </ul>
            
          </div>

          {/* Navbar button */}

                <div className="ml-4 invisible lg:visible " >
                  <button className="bg-[#FFF] border-[#068278] border text-[#068278] btn hover:bg-[#068278] rounded-3xl px-8 py-3 hover:text-white hover:border-transparent">
                   
                  Signup
                  </button>
                </div>
        </div>
      </nav>
    </div>
  </div>
  //Navbar code end
  );
};

export default Navbar;