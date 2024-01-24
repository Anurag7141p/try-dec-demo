import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { BsChevronDown } from 'react-icons/bs';
import UserNav from '../../utils/navbar/userNav';
import cameraData from '../../data/landingpagedata/bestRentalData/cameraData';
import Userprofilecard from '../../utils/card/userprofilecard';
import { FaPlus } from "react-icons/fa6";
import Footer from '../../utils/footer/footer/footer';
import Sidebar from '../../utils/navbar/sidebar';
import profileimg from "../../assets/landingPageImages/coustumes.png"
import level1 from "../../assets/images/level1.png"
import level2 from "../../assets/images/level2.jpg"
import level3 from "../../assets/images/level3.jpg";
import UserDropdown from './userDropdown';
const Inventory = () => {
    const handleImageUpload = (e) => { };
    const [notificationCount, setNotificationCount] = useState(12);

    return (
        <div className='lg:w-[1536px] items-center justify-center mx-auto'>
            <UserNav />
            <div className="flex ">
                <Sidebar />
                <div className='flex-1 bg-blue-50'>
                    <div className='flex bg-white rounded mt-4 ms-4 mr-8'>
                        <div className='flex border border-gray-300 rounded py-4 lg:w-full lg:h-[130px] '>
                            <div className='relative'>
                                <img src={profileimg} alt="" className='lg:h-16 px-2' />
                                <img src={level1} alt="" className='h-6 w-6 absolute top-9 right-0 ' />
                            </div>
                            <div className='flex flex-col ms-5 md:mr-6'>
                                <h1 className='font-medium'>Miya Hashim</h1>
                                <p className='text-xs text-green-700 font-medium'>Verification level 3</p>
                                <div className='flex'>
                                    <img src={level1} alt="" className='h-5 w-5 mr-1' />
                                    <img src={level2} alt="" className='h-5 w-5 mr-1' />
                                    <img src={level3} alt="" className='h-5 w-5' />
                                </div>
                                <p className='text-xs text-gray-400'>Eranakualm,India</p>
                            </div>
                            <div className='text-sm justify-end ml-auto mt-4'>
                                store status
                                <div className='flex border border-black rounded-lg px-2 bg-blue-50'>
                                    <span className='text-blue-500'>online</span>
                                    <div className='h-2 w-2 bg-green-500 rounded-full ml-2 mt-1.5'></div>
                                    <BsChevronDown size={12} className="ml-1 mt-1" />
                                </div>
                            </div>
                            <div className='lg:flex flex-col ml-12 mr-4'>
                                <button className='bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700 mb-4 md:h-10 md:text-sm transition duration-300 transform hover:-translate-y-0.5'>Complete Verification</button>
                                <button className='bg-gray-400 text-white rounded px-2 py-2 hover-bg-blue-700 transition duration-300 transform hover:-translate-y-0.5'>Store not available</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end mr-60 '>
                    <UserDropdown/>
                    </div>
                   

                    <div className='flex'>
                        <div className='flex flex-col space-y-2 ml-4 w-40  mt-4 text-left'>
                            <button className='text-sm text-black rounded px-2 py-2 hover:bg-indigo-300 hover:text-blue-600 transition duration-300 transform hover:-translate-y-0.5 relative text-left'>
                                Products
                                {notificationCount > 0 && (
                                    <span className='bg-gray-400 text-xs text-black rounded-full px-1 absolute ml-2 mt-1'>
                                        {notificationCount}
                                    </span>
                                )}
                            </button>
                            <button className='text-sm text-black rounded px-2 py-2 hover:bg-indigo-300 hover:text-blue-600 transition duration-300 transform hover:-translate-y-0.5 relative text-left'>
                                Order Request
                                {notificationCount > 0 && (
                                    <span className='bg-gray-400 text-xs text-black rounded-full px-1 absolute ml-2 mt-1'>
                                        {notificationCount}
                                    </span>
                                )}
                            </button>
                            <button className='text-sm text-black rounded px-2 py-2 hover:bg-indigo-300 hover:text-blue-600 transition duration-300 transform hover:-translate-y-0.5 relative text-left'>
                                Upcoming Orders
                                {notificationCount > 0 && (
                                    <span className='bg-gray-400 text-xs text-black rounded-full px-1 absolute ml-2 mt-1'>
                                        {notificationCount}
                                    </span>
                                )}
                            </button>
                            <button className='text-sm text-black rounded px-2 py-2 hover:bg-indigo-300 hover:text-blue-600 transition duration-300 transform hover:-translate-y-0.5 relative text-left'>
                                Ongoing Orders
                                {notificationCount > 0 && (
                                    <span className='bg-gray-400 text-xs text-black rounded-full px-1 absolute ml-2 mt-1'>
                                        {notificationCount}
                                    </span>
                                )}
                            </button>
                            <button className='text-sm text-black rounded px-2 py-2 hover:bg-indigo-300 hover:text-blue-600 transition duration-300 transform hover:-translate-y-0.5 relative text-left'>
                                Finished Orders
                                {notificationCount > 0 && (
                                    <span className='bg-gray-400 text-xs text-black rounded-full px-1 absolute ml-2 mt-1'>
                                        {notificationCount}
                                    </span>
                                )}
                            </button>
                            <button className='text-sm text-black rounded px-2 py-2 hover:bg-indigo-300 hover:text-blue-600 transition duration-300 transform hover:-translate-y-0.5 relative text-left'>
                                Store Setting
                                {notificationCount > 0 && (
                                    <span className='bg-gray-400 text-xs text-black rounded-full px-1 absolute ml-2 mt-1'>
                                        {notificationCount}
                                    </span>
                                )}
                            </button>
                            <button className='text-sm text-black rounded px-2 py-2 hover:bg-indigo-300 hover:text-blue-600 transition duration-300 transform hover:-translate-y-0.5 relative text-left'>
                                Order
                                {notificationCount > 0 && (
                                    <span className='bg-gray-400 text-xs text-black rounded-full px-1 absolute ml-2 mt-1'>
                                        {notificationCount}
                                    </span>
                                )}
                            </button>
                        </div>

                        <div className='card-box bg-white rounded py-4 mt-6 mx-4 px-4 lg:ms-10'>
                            <div className='flex justify-end '>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="outline-none border border-gray-400 rounded-l"
                                />
                                <button className=" right-0 top-0 bottom-0 bg-blue-500 text-white rounded-r px-3">
                                    <IoSearch />
                                </button>
                                <div className='ml-4'>
                                    <button className="bg-blue-500 text-white rounded px-2 py-1 flex items-center  ">
                                        <IoSearch />
                                        <span className="ml-1">Sort</span>
                                        <BsChevronDown size={12} className="ml-1" />
                                    </button>
                                </div>        
                                    </div>

                            <div className='card-box bg-white rounded py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                                <div className='mb-4 md:mb-0 mx-auto'>
                                    <label htmlFor='imageUpload' className='flex flex-col items-center cursor-pointer'>
                                        <div className='border border-blue-400 px-6 lg:w-48 lg:mr-32 h-20 py-2 mt-1 rounded text-center'>
                                            <FaPlus size={14} className='text-blue-500 mb-1 mx-auto mt-4' />
                                            <p className='mx-auto text-blue-500 font-medium'>Add Product</p>
                                        </div>
                                        <input
                                            type='file'
                                            id='imageUpload'
                                            accept='image/*'
                                            className='hidden'
                                            onChange={handleImageUpload}
                                        />
                                    </label>
                                </div>
                                {cameraData.map((item, index) => (
                                    <Userprofilecard
                                        key={`${item.id}-${index}`}
                                        imageUrl={item.imageUrl}
                                        name={item.name}
                                        money={item.money}
                                    />
                                ))}
                            </div>
                            <div className='mt-7 font-medium mx-4 md:ms-4'>
                                <h1>untitled</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Inventory;
