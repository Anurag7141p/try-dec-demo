import React, { useEffect, useState } from "react";
import FilterAccordian from "./FilterAccordian";
import { IoFilter } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
// import AvailDate from "../../moredetails/availDate";
// import TimePickerComponent from "../../moredetails/timePicker";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Map from "../../map/map";
import FilterMap from "./filterMap";

const Filter = ({ filterLocation, setFilterLocation }) => {
  const filter = [
    {
      name: "category",
      list: ["vehicle", "camera and equip"],
    },
    {
      name: "model",
      list: ["nikon d3200", "canon 5d", "gopro"],
    },
    {
      name: "color",
      list: ["red", "black"],
    },
    {
      name: "type",
      list: ["", ""],
    },
    {
      name: "type",
      list: ["", ""],
    },
    {
      name: "type",
      list: ["", ""],
    },
    {
      name: "sort",
      list: ["date published", "relevance", "distance", "price"],
    },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [sort, setSort] = useState(null);

  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <div className="mt-5 ">
      <div className="w-full">
        <FilterMap setFilterLocation={setFilterLocation} />
      </div>
      <div className="py-2 pl-2">
        <h1 className="font-montserrat flex justify-normal items-center gap-2 text-base sm:text-base md:text-base  lg:text-md ">
          <IoFilter />
          Filter & Sort
        </h1>
      </div>
      <div className="pt-3">
        <div className="max-w-md mx-auto pr-2 mt-3 ">
          <div className="  w-full">
            <div
              className="cursor-pointer p-1 flex justify-between px-4 items-center rounded-lg bg-gray-100"
              onClick={() => setActiveIndex(!activeIndex)}
            >
              <div className="flex gap-3">
                <CiFilter className="w-5 h-5 xl:block md:hidden" />
                <h3 className="text-base font-frank">Date & Time</h3>
              </div>
              <span>{activeIndex ? <FiMinus /> : <GoPlus />}</span>
            </div>

            {activeIndex ? (
              <div className="p-3 pl-5 bg-white font-roboto text-gray-700 capitalize flex flex-col gap-4 text-[14px]">
                <div className="flex flex-col xl:flex-row  ">
                  <div className="w-full ">
                    <h3 className="mb-2 lg:mb-0">Pick-up date & Time</h3>
                    <div className=" border rounded-md border-gray-400 p-1 xl:flex xl:justify-normal xl:items-center 2xl:w-36">
                      <AvailDate style="filterDate" />
                      <TimePickerComponent style="filterTime" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col xl:flex-row  gap-4">
                  <div className="flex flex-col xl:flex-row  ">
                    <div className="w-full ">
                      <h3 className="mb-2 lg:mb-0">Return Date & Time</h3>
                      <div className=" border rounded-md border-gray-400 p-1 xl:flex xl:justify-normal xl:items-center 2xl:w-36">
                        <AvailDate style="filterDate" />
                        <TimePickerComponent style="filterTime" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="max-w-md mx-auto px-4 mt-3">
          <div className="mb-1  rounded">
            <div
              className="cursor-pointer p-2 flex justify-between items-center"
              onClick={() => setSort(!sort)}
            >
              <h3 className=" text-[13px] uppercase font-roboto text-gray-800">
                sort
              </h3>
              <span>{sort ? <FiMinus /> : <GoPlus />}</span>
            </div>
            {sort ? (
              <div className="pb-4">
                <div>
                  <div className=" xl:flex xl:justify-between xl:items-center w-3/4 ">
                    <h1 className="pt-3 pl-10 text-gray-600 font-frank text-[14px]">
                      Distance
                    </h1>
                    <h1 className="pt-3 pl-10 text-gray-600 font-frank text-[14px]">
                      60km
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center w-3/4 pl-10">
                    <div className="w-full h-2 rounded-lg bg-gray-300 ">
                      <div className="w-3/4 h-2 rounded-lg bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <hr className="w-full border border-gray-200 " />
        </div>
      </div>
      {filter.map((curElem, index) => (
        <div key={index} className="px-4 ">
          <FilterAccordian data={curElem} />
          <hr className="w-full border border-gray-200" />
        </div>
      ))}
    </div>
  );
};

export default Filter;
