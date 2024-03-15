import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import NewCheckout from "../checkout/newCheckout";

const ProductAvailability = () => {
  const [locationClose, setLocationClose] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-5 p-5 font-frank md:px-10 lg:px-16">
        <div className="flex justify-end gap-3 rounded-sm">
          <FaHeart className="w-5 h-5 text-gray-500" />
          <FaShareAlt className="w-6 h-6 border border-gray-400 rounded-md p-1" />
          <div className="relative">
            <BsThreeDots className="w-6 h-6 border border-gray-400 rounded-md p-1 cursor-pointer" />
          </div>
        </div>

        <div className="border border-gray-300 p-4 flex flex-col gap-4 md:px-3">
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-xl lg:text-2xl text-gray-700">
              Availability
            </h1>
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
              <div className="flex flex-col gap-1">
                <h3>Pick-up & Drop-off date</h3>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 justify-center">
              <div className="flex flex-col gap-1">
                <div>
                  <h1>Pick-up Time</h1>
                </div>
              </div>

              <div>
                <h1>Drop-Off Time</h1>
              </div>
            </div>
            <div>
              <button
                className="bg-blue-500 w-full flex justify-center items-center gap-2 lg:gap-10 p-1 rounded text-white"
                onClick={() => setLocationClose(!locationClose)}
              >
                <h1 className="font-semibold text-lg lg:text-xl">Rs</h1>
                <h2>Add +</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
      {locationClose ? (
        <NewCheckout
          setLocationClose={setLocationClose}
          locationClose={locationClose}
        />
      ) : null}
    </>
  );
};

export default ProductAvailability;
