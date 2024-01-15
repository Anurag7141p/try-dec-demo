import UserNav from '../../utils/navbar/userNav';
import UserDropdown from './userDropdown';
import { IoSearch } from "react-icons/io5";
import { BsChevronDown } from 'react-icons/bs';
import cameraData from '../../data/landingpagedata/bestRentalData/cameraData';
import Userprofilecard from '../../utils/card/userprofilecard';
import { FaPlus } from "react-icons/fa6";
import { useMediaQuery } from '@react-hook/media-query';
import Footer from '../../utils/footer/footer/footer';
import Sidebar from '../../utils/navbar/sidebar';
const Inventory = () => {
    const handleImageUpload = (e) => { };
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
<UserNav/>
<div className="flex">
<Sidebar />

         <div className='flex-1 h-screen lg:ms-40'>
                <UserDropdown />
                <div className=' container md:ms-0 sm:ms-6 mt-4 '>
                    <div className='flex  sm:flex-wrap mb-4 md:mb-0 font-medium mt-2 '>
                        <button className='bg-blue-500 rounded text-white py-2 px-1 mb-4 md:mb-0 md:mr-4 lg:w-20 sm:mr-2 '>Products</button>
                        <div className='lg:mt-3 sm:mr-2 mb-2'>
                            Order Requests
                        </div>
                        <div className='lg:mt-3 md:mr-2 mb-2'>
                            Upcoming
                        </div>
                        <div className=' lg:mt-3 mb-2 md:mr-2 sm:mr-2'>
                            Ongoing
                        </div>
                        <div className='lg:mr-6 lg:mt-3 mb-2'>
                            Finished
                        </div>
                        <div className='border border-gray-500 lg:mr-10 rounded-lg px-2 relative md:mt-2 md:mr-4'>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full outline-none pr-2 py-1"
                            />
                            <button className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white rounded-lg px-4">
                                <IoSearch />
                            </button>
                        </div>
                        <div>
                            <button className="bg-blue-500 text-white rounded px-2 py-2 flex items-center sm:ml- md:ms-0 md:mt-2 sm:mt-2 ">
                                <IoSearch />
                                <span className="ml-1">Sort</span>
                                <BsChevronDown size={12} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap lg:w-3/4  mt-4'>
                    <div className='lg:mr-0 md:mr-2 sm:mr-3'>
                        <label htmlFor='imageUpload' className='flex flex-col items-center cursor-pointer'>
                            <div className='border border-blue-400 px-6 md:mr-3 lg:w-48 sm:w-40 h-20 py-2  mt-1 rounded'>
                                <FaPlus size={14} className='text-blue-500 mb-1 lg:ms-16 sm:ms-12 mt-4' />
                                <p className='lg:ms-6 sm:ms-3 text-blue-500 font-medium'>Add product</p>
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
                <div className=' mt-7 font-medium'>
                    <h1>untittled</h1>

                </div>
            </div>
            </div>

            <Footer/>
        </>
    );
};

export default Inventory;
