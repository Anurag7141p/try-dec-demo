import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const Userprofilecard = ({ imageUrl, name, money }) => {
  return (
    <div className='sm:mr-[14px]'>
      {/* Image container */}
      <div className='border border-gray-500 h-20 py-2 lg:w-48 sm:w-40 rounded flex items-center rounded-lg justify-start overflow-hidden relative '>
        {/* New tag in top-left corner */}
        <div className='absolute top-0 left-0 bg-green-500 text-white text-sm rounded'>New</div>

        {/* Image */}
        <img src={imageUrl} alt="" className='w-[70px] h-[80px] rounded-l-lg' />

        {/* Three dots in the top-right corner */}
        <div className="absolute top-0 right-0 p-2 cursor-pointer">
          <span><BsThreeDotsVertical /></span>
        </div>

        {/* Text content */}
        <div className='flex flex-col mt-2'>
          <h1 className='font-medium ms-3 text-sm sm:mt-2'>{name}</h1>
          <p className='text-sm font-medium text-blue-500 ms-3'>from ₹ {money}</p>
          <p className='text-sm font-medium text-gray-400 ms-3'>model</p>
        </div>
      </div>
    </div>
  );
};

export default Userprofilecard;
