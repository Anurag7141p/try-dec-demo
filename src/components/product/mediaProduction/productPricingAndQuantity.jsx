import React from "react";
import { FaRegEdit } from "react-icons/fa";
import AvailDate from "./availDate";
import TimePickerComponent from "./timePicker";

const ProductPricingAndQuantity = () => {
  return (
    <div className="bg-gray-200  flex justify-center items-center px-10 ">
      <div className="bg-white w-full  rounded-lg p-2 ">
        <div className="grid grid-cols-9">
          <div className="col-span-6  grid grid-cols-7 gap-4   py-5 ">
            <div className="col-span-6 flex flex-col justify-normal lg:px-20 gap-6 lg:pt-10 text-[14px]">
              <div className="flex flex-col gap-2  text-xl">
                <h1>Product Pricing & Quantity</h1>
              </div>
              <div className="flex flex-col  gap-2 pt-5">
                <div className="flex gap-3 text-[16px]">
                  <label>Manage Quantity</label>
                  <input type="checkbox" />
                </div>
                <div className="pt-4 text-gray-600 text-[12px]">
                  <p>
                    Ensure that all products in this quantity have the same
                    color, size, measurements,
                    <br /> quality, and condition.
                  </p>
                </div>
                <div className="border border-blue-400 bg-blue-100 h-40 rounded-lg px-10 py-5">
                  <div className="lg:w-1/2 flex flex-col gap-4">
                    <div className="flex gap-8 justify-between">
                      <label htmlFor="">Available Quantity</label>
                      <input
                        type="number"
                        className="w-14 h-7 rounded-lg border outline-blue-300"
                      />
                    </div>

                    <div className="flex gap-8 justify-between">
                      <label>Minimum Quantity Per Order</label>
                      <input
                        type="number"
                        className="w-14 h-7 rounded-lg border outline-blue-300"
                      />
                    </div>

                    <div className="flex gap-8 justify-between">
                      <label htmlFor="">Maximum Quantity Per Order</label>
                      <input
                        type="number"
                        className="w-14 h-7 rounded-lg border outline-blue-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------------------------------------------------------------------------------------------------------------                 */}

              <div className="flex flex-col gap-3">
                <h1>Pricing</h1>
                <div className="flex justify-normal items-center gap-10 ">
                  <FaRegEdit />
                  <div className="w-32 h-12 border flex flex-row mt-2">
                    <div className="flex w-1/3 justify-items-end items-center mr-3">
                      <span className="inset-y-0 text-gray-400">₹</span>
                    </div>
                    <div className="w-2/3  flex overflow-hidden pl-3">
                      <input
                        type="number"
                        name="minRentalDurationHours"
                        placeholder="00"
                        className="m-2 pl-2 outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-32 h-12 border flex flex-row mt-2">
                    <div className="flex w-3/3 justify-items-end items-center mr-3">
                      <span className="inset-y-0 text-gray-400">Hourly</span>
                    </div>
                  </div>
                  <div className="w-32 h-12 border flex flex-row mt-2">
                    <div className="flex w-3/3 justify-items-end items-center ">
                      <span className="inset-y-0 text-gray-400">1-5 Hours</span>
                    </div>
                  </div>
                </div>

                <div className="border border-blue-400 bg-blue-100 h-auto rounded-lg px-10 py-5">
                  <div className="lg:w-1/2 flex flex-col gap-4">
                    <div className="flex gap-8 justify-between">
                      <div className="w-24 h-8 border flex flex-row mt-2 bg-white">
                        <div className="flex w-1/3 justify-items-end items-center ">
                          <span className="inset-y-0 text-gray-400">₹</span>
                        </div>
                        <div className="w-2/3  flex overflow-hidden pl-3">
                          <input
                            type="number"
                            name="minRentalDurationHours"
                            placeholder="00"
                            className="m-2 pl-2 outline-none"
                          />
                        </div>
                      </div>

                      <div className="relative ">
                        <select
                          id="storeMode"
                          name="storeMode"
                          className="block appearance-none w-20 h-9 bg-white border-b border-gray-400 outline-none focus:border-blue-300 text-gray-700 py-2 mb-4 pr-4 rounded leading-tight focus:outline-none"
                        >
                          <option value="" disabled>
                            Per Hour
                          </option>

                          <option className="rounded">Per Hour</option>

                          <option className="rounded">Per Day</option>

                          <option value="addNew">Per Month</option>
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 left-14  flex items-center pb-5 px-2 text-gray-700">
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
                    <div className="flex gap-8 justify-between">
                      <label htmlFor="">Available Quantity</label>
                      <input
                        type="number"
                        className="w-14 h-7 rounded-lg border outline-blue-300"
                      />
                    </div>

                    <div className="flex gap-8 justify-between">
                      <label>Minimum Rental Duration</label>
                      <input
                        type="number"
                        className="w-14 h-7 rounded-lg border outline-blue-300"
                      />
                    </div>

                    <div className="flex gap-8 justify-between">
                      <label htmlFor="">Maximum Rental Duration</label>
                      <input
                        type="number"
                        className="w-14 h-7 rounded-lg border outline-blue-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="px-8 py-2 rounded-lg bg-gray-300">
                  Add More Pricing
                </button>
              </div>

              {/* --------------------------------------------------------------------------------------------------------- */}

              <div className="flex flex-col ">
                <div className="border border-blue-400 bg-blue-100 h-auto rounded-lg px-10 py-5 flex flex-col gap-5">
                  <h1>Rent Payment Options</h1>
                  <div className="lg:w-1/2 flex flex-col gap-4">
                    <div className="flex gap-8 justify-between border-b-gray-300 pb-5 border">
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-3">
                          <input type="checkbox" />
                          <label> Single Payment</label>
                        </div>
                        <div className="flex gap-3">
                          <input type="checkbox" />
                          <label>Monthly Payment</label>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-8 justify-between">
                      <label> Pay At Store</label>
                      <input type="checkbox" />
                    </div>

                    <div className="flex gap-8 justify-between">
                      <label> Pay Advance Online At the Time of Booking</label>
                      <input type="checkbox" />
                    </div>

                    <div className="flex gap-8 justify-between">
                      <label htmlFor="">Advance Booking Amount</label>
                      <div className="w-24 h-8 border flex flex-row mt-2 bg-white rounded-md">
                        <div className="w-2/3  flex overflow-hidden pl-3">
                          <input
                            type="number"
                            name="minRentalDurationHours"
                            placeholder=""
                            className="m-2 pl-2 outline-none "
                          />
                        </div>
                        <div className="flex w-1/3 justify-items-end items-center ">
                          <span className="inset-y-0 text-gray-400">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------------------------------------------- */}

              <div className="flex flex-col ">
                <div className="border border-blue-400 bg-blue-100 h-auto rounded-lg px-10 py-5 flex flex-col gap-5">
                  <div className="lg:w-1/2 flex flex-col gap-4">
                    <div className="flex gap-8 justify-between">
                      <label>Security Deposite</label>
                      <input type="checkbox" />
                    </div>

                    <div className="flex gap-8 justify-between">
                      <label htmlFor="">Enter Amount</label>
                      <div className="w-24 h-8 border flex flex-row mt-2 bg-white rounded-md">
                        <div className="w-2/3  flex overflow-hidden pl-3">
                          <input
                            type="number"
                            name="minRentalDurationHours"
                            placeholder=""
                            className="m-2 pl-2 outline-none "
                          />
                        </div>
                        <div className="flex w-1/3 justify-items-end items-center ">
                          <span className="inset-y-0 text-gray-400">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------side bar---------------------------------------------------------------------------------------           */}

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

            <div className="border border-gray-300 bg-blue-100 p-4 flex flex-col gap-4 md:px-3 text-gray-600 rounded-md">
              <div className="flex flex-col gap-6 text-[12px]">
                <div className="flex flex-col lg:flex-row gap-4 justify-center">
                  <div className="flex flex-col gap-1">
                    <h3>Pick-up & Drop-off date</h3>
                    <AvailDate />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 justify-center">
                  <div className="flex flex-col gap-1">
                    <div>
                      <h1>Pick-up Time</h1>
                      <TimePickerComponent />
                    </div>
                  </div>
                  <div>
                    <h1>Drop-Off Time</h1>
                    <TimePickerComponent />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-green-500 w-1/2 flex justify-center items-center gap-2 lg:gap-10 p-1 rounded text-white">
                    <h1 className="font-semibold text-lg lg:text-xl">
                      Rs 20000
                    </h1>
                    <h2>Add +</h2>
                  </button>
                </div>
              </div>
            </div>

            <button className=" bg-green-600 rounded-md  px-10 py-2 mt-10">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPricingAndQuantity;
