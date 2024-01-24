import React from 'react';

const HomeImageCard = ({ rental }) => {
  return (
    <div className="justify-center item-center  lg:ms-10 p-2 relative">
      <div className="relative lg:w-[230px] lg:h-[230px] sm:w-40 sm:h-40">
        <img
          src={rental.imageUrl}
          alt={`Rentals ${rental.id}`}
          className="absolute inset-0 w-full h-full rounded object-cover"
        />
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
