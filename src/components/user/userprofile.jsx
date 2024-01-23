import React from 'react';
import UserNav from '../../utils/navbar/userNav';
import Footer from '../../utils/footer/footer/footer';
import Sidebar from '../../utils/navbar/sidebar';
import profileimg from "../../assets/landingPageImages/coustumes.png"
import level1 from "../../assets/images/level1.png"
import level2 from "../../assets/images/level2.jpg"
import level3 from "../../assets/images/level3.jpg"
import profile from "../../assets/images/profilepng.png"

const Userprofile = () => {
  return (
    <>
      <UserNav />
      <div className="flex">
        <Sidebar />
        <div className="flex-1  bg-blue-50 p-4">
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
              <div className='flex border border-gray-300 rounded py-4 lg:w-[1000px] lg:h-[130px] md:ml-2 relative'>
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
                <div className='flex flex-col justify-end ml-auto mr-4 absolute top-0 right-0 bottom-3'>
                  <button className='bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700 mb-4 md:h-10 md:text-sm transition duration-300 transform hover:-translate-y-0.5'>Complete Verification</button>
                  <button className='bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700 transition duration-300 transform hover:-translate-y-0.5 '>Store not available</button>
                </div>
              </div>
            </div>
            <div className='flex rounded border border-gray-300 lg:ms-[169px] lg:w-[1000px] px-4 py-4 text-sm'>
              <div >
                <h1 className=' font-medium'>User Verification Details</h1>
                <h1 className='text-blue-700 font-medium mt-2'>Verification Level 1</h1>
                <h1 className='text-xs text-gray-500'>You are required to verify your email and phone number,<br /> and upload a profile photo</h1>

                <h1>Phone Number : +91 3434546776</h1>
                <div className='flex'>
                  <h1 >Email Id: abc@example.com</h1>
                  <button className='bg-blue-700 rounded text-white py-0.5 px-0.5 ms-3 '>Verify Now</button>
                </div>
                <h1 className='text-sm text-gray-500 mt-2 mb-2'>Altranative Email & Phone</h1>
                <h1>Phone Number : +91 939307323</h1>
                <h1>Email: abc@gmail.com </h1>
                <h1 className='text-yellow-400 mt-2 mb-2 font-medium'>Verfication Level 2</h1>
                <h1 className='text-xs text-gray-500'>You must verfiy at least one government ID and maintain a <br /> positive rental history.</h1>
                <div className='flex border border-gray-300 mt-4 rounded px-6 py-2 text-sm w-[950px]'>
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
                  <div className='flex flex-col ml-auto justify-end absolute lg:ml-[820px]'>
                    <img src={profile} alt="" className=' w-20 mt-6' />
                  </div>
                </div>
                <div className='relative ml-4'>
                  <h1 className='text-green-400 mt-2 mb-2 font-medium'>Verification Level 3</h1>
                  <h1 className='text-xs text-gray-500'>You must verify at least one government ID and maintain a <br /> positive rental history.</h1>
                  <div className='absolute top-0 right-0'>
                    <button className='bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700 mb-4 md:h-10 md:text-sm transition duration-300 transform hover:-translate-y-0.5 w-36 mt-2'>
                      Verify Now
                    </button>
                  </div>
                  <div className='flex border border-gray-300 mt-4 rounded px-6 py-2 text-sm w-[950px]'>
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
                  <div className='flex flex-col ml-auto justify-end absolute lg:ml-[820px]'>
                    <img src={profile} alt="" className=' w-20 mt-6' />
                  </div>
                </div>

                </div>
              </div>
              <div className='flex flex-col ml-auto justify-end absolute lg:ml-[820px]'>
                <button className=' bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700 mb-4 md:h-10 md:text-sm transition duration-300 transform hover:-translate-y-0.5 w-36 mt-2'>Completed</button>
                <button className='bg-gray-400 text-white rounded px-2 py-2 hover:bg-blue-700 mb-4 md:h-10 md:text-sm transition duration-300 transform hover:-translate-y-0.5 w-36 mt-40'>Completed</button>
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