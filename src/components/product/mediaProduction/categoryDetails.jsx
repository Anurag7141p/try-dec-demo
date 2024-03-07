import React from "react";
import AddProductAddImage from "./addProductImage";
import AddProductMap from "./addProductMap";

const CategoryDetails = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center px-10 ">
      <div className="bg-white w-full min-h-[750px] rounded-lg p-2 overflow-auto">
        <div className="grid grid-cols-9">
          <div className="col-span-6  grid grid-cols-6 gap-4   py-5 ">
            <div className="col-span-3 flex flex-col justify-normal items-center gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Category </label>
                <input
                  type="text"
                  placeholder="Camera & Equipment "
                  name="name"
                  className="border-b border-gray-400 w-full pb-4  mb-1 outline-none focus:border-blue-500 "
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative flex flex-col gap-3 ">
                  <label className="font-semibold">Select SubCategory </label>

                  <select
                    id="storeMode"
                    name="storeMode"
                    className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-300 text-gray-700 py-2 mb-4 pr-8 rounded leading-tight focus:outline-none"
                  >
                    <option value="" disabled hidden>
                      Select your product sub category
                    </option>

                    <option className="rounded">hee</option>
                    <option className="rounded">hee</option>
                    <option className="rounded">hee</option>
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
              </div>
              <div className="flex flex-col ">
                <label className="font-semibold">Title </label>
                <input
                  type="text"
                  name="name"
                  className="border-b border-gray-400 w-full pb-2   outline-none focus:border-blue-500 "
                />
              </div>

              <div className="flex flex-col ">
                <label className="font-semibold">Brand </label>
                <input
                  type="text"
                  name="name"
                  className="border-b border-gray-400 w-full pb-2   outline-none focus:border-blue-500 "
                />
              </div>

              <div className="flex flex-col ">
                <label className="font-semibold">Model </label>
                <input
                  type="text"
                  name="name"
                  className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 "
                />
              </div>
              <div>
                <AddProductAddImage />
              </div>

              <div className="flex gap-10 pt-10">
                <button className="border border-blue-500 text-blue-500 px-10 py-2 rounded-md">
                  Prev
                </button>
                <button className="border border-blue-500 bg-blue-600 rounded-md text-white px-10 py-2">Next</button>
              </div>
            </div>

            <div className="col-span-3">
              <div className="md:min-w-96 md:max-w-96 mt-5">
                <label htmlFor="storeType" className="mb-2 font-medium">
                  Select Location
                </label>
                <p className="text-sm text-gray-600">
                  Please choose a precise location so that people can easily
                  access your product
                </p>
                <div className="relative py-2 min-w-full max-w-full">
                  <AddProductMap />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-blue-600 min-h-[800px] rounded-2xl px-10 pt-20 text-white flex flex-col gap-5">
            <h1 className="font-semibold text-2xl">
              Media <br /> Production
            </h1>
            <p className="font-serif text-[12px]">
              From cameras to lighting equipment, this category offers a diverse
              range of tools and equipment necessary for media production
              endeavors. Filmmakers, photographers, and content creators can
              find everything they need to bring their creative visions to life,
              including cameras, lenses, tripods, drones, studio lighting, and
              audio recording equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
