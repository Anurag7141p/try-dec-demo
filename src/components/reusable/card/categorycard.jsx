import React from 'react';

const Categorycard = ({ data }) => {
  return (
    <div className='justify-center items-center text-center mt-6 mx-4 '>
      <div className='overflow-x-auto rounded-xl  'style={{ backgroundColor: data.backgroundColor }}>
          <p className="font-bold text-white mt-2">{data.title}</p>
        <div className="overflow-hidden rounded-lg">
          <img
            src={data.image}
            alt={`Image ${data.title}`}
            className=" object-cover px-2 py-2 rounded-2xl lg:h-[220px] lg:w-[200px] sm:w-[190px] sm:h-[160px]  mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Categorycard;
