import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const SubCatNav = () => {
  return (
    <div className="sticky top-0 ">
      <div className="w-full h-28 text-white  bg-blue-600 rounded-b-2xl  flex justify-around items-end pb-8 ">
        <div>
          <IoArrowBack className="w-8 h-8 " />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex justify-normal items-center font-semibold text-2xl font-montserrat gap-2">
            Camera & Lens
          </h1>
        </div>
        <div>
          <Link to="/mobile-home/search">
            <IoSearchOutline className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubCatNav;
