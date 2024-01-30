import React from 'react'
import New from '../../../../assets/images/new-icon.png'
import { FaRupeeSign } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
function HomeNavmobile() {
    return (
        <div>
            <div className='lg:hidden  w-[100%] mb-2 bg-black me-[500px] z-50 nav'>
                <div className="flex flex-col p-5 text-white">
                    <ul>
                        <li className=' flex hover:text-gray-800'>
                            <p className='text-xl mr-2 font-bold '>Hi</p> <p className='mt-1 '>Yuvan</p> ,
                        </li>
                        <hr className="border-t border-gray-100 my-4" />
                        <li className="flex items-center">
                            <img src={New} className='bg-white w-6 mr-2' alt="" /> Post Rental
                        </li>
                        <hr className="border-t border-gray-100 my-4" />
                        <li className="flex items-center">
                            <FaRupeeSign /><h1 className='ms-4'>Wallet</h1><h1 className=' ml-auto text-green-500 font-medium'>₹32.00</h1>
                        </li>
                        <hr className="border-t border-gray-100 my-4" />
                        <li className="flex items-center">
                            <FaShoppingCart /><h1 className='ms-4'>My Orders</h1>
                        </li>
                        <hr className="border-t border-gray-100 my-4" />
                        <li className="flex items-center">
                            <FaStore /><h1 className='ms-4'>My Store</h1>
                        </li>
                        <hr className="border-t border-gray-100 my-4" />
                        <li className="flex items-center">
                            <CiHeart /> <h1 className='ms-4'>Wishlist</h1>
                        </li>
                        <hr className="border-t border-gray-100 my-4" />
                        <li className="flex items-center">
                            <MdOutlineQrCodeScanner /> <h1 className='ms-4'>Scan</h1>
                        </li>
                        <hr className="border-t border-gray-100 my-4" />
                        <li className="flex items-center">
                        <AiFillExclamationCircle /> <h1 className='ms-4'>About us</h1>
                        </li>
                        <hr className="border-t border-gray-100 my-4" />
                        <li className="flex items-center">
                            <MdLibraryBooks /> <h1 className='ms-4'>Terms of us</h1>
                        </li>
                        <hr className="border-t border-gray-100 my-4" />
                        <li className="flex items-center">
                        <FaQuestionCircle /> <h1 className='ms-4'>Support</h1>
                        </li>
                        <hr className="border-t border-gray-100 my-4" />
                        <li className="flex items-center">
                        <RiFileList3Line /> <h1 className='ms-4'>History</h1>
                        </li>
                        <hr className="border-t border-gray-100 my-4" />

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default HomeNavmobile