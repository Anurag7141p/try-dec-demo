import React from 'react';
import UserNav from '../../utils/navbar/userNav';
import Sidebar from '../../utils/navbar/sidebar';
import profileimg from "../../assets/landingPageImages/coustumes.png";
import level1 from "../../assets/images/level1.png";
import level2 from "../../assets/images/level2.jpg";
import level3 from "../../assets/images/level3.jpg";
import profile from "../../assets/images/profilepng.png";
import { Link } from 'react-router-dom';
const UserDetails = () => {
    return (
        <div className='lg:w-[1536px] items-center justify-center mx-auto'>
            <UserNav />
            <div className="flex">
                <Sidebar />
                <div className='bg-blue-50 justify-center items-center w-full'>
                    <div className='font-medium mt-6 ml-6'>
                        <h1>User Details</h1>
                    </div>
                    <div className='bg-white ms-6 mt-2 px-2 py-4 mr-6'>
                        <p className='font-semibold'>My Profile</p>
                        <div className='flex flex-col-2'>
                            <div className='w-40 mr-4'>
                                <button className='px-4 py-3 rounded text-gray-600 hover:bg-indigo-300 hover:text-blue-600 w-40 h-12 text-left md:text-sm mb-2'>Name & Address</button>
                                <button className='px-4 py-3 rounded text-gray-600 hover:bg-indigo-300 hover:text-blue-600 w-full h-12 text-left md:text-sm'>Verification</button>
                               <Link to={'/security'}>  <button className='px-4 py-2 rounded text-gray-600 hover:bg-indigo-300 hover:text-blue-600 w-full h-12 text-left md:text-sm'>Security</button></Link>
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
                                            <button className='bg-gray-400 text-white rounded px-1 lg:py-2 hover:bg-blue-700 mb-2 md:h-10 md:text-sm transition duration-300 transform hover:-translate-y-0.5'>Complete Verification</button>
                                            <button className='bg-gray-400 text-white rounded px-2 lg:py-2 hover:bg-blue-700 transition duration-300 transform hover:-translate-y-0.5 '>Store not available</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='  border border-gray-300 rounded p-2 ms-[178px] mr-6 px-4'>
                            <div className=' '>
                                <h1 className='font-medium'>User Verification Details</h1>
                                <h1 className='text-blue-700 font-medium mt-2'>Verification Level 1</h1>
                                <div className='flex '>
                                    <h1 className='text-xs text-gray-500'>You are required to verify your email and phone number,<br /> and upload a profile photo</h1>
                                    <div className='ml-auto justify-end'><button className='bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700 mb-4 md:h-10 md:text-sm transition duration-300 transform hover:-translate-y-0.5 w-36 '>Completed</button>
                                    </div>
                                </div>
                                <h1>Phone Number : +91 3434546776</h1>
                                <div className='flex'>
                                    <h1>Email Id: abc@example.com</h1>
                                    <button className='bg-blue-700 rounded text-white py-0.5 px-0.5 ms-3 '>Verify Now</button>
                                </div>
                                <h1 className='text-sm text-gray-500 mt-2 mb-2'>Alternative Email & Phone</h1>
                                <h1>Phone Number : +91 939307323</h1>
                                <h1 className='mb-2'>Email: abc@gmail.com </h1>
                                <div className='flex '>
                                    <h1 className='text-s text-yellow-600'>Verfication Level 2</h1>
                                    <button className='bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700  md:h-10 md:text-sm transition duration-300 transform hover:-translate-y-0.5 w-36 ml-auto'>Completed</button>
                                </div>
                                <h1 className='text-xs text-gray-500'>You must verify at least one government ID and maintain a <br /> positive rental history.</h1>
                                <div className='flex border border-gray-300 mt-4 rounded px-6 py-2 text-sm '>
                                    <div >
                                        <h1 className='text-gray-500 mb-1'>Verifed by Aadhaar </h1>
                                        <h1 className='mb-1'>Full Name  <span className='ms-[7px]'>:</span> Miya Hashim</h1>
                                        <h1 className='mb-1'>DOB  <span className='ms-[40px]'>:</span> 01-07-2000</h1>
                                        <h1 className='mb-1'>Gender  <span className='ms-[22px]'>:</span> M</h1>
                                        <div className='flex'>
                                            <h1>Address  <span className='ms-[18px]'>:</span> </h1>
                                            <div className='flex flex-col'>
                                                <h1 className='text-gray-500 ms-1'>Country : <span className='text-black'>india</span></h1>
                                                <h1 className='text-gray-500 ms-1'>District : <span className='text-black'>Alappuzha</span></h1>
                                                <h1 className='text-gray-500 ms-1'>State : <span className='text-black'>kerala</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Po : <span className='text-black'>kerala</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Location : <span className='text-black'>Mannar</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Village : <span className='text-black'>Mannar</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Sub Dist : <span className='text-black'>Mamannur</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Street : <span className='text-black'>67th cross road</span></h1>
                                                <h1 className='text-gray-500 ms-1'>House : <span className='text-black'>Poly Garden</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Land Mark : <span className='text-black'>Behind School</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Zip : <span className='text-black'>677678</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-auto '>
                                        <img src={profile} alt="" className=' w-20 mt-6' />
                                    </div>
                                </div>
                                <h1 className='text-green-400 mt-2 mb-2 font-medium'>Verification Level 3</h1>
                                <div className='flex '>
                                    <h1 className='text-xs text-gray-500'>You must verify at least one government ID and maintain a <br /> positive rental history.</h1>
                                    <button className='bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700  md:h-10 md:text-sm transition duration-300 transform hover:-translate-y-0.5 w-36 ml-auto'>Completed</button>
                                </div>
                                <div className='flex border border-gray-300 mt-4 rounded px-6 py-2 text-sm '>
                                    <div >
                                        <h1 className='text-gray-500 mb-1'>Verifed by Aadhaar </h1>
                                        <h1 className='mb-1'>Full Name  <span className='ms-[7px]'>:</span> Miya Hashim</h1>
                                        <h1 className='mb-1'>DOB  <span className='ms-[40px]'>:</span> 01-07-2000</h1>
                                        <h1 className='mb-1'>Gender  <span className='ms-[22px]'>:</span> M</h1>
                                        <div className='flex'>
                                            <h1>Address  <span className='ms-[18px]'>:</span> </h1>
                                            <div className='flex flex-col'>
                                                <h1 className='text-gray-500 ms-1'>Country : <span className='text-black'>india</span></h1>
                                                <h1 className='text-gray-500 ms-1'>District : <span className='text-black'>Alappuzha</span></h1>
                                                <h1 className='text-gray-500 ms-1'>State : <span className='text-black'>kerala</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Po : <span className='text-black'>kerala</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Location : <span className='text-black'>Mannar</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Village : <span className='text-black'>Mannar</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Sub Dist : <span className='text-black'>Mamannur</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Street : <span className='text-black'>67th cross road</span></h1>
                                                <h1 className='text-gray-500 ms-1'>House : <span className='text-black'>Poly Garden</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Land Mark : <span className='text-black'>Behind School</span></h1>
                                                <h1 className='text-gray-500 ms-1'>Zip : <span className='text-black'>677678</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-auto '>
                                        <img src={profile} alt="" className=' w-20 mt-6' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
