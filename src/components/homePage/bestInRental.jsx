import React, { useState } from 'react';
import rentalsData from '../../data/landingpagedata/bestRentalData/bestRentalData';
import HomeImageCard from '../../components/reusable/card/homecard';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle,IoIosArrowDropleftCircle } from "react-icons/io";
const BestInRental = () => {
  const [visibleCards, setVisibleCards] = useState(5);
  const [startIndex, setStartIndex] = useState(0);
  const [showNextAnimation, setShowNextAnimation] = useState(false);
  const [showPrevAnimation, setShowPrevAnimation] = useState(false);

  const showNextCards = () => {
    const totalCards = rentalsData.length;
    if (startIndex + visibleCards < totalCards) {
      setShowNextAnimation(true);
      setTimeout(() => {
        setStartIndex(startIndex + 1);
        setShowNextAnimation(false);
      }, 500); // Adjust the duration to match your CSS transition duration
    }
  };

  const showPrevCards = () => {
    if (startIndex > 0) {
      setShowPrevAnimation(true);
      setTimeout(() => {
        setStartIndex(startIndex - 1);
        setShowPrevAnimation(false);
      }, 500); // Adjust the duration to match your CSS transition duration
    }
  };

  return (
    <div className="p-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold px-4 lg:ms-14 text-lg">Best in Rentals</h2>
        <div className="hidden sm:flex items-center space-x-2">
          <Link to={"/"} className="cursor-pointer">See All</Link>
        </div>
      </div>
      <div className={`sm:flex overflow-x-auto col-lg-2 col-md-3 col-sm-4 col-8 sliding-container ${showNextAnimation ? 'next-animation' : showPrevAnimation ? 'prev-animation' : ''}`}>
        {startIndex > 0 && (
          <button onClick={showPrevCards} className={`mt-32 text-gray-400 hidden md:flex ${showPrevAnimation ? 'prev-animation' : ''}`}>
            <IoIosArrowDropleftCircle  size={30}/>
          </button>
        )}
        {rentalsData.slice(startIndex, startIndex + visibleCards).map((rentalData) => (
          <HomeImageCard key={rentalData.id} rental={rentalData} />
        ))}
        {startIndex + visibleCards < rentalsData.length && (
          <button onClick={showNextCards} className='mt-32 text-gray-400  hidden md:flex'>
            <IoIosArrowDroprightCircle size={'30px'}/>
          </button>
        )}
      </div>
    </div>
  );
};

export default BestInRental;
