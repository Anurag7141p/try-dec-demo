import React, { useEffect, useRef, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdDisplaySettings } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const MobileNav = () => {
  const [isSideContentVisible, setIsSideContentVisible] = useState(false);

  const toggleSideContent = () => {
    setIsSideContentVisible(!isSideContentVisible);
  };

  const sideContentRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sideContentRef.current && !sideContentRef.current.contains(event.target)) {
      setIsSideContentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className='flex bg-blue-700 p-4'>
        <p className='text-white mt-4' onClick={toggleSideContent}>
          <FaBars size={24} />
        </p>
        <h1 className='text-white font-medium text-xl sm:ms-[120px] mt-4'>Inventory</h1>
        <div className='ml-auto text-white mt-4'>
          <IoSearch size={24} />
        </div>
      </div>

      {isSideContentVisible && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 z-50'>
          <div ref={sideContentRef} className='bg-white w-64 h-full p-4 text-white'>

            <div className='rounded-lg bg-blue-500 px-4 py-4'>
              <div className='flex  '>
                <p className='mb-2'>Wallet</p>
                <p className=' ml-auto mt-2'><IoIosArrowDown size={24} /></p>
              </div>
              <p className='text-lg'>0.00</p>
            </div>
            <div className='bg-blue-500 rounded-lg mt-8 px-4 py-2 hover:bg-gray-400'>
              <h1 className='flex '><p className='mt-0.5 mr-2'><BsQuestionCircleFill  size={20}/></p>Verification</h1>
            </div>
            <div className='bg-blue-500 rounded-lg mt-2 px-4 py-2 hover:bg-gray-400'>
              <h1 className='flex '><p className='mt-0.5 mr-2'><CiHeart  size={20}/></p>Online/Offline</h1>
            </div>
            <div className='bg-blue-500 rounded-lg mt-2 px-4 py-2 hover:bg-gray-400'>
              <h1 className='flex '><p className='mt-0.5 mr-2'><MdDisplaySettings  size={20}/></p>Store Settings</h1>
            </div>
            <div className='bg-blue-500 rounded-lg mt-2 px-4 py-2 hover:bg-gray-400'>
              <h1 className='flex '><p className='mt-0.5 mr-2'><FaRupeeSign  size={20}/></p>Wallet</h1>
            </div>
            <div className='bg-blue-500 rounded-lg mt-2 px-4 py-2 hover:bg-gray-400'>
              <h1 className='flex '><p className='mt-0.5 mr-2'><BsQuestionCircleFill  size={20}/></p>Analytics</h1>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
