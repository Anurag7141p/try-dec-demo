import React from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const FilterSelect = () => {
  return (
    <div>
      <div className="flex gap-2 px-4 pt-4 font-frank w-screen overflow-auto">
        <Link to="/mob-filter">
          <div className="rounded-xl p-2 border border-gray-400">
            <HiAdjustmentsHorizontal className="w-7 h-7 text-blue-600" />
          </div>
        </Link>
        <div className=" flex justify-between items-center gap-3 rounded-xl p-2 border border-gray-400 bg-blue-600 text-white">
          <h1>Camera</h1>
          <IoIosCloseCircleOutline />
        </div>
        <div className=" flex justify-between items-center gap-3 rounded-xl p-2 border border-gray-400 bg-blue-600 text-white">
          <h1>Videography</h1>
          <IoIosCloseCircleOutline />
        </div>
        <div className=" flex justify-between items-center gap-3 rounded-xl p-2 border border-gray-400 bg-blue-600 text-white">
          <h1>Videography</h1>
          <IoIosCloseCircleOutline />
        </div>
        <div className=" flex justify-between items-center gap-3 rounded-xl p-2 border border-gray-400 bg-blue-600 text-white">
          <h1>Videography</h1>
          <IoIosCloseCircleOutline />
        </div>
        <div className=" flex justify-between items-center gap-3 rounded-xl p-2 border border-gray-400 bg-blue-600 text-white">
          <h1>Videography</h1>
          <IoIosCloseCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default FilterSelect;
