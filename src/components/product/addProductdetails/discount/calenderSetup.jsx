import React, { useState } from 'react';
import { GoCalendar } from 'react-icons/go';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalenderSetup = () => {
    const [selectedPickDate, setSelectedPickDate] = useState(null);
    const [selectedDropDate, setSelectedDropDate] = useState(null);

    const handlePickUpDateChange = (date) => {
        setSelectedPickDate(date);
    };

    const handleDropUpDateChange = (date) => {
        setSelectedDropDate(date);
    };

    return (
        <div className='flex bg-gray-100 text-black p-2'>
            <div>
                <h1>Pick-up date and time</h1>
                <div className='flex items-center gap-2 mb-2'>
                    <div className='border border-black rounded flex items-center px-2'>
                        <GoCalendar />
                        <DatePicker
                            selected={selectedPickDate}
                            onChange={handlePickUpDateChange}
                            dateFormat='eee d MMM'
                            className='rounded-md focus:outline-none relative w-[100px] h-[40px] ms-2'
                        />
                    </div>
                </div>
                <h1>Drop date and time</h1>
                <div className='flex items-center mb-2'>
                    <div className='border border-black rounded flex items-center px-2'>
                        <GoCalendar />
                        <DatePicker
                            selected={selectedDropDate}
                            onChange={handleDropUpDateChange}
                            dateFormat='eee d MMM'
                            className='rounded-md focus:outline-none relative w-[100px] h-[40px] ms-2'
                        />
                    </div>
                </div>
                <button className='rounded text-white bg-green-500 px-3 py-2 mt-2 w-36'>Rs:200,700</button>
            </div>
            <div className=' ms-2 mt-6 '>
                <div className='flex'>
                    <div className='border border-gray-500 bg-yellow-100 rounded p-2 h-12'>
                        9:00
                    </div>
                    <div className='border border-gray-500 bg-yellow-100 rounded p-2 ms-3 h-12'>
                        1:00
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalenderSetup;
