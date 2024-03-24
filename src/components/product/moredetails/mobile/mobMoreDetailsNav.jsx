import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const MobMoreDetailsNav = ({ data }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${data.images[1]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-64 w-full"
      >
        <div className="px-10 flex justify-between pt-10">
          <div className="text-xl bg-white rounded-lg p-1 border border-gray-200">
            <IoArrowBack />
          </div>
          <div className="flex justify-end gap-3 rounded-sm">
            <div className="text-xl bg-white rounded-lg p-1 border border-gray-200">
              <FaHeart className="w-5 h-5 text-gray-500" />
            </div>
            <div className="text-xl bg-white rounded-lg p-1 border border-gray-200">
              <FaShareAlt className="w-6 h-6 rounded-md p-1" />
            </div>
            <div  className="text-xl bg-white rounded-lg p-1 border border-gray-200">
              <BsThreeDots className="w-6 h-6   rounded-md p-1 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobMoreDetailsNav;
