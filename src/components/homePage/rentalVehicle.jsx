import React from 'react';
import { Link } from 'react-router-dom';
import ImageCard from '../../components/reusable/card/homecard2';
import cameraData from '../../data/landingpagedata/bestRentalData/cameraData';
const RentalVehicle = () => {
  return ( 
    <div className=" justify-center items-center px-10">
      <div className="flex justify-between">
        <h2 className=" font-bold px-4 lg:ms-8 text-lg">Rental Vechiles</h2>
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

export default RentalVehicle;
