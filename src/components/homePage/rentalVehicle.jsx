import React from 'react'
import ImageCard from '../../utils/card/homecard2'
import SeeAllButton from '../../utils/button/seeAllButton';
import cameraData from '../../data/landingpagedata/bestRentalData/cameraData';
const RentalVehicle = () => {
  const firstFiveRentals = cameraData.slice(0, 5);
  const renderVechiclesCards = () => {
    return firstFiveRentals.map((image, index) => (
      <ImageCard key={image.id} {...image} />
    ));
  };
  const renderViewAllLink = () => {
    if (cameraData.length > 5) {
      return <SeeAllButton link="/cameraeqip">See All</SeeAllButton>
    }
    return null;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold px-4">Rental Vehicle</h2>
      {renderViewAllLink()}
      <div className="sm:flex overflow-x-auto">
        {renderVechiclesCards()}
      </div>
    </div>
  )
}

export default RentalVehicle