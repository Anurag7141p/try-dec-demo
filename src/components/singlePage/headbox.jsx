import React from 'react';
import cam from '../../assets/singlepage/camera-icon-21.png';
import mic from '../../assets/singlepage/micro.svg';

export default function Headbox() {
  return (
    <div>
      <div className='bg-gray-100 p-2 lg:w-[1500px]'>
        <h5 className='mb-5 text-center lg:text-left lg:pl-20'>Camera And Equipment's.</h5>
        <div className="flex flex-wrap gap-3 justify-evenly overflow-x-auto">
          <div className='w-36 h-28 bg-green-200 text-center hover:bg-green-400 mb-3'>
            <img src={cam} alt="" className="h-14 w-14 m-auto" />
            <p className="mt-2">Camera</p>
          </div>
          <div className='w-36 bg-green-200 text-center hover:bg-green-400 mb-3'>
            <img src={cam} alt="" className="h-14 w-14 m-auto" />
            <p className="mt-2">Lens</p>
          </div>
          <div className='w-36 bg-green-200 text-center hover:bg-green-400 mb-3'>
            <img src={cam} alt="" className="h-14 w-14 m-auto" />
            <p className="mt-2">Light Unit</p>
          </div>
          <div className='w-36 bg-green-200 text-center hover:bg-green-400 mb-3'>
            <img src={cam} alt="" className="h-14 w-14 m-auto" />
            <p className="mt-2">Tripod</p>
          </div>
          <div className='w-36 bg-green-200 text-center hover:bg-green-400 mb-3'>
            <img src={mic} alt="" className="h-14 w-14 m-auto" />
            <p className="mt-2">Mic</p>
          </div>
          <div className='w-36 bg-green-200 text-center hover:bg-green-400 mb-3'>
            <img src={cam} alt="" className="h-14 w-14 m-auto" />
            <p className="mt-2">Gimbal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
