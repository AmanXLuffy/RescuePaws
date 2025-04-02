import React from 'react'
import {useState } from 'react';
import { BsX, BsMenuButton,} from 'react-icons/bs';
import { GiPlagueDoctorProfile } from "react-icons/gi";
import logo from '../assets/newLogo.jpg';

import { Link } from 'react-router-dom';

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

const menuOpen = () => {
  if (!isOpen) {
    window.addEventListener('resize', handleResize);
  } else {
    window.removeEventListener('resize', handleResize);
  }
  setIsOpen(!isOpen);
};

const handleResize = () => {
  if (window.innerWidth > 768) {
    setIsOpen(false);
    window.removeEventListener('resize', handleResize);
  }
};

  return (
    <nav className='relative top-0 z-10 flex md:h-[90px] h-[80px] w-full bg-gray-500 opacity-90 backdrop-blur-lg items-center justify-between px-6 md:px-16 border-b-2 border-gray-500 py-6 text-white'>
     <a href='/'> <img className='h-12 md:h-16 md:w-20 shrink-0 mix-blend-color-burn opacity-80 transition-all duration-300 hover:opacity-100 ' src={logo} alt='Logo' /></a>

      {/* <a href='/' className='text-white opacity-80 md:text-3xl font-semibold text-lg transition-all duration-300 hover:opacity-100'>RescuePaws</a> */}
      <a href='/' className='bg-gradient-to-r from-orange-200 to-yellow-300 bg-clip-text text-transparent opacity-80 text-2xl md:text-3xl font-semibold transition-all duration-300 hover:opacity-100'>RescuePaws</a>

      
      <ul className='hidden md:flex gap-6 md:gap-16 text-sm md:text-lg'> 
        {/* <a href='#home' className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100'><li>Home</li></a> */}
        <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100' to='/'>Home</Link>

       {/* <a href='#rescue' className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100'><li>Rescue</li></a> */}
        <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100' to='/rescue'>Rescue</Link>

        {/* <a href='#tips' className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100'><li>Do's&Don'ts</li></a> */}
        <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100' to='/tips'>AnimalsFacts</Link>

          {/* <a href='#contact' className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100'><li>Contactus</li></a> */}
        <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100' to='/contact'>Joinus</Link>

        {/* <a href='#activity' className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100'><li>Activities</li></a> */}
        <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100' to='/activity'>SignUp</Link>

        <Link className='cursor-pointer text-3xl text-green-400 opacity-80 transition-all duration-300 hover:scale-125 hover:opacity-100' to='/profile'><GiPlagueDoctorProfile /> </Link>

      </ul>

        {isOpen ? (
          <BsX className='block md:hidden text-4xl' onClick={menuOpen}/>
        ) : (
          <BsMenuButton className='block md:hidden text-4xl' onClick={menuOpen} />
        )}

        {isOpen && (
          <div className='fixed right-0 top-[80px] w-[150px] max-w-xs bg-gray-400 bg-opacity-30 h-auto border-l-2 border-gray-500 p-6 rounded-bl-lg shadow-lg'>
            <ul className='flex flex-col text-black gap-4'>

             <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100' to='/'>Home</Link>
             <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100' to='/rescue'>Rescue</Link>
             <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100' to='/tips'>AnimalFacts</Link>
             <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100' to='/contact'>Joinus</Link>
             <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100' to='/activity'>SignIn</Link>
             
            </ul>
          </div>
        )}
    </nav>
  )
}

export default Navbar