import React from 'react';
import ImageCard from '../../utils/card/homecard2';
import cameraData from '../../data/landingpagedata/bestRentalData/cameraData';
import SeeAllButton from '../../utils/button/seeAllButton';

const CameraUnits = () => {
  const firstFiveRentals = cameraData.slice(0, 5);
  const rendercamCards = () => {
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
      <h2 className="text-2xl font-bold px-4 lg:ms-7">Camera and light unit</h2>
      {renderViewAllLink()}

      <div className="sm:flex overflow-x-auto">
        {rendercamCards()}
      </div>
    </div>
  );
};

export default CameraUnits;
