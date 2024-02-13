import React from 'react';
import Green from '../../data/singlepage/singlegreen';

function Categorygreenbox() {
  return (
    <div className='flex flex-nowrap overflow-x-auto lg:p-2 gap-5  sm:mx-4 lg:mx-24'>
      {Green.map((item, index) => (
        <div key={item.id || index} className='lg:w-48 lg:h-24 sm:w-20 md:w-48 py-1  bg-green-200 text-center hover:bg-green-400 mb-3'>
          <img src={item.image} alt="" className='h-14 w-14 m-auto' />
          <h1 className='mt-2 text-center justify-center mx-auto  lg:w-[130px] sm:w-[80px] md:w-[130px] sm:text-xs '>{item.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default Categorygreenbox;
