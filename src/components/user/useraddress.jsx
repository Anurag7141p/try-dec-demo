import React from 'react'
import UserNav from '../../components/reusable/navbar/userNav';
import Sidebar from '../../components/reusable/navbar/sidebar';
import { Link } from 'react-router-dom';
import Profilebox from '../../components/reusable/navbar/profilebox';
import Footer from '../../components/reusable/footer/footer/footer';
const Useraddress = () => {
    return (
        <div>
            <div className='lg:w-[1536px] md:w-[800px] w-full mx-auto '>
                <UserNav />
                <div className="flex flex-col md:flex-row">
                    <Sidebar />
                    <div className='bg-blue-50 w-full '>
                        <h1 className='font-medium mt-4 ms-6'>User Details</h1>
                        <div className='bg-white ms-6 mt-2 px-2 py-4 mr-6'>
                            <p className='font-semibold'>My Profile</p>
                            <div className='flex flex-col-2'>
                                <div className='w-40 mr-4'>
                                    <button className='px-4 py-3 rounded   bg-indigo-300 text-blue-600 w-40 h-12 text-left md:text-sm mb-2'>Name & Address</button>
                                    <Link to={'/profile'}><button className='px-4 py-3 rounded text-gray-600 hover:bg-indigo-300 hover:text-blue-600 w-full h-12 text-left md:text-sm'>Verification</button></Link>
                                    <Link to={'/security'}>  <button className='px-4 py-2 rounded text-gray-600 hover:bg-indigo-300 hover:text-blue-600 w-full h-12 text-left md:text-sm'>Security</button></Link>
                                </div>
                                <div>
                                    <Profilebox />
                                </div>
                            </div>
                            <div className='border border-gray-300 lg:ms-44 lg:mr-14 rounded px-4 py-4 '>
                                    <h1 className='font-medium'>Personal Details</h1>
                                    <div className='flex flex-col-2 '>
                                        <div className='mt-4 w-80'>
                                            <h1 className='text-gray-400 text-sm '>First Name</h1>
                                            <h1 className='mt-2 text-sm'>Miya</h1>
                                            <h1 className='text-gray-400 text-sm mt-2'>Email</h1>
                                            <h1 className='mt-2 text-sm'>miya@123@gmail.com</h1>

                                        </div>
                                        <div className='mt-4 '>
                                            <h1 className='text-gray-400 text-sm'>Last Name</h1>
                                            <h1 className='mt-2 text-sm'>Hashim</h1>
                                            <h1 className='text-gray-400 text-sm mt-2'>Phone Number</h1>
                                            <h1 className='mt-2 text-sm'>+97 477483</h1>

                                        </div>
                                        
                                    </div>
                                    <h1 className='font-medium mt-4 '>Current Address</h1>
                                    <div className='flex flex-col-2 '>
                                        <div className='mt-4 w-80'>
                                            <h1 className='text-gray-400 text-sm '>Current Address</h1>
                                            <h1 className='mt-2 text-sm'>Marottichude</h1>
                                            <h1 className='text-gray-400 text-sm mt-2'>State</h1>
                                            <h1 className='mt-2 text-sm'>Kerala</h1>

                                        </div>
                                        <div className='mt-4 '>
                                            <h1 className='text-gray-400 text-sm'>city</h1>
                                            <h1 className='mt-2 text-sm'>Ernakulam</h1>
                                            <h1 className='text-gray-400 text-sm mt-2'>Pin</h1>
                                            <h1 className='mt-2 text-sm'>77483</h1>

                                        </div>
                                    </div>
                                    <h1 className='font-medium mt-4 '> Address as per government id</h1>
                                    <div className='flex flex-col-2 '> 
                                        <div className='mt-4 w-80'>
                                            <h1 className='text-gray-400 text-sm '>Current Address</h1>
                                            <h1 className='mt-2 text-sm'>Marottichude</h1>
                                            <h1 className='text-gray-400 text-sm mt-2'>State</h1>
                                            <h1 className='mt-2 text-sm'>Kerala</h1>

                                        </div>
                                        <div className='mt-4 '>
                                            <h1 className='text-gray-400 text-sm'>city</h1>
                                            <h1 className='mt-2 text-sm'>Ernakulam</h1>
                                            <h1 className='text-gray-400 text-sm mt-2'>Pin</h1>
                                            <h1 className='mt-2 text-sm'>77483</h1>

                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
<Footer/>

            </div>

        </div>

    )
}
export default Useraddress;