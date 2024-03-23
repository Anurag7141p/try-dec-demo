import React from "react";
import { IoArrowBack, IoSearchOutline } from "react-icons/io5";
import HomeFooter from "../homeFooter";
import { GoHistory } from "react-icons/go";
import { IoIosClose, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const MobSearch = () => {
  return (
    <div>
      <div className="sticky top-0 ">
        <div className="w-full h-28 text-white  bg-blue-600 rounded-b-2xl  flex justify-around items-end pb-8 ">
          <div>
            <Link to="/mobile-home">
              <IoArrowBack className="w-8 h-8 " />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="flex justify-normal items-center font-semibold text-xl font-montserrat gap-2">
              Search
            </h1>
          </div>
          <div></div>
        </div>
      </div>
      <div className="px-5 pt-4">
        <div className="flex flex-col gap-3">
          <div className="relative ">
            <select
              id="storeMode"
              name="storeMode"
              className="block font-sm appearance-none w-full p-3 mb-1 bg-white border border-r-gray-300 rounded-lg border-gray-400 outline-none focus:border-blue-300 text-gray-700     leading-tight focus:outline-none"
            >
              <option value="" disabled hidden>
                Select your store type
              </option>
              <option className="rounded">hello</option>
              <option className="rounded">hello</option>
              <option className="rounded">hello</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter Key words"
            className="w-full border border-gray-300 p-2 rounded-xl outline-none focus:outline-blue-400 focus:border-none"
          />
          <input
            type="text"
            placeholder="Trissur,Kerala"
            className="w-full border border-gray-300 p-2 rounded-xl outline-none focus:outline-blue-400 focus:border-none"
          />
        </div>
        <div className="w-full h-0 border mt-4 border-gray-300"></div>
        <div>
          <h1 className="text-gray-500 font-semibold pt-5">Recent Searchs</h1>
        </div>
        <div className="flex justify-between pt-3 gap-3">
          <div className="flex gap-5 justify-center items-center">
            <div className="text-2xl">
              <GoHistory />
            </div>
            <div>
              <h1>Male Actor</h1>
              <p className="text-gray-500">In cast calls</p>
            </div>
          </div>
          <div className="text-2xl flex justify-center items-center">
            <IoMdClose />
          </div>
        </div>
        <div className="flex justify-between pt-3 gap-3">
          <div className="flex gap-5 justify-center items-center">
            <div className="text-2xl">
              <GoHistory />
            </div>
            <div>
              <h1>Male Actor</h1>
              <p className="text-gray-500">In cast calls</p>
            </div>
          </div>
          <div className="text-2xl flex justify-center items-center">
            <IoMdClose />
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default MobSearch;
