import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categorycard from '../reusable/card/categorycard';
import ImageData from '../../data/landingpagedata/categoryData/categoryData';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useMediaQuery } from '@react-hook/media-query';

const Category = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
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
    const totalCards = ImageData.length;
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
    <>
      {isLoggedIn ? (
        <div className="flex overflow-x-auto  lg:justify-center lg:space-x-4 p-4">
           {startIndex > 0 && (
          <button
            onClick={showPrevCards}
            className="lg:mt-48 absolute z-50 sm:mt-32 lg:left-[160px] text-gray-400 bg-white rounded-full lg:h-10 lg:w-10 shadow-md md:flex"
          >
            <span className="lg:px-1 lg:py-1">
              <MdOutlineKeyboardArrowLeft size={30} />
            </span>
          </button>
        )}
          {ImageData.slice(startIndex, startIndex + visibleCards).map((item, index) => (
            <span
            key={ImageData.id}
            className={`justify-center items-center  ${showNextAnimation ? 'next-animation' : showPrevAnimation ? 'prev-animation' : ''}`}
            >
            <Categorycard data={item} key={index} />
            </span>
          ))}
          {startIndex + visibleCards < ImageData.length && (
          <button
            onClick={showNextCards}
            className="lg:mt-48 absolute z-50 sm:mt-32 text-gray-400 bg-white rounded-full lg:h-10 lg:w-10 shadow-md md:flex lg:right-[142px] sm:right-2"
          >
            <span className="lg:px-1.5 lg:py-1">
              <MdKeyboardArrowRight size={'30px'} />
            </span>
          </button>
        )}
        </div>
      ) : (
        <div className="flex overflow-x-auto p-4 lg:justify-center lg:space-x-10">
          {ImageData.map((item, index) => (
            <Link
              to={item.linkTo}
              key={index}
              className="mx-2 p-2 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={item.image}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="mt-2 text-center"
              >
                <p className="text-xs">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Category;
