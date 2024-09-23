import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For the toggle icon
import logo from '../assets/Logo-job huntly.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-[#F8F8FD] px-5 sm:px-20 py-5'>
      {/* Main flex container */}
      <div className="flex justify-between items-center">
        {/* Section 1: Logo and nav links */}
        <div className="flex sm:gap-x-10 items-center">
          {/* Image div */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Nav items - hidden on small screens and visible on larger screens */}
          <div className={`hidden sm:flex ${menuOpen ? 'flex' : 'hidden'} flex-col sm:flex-row sm:gap-5 mt-5 sm:mt-0`}>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-5 text-center">
              <li>Find Jobs</li>
              <li>Browse Companies</li>
            </ul>

            {/* Login & Sign-up buttons - hidden on small screens and visible on larger screens */}
            
          </div>
        </div>

<div className={`hidden sm:flex ${menuOpen ? 'flex' : 'hidden'} flex-col sm:flex-row sm:gap-5 mt-5 sm:mt-0`}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 mt-5 sm:mt-0">
              <button className="text-[#4640DE] font-[700] border-gray-500 sm:border-r-2 p-2 px-5">Login</button>
              <button className="bg-[#4640DE] text-white font-[700] p-2">Sign Up</button>
            </div>
            </div>

        {/* Hamburger icon for small screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu on small screens */}
      <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} mt-5`}>
        <ul className="flex flex-col gap-4 text-center">
          <li>Find Jobs</li>
          <li>Browse Companies</li>
        </ul>
        <div className="flex flex-col items-center gap-4 mt-5">
          <button className="text-[#4640DE] font-[700] border-gray-500 p-2 px-5">Login</button>
          <button className="bg-[#4640DE] text-white font-[700] p-2">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
