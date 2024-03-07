import React from "react";

const ExtraDeatails = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center px-10 ">
      <div className="bg-white w-full min-h-[750px] rounded-lg p-2 overflow-auto">
        <div className="grid grid-cols-9">
          <div className="col-span-6  grid grid-cols-6 gap-4   py-5 ">
            <div className="col-span-5 flex flex-col justify-normal lg:px-20 gap-6 lg:pt-10">
              <div className="flex flex-col gap-2  text-xl">
                <h1>Details</h1>
              </div>
              <div className="flex flex-col gap-2 pt-5">
                <input
                  type="text"
                  placeholder="Camera & Equipment "
                  name="name"
                  className="border-b border-gray-400 w-full pb-4  mb-1 outline-none focus:border-blue-500 placeholder:text-gray-600 "
                />
              </div>
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="Specification"
                  name="name"
                  className="border-b border-gray-400 w-full pb-2   outline-none focus:border-blue-500 placeholder:text-gray-600 "
                />
              </div>

              <div className="flex flex-col ">
                <input
                  type="text"
                  name="name"
                  placeholder="Including"
                  className="border-b border-gray-400 w-full pb-2   outline-none focus:border-blue-500 placeholder:text-gray-600 "
                />
              </div>

              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="Ammonites"
                  name="name"
                  className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 placeholder:text-gray-600 "
                />
              </div>
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="Type"
                  name="name"
                  className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 placeholder:text-gray-600 "
                />
              </div>
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="Parking"
                  name="name"
                  className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 placeholder:text-gray-600"
                />
              </div>

              <div className="flex gap-10 pt-10">
                <button className="border border-blue-500 text-blue-500 px-10 py-2 rounded-md">
                  Prev
                </button>
                <button className="border border-blue-500 bg-blue-600 rounded-md text-white px-10 py-2">
                  Next
                </button>
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

export default ExtraDeatails;
