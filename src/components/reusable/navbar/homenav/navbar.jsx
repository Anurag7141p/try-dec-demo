import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Brandlogo from '../../../../assets/navabrImages/img_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Location from '../../../../components/location/location';
import { CiHeart } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import HomeNavmobile from './homeNavmobile';
const Navbar = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true); // Set to true if the user is logged in

  const locations = [
    { value: 'option1', label: 'location a' },
    { value: 'option2', label: 'location b' },
  ];
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const handleAccountHover = () => {
    setAccountDropdownOpen(true);
  };

  const handleAccountLeave = () => {
    setAccountDropdownOpen(false);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
  };

  return (
    <>
      <nav className="lg:fixed lg:w-[1535px] top-0 z-50 bg-white lg:bg-transparent px-4 flex justify-between items-center lg:bg-white shadow ">
        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        <Link to="/home" className="pl-4">
          <img src={Brandlogo} alt="Logo" className="w-22 h-12" />
        </Link>

        {/* Search Bar */}
        <div className="lg:flex items-center hidden space-x">
          <div className="relative">
            <input
              type="text"
              placeholder="Find camera, lens and more ..."
              className="p-2 border border-light-green rounded-l-md focus:outline-none h-8 w-full md:w-[600px]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-green-500 text-white rounded-r-md">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>

        {/* Location Selector */}
        <div className="hidden lg:flex ml-10">
          <Location />

        </div>
        <div className="flex justify-end items-center lg:hidden">
          {/* Icon 1 */}
          <div className="ml-40 mr-4">
            <i className="fa-solid fa-location-dot text-xl"></i>
          </div>
          {/* Icon 2 */}
          <div>
            <i className="fa-regular fa-bell text-xl"></i>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center ">
          {isLoggedIn ? (
            <>
              <div className="flex items-center">
                <Link to="/wishlist" className="text-gray-700 px-4 py-2">
                  <CiHeart size={24} />
                </Link>
              </div>
              <div className="flex items-center">
                <Link to="/wishlist" className="text-gray-700 px-4 py-2">
                  <IoIosNotificationsOutline size={24} />
                </Link>
              </div>
              <div className="relative mr-4">
                <div
                  className="flex items-center cursor-pointer"
                  onMouseEnter={handleAccountHover}
                  onMouseLeave={handleAccountLeave}
                >
                  <span className="text-black px-2 py-2">Account</span>
                  <div className='text-white bg-orange-400 rounded-full px-2 mr-1'>
                    <span className='relative'>S</span>
                  </div>
                  <div className='absolute h-2 w-2 bg-green-500 rounded-full ml-24 mt-3'></div>
                </div>

                {/* Account Dropdown */}
                {isAccountDropdownOpen && (
                  <div className="absolute z-50 top-12   bg-white border border-gray-400 rounded-md w-36 right-0 move-up-animation with-pointer"                  onMouseEnter={handleAccountHover}
                  onMouseLeave={handleAccountLeave}>
                    <Link to="/account/settings" className="block px-2 py-1 text-black hover:bg-green-500 hover:text-white">
                      Settings
                    </Link>
                    <Link to="/logout" className="block px-2 py-1 text-black hover:bg-green-500 hover:text-white">
                      Logout
                    </Link>
                    <Link to="/select-type" className="block px-2 py-1 hover:bg-green-500 hover:text-white">
                      Create Store
                    </Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center border border-green rounded-md mr-2">
                <Link to="/login" className="text-black px-4 py-2 ">
                  Log in
                </Link>
              </div>
              <div className="flex items-center border border-green rounded-md mr-2">
                <Link to="/signup" className="text-black px-4 py-2">
                  Sign up
                </Link>
              </div>
              <div className="flex items-center">
                <Link to="/select-type" className="bg-green-500 text-white p-2 rounded-md">
                  Create Store
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>

      {isMobileMenuOpen && <HomeNavmobile />}
    </>
  );
};

export default Navbar;
