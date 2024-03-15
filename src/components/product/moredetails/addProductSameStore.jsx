import React from "react";

import { IoIosSearch } from "react-icons/io";


const AddProductSameStore = () => {
  const sameStoreProduct = [
    {
      id: "1",
      image: "https://wallpapercave.com/wp/wp1873222.jpg",
      name: "Canon Eos 3000d",
      price: "22000",
      count: 1,
    },
    {
      id: "2",
      image: "https://wallpapercave.com/wp/wp1873222.jpg",
      name: "Nikon d3200",
      price: "10000",
      count: 1,
    },
    {
      id: "3",
      image: "https://wallpapercave.com/wp/wp1873222.jpg",
      name: "Sony Exp310",
      price: "22000",
      count: 1,
    },
    {
      id: "4",
      image: "https://wallpapercave.com/wp/wp1873222.jpg",
      name: "Fuji x22",
      price: "22000",
      count: 1,
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-5 font-frank md:px-10 lg:px-16 ">
      <div className="border border-gray-300 p-4 flex flex-col gap-4 md:px-3 ">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-md lg:text-lg text-gray-700">
            Available Products In Same Store
          </h1>

          <div className="flex flex-col md:flex-row ">
            <input
              type="text"
              placeholder="Search Reviews"
              className="p-1 border border-gray-300 w-full md:w-2/3 rounded-l-lg"
            />
            <button className="bg-green-500 p-1 h-8.5 w-1/2 md:w-1/6 flex justify-center items-center rounded-r-md md:rounded-r-md">
              <IoIosSearch className="text-xl text-white" />
            </button>
          </div>

          <div className="border border-gray-200 p-2 w-full   md:h-56 overflow-y-auto rounded-md flex flex-col gap-2">
            {sameStoreProduct.map((curElem, index) => (
              <div
                key={index}
                className="flex items-center p-2 border border-gray-100 shadow-md border-t-2"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-l-md overflow-hidden">
                  <img
                    src={curElem.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-center items-center">
                  <h1>{curElem.name}</h1>
                  <p className="text-cyan-500">₹ {curElem.price}</p>
                </div>
                <div className="flex-shrink-0 p-1">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md">
                    + Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductSameStore;
