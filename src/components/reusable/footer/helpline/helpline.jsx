import React from 'react'
import FooterImage1 from '../../../../assets/footerImages/FooterImage1.jpg';


export default function Helpline() {
  return (
    <div >
         <div className="lg:flex items-center  lg:mx-6  bg-gray-200 pl-4 lg:w-[97%] rounded-lg space-x-4 ">
        <div>
          <h3 className="text-3xl lg:ms-20 text-white font-bold">Olapool helpline</h3>
          <p className="text-white p-4 lg:ms-20">Provides support for all your service needs.</p>
          <button className="bg-green-500 lg:ms-20 text-white px-4 py-2 rounded-md">Get Call Back</button>
        </div>
        <div className="lg:pl-[600px] mt-4 lg:mt-0">
          <img src={FooterImage1} alt="Your Image" className="w-48 h-48 object-cover" />
        </div>
      </div>
    </div>
  )
}
