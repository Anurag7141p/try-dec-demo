import React from "react";
import { CiCalendarDate } from "react-icons/ci";

const MobSloatDates = ({}) => {
  const date = [
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
    {
      month: "March",
      year: "2024",
    },
  ];

  return (
    <div className="h-screen w-full bg-white rounded-t-3xl pb-32 pt-5 px-5 ">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button className="p-2 w-[60%] border-2 border-green-500 rounded-l-lg">
            Mar 14, 2024
          </button>
          <button className="p-2 w-[40%] border-2 border-green-500 rounded-r-lg">
            Mar 14, 2024
          </button>
        </div>
        <div className="flex gap-2">
          <button className="p-2 w-[60%] border-2 border-red-500 rounded-l-lg">
            Mar 14, 2024
          </button>
          <button className="p-2 w-[40%] border-2 border-red-500 rounded-r-lg">
            Mar 14, 2024
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto gap-2 pt-10">
        {date.map((curElem) => (
          <div className="px-3 py-3 flex flex-col gap-1 justify-center items-center h-auto w-20 border border-gray-400 rounded-lg">
            <CiCalendarDate className="text-2xl" />
            <h1>{curElem.month}</h1>
            <p className="text-sm">{curElem.year}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="bg-gray-50 my-2 border rounded-md w-full">
          <div className="p-5  flex flex-col gap-3 w-3/4">
            <div className="flex justify-between  pb-1 ">
              <div>Hourly</div>
              <div>₹ 1500</div>
            </div>
            <div className="flex justify-between">
              <div>Maximum</div>
              <div>2 hours</div>
            </div>
            <div className="flex justify-between">
              <div>Minimum</div>
              <div>5 hours</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between font-medium  border border-gray-300 p-3 rounded-lg">
          <div>Quantity</div>
          <div className="flex items-center">
            <input
              type="text"
              maxLength={4}
              className="w-10 border bg-white rounded-md flex items-center justify-center text-center py-1 text-xs focus:outline-none focus:border-blue-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobSloatDates;
