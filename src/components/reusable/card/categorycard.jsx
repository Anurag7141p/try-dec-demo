import React from 'react';

const Categorycard = ({ data }) => {
  return (
    <div className='justify-center items-center text-center mt-6 mb-2  sm:ms-4 md:ms-4 md:w-[106px]  p-2 lg:w-[200px]'>
      <div className='overflow-x-auto rounded-xl' style={{ backgroundColor: data.backgroundColor }}>
        <p className="font-bold text-center p-1 text-white mt-2 lg:text-md sm:text-xs overflow-hidden whitespace-nowrap overflow-ellipsis">
          {data.title}
        </p>
        <div className="overflow-hidden rounded-lg">
          <img
            src={data.image}
            alt={`Image ${data.title}`}
            className="object-cover w-full h-auto sm:w-auto md:w-auto lg:w-auto px-2 py-2 rounded-2xl mt-4 lg:h-[180px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Categorycard;
