import React, { useState } from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { IoStorefrontOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link,useLocation } from 'react-router-dom';
const NavOptions = () => {
  const [showDashboardOptions, setShowDashboardOptions] = useState(false);
  const [showStoreOptions, setShowStoreOptions] = useState(false);
  // const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showHelpOptions, setShowHelpOptions] = useState(false);
  const [showPrivacyOptions, setShowPrivacyOptions] = useState(false);
  const [activeOption, setActiveOption] = useState(null);
  const location = useLocation();
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleOptions = (option) => {
    const isActive = option === activeOption;
    setShowDashboardOptions(option === 'dashboard' ? !showDashboardOptions : false);
    setShowStoreOptions(option === 'store' ? !showStoreOptions : false);
    setShowProfileOptions(option === 'profile' ? !showProfileOptions : false);
    setShowPaymentOptions(option === 'Payment' ? !showPaymentOptions : false);
    setShowHelpOptions(option === 'Help' ? !showHelpOptions : false);
    setShowPrivacyOptions(option === 'Privacy&Policy' ? !showPrivacyOptions : false);

    setActiveOption(isActive ? null : option);
  };
  return (
    <div>
      <div className='mt-6 flex items-center ms-6 bg-white'>
        <div className='relative '>
          <div
            onClick={() => toggleOptions('dashboard')}
            className={`cursor-pointer flex items-center rounded h-8 py-1 p-1 mb-3 transition duration-300 transform hover:-translate-y-0.5 ${activeOption === 'dashboard' ? 'active' : ''}`} >
            <MdOutlineDashboard size={24} className='mr-8' />
            Dashboard
            <IoIosArrowDown size={24} className='ml-8' />
          </div>
          {showDashboardOptions && (
            <div className='dropdown-content'>
              <div className='bg-white text-gray-600 rounded-lg  right-0 move-up-animation ms-8'>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Store Inventory
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Products
                </p>
                <p className='ms-6 hover:bg-gray-300 transition-all duration-300'>
                  Order request
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
              </div>
            </div>


          )}

          <div
            onClick={() => toggleOptions('store')}
            className={`cursor-pointer flex items-center rounded h-8 py-1 p-1 mb-3 transition duration-300 transform hover:-translate-y-0.5 ${activeOption === 'store' ? 'active' : ''}`} >
            <IoStorefrontOutline size={24} className='mr-8' />
            Store
            <IoIosArrowDown size={24} className='ml-[72px]' />
          </div>
          {showStoreOptions && (

            <div className='dropdown-content'>
              <div className='bg-white text-gray-600 rounded-lg  right-0 move-up-animation ms-8'>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Store Inventory
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Products
                </p>
                <p className='ms-6 hover:bg-gray-300 transition-all duration-300'>
                  Order request
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
              </div>
            </div>


          )}
          <Link to="/profile">
        <div
          onClick={() => setShowProfileOptions(!showProfileOptions)}
          className={`cursor-pointer flex items-center rounded h-8 py-1 p-1 mb-3 transition duration-300 transform hover:-translate-y-0.5 ${location.pathname === '/profile' ? 'active' : ''}`}
        >
          <FaRegUser size={24} className='mr-8' />
          Profile
          <IoIosArrowDown size={24} className='ml-[63px]' />
        </div>
      </Link>
          {/* {showProfileOptions && (
            <div className='dropdown-content '>
               <div className='bg-white text-gray-600 rounded-lg  right-0 move-up-animation ms-8'>
                <Link to={"/profile"}>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                 User
                </p></Link>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Products
                </p>
                <p className='ms-6 hover:bg-gray-300 transition-all duration-300'>
                  Order request
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
              </div>
            </div>
          )} */}
          <div
            onClick={() => toggleOptions('Payment')}
            className={`cursor-pointer flex items-center rounded h-8 py-1 p-1 mb-3 transition duration-300 transform hover:-translate-y-0.5 ${activeOption === 'Payment' ? 'active' : ''}`} >
            <FaRegUser size={24} className='mr-8' />
            Payment
            <IoIosArrowDown size={24} className='ml-[49px]' />
          </div>
          {showPaymentOptions && (
            <div className='dropdown-content'>
              <div className='bg-white text-gray-600 rounded-lg  right-0 move-up-animation ms-8'>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Store Inventory
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Products
                </p>
                <p className='ms-6 hover:bg-gray-300 transition-all duration-300'>
                  Order request
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
              </div>
            </div>
          )}
          <div
            onClick={() => toggleOptions('Help')}
            className={`cursor-pointer flex items-center rounded h-8 py-1 p-1 mb-3 transition duration-300 transform hover:-translate-y-0.5 ${activeOption === 'Help' ? 'active' : ''}`} >
            <FaRegUser size={24} className='mr-8' />
            Help
            <IoIosArrowDown size={24} className='ml-[77px]' />
          </div>
          {showHelpOptions && (
            <div className='dropdown-content'>
              <div className='bg-white text-gray-600 rounded-lg  right-0 move-up-animation ms-8'>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Store Inventory
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Products
                </p>
                <p className='ms-6 hover:bg-gray-300 transition-all duration-300'>
                  Order request
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
              </div>
            </div>
          )}
          <div
            onClick={() => toggleOptions('Privacy&Policy')}
            className={`cursor-pointer flex items-center rounded h-8 py-1 p-1 mb-3 transition duration-300 transform hover:-translate-y-0.5 ${activeOption === 'Privacy&Policy' ? 'active' : ''}`} >
            <FaRegUser size={24} className='mr-8' />
            Privacy&Policy
            <IoIosArrowDown size={24} className='ml-2' />
          </div>
          {showPrivacyOptions && (
            <div className='dropdown-content'>
              <div className='bg-white text-gray-600 rounded-lg  right-0 move-up-animation ms-8'>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Store Inventory
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Products
                </p>
                <p className='ms-6 hover:bg-gray-300 transition-all duration-300'>
                  Order request
                </p>
                <p className='ms-5 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
                <p className='ms-1 hover:bg-gray-300 transition-all duration-300'>
                  Upcoming
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavOptions;



