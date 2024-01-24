import React from 'react';
import rentalsData from '../../data/landingpagedata/bestRentalData/bestRentalData';
import HomeImageCard from '../../utils/card/homecard';
import { Link } from 'react-router-dom';

const BestInRental = () => {
  return (
    <div className="p-4 overflow-hidden">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold px-4 lg:ms-8">Best in Rentals</h2>
        <Link to={"/"} className="cursor-pointer">See All</Link>
      </div>
      <div className="sm:flex overflow-x-auto col-lg-2 col-md-3 col-sm-4 col-8 mb-4">
        {rentalsData &&
          rentalsData.map((rentalData) => (
            <HomeImageCard key={rentalData.id} rental={rentalData} />
          ))}
      </div>
    </div>
  );
}

export default BestInRental;
