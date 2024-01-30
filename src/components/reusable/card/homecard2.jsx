import React, { useState } from 'react';

const ImageCard = ({ rental }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="justify-center item-center lg:ms-10 p-2 relative">
      <div className="relative lg:w-[230px] lg:h-[230px] sm:w-40 sm:h-40">
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
      <div className="mt-2">
        <p className="font-semibold ">{rental.name}</p>
        <p className="text-black font-bold">{rental.money}</p>
        <p className="text-gray-500">{rental.place}</p>
      </div>
    </div>
  );
};

export default ImageCard;
