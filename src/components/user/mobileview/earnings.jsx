import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import ChartComponent from './chart';
import Topbox from './topbox';

export default function Earnings() {
    return (
        <>
        <Topbox  
        showLogout={false} 
        showPro={false}
         />
            <div className='mt-40 ms-4'>
                <div className='flex '>
                    <button className=' w-[180px] rounded-lg px-3 py-2 h-10 mr-4 border border-gray-400 hover:bg-blue-100 shadow-lg'>
                        Earnings
                    </button>
                    <button className=' w-[180px] rounded-lg px-3 py-2 h-10 border border-gray-400 hover:bg-blue-100 shadow-lg'>
                        Orders
                    </button>
                </div>
                <div className='flex mt-6 w-[380px] text-lg rounded-2xl px-3 py-6 h-[80px] mr-4  hover:bg-blue-100 shadow-lg'>
                    <p>   Wallet</p> <p className='flex ml-auto mr-4'><p className='mt-1.5 '><MdCurrencyRupee /></p><p className='text-xl'>1000.00</p> </p>
                </div>
                <ChartComponent />
                <div className='flex mt-4'>
                    <p className='bg-custom-blue text-white rounded-full w-12 h-12 px-3 text-2xl py-2'>17</p>
                    <p className='ms-6 mt-3.5'>  <MdCurrencyRupee size={20} /> </p><p className='mt-2 text-xl ms-1'>70,000
                        <p className='text-xs text center text-gray-500'>Finished 17 oreders</p>
                    </p>
                </div>
                <div className='flex mt-4'>
                    <p className='bg-custom-blue text-white rounded-full w-12 h-12 px-3 text-2xl py-2'>17</p>
                    <p className='ms-6 mt-3.5'>  <MdCurrencyRupee size={20} /> </p><p className='mt-2 text-xl ms-1'>70,000
                        <p className='text-xs text center text-gray-500'>Finished 17 oreders</p>
                    </p>
                </div>
                <div className='flex mt-4'>
                    <p className='bg-custom-blue text-white rounded-full w-12 h-12 px-3 text-2xl py-2'>17</p>
                    <p className='ms-6 mt-3.5'>  <MdCurrencyRupee size={20} /> </p><p className='mt-2 text-xl ms-1'>70,000
                        <p className='text-xs text center text-gray-500'>Finished 17 oreders</p>
                    </p>
                </div>
            </div>
        </>
    )
}
