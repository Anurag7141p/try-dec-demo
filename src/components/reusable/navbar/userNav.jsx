import React, { useState } from 'react';
import { FaBell } from "react-icons/fa";
import Brandlogo from '../../../assets/navabrImages/img_logo.png';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import Location from '../../location/location';
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
                        <div className='flex items-center mr-4'>
                           <Location/>
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
