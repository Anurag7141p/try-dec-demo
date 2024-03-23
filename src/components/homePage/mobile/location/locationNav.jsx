import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const LocationNav = () => {
  return (
    <div className="xs:w-full xs:h-24 xs:bg-blue-600 sticky top-0 font-frank  rounded-b-2xl z-50">
      <div className="flex justify-between text-center items-center text-2xl text-white p-3 absolute inset-x-0 bottom-4">
        <Link to="/mobile-home">
          <FaArrowLeft />
        </Link>
        <h2>Location</h2>
        <h1></h1>
      </div>
    </div>
  );
};

export default LocationNav;
