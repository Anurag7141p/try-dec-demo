import React from 'react';
import ImageData from '../../data/landingpagedata/categoryData/categoryData';

const Categoryhead = () => {
  return (
    <div className='flex flex-nowrap overflow-x-auto lg:justify-center p-2 space-x-8 lg:space-x-12'>
      {ImageData.map((item, index) => (
        <div className='w-full sm:w-1/2 lg:w-auto ' key={item.id || index}>
          <h1 className='text-center whitespace-nowrap'>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Categoryhead;
