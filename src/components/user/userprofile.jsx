import React from 'react';
import UserNav from '../../utils/navbar/userNav';
import Footer from '../../utils/footer/footer/footer';
import Sidebar from '../../utils/navbar/sidebar';
import profileimg from "../../assets/landingPageImages/coustumes.png"
import level1 from "../../assets/images/level1.png"
import level2 from "../../assets/images/level2.jpg"
import level3 from "../../assets/images/level3.jpg"

const Userprofile = () => {
  return (
    <>
      <UserNav />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 h-screen bg-blue-50 p-4">
          <div className='font-medium' >
            <h1>User Details</h1>
          </div>
          <div className='bg-white mt-2 rounded px-4 py-4'>
            <h1 className='font-medium'>
              My Profile
            </h1>
            <div className='flex'>
              <div className='flex flex-col w-40'>
                <button className='px-4 py-3 rounded text-gray-600 hover:bg-indigo-300 hover:text-blue-600 w-full h-12 text-left md:text-sm'>Name & Address</button>
                <button className='px-4 py-3 rounded text-gray-600 hover:bg-indigo-300 hover:text-blue-600 w-full h-12 text-left md:text-sm'>Verification</button>
                <button className='px-4 py-2 rounded text-gray-600 hover:bg-indigo-300 hover:text-blue-600 w-full h-12 text-left md:text-sm'>Security</button>
              </div>
              <div className='flex border border-gray-300 rounded py-4 lg:w-[1000px] lg:h-[130px] md:ml-2'>
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
                <div className='lg:flex flex-col justify-end ml-auto mr-4'>
                  <button className='bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700 mb-4 md:h-10 md:text-sm transition duration-300 transform hover:-translate-y-0.5'>Complete Verification</button>
                  <button className='bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700 transition duration-300 transform hover:-translate-y-0.5'>Store not available</button>
                </div>
              </div>
            </div>
            <div className='rounded border border-gray-300 ms-[169px] lg:w-[1000px]'>
              <h1 className='font-medium px-4 py-4'>Personal Details</h1>
              <div className='flex flex-row ms-4 text-sm'>
                <div>
                  <h1 className='text-gray-500 mb-2 text-xs'>First Name</h1>
                  <h1 className='mb-2'>Miya</h1>
                  <h1 className='text-gray-500 mb-2 text-xs'>Email</h1>
                  <h1 className='mb-2'>miya@123@gmail.com</h1>
                  <div>
                    <h1 className='mb-2 mt-4 text-lg'>Current Address</h1>
                    <h1 className='text-gray-500 mb-2 text-xs'>Curent Address</h1>
                    <h1 className='mb-2'>Marottichodu</h1>
                    <h1 className='text-gray-500 mb-2 text-xs'>State</h1>
                    <h1 className='mb-2'>Kerala</h1>
                  </div>
                  <div>
                    <h1 className='mb-2 mt-4 text-lg'>Address as per government id</h1>
                    <h1 className='text-gray-500 mb-2 text-xs'>Curent Address</h1>
                    <h1 className='mb-2'>Marottichodu</h1>
                    <h1 className='text-gray-500 mb-2 text-xs'>State</h1>
                    <h1 className='mb-4'>Kerala</h1>
                  </div>
                </div>
                <div>
                </div>
                <div className='ms-20'>
                  <h1 className='text-gray-500 mb-2 text-xs'>Last Name</h1>
                  <h1 className='mb-2'>Hashim</h1>
                  <h1 className='text-gray-500 mb-2 text-xs'>Phone Number</h1>
                  <h1 className='mb-2'>+91 95542992</h1>
                  <div className='mt-12'>
                    <h1 className='text-gray-500 mb-2 text-xs '>City</h1>
                    <h1 className='mb-2'>Ernakulam</h1>
                    <h1 className='text-gray-500 mb-2 text-xs'>Pin</h1>
                    <h1 className='mb-2'>689673</h1>
                  </div>
                  <div className='mt-12'>
                    <h1 className='text-gray-500 mb-2 text-xs'>Curent Address</h1>
                    <h1 className='mb-2'>Marottichodu</h1>
                    <h1 className='text-gray-500 mb-2 text-xs'>State</h1>
                    <h1 className='mb-4'>Kerala</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
}

export default Userprofile;
