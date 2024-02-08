import React from 'react';
import Singlesidebar from '../reusable/navbar/homenav/singlesidebar';
import Navbar from '../reusable/navbar/homenav/navbar';
import Categoryhead from '../homePage/categoryhead';
import Headbox from './headbox';
import ImageCard from '../../components/reusable/card/homecard2';
import { CiFilter } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa';
import cameraData from '../../data/landingpagedata/bestRentalData/cameraData';

function CameraEqui() {
  return (
    <div>
      <Navbar />
      <Categoryhead />
      <Headbox />
      
      <div className='flex flex-col md:flex-row'>
        <div>
          <Singlesidebar />
        </div>

        <div className=''>
          <div className='flex justify-end mt-2'>
            <button className='border hover:bg-blue-300 font-bold rounded w-40'>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CiFilter />
                  <span className="ml-2">Sort</span>
                </div>
                <FaAngleDown />
              </div>
            </button>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {cameraData.map((rentalData) => (
              <ImageCard key={rentalData.id} rental={rentalData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CameraEqui;
