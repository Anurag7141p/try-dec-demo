import React from 'react';
import MobileNav from '../../../utils/navbar/mobileView/mobileNav';
import Footer from '../../../utils/footer/footer/footer';
import cameraData from '../../../data/landingpagedata/bestRentalData/cameraData';
import MobileCard from '../../../utils/card/mobileCard/mobileCard';
import { GiShoppingBag } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';

function ProfileMobile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <MobileNav />
      <div
        className='flex overflow-x-auto overflow-hidden'
        style={{ marginBottom: '10px' }}
      >
        <div className='bg-blue-700 text-white rounded-lg w-24 mt-4 ms-4 px-6 py-2 hover:bg-white hover:text-blue-800 border border-blue-200 shadow-lg'>
          <p>Wallet</p>
          <p className='ms-0.5'>0.00</p>
        </div>
        <div className='bg-blue-700 text-white rounded-lg w-24 mt-4 ms-4 px-3 py-2 hover:bg-white hover:text-blue-800 border border-blue-200 shadow-lg'>
          <p className='ms-5'>
            <GiShoppingBag size={20} />
          </p>
          <p>Products</p>
        </div>
        <div className='bg-blue-700 text-white rounded-lg w-24 mt-4 ms-4 px-3 py-2 hover:bg-white hover:text-blue-800 border border-blue-200 shadow-lg'>
          <p className='ms-6'>
            <MdDateRange size={20} />
          </p>
          <p>Upcoming</p>
        </div>
        <div className='bg-blue-700 text-white rounded-lg w-24 mt-4 ms-4 px-6 py-2 hover:bg-white hover:text-blue-800 border border-blue-200 shadow-lg'>
          <p>Wallet</p>
          <p className='ms-0.5'>Ongoing</p>
        </div>
      </div>
      <div className='flex-1 overflow-y-auto px-4'>
        <div className='mt-10 mb-20'>
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
      <Footer />
    </div>
  );
}

export default ProfileMobile;
