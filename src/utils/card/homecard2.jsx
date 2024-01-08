import React, { useState } from 'react';

const ImageCard = ({ id, imageUrl, name, money, place }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const isMobile = window.innerWidth <= 640;
  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/5 lg:ms-10 p-2 relative">
      <img src={imageUrl} alt={name} className="w-full h-auto rounded-lg" style={{ minHeight: '100px', minWidth: '150px' }} />      <div className="absolute bottom-0 right-2">
        <button
          className={`text-white ${isFavorite ? 'fill-current' : 'fill-none'}`}
          onClick={toggleFavorite}
        >
          &#9829;
        </button>
      </div>
      <div className="mt-2">
        <p className="font-semibold ">{name}</p>
        <p className="text-black font-bold">{money}</p>
        <p className="text-gray-500">{place}</p>
      </div>
    </div>
  );
};

export default ImageCard;
