import React, { useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const HomeImageCard = ({ rental }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    if (Array.isArray(rental.imageUrl)) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rental.imageUrl.length);
    }
  };

  const showPrevImage = () => {
    if (Array.isArray(rental.imageUrl)) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? rental.imageUrl.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="justify-center item-center lg:ms-6  p-2 relative">
      <div className="relative lg:w-[230px] lg:h-[230px] sm:w-40 sm:h-40">
        <img
          src={Array.isArray(rental.imageUrl) ? rental.imageUrl[currentImageIndex] : rental.imageUrl}
          alt={`Rentals ${rental.id}`}
          className="absolute inset-0 w-full h-full rounded object-cover"
        />
        {Array.isArray(rental.imageUrl) && (
          <>
            <button
              onClick={showPrevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-200 px-3"
            >
              <IoIosArrowDropleft size={'20px'} />
            </button>
            <button
              onClick={showNextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-200 px-3"
            >
              <IoIosArrowDropright size={'20px'} />
            </button>
          </>
        )}
        {Array.isArray(rental.imageUrl) && (
          <div className="flex items-center justify-center absolute bottom-0 w-full mb-2">
            {rental.imageUrl.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-1 h-1.5 mx-1 rounded-full ${
                  index === currentImageIndex ? 'bg-gray-400' : 'bg-white'
                } cursor-pointer`}
              ></div>
            ))}
          </div>
        )}
      </div>
      <div className="p-2 text-black flex items-center">
        <img
          src={rental.smallImageUrl}
          alt={`Small Image ${rental.id}`}
          className="mr-2 h-4 w-5 rounded-full "
        />
        <div className="flex">
          <p className="font-semibold overflow-hidden overflow-ellipsis ">
            {rental.title}
          </p>
        </div>
        <div className="text-black flex items-center ml-auto">
          <div className="bg-yellow-100 rounded-full text-xs text-center w-12">
            <p>Top Rated</p>
          </div>
        </div>
      </div>
      <div className="sm:ms-2 sm:text-xs">
        <p className="tracking-wide w-full sm:w-auto underline">{rental.paraText}</p>
      </div>
      <div className="flex items-center">
        <div className="text-yellow-500 text-lg">&#9733; {rental.rating} <label className="text-black">5.0</label></div>
      </div>
      <div className="ml-2 font-extrabold">{rental.money}</div>
    </div>
  );
};

export default HomeImageCard;
