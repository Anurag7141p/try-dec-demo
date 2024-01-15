import React, { useEffect, useState } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { TbMobiledata } from "react-icons/tb";
import { LiaCircleNotchSolid } from "react-icons/lia";
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
        <footer className=" bg-gray-800 text-white p-4">
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
                <div className="flex space-x-8 ">
                    <p className='hover:bg-blue-600 hover:text-white w-10 h-10 py-2 px-1.5 rounded'><RiHomeLine size={28} /></p>
                    <p className='hover:bg-blue-600 hover:text-white w-10 h-10 py-2 px-2 rounded mt-1'><FaRegMessage size={24} /></p>
                    <p className='hover:bg-blue-600 hover:text-white w-10 h-10 py-2 px-2 rounded'><IoSearchOutline size={24} /></p>
                    <p className='hover:bg-blue-600 hover:text-white w-10 h-10 py-2 px-2 rounded'><TbMobiledata size={24} /></p>
                    <p className='hover:bg-blue-600 hover:text-white w-10 h-10 py-2 px-2 rounded'><LiaCircleNotchSolid size={24} /></p>
                </div>
            </footer>

        )
};

export default Footer;
