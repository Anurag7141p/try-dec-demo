import React from 'react';
import rentalsData from '../../data/landingpagedata/bestRentalData/bestRentalData';
import SeeAllButton from '../../utils/button/seeAllButton';
import HomeImageCard from '../../utils/card/homecard';

const BestInRental = () => {
  const firstFiveRentals = rentalsData.slice(0, 5);

  const renderCards = () => {
    return firstFiveRentals.map((rental, index) => (
      <HomeImageCard key={rental.id} rental={rental} />
    ));
  };

  const renderViewAllLink = () => {
    if (rentalsData.length > 5) {
      return <SeeAllButton link="/all-rentals">See All</SeeAllButton>;
    }
    return null;
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold px-4 lg:ms-8">Best in Rentals</h2>
      {renderViewAllLink()}
      <div className="sm:flex overflow-x-auto">
        {renderCards()}
      </div>
    </div>
  );
}

export default BestInRental;
