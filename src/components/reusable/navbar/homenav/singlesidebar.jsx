import React from 'react';
import { useState } from 'react';
import { HiAdjustmentsVertical } from 'react-icons/hi2';
import { CiFilter } from 'react-icons/ci';
import { GoCalendar } from 'react-icons/go';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';

const Singlesidebar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('12:00');
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isdate, setisdate] = useState(false);

    const toggleDropdown = (dropdown) => {
        if (dropdown === 'dropdown1') {
            setIsOpen1(!isOpen1);
            setIsOpen2(false);
        } else if (dropdown === 'dropdown2') {
            setIsOpen2(!isOpen2);
            setIsOpen1(false);
        } else if (dropdown === 'dropdown3') {
            setIsOpen3(!isOpen3);
            setIsOpen1(false);
        } else if (dropdown === 'date') {
            setisdate(!isdate);
            setIsOpen1(false);
        }
    };

    return (
        <div className="flex h-full md:text-sm">
            <div className="p-3 shadow shadow-gray-400">
                <div className="relative mb-4">
                    <div className="flex text-center lg:ms-4 p-2">
                        <HiAdjustmentsVertical />
                        <h1 className="font-bold ">Filter & Sort</h1>
                    </div>
                    <div className="relative mb-2 text-center">
                        <button
                            onClick={() => toggleDropdown('date')}
                            className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center"
                        >
                            <span className='mr-2'><CiFilter /></span>
                            <p className="w-36 text-left">Date & time</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>

                        {isdate && (
                            <div className="right-0 mt-2 py-2 bg-white flex justify-between items-center rounded-md">
                                <div className="flex flex-col items-start w-68 px-2">
                                    <p className="text-left mb-1 ">Pick-up date and time</p>
                                    <div className="flex items-center border border-gray-300 w-full rounded">
                                        <GoCalendar />
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date)}
                                            dateFormat="eee d MMM"
                                            className="rounded-md focus:outline-none relative w-[70px] h-[40px] ms-2"
                                        />
                                        <span className="mx-2 border-r border-gray-300 h-4"></span>
                                        <TimePicker
                                            value={selectedTime}
                                            onChange={(time) => setSelectedTime(time)}
                                            format="h:mm a"
                                            className="border-none w-24"
                                            disableClock // Disable the dropdown clock
                                            clockIcon={null} // Hide the clock icon
                                            clearIcon={null} // Hide the clear icon
                                        />
                                    </div>
                                    <p className="text-left mb-1 mt-2 text-left">Return date and time</p>
                                    <div className="flex items-center border border-gray-300 w-full rounded">
                                        <GoCalendar />
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date)}
                                            dateFormat="eee d MMM"
                                            className="rounded-md focus:outline-none relative w-[70px] h-[40px] ms-2"
                                        />
                                        <span className="mx-2 border-r border-gray-300 h-4"></span>
                                        <TimePicker
                                            value={selectedTime}
                                            onChange={(time) => setSelectedTime(time)}
                                            format="h:mm a"
                                            className="border-none w-24"
                                            disableClock // Disable the dropdown clock
                                            clockIcon={null} // Hide the clock icon
                                            clearIcon={null} // Hide the clear icon
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => toggleDropdown('dropdown1')}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center "
                    >
                        <span className='mr-2'><CiFilter /></span>

                        <p className="w-36 text-left">Sort</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {isOpen1 && (
                        <div className="right-0 mt-2  w-40 bg-white">
                            <a href="#" className="block px-4 py-1 text-gray-800 hover:bg-gray-200">Relevance</a>
                            <a href="#" className="block px-4 w-80  text-gray-800 ">Distance <span className='ml-14'>40km</span> </a>

                            <div class="w-20 ms-4 h-2 bg-gray-300 w-40 rounded overflow-hidden">
                                <div class="h-full  bg-green-500 w-8"></div>
                                <div class="h-full bg-gray-300 "></div>
                            </div>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Price</a>
                            <div className="flex justify-center space-x-2 ms-2">
                                <button className="border hover:bg-green-400 text-gray-700 font-semibold  w-24 px-2 h-6  text-xs rounded inline-flex items-center transition-colors duration-300">
                                    low-high
                                </button>
                                <button className="border hover:bg-green-400 text-gray-700 font-semibold w-24 px-2 h-6 text-xs rounded inline-flex items-center transition-colors duration-300">
                                    high-low
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative mb-2">
                    <button
                        onClick={() => toggleDropdown('dropdown2')}
                        className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center"
                    >
                        <p className="w-[166px] text-left">Experience</p><i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {isOpen2 && (
                        <div className="right-0 mt-2 py-2 w-40 bg-white">
                        </div>
                    )}
                </div>
                <div className="relative mb-2">
                    <button
                        onClick={() => toggleDropdown('dropdown2')}
                        className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center"
                    >
                        <p className="w-[166px] text-left">Age</p><i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {isOpen2 && (
                        <div className="right-0 mt-2 py-2 w-40 bg-white">
                        </div>
                    )}
                </div>
                <div className="relative mb-2">
                    <button
                        onClick={() => toggleDropdown('dropdown2')}
                        className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center"
                    >
                        <p className="w-[166px] text-left">Gender</p><i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {isOpen2 && (
                        <div className="right-0 mt-2 py-2 w-40 bg-white">
                        </div>
                    )}
                </div>
                <div className="relative mb-2">
                    <button
                        onClick={() => toggleDropdown('dropdown2')}
                        className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center"
                    >
                        <p className="w-[166px] text-left">Physical Attributes</p><i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {isOpen2 && (
                        <div className="right-0 mt-2 py-2 w-40 bg-white">
                        </div>
                    )}
                </div>
                <div className="relative mb-4">
                    <button
                        onClick={() => toggleDropdown('dropdown2')}
                        className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center"
                    >
                        <p className="w-[166px] text-left">Language</p><i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {isOpen2 && (
                        <div className="right-0 mt-2 py-2 w-40 bg-white">
                        </div>
                    )}
                </div>
                <div className="relative mb-4">
                    <button
                        onClick={() => toggleDropdown('dropdown2')}
                        className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center"
                    >
                        <p className="w-[166px] text-left">Skill</p><i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {isOpen2 && (
                        <div className="right-0 mt-2 py-2 w-40 bg-white">
                        </div>
                    )}
                </div>
                <div className="relative mb-4">
                    <button
                        onClick={() => toggleDropdown('dropdown2')}
                        className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center"
                    >
                        <p className="w-[166px] text-left">Work Type</p><i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {isOpen2 && (
                        <div className="right-0 mt-2 py-2 w-40 bg-white">
                        </div>
                    )}
                </div>
                <div className="relative mb-4">
                    <button
                        onClick={() => toggleDropdown('dropdown2')}
                        className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center"
                    >
                        <p className="w-[166px] text-left">Price</p><i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {isOpen2 && (
                        <div className="right-0 mt-2 py-2 w-40 bg-white">
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Singlesidebar;
