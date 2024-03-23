import React from "react";

const FilterBtn = () => {
  return (
    <div className="xs:h-28 xs:w-full flex text-xl font-lato  border-2 rounded-3xl items-center justify-around fixed bottom-0 drop-shadow-2xl bg-gray-100">
      <div>
        <button className=" px-10 py-3 rounded border shadow-xl xs:hover:bg-gray-100 xs:hover:border-b-4 border-[#1281B8]">
          Reset
        </button>
      </div>
      <div>
        <button className=" px-10 py-3 rounded  border shadow-xl xs:hover:bg-gray-100 xs:hover:border-b-4 border-[#1281B8]">
          Show 171 Results
        </button>
      </div>
    </div>
  );
};

export default FilterBtn;
