import React, { useState } from 'react'
import profileimg from "../../../assets/landingPageImages/coustumes.png";
import level1 from "../../../assets/images/level1.png";
import level2 from "../../../assets/images/level2.jpg";
import level3 from "../../../assets/images/level3.jpg";
const Profilebox = () => {
    const [notificationCount, setNotificationCount] = useState(1);

    return (
        <div>
            <div className='border border-gray-300 md:w-full lg:w-[1000px] lg:h-[130px] p-6 mr-6 rounded relative '>
                <div className='flex flex-col-2'>
                    <div className='relative'>
                        <img src={profileimg} alt="" className='lg:h-18 lg:w-24 px-2 md:w-14' />
                        <img src={level1} alt="" className='md:h-6 md:w-6 lg:mt-6 md:right-1 md:top-6 absolute ' />
                    </div>
                    <div className='flex flex-col ms-5 md:mr-6 md:text-sm md:ms-0'>
                        <h1 className='font-medium'>Miya Hashim</h1>
                        <p className='text-xs text-green-700 font-medium md:w-10'>Verification level 3</p>
                        <div className='flex'>
                            <img src={level1} alt="" className='h-5 w-5 mr-1' />
                            <img src={level2} alt="" className='h-5 w-5 mr-1' />
                            <img src={level3} alt="" className='h-5 w-5' />
                        </div>
                        <p className='text-xs text-gray-400'>Eranakualm, India</p>
                    </div>
                    {/* Topbutton */}
                    <div className='ml-auto'>
                        <div className='flex flex-col md:text-xs md:ms-0 '>
                            <button className='bg-blue-700 text-white rounded px-5 md:px-2 md:py-1 lg:py-2 hover:bg-gray-400 mb-2   transition duration-300 transform hover:-translate-y-0.5 relative'>
                                Complete Verification
                                {notificationCount > 0 && (
                                    <span className='bg-red-500 text-xs text-white rounded-full px-1 absolute md:right-1 md:bottom-1  mt-1'>
                                        {notificationCount}
                                    </span>
                                )}
                            </button>
                            <button className='bg-gray-400 text-white rounded px-2 lg:py-2 md:px-2 md:py-1  hover:bg-blue-700 transition duration-300 transform hover:-translate-y-0.5 '>Store not available</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Profilebox