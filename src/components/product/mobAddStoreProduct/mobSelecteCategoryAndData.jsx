import React, { useState } from "react";
import CenterImageAttach from "../addProductdetails/centerImageAttach";
import MobCenterImageAttach from "./mobCenterImageAttach";
import Map from "../../map/map";

const MobSelecteCategoryAndData = ({setPage,page}) => {
  const [AddLocation,setAddLocation]=useState('')
    const next=()=>{
        setPage(page+1)
      }

      const prev=()=>{
        setPage(page-1)
      }
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-full sm:h-60 min-h-40 pt-3  text-white  bg-blue-600   flex flex-col gap-6 justify-center pb-5 px-5 rounded-b-3xl">
          <h1 className="text-xl font-semibold">Add Product </h1>
          <p className="text-md">
            The rental store will host all the products you are putting on rent.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 w-full h-2 bg-white rounded"></div>
            <div className="col-span-1 w-full h-2  rounded bg-blue-900"></div>
            <div className="col-span-1 w-full h-2   rounded bg-blue-900"></div>
          </div>
        </div>
      </div>

      {/* category and subcategory */}
      <div className="w-full px-10 py-5 pt-10 flex flex-col gap-4 z-10 pb-32">
        <h1 className="text-lg text-gray-600 font-semibold">
          Category & SubCategory
        </h1>
        <div className="relative  ">
          <select
            name="category"
            className="p-2  block appearance-none w-full bg-white border  border-gray-400  focus:border-blue-300 text-gray-700 py-4 mb-3 text-base rounded-xl pr-8  leading-tight focus:outline-none"
          >
            <option className="rounded">Camera</option>
            <option className="rounded">Vehicle</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex  bottom-3  items-center px-2 text-gray-700">
            <svg
              className="fill-current h-5 w-5"
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
        <div className="relative  ">
          <select
            name="category"
            className="p-2  block appearance-none w-full bg-white border  border-gray-400  focus:border-blue-300 text-gray-700 py-4 mb-3 text-base rounded-xl pr-8  leading-tight focus:outline-none"
          >
            <option className="rounded">Camera</option>
            <option className="rounded">Vehicle</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex  bottom-3  items-center px-2 text-gray-700">
            <svg
              className="fill-current h-5 w-5"
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

        {/* title */}
        <div >
          <input
            type="text"
            className=" border-b-2 border-blue-500 w-full p-2 focus:outline-none text-base"
            placeholder="Title"
          />
        </div>

        {/* brand and model */}
        <h1 className="text-lg text-gray-600 font-semibold pt-5">
          Brand & Model
        </h1>
        <div className="relative  ">
          <select
            name="category"
            className="p-2  block appearance-none w-full bg-white border  border-gray-400  focus:border-blue-300 text-gray-700 py-4 mb-3 text-base rounded-xl pr-8  leading-tight focus:outline-none"
          >
            <option className="rounded">Camera</option>
            <option className="rounded">Vehicle</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex  bottom-3  items-center px-2 text-gray-700">
            <svg
              className="fill-current h-5 w-5"
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
        <div className="relative  ">
          <select
            name="category"
            className="p-2  block appearance-none w-full bg-white border  border-gray-400  focus:border-blue-300 text-gray-700 py-4 mb-3 text-base rounded-xl pr-8  leading-tight focus:outline-none"
          >
            <option className="rounded">Camera</option>
            <option className="rounded">Vehicle</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex  bottom-3  items-center px-2 text-gray-700">
            <svg
              className="fill-current h-5 w-5"
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
        {/* attach image */}
        <div>
          <MobCenterImageAttach />
        </div>
        <div className="w-full">
          <Map setAddLocation={setAddLocation}/>
        </div>
      </div>

      {/* footer */}
      <div className="xs:h-24 xs:w-full flex text-lg bg-gray-50 font-lato  border-2 rounded-t-3xl items-center justify-around fixed bottom-0 drop-shadow-3xl ">
        <div>
          <button className="text-gray-500 px-10 py-3  hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
          onClick={prev}>
            Back
          </button>
        </div>
        <div>
          <button
           className="text-gray-500 px-10 py-3 hover:text-[#1281B8]   rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
           onClick={next}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default MobSelecteCategoryAndData;
