import React from 'react';
import Singlesidebar from '../reusable/navbar/homenav/singlesidebar';
import Categoryhead from '../homePage/categoryhead';
import ImageCard from '../../components/reusable/card/homecard2';
import { CiFilter } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa';
import cameraData from '../../data/landingpagedata/bestRentalData/cameraData';
import Categorygreenbox from './categorygreenbox';
function CameraEqui() {
  return (
    <div className=''>
      <Categoryhead />
      <div className=''>
        <Categorygreenbox/>
</div>
      <div className='flex  md:flex-row '>
        <div className='mb-4 md:mb-0 md:mr-4'> 
          <Singlesidebar />
        </div>

        <div className='flex-1'> 
          <div className='flex justify-end md:mb-4 mr-[120px] '>
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

          <div className='flex flex-wrap  justify-items-center items-center'>
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
