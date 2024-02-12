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

      <div className='flex  md:flex-row '>
        <div className='mb-4 md:mb-0 md:mr-4'> {/* Add margin-bottom for small screens and right margin for medium screens */}
          <Singlesidebar />
        </div>

        <div className='flex-1'> {/* Utilize flex-1 to allow the content to take up remaining space */}
          <div className='flex justify-end md:justify-start md:mb-4 ml-4'> {/* Adjust margin and alignment for medium screens */}
            <button className='border hover:bg-blue-300 font-bold rounded md:w-auto'>
              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <CiFilter />
                  <span className="ml-2">Sort</span>
                </div>
                <FaAngleDown />
              </div>
            </button>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:w-[1200px] md:w-[600px] justify-center items-center justify-items-center '>
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
