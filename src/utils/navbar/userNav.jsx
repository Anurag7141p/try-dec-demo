import React, { useState } from 'react';
import { FaBell } from "react-icons/fa";
import Brandlogo from '../../assets/navabrImages/img_logo.png';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

const UserNav = () => {
    const [showLocationOptions, setShowLocationOptions] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('');

    const toggleLocationOptions = () => {
        setShowLocationOptions(!showLocationOptions);
    };

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
        setShowLocationOptions(false);
    };

    return (
        <>
            <nav className='sm:ms-0'>
                <div className="flex relative justify-between items-center">
                    <div className="top-box w-full flex items-center justify-between h-16 shadow-lg py-4">
                        <div className="flex items-center">
                            <Link to="/home">
                                <img src={Brandlogo} alt="Logo" className="w-22 h-10 ms-4" />
                            </Link>
                        </div>
                        <div className='flex items-center'>
                            <div
                                className='relative cursor-pointer flex items-center rounded ml-6'
                                onClick={toggleLocationOptions}
                            >
                                Location
                                <IoIosArrowDown size={16} className=' lg:mr-8' />
                                {showLocationOptions && (
                                    <div className='dropdown-content absolute right-0 top-8 z-50'>
                                        <div className='bg-white text-center text-gray-800 rounded-lg move-up-animation'>
                                            <p className=' hover:bg-gray-300 transition-all duration-300' onClick={() => setSelectedLocation('Location1')}>
                                                Location1
                                            </p>
                                            <p className=' hover:bg-gray-300 transition-all duration-300' onClick={() => setSelectedLocation('Location2')}>
                                                Location2
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='lg:mr-8'>Message</div>
                            <div className='mt-1 text-blue-500 mr-8'><FaBell size={20} /></div>
                            <div className=" border border-black rounded rounded-sm px-4 lg:mr-10">
                                <select value={selectedLocation} onChange={handleLocationChange}>
                                    <option value="">profile</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default UserNav;
