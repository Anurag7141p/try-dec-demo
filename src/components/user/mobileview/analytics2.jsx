import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import ChartComponent from './chart';
import MobileCard from '../../../utils/card/mobileCard/mobileCard';
import cameraData from '../../../data/landingpagedata/bestRentalData/cameraData';
import Topbox from './topbox';
import { useNavigate } from 'react-router-dom';
export default function Analytics2() {
    const navigate = useNavigate();
    const handleNavigateToEarnings = () => {
        navigate('/earnings');
    };
    return (
        <>
            <Topbox showLogout={false} showPro={false} />
            <div className='mt-40 ms-4'>
                <div>
                    <div className='flex'>
                        <button
                            className='w-[180px] rounded-lg px-3 py-2 h-10 mr-4 border border-gray-400 hover:bg-blue-100 shadow-lg'
                            onClick={handleNavigateToEarnings}
                        >
                            Earnings
                        </button>
                        <button className='w-[180px] rounded-lg px-3 py-2 h-10 border border-gray-400 hover:bg-blue-100 shadow-lg'>
                            Orders
                        </button>
                    </div>

                    <div className='flex mt-6 w-[380px] text-lg rounded-2xl px-3 py-6 h-[80px] mr-4 hover:bg-blue-100 shadow-lg'>
                        <p>Wallet</p>
                        <div className='flex ml-auto mr-4'>
                            <p className='mt-1.5 '>
                                <MdCurrencyRupee />
                            </p>
                            <p className='text-xl'>1000.00</p>
                        </div>
                    </div>
                    <ChartComponent />

                    <div className='flex mt-4'>
                        <p className='bg-custom-blue text-white rounded-full w-12 h-12 px-3 text-2xl py-2'>17</p>
                        <h1 className='ms-6 mt-3.5'>
                            <MdCurrencyRupee size={20} />
                        </h1>
                        <div className='mt-2 text-xl ms-1'>
                            70,000
                            <p className='text-xs text center text-gray-500'>Finished 17 orders</p>
                        </div>
                    </div>

                    <div className='flex mt-4'>
                        <p className='bg-custom-blue text-white rounded-full w-12 h-12 px-3 text-2xl py-2'>17</p>
                        <h1 className='ms-6 mt-3.5'>
                            <MdCurrencyRupee size={20} />
                        </h1>
                        <div className='mt-2 text-xl ms-1'>
                            70,000
                            <p className='text-xs text center text-gray-500'>Finished 17 orders</p>
                        </div>
                    </div>
                    <div className='flex mt-4'>
                        <p className='bg-custom-blue text-white rounded-full w-12 h-12 px-3 text-2xl py-2'>17</p>
                        <h1 className='ms-6 mt-3.5'>
                            <MdCurrencyRupee size={20} />
                        </h1>
                        <div className='mt-2 text-xl ms-1'>
                            70,000
                            <p className='text-xs text center text-gray-500'>Finished 17 orders</p>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <p className='text-lg font-medium'>Most Moving items</p>
                        <div className='flex-1 overflow-y-auto px-4'>
                            <div className='mt-4 mb-20'>
                                {cameraData.map((item, index) => (
                                    <MobileCard
                                        key={`${item.id}-${index}`}
                                        imageUrl={item.imageUrl}
                                        name={item.name}
                                        money={item.money}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
