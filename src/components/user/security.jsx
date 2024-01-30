import React, { useState } from 'react'
import Sidebar from '../../components/reusable/navbar/sidebar';
import UserNav from '../../components/reusable/navbar/userNav';
import profileimg from "../../assets/landingPageImages/coustumes.png";
import level1 from "../../assets/images/level1.png";
import level2 from "../../assets/images/level2.jpg";
import level3 from "../../assets/images/level3.jpg";
import { Link } from 'react-router-dom';
const Security = () => {
    const [notificationCount, setNotificationCount] = useState(1);

    return (
        <div className='lg:w-[1536px] items-center justify-center mx-auto'>
            <UserNav />
            <div className="flex">
                <Sidebar />
                <div className=' bg-blue-50 w-full '>
                    <p className='mt-6 ml-6'>User Details </p>
                    <div className='bg-white ms-8 mt-4 h-[450px]'>
                        <h1 className='ml-2 mt-2'>My Profile</h1>
                        <div className='flex flex-col-2'>
                            <div className='w-40 mr-4'>
                              <Link to={'/useraddress'}> <button className='px-4 py-3 rounded text-gray-600 hover:bg-indigo-300 hover:text-blue-600 w-40 h-12 text-left md:text-sm mb-2'>Name & Address</button></Link> 
                               <Link to={'/profile'}> <button className='px-4 py-3 rounded text-gray-600 hover:bg-indigo-300 hover:text-blue-600  w-full h-12 text-left md:text-sm mb-2'>Verification</button></Link>
                                <Link to={'/security'}>  <button className='px-4 py-2 rounded  hover:text-blue-500 hover:bg-indigo-300 bg-indigo-300 text-blue-500 w-full h-12 text-left md:text-sm'>Security</button></Link>
                            </div>
                            <div className='border border-gray-300 w-full h-[130px] p-6 mr-6 rounded relative'>
                                <div className='flex flex-col-2'>
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
                                        <p className='text-xs text-gray-400'>Eranakualm, India</p>
                                    </div>
                                    {/* Topbutton */}
                                    <div className='ml-auto'>
                                        <div className='flex flex-col'>
                                            <button className='bg-blue-700 text-white rounded px-5 lg:py-2 hover:bg-gray-400 mb-2 md:h-10 md:text-sm  transition duration-300 transform hover:-translate-y-0.5 relative'>
                                                Complete Verification
                                                {notificationCount > 0 && (
                                                    <span className='bg-red-500 text-xs text-white rounded-full px-1 absolute ml-0.5  mt-1'>
                                                        {notificationCount}
                                                    </span>
                                                )}
                                            </button>
                                            <button className='bg-gray-400 text-white rounded px-2 lg:py-2 hover:bg-blue-700 transition duration-300 transform hover:-translate-y-0.5 '>Store not available</button>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
<div className='ms-[175px]  border border-gray-300 mr-6 rounded p-4 ' >
<h1>User credential setting</h1>
<h1 className='mt-4 text-gray-400 text-sm'> User Name</h1>
<h1 className='mt-5'>Maya</h1>
<h1 className='mt-4 text-gray-400 text-sm'> Password</h1>
<h1 className='mt-5'>*********</h1>

</div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Security;