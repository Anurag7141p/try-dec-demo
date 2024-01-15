import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Brandlogo from '../../assets/navabrImages/img_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import New from '../../assets/images/new-icon.png'
const Navbar = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const locations = [
    { value: 'option1', label: 'location a' },
    { value: 'option2', label: 'location b' },
  ];

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="lg:fixed lg:w-full top-0 z-50 bg-white lg:bg-transparent px-4 flex justify-between items-center lg:bg-white shadow">
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
          <img src={Brandlogo} alt="Logo" className=" w-22 h-12 " />
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
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="p-2"
            >
              <option value="" disabled>
                Location
              </option>
              {locations.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-end items-center lg:hidden">
          {/* Icon 1 */}
          <div className=" ml-40 mr-4">
            <i className="fa-solid fa-location-dot text-xl"></i>
          </div>
          {/* Icon 2 */}
          <div>
            <i className="fa-regular fa-bell text-xl"></i>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-[50px]">
          <div className="flex items-center border border-green rounded-md">
            <Link to="/" className="text-black px-4 py-2">
              Log in
            </Link>
          </div>
          <div className="flex items-center border border-green rounded-md">
            <Link to="/signup" className="text-black px-4 py-2">
              Sign up
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/select-type" className="bg-green-500 text-white p-2 rounded-md">
              Create Store
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} w-[100%] mb-2 bg-black me-[500px] nav`}>
        <div className="flex flex-col p-5 text-white">
          <ul>
            <li className=' flex hover:text-gray-800'>
              <p className='text-xl mr-2 font-bold'>Hi</p> <p className='mt-1'>Yuvan</p> ,
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li className="flex items-center">
              <img src={New} className='bg-white w-6 mr-2' alt="" /> Post Rental
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li >
              <i className="fa-solid fa-indian-rupee-sign mr-4"></i> Wallet
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-cart-shopping mr-2"></i> My Order
            </li>
            <hr className="border-t border-gray-100 my-2" /> <li>
              <i className="fa-solid fa-cart-shopping mr-2"></i> My Store
            </li>
            <hr className="border-t border-gray-100 my-2" /> <li>
              <i className="fa-regular fa-heart mr-3"></i> wishlist
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-qrcode mr-3"></i> Scan
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-exclamation mr-5"></i> About us
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-book mr-3"></i>Terms of Use
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-question mr-4"></i>Support
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-file-invoice mr-4"></i>History
            </li>
            <hr className="border-t border-gray-100 my-2" />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
