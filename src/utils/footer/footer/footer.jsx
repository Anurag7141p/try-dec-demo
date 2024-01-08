import React, { useEffect, useState } from 'react';
import HomeIcon from '../../../assets/footerImages/Homeicon.jpg'
import message from '../../../assets/footerImages/message.png'
const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return !isMobile ? (
        <footer className=" bg-gray-800 text-white p-4 mt-4 ">
            <div className="ms-8 mx-auto grid  md:grid-cols-2 lg:grid-cols-5 gap-8 ms-20">
                <div className="mb-8">
                    <h2 className="font-bold mb-4">Categories</h2>
                    <ul>
                        <li className='mb-1'>Graphics & Design</li>
                        <li className='mb-2'>Digital Marketing</li>
                        <li className='mb-2'>Writing & Translation</li>
                        <li className='mb-2'>Video & Animation</li>
                        <li className='mb-2'>Music & Audio</li>
                        <li className='mb-2'>Programming & Tech</li>
                        <li className='mb-2'>Data</li>
                        <li className='mb-2'>Business</li>
                        <li className='mb-2'>Lifestyle</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="font-bold mb-4">About</h2>
                    <ul>
                        <li className='mb-1'>Graphics & Design</li>
                        <li className='mb-2'>Digital Marketing</li>
                        <li className='mb-2'>Writing & Translation</li>
                        <li className='mb-2'>Video & Animation</li>
                        <li className='mb-2'>Music & Audio</li>
                        <li className='mb-2'>Programming & Tech</li>
                        <li className='mb-2'>Data</li>
                        <li className='mb-2'>Business</li>
                        <li className='mb-2'>Lifestyle</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="font-bold mb-4">Support</h2>
                    <ul>
                        <li className='mb-1'>Graphics & Design</li>
                        <li className='mb-2'>Digital Marketing</li>
                        <li className='mb-2'>Writing & Translation</li>
                        <li className='mb-2'>Video & Animation</li>
                        <li className='mb-2'>Music & Audio</li>
                        <li className='mb-2'>Programming & Tech</li>
                        <li className='mb-2'>Data</li>
                        <li className='mb-2'>Business</li>
                        <li className='mb-2'>Lifestyle</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="font-bold mb-4">Community</h2>
                    <ul>
                        <li className='mb-1'>Graphics & Design</li>
                        <li className='mb-2'>Digital Marketing</li>
                        <li className='mb-2'>Writing & Translation</li>
                        <li className='mb-2'>Video & Animation</li>
                        <li className='mb-2'>Music & Audio</li>
                        <li className='mb-2'>Programming & Tech</li>
                        <li className='mb-2'>Data</li>
                        <li className='mb-2'>Business</li>
                        <li className='mb-2'>Lifestyle</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="font-bold mb-4">More From Olapool</h2>
                    <ul>
                        <li className='mb-1'>Graphics & Design</li>
                        <li className='mb-2'>Digital Marketing</li>
                        <li className='mb-2'>Writing & Translation</li>
                        <li className='mb-2'>Video & Animation</li>
                        <li className='mb-2'>Music & Audio</li>
                        <li className='mb-2'>Programming & Tech</li>
                        <li className='mb-2'>Data</li>
                        <li className='mb-2'>Business</li>
                        <li className='mb-2'>Lifestyle</li>
                    </ul>
                </div>
            </div>
        </footer>
    ) : 
    (
        <footer className="bg-white text-blue-500 p-4 fixed bottom-0 left-0 right-0 flex justify-center items-center ">
        <div className="flex space-x-12 ">
          <i className="fa-solid fa-house hover:text-gray-500"></i>
          <i className="fa-regular fa-message hover:text-green-500"></i>
          <i className="fa-solid fa-magnifying-glass hover:text-red-500"></i>
          <i className="fa-solid fa-up-down hover:text-purple-500"></i>
          <i className="fa-solid fa-circle-notch hover:text-yellow-500"></i>
        </div>
      </footer>
      
    )
};

export default Footer;
