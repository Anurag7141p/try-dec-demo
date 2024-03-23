import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const FilterNav = () => {
  return (
    <div className="w-full h-32 flex flex-col justify-center items-center gap-4">
      <Link to="/mob-subcat-product">
        <div className="flex flex-col justify-center items-center font-frank text-gray-500">
          <IoIosArrowUp />
          <h1>Go Back</h1>
        </div>
      </Link>
      <h1 className="font-montserrat text-3xl font-medium">Filter & Sort </h1>
    </div>
  );
};

export default FilterNav;
