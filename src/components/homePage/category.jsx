import React from 'react';
import { Link } from 'react-router-dom';
import HeroData from '../../data/landingpagedata/categoryData/categoryData';

const Category = () => {
  return (
    <div className="flex overflow-x-auto justify-start items-center lg:justify-center ms-4 text-center ">
      {HeroData.map((item, index) => (
        <Link
          to={item.linkTo}
          key={index}
          className="mr-8 ml-4 p-4 flex flex-col items-center  "  
          style={{ flex: '0 0 auto', width: 'calc(100vw / 14)' }}
        >
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={item.image}
              alt={`Image ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2 text-center">
            <p className="text-xs w-60">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Category;
