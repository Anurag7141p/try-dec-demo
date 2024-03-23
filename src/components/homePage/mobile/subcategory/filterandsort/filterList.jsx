import React from "react";

const FilterList = () => {
  const filter = [
    "Sort",
    "Category",
    "color",
    "model",
    "type",
    "lorem",
    "lorem",
    "lorem",
    "lorem",
    "lorem",
    "lorem",
    "lorem",
    "lorem",
  ];
  return (
    <div className="px-3 bg-gray-100 h-full">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-1">
          {filter.map((curElem) => (
            <div className="w-full font-frank text-2xl p-3 py-3 flex justify-normal items-center border-b-2 border-gray-300 text-gray-700">
              <h2 className="text-gray-600">{curElem}</h2>
            </div>
          ))}
        </div>
        <div className="col-span-2 font-montserrat py-10 text-xl flex flex-col gap-3">
          <div>
            <h1>Select From the option below</h1>
          </div>
          <div className="w-full p-3 border border-cyan-400 rounded-lg text-cyan-600">
            <h1>Date</h1>
          </div>
          <div className="w-full p-3 border border-cyan-400 rounded-lg text-cyan-600">
            <h1>Price</h1>
          </div>
          <div className="w-full p-3 border border-cyan-400 rounded-lg text-cyan-600">
            <h1>Distance</h1>
          </div>
          <div className="w-full p-3 border border-cyan-400 rounded-lg text-cyan-600">
            <h1>Ratings</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
