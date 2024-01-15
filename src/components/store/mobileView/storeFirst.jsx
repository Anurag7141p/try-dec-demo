import React from 'react';
import StoreImage from "../../../assets/images/storeimage.jpeg";
import Greentick from "../../../assets/images/greentick.png";

const StoreFirst = () => {
    return (
        <div className="place-items-center h-[700px] px-4 md:px-8 lg:px-16">
            <div className="text-center mt-8">
                <h1 className=' text-blue-400 text-xl md:text-2xl lg:text-3xl'>Start Renting</h1>
                <p className='text-sm text-gray-600'>Your One-Step Destination for Hassle-free Rentals</p>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <img src={StoreImage} alt="" className="max-w-full h-auto" />
            </div>
            <div className='flex justify-center mt-4 gap-4'>
                <div className='mb-4'>
                    <img src={Greentick} alt="" className='h-8 mx-auto mb-2' />
                    <h1 className='text-sm text-center'>Verified User</h1>
                    <p className='text-[10px] text-center text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis provident velit soluta,</p>
                </div>
                <div className='mb-4'>
                    <img src={Greentick} alt="" className='h-8 mx-auto mb-2' />
                    <h1 className='text-sm text-center'>Verified User</h1>
                    <p className='text-[10px] text-center text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis provident velit soluta,</p>
                </div>
                <div className='mb-4'>
                    <img src={Greentick} alt="" className='h-8 mx-auto mb-2' />
                    <h1 className='text-sm text-center'>Verified User</h1>
                    <p className='text-[10px] text-center text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis provident velit soluta,</p>
                </div>
            </div>
        </div>
    )
}

export default StoreFirst;
