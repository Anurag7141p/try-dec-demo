import React from 'react';
import rentalsData from '../../data/landingpagedata/bestRentalData/bestRentalData';
import HomeImageCard from '../../utils/card/homecard';
import Navbar from '../../utils/navbar/navbar';

const SeeAll = () => {
  return (
    <>
    <Navbar/>
    <div className="p-4 mt-20 ">
      <h2 className="text-2xl font-bold px-4 lg:ms-8">Best in Rentals</h2>

      <div className="flex flex-wrap ">
        {rentalsData.map((rental) => (
          <HomeImageCard key={rental.id} rental={rental} />
        ))}
      </div>
    </div>
    </>
  );
}

export default SeeAll;
