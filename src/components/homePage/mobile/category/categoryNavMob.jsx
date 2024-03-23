import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="w-full h-28 text-white px-5  bg-blue-600  rounded-b-2xl flex justify-between  items-end pb-8 ">
        <div>
          <IoArrowBackOutline className="w-8 h-8" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex justify-normal items-center font-semibold text-2xl font-montserrat gap-2">
            Categories
          </h1>
        </div>
        <div>
          <Link to="/mobile-home/search">
            <CiSearch className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
