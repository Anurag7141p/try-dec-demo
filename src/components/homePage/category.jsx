import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageData from '../../data/landingpagedata/categoryData/categoryData';
import SlickCarousel from '../reusable/slickcarousel';
const Category = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn ? (
        <div className="relative ">
          <SlickCarousel imageData={ImageData} />
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
