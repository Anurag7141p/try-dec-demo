import React from 'react';
import { Link } from 'react-router-dom';
import ImageCard from '../../utils/card/homecard2';
import cameraData from '../../data/landingpagedata/bestRentalData/cameraData';

const CameraUnits = () => {
  return ( 
    <div className="p-4 justify-center items-center ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold lg:px-4 lg:ms-8 text-sm">Camera and Lights Units</h2>
        <Link to={"/"} className="cursor-pointer">See All</Link>
      </div>
      <div className="sm:flex overflow-x-auto col-lg-2 col-md-3 col-sm-4 col-8 mb-4 items-center">
        {cameraData &&
          cameraData.map((cameraDataItem) => (
            <ImageCard key={cameraDataItem.id} rental={cameraDataItem} />
          ))}
      </div>
    </div>
  );
}

export default CameraUnits;
