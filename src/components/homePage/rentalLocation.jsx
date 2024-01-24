import React from 'react';
import { Link } from 'react-router-dom';
import ImageCard from '../../utils/card/homecard2';
import cameraData from '../../data/landingpagedata/bestRentalData/cameraData';
const RentalLocation = () => {
  return ( 
    <div className="p-4 justify-center items-center ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold px-4 lg:ms-8 text-sm">Rental Location</h2>
        <Link to={"/"} className="cursor-pointer ">See All</Link>
      </div>
      <div className="sm:flex overflow-x-auto col-lg-2 col-md-3 col-sm-4 col-8 mb-4">
        {cameraData &&
          cameraData.map((cameraData) => (
            <ImageCard key={cameraData.id} rental={cameraData} />
          ))}
      </div>
    </div>
  );
}

export default RentalLocation;
