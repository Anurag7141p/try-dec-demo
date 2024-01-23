import React from 'react'
import NavOptions from './navoptions'
export default function Sidebar() {
    return (
        <div className=''>
            <div className=" left-0  lg:w-60 md:w-[250px] h-screen mt-3  font-medium  ">
                <div className='side-content bg-blue-700 text-white text-xs rounded-lg px-2 py-2 w-[220px] h-28 ms-2 '>
                    <p className='mb-1 w-40 ms-6'>Wallet Balance</p>
                    <div className='flex ms-2'>
                        <p className='mt-1 text-2xl font-medium mt- ms-4'>0.00</p>
                        <div className='flex flex-wrap items ms-16'>
                            <button className='bg-white text-black rounded h-[22px] w-16 px-2 text-xs mb-2 hover:bg-gray-500 hover:text-white transition-all duration-300'>
                                Withdraw
                            </button>
                            <button className='bg-white text-black rounded h-[22px] w-16 px-3 text-xs mt-1 hover:bg-gray-500 hover:text-white transition-all duration-300'>
                                History
                            </button>
                        </div>
                    </div>
                </div>
                <NavOptions />
            </div>
        </div>
    )
}
