import React, { useState, useEffect } from 'react';
import rentalsData from '../../data/landingpagedata/bestRentalData/bestRentalData';
import HomeImageCard from '../../components/reusable/card/homecard';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useMediaQuery } from '@react-hook/media-query';

const BestInRental = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const [visibleCards, setVisibleCards] = useState(isLargeScreen ? 5 : 2);
  const [startIndex, setStartIndex] = useState(0);
  const [showNextAnimation, setShowNextAnimation] = useState(false);
  const [showPrevAnimation, setShowPrevAnimation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 768;
      setVisibleCards(isLarge ? 5 : 2);

      // If switching from small to large screen or vice versa, reset startIndex to 0
      if ((isLarge && !isLargeScreen) || (!isLarge && isLargeScreen)) {
        setStartIndex(0);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLargeScreen, setVisibleCards, setStartIndex]);

  const showNextCards = () => {
    const totalCards = rentalsData.length;
    const cardsToSlide = visibleCards;

    if (startIndex + cardsToSlide < totalCards) {
      setShowNextAnimation(true);
      setTimeout(() => {
        setStartIndex(startIndex + cardsToSlide);
        setShowNextAnimation(false);
      }, 500); // Adjust the duration to match your CSS transition duration
    }
  };

  const showPrevCards = () => {
    const cardsToSlide = visibleCards;

    if (startIndex - cardsToSlide >= 0) {
      setShowPrevAnimation(true);
      setTimeout(() => {
        setStartIndex(startIndex - cardsToSlide);
        setShowPrevAnimation(false);
      }, 500); // Adjust the duration to match your CSS transition duration
    }
  };

  return (
    <div className="lg:p-20 overflow-hidden relative justify-center items-center">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold px-4 lg:ms-1 text-lg">Best in Rentals</h2>
        <div className="hidden sm:flex items-center space-x-2">
          <Link to={"/"} className="cursor-pointer sm:mr-4">
            See All
          </Link>
        </div>
      </div>
      <div className={`sm:flex overflow-x-auto col-lg-2 col-md-3 col-sm-4 col-8 sliding-container `}>
        {startIndex > 0 && (
          <button
            onClick={showPrevCards}
            className="lg:mt-32 absolute z-50 sm:mt-32 lg:left-16 text-gray-400 bg-white rounded-full lg:h-10 lg:w-10 shadow-md md:flex"
          >
            <span className="lg:px-1 lg:py-1">
              <MdOutlineKeyboardArrowLeft size={30} />
            </span>
          </button>
        )}
        {rentalsData.slice(startIndex, startIndex + visibleCards).map((rentalData, index) => (
          <span
            key={rentalData.id}
            className={`justify-center items-center  ${showNextAnimation ? 'next-animation' : showPrevAnimation ? 'prev-animation' : ''}`}
            >           
             <HomeImageCard rental={rentalData} />
          </span>
        ))}
        {startIndex + visibleCards < rentalsData.length && (
          <button
            onClick={showNextCards}
            className="lg:mt-32 absolute z-50 sm:mt-32 text-gray-400 bg-white rounded-full lg:h-10 lg:w-10 shadow-md md:flex lg:right-16 sm:right-2"
          >
            <span className="lg:px-1.5 lg:py-1">
              <MdKeyboardArrowRight size={'30px'} />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default BestInRental;
