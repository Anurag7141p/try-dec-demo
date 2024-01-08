import React from 'react';

const HomeImageCard = ({ rental }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/5 lg:ms-10 p-2 relative">
      <img src={rental.imageUrl} alt={`Rentals ${rental.id}`} className="w-full h-auto rounded" />
      <div className="p-2 text-black flex items-center">
        <img src={rental.smallImageUrl} alt={`Small Image ${rental.id}`} className="mr-2 h-4 w-5 rounded-full" />
        <p className="font-semibold">{rental.title}</p>
        <div className="bg-yellow-100  text-xs ">
          <span className=" ">Top Rated</span>
        </div>
      </div>
      <div className="sm:ms-2 sm:text-xs">
        <p className=" tracking-wide w-full  sm:w-auto underline">{rental.paraText}</p>
      </div>
      <div className="flex items-center mt-2 ">
        <div className="text-yellow-500 text-lg">&#9733; {rental.rating} <label className="text-black">5.0</label></div>
      </div>
      <div className="ml-3 font-extrabold lg:mt-3">{rental.money}</div>
    </div>
  );
};

export default HomeImageCard;
