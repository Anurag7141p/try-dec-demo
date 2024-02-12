import React, { useState } from 'react';

const ImageCard = ({ rental }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="justify-center item-center mx-6 p-2 relative">
      <div className="relative lg:w-[244px] lg:h-[170px] sm:w-40 sm:h-40">
        <img src={rental.imageUrl} alt={rental.name} className='absolute inset-0 w-full h-full rounded object-cover' />
        <div className="absolute bottom-0 right-0 p-2">
          <button
            className={`text-white ${isFavorite ? 'fill-current' : 'fill-none'}`}
            onClick={toggleFavorite}
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
      <div className="p-1 text-black flex items-center flex-wrap">
        <img
          src={rental.smallImageUrl}
          alt={`Small Image ${rental.id}`}
          className="mr-2 h-4 w-5 rounded-full mb-2 sm:mb-0"
        />
        <div className="flex flex-col sm:flex-row sm:items-center">
          <p className="font-semibold overflow-hidden overflow-ellipsis mb-1 sm:mb-0 sm:mr-2">{rental.title}</p>
          <div className="bg-yellow-100 rounded-full text-xs text-center sm:w-16 sm:ms-1 lg:w-20">
            <p>Top Rated</p>
          </div>
        </div>
      </div>
      <div className="sm:ms-2 sm:text-xs sm:w-40 lg:w-[230px]">
        <p className="tracking-wide w-full sm:w-auto underline">{rental.paraText}</p>
      </div>
      <div className="flex items-center">
        <div className="text-yellow-500 text-lg">★ {rental.rating} <label className="text-black">5.0</label></div>
      </div>
      <div className="ml-2 font-extrabold">{rental.money}</div>
    </div>
  );
};

export default ImageCard;
