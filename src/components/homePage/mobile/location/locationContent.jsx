import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const LocationContent = () => {
  let state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  return (
    <div className="w-screen font-montserrat overflow-auto">
      <div className="px-4 py-5 flex flex-col gap-4">
        <div class="relative z-0">
          <div class="relative ">
            <input
              type="text"
              name="search"
              class="w-full p-3 rounded-lg border border-gray-500 bg-slate-50"
              placeholder="Search Area, City, or Neighborhood"
            />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
              <IoCloseOutline class="h-6 w-6 text-gray-600 cursor-pointer toggle-password" />
            </div>
          </div>
        </div>
        <div className="w-full flex  gap-4 justify-normal items-center">
          <div>
            <FaLocationCrosshairs className="w-8 h-8 text-main-color" />
          </div>
          <div>
            <h1 className="text-main-color text-lg">Use Current Location</h1>
            <p className="text-gray-600 text-[14px]">
              86MV+WXR,Kolacheri,Kerala 670142
            </p>
          </div>
        </div>
        <hr className=" w-full border border-gray-300" />
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-400 text-base font-semibold uppercase">Recently Used</h1>
          <div className="flex justify-normal items-center gap-4 mt-2">
            <IoLocationOutline className="w-7 h-7" />
            <h1 className="font-semibold">Kaloor, Eranakulam</h1>
          </div>
          <div className="flex justify-normal items-center gap-4">
            <IoLocationOutline className="w-7 h-7" />
            <h1 className="font-semibold">Taliparamba, Kannur</h1>
          </div>
          <div className="flex justify-normal items-center gap-4">
            <IoLocationOutline className="w-7 h-7" />
            <h1 className="font-semibold">Mavicheri, Kannur</h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          <h1 className="text-gray-400 text-base font-semibold uppercase">Choose State</h1>
          <div className="flex justify-normal items-center gap-4 mt-2">
            <h1 className="font-semibold">All India</h1>
          </div>
          {state.map((curElem) => (
            <div className="flex justify-between items-center gap-4">
              <h1 className="font-semibold">{curElem}</h1>
              <IoIosArrowForward className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationContent;
