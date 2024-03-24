import React, { useState } from "react";

import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const FilterAccordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(false);
  console.log(data);
  const { list } = data;

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-1  rounded">
        <div
          className="cursor-pointer p-2 flex justify-between items-center"
          onClick={() => setActiveIndex(!activeIndex)}
        >
          <h3 className=" font-roboto text-[13px]  uppercase text-black">
            {data.name}
          </h3>
          <span>{activeIndex ? <FiMinus /> : <GoPlus />}</span>
        </div>
        {activeIndex &&
          list.map((curElem, index) => (
            <div className="py-1">
              <label
                key={index}
                className="p-3 pl-5  bg-white font-roboto text-[12px]  uppercase text-black"
              >
                <input
                  type="checkbox"
                  name={data.name}
                  value={curElem}
                  className="mr-2 appearance-none border border-gray-300 rounded w-3 h-3  checked:bg-blue-500 checked:border-transparent focus:outline-none"
                />
                {curElem}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FilterAccordion;
