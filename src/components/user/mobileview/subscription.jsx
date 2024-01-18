import React from 'react';
import Topbox from './topbox';
import { MdCurrencyRupee } from "react-icons/md";

const Subscription = () => {
    return (
        <div>
            <Topbox
                showLogout={false}
                showHeaderText={false}
                showAdjustments={false}
                showPro={false}
                customHeaderText="Subscription"
            />
            <div className='mt-40 text-white bg-custom-blue rounded-2xl ms-4 mr-4 px-4 py-2'>
                <h1 className='text-2xl'>Basic</h1>
                <div className='flex items-center'>
                    <p>Fully function, Limited features. End Automatically</p>
                    <p className='text-xl font-medium ml-auto'> Free</p>
                </div>
            </div>
            <div className='mt-6 mb-6 text-white bg-gray-600 rounded-2xl ms-4 mr-4 px-4 py-2'>
                <h1 className='text-2xl'>Basic</h1>
                <div className='flex items-center'>
                    <p>Fully function, Limited features. End Automatically</p>
                    <MdCurrencyRupee size={20} className='mb-5' /> <p className='text-xl font-medium ml-auto mb-6'> 5000</p>
                </div>
            </div>
            <div className='text-white bg-gray-700 rounded-2xl ms-4 mr-4 px-4 py-2'>
                <h1 className='text-2xl'>Basic</h1>
                <div className='flex items-center'>
                    <p>Fully function, Limited features. End Automatically</p>
                    <MdCurrencyRupee size={20} className='mb-5' />  <p className='text-xl font-medium ml-auto mb-6'> 700</p>
                </div>
            </div>
        </div>
    );
}

export default Subscription;
