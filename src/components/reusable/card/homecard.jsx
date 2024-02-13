import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"; 
const HomeImageCard = ({ rental }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

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
    <div className="justify-center sm:ms-2 items-center relative">
      <div
        className="relative lg:w-[260px] lg:h-[157px] sm:h-40    hover:cursor-pointer"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <img
          src={Array.isArray(rental.imageUrl) ? rental.imageUrl[currentImageIndex] : rental.imageUrl}
          alt={`Rentals ${rental.id}`}
          className="absolute inset-0 w-full h-full rounded object-cover"
        />
        {Array.isArray(rental.imageUrl) && (
          <>
            {currentImageIndex > 0 && showButtons && (
              <button
                onClick={showPrevImage}
                className={`absolute left-0 top-1/2 transform text-gray-500 px-1 py-1 bg-white rounded-full ml-2 ${showButtons ? 'slide-in-left' : ''}`}              >
                <MdOutlineKeyboardArrowLeft size={'20px'} />
              </button>
            )}
            {currentImageIndex < rental.imageUrl.length - 1 && showButtons && (
              <button
                onClick={showNextImage}
                className={`absolute right-0 top-1/2 transform text-gray-500 px-1 py-1 bg-white rounded-full mr-2 ${showButtons ? 'slide-in-right' : ''}`}              >
                <MdKeyboardArrowRight size={'20px'} />
              </button>
            )}
          </>
        )}
        {Array.isArray(rental.imageUrl) && (
          <div
            className={`flex items-center justify-center absolute bottom-0 w-full mb-2 ${showButtons ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {rental.imageUrl.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-1 h-1.5 mx-1 rounded-full ${index === currentImageIndex ? 'bg-gray-400' : 'bg-white'
                  } cursor-pointer`}
              ></div>
            ))}
          </div>
        )}
      </div>
      <div className="p-1 text-black flex items-center">
        <img
          src={rental.smallImageUrl}
          alt={`Small Image ${rental.id}`}
          className="mr-2 h-4 w-5 rounded-full "
        />
        <div className="flex">
          <p className="font-semibold overflow-hidden overflow-ellipsis ">{rental.title}</p>
        </div>
        <div className="text-black flex items-center lg:ms-16">
          <div className="bg-yellow-100 rounded-full text-xs text-center w-12">
            <p>Top Rated</p>
          </div>
        </div>
      </div>
      <div className="sm:ms-2 sm:text-xs lg:w-[230px]">
        <p className="tracking-wide w-full sm:w-auto underline">{rental.paraText}</p>
      </div>
      <div className="flex items-center">
        <div className="text-yellow-500 text-lg">★ {rental.rating} <label className="text-black">5.0</label></div>
      </div>
      <div className="ml-2 font-extrabold">{rental.money}</div>
    </div>
  );
};

export default HomeImageCard;
