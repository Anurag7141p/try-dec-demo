import { ErrorMessage, Field } from "formik";
import React, { useEffect } from "react";
import AddDiscout from "./editAddDiscout";
import { useSelector } from "react-redux";
import EditAddDiscount from "./editAddDiscout";
import { useParams } from "react-router-dom";

const EditAddProductPricingPage = () => {
  // { formikFieldValues, error_message }
  // const { data } = useSelector((state) => state?.addProductSubCategory);
  
  return (
    <div className="flex  flex-col mb-20 lg:ms-10 gap-3">
      <div className="md:ms-4  ms-2">
        <div className="flex">
          <div className="w-full grid grid-cols-2 px-7">
            <div className="mt-4">
              <h1 className="font-medium">Product price</h1>
              <h2 className="text-gray-400 mt-3">Enter price without GST</h2>
              <div>
                {/* {data?.hourlyCharge == true && ( */}
                <div className="w-32 h-12 border flex flex-row mt-2">
                  <div className="w-2/3 flex overflow-hidden pl-3">
                    <input
                      type="number"
                      name="productPriceHourly"
                      placeholder="₹ 0.00"
                      className="m-2 pl-2 outline-none"
                    />
                  </div>
                  <div className="flex w-1/3 justify-items-end items-center mr-2">
                    <span className="inset-y-0 text-gray-400">/Hour</span>
                  </div>
                </div>
                {/* )} */}
                <div className="w-32 h-12 border flex flex-row mt-2 ">
                  <div className="w-2/3 flex overflow-hidden pl-3">
                    <input
                      type="number"
                      name="productPriceDaily"
                      placeholder="₹ 0.00"
                      className="m-2 pl-2 outline-none"
                    />
                  </div>
                  <div className="flex w-1/3 justify-items-end items-center">
                    <span className="inset-y-0 text-gray-400">/Day</span>
                  </div>
                </div>
              </div>
              {/* <ErrorMessage
                name="productPriceHourly"
                component="div"
                className="text-red-600"
              />
              <ErrorMessage
                name="productPriceDaily"
                component="div"
                className="text-red-600"
              /> */}
            </div>

            <div>
              <div className="mt-4">
                <h1 className="font-medium">Minimum rental duration</h1>
                <div className="flex ">
                  {/* {data?.hourlyCharge == true && ( */}
                    <div className="w-32 h-12 border flex flex-row mt-2">
                      <div className="w-2/3  flex overflow-hidden pl-3">
                        <input
                          type="number"
                          name="minRentalDurationHours"
                          placeholder="06"
                          className="m-2 pl-2 outline-none"
                        />
                      </div>
                      <div className="flex w-1/3 justify-items-end items-center mr-3">
                        <span className="inset-y-0 text-gray-400">Hours</span>
                      </div>
                    </div>
                  {/* )} */}
                  <div className="w-32 h-12 border flex flex-row mt-2 ml-5">
                    <div className="w-2/3  flex overflow-hidden">
                      <input
                        type="number"
                        name="minRentalDurationDays"
                        placeholder="01"
                        inputMode="numeric"
                        pattern="[0-9]{1,2}"
                        className="m-2 pl-2 outline-none"
                      />
                    </div>
                    <div className="flex w-1/3 justify-items-end items-center ">
                      <span className="inset-y-0 text-gray-400">Days</span>
                    </div>
                  </div>
                </div>
                {/* <ErrorMessage
                name="minRentalDurationHours"
                component="div"
                className="text-red-600"
                />
                <ErrorMessage
                name="minRentalDurationDays"
                component="div"
                className="text-red-600"
              /> */}
              </div>

              <div className="mt-4">
                <h1 className="font-medium">Maximum rental duration</h1>
                <div className="flex">
                  {/* {data?.hourlyCharge == true && ( */}
                    <div className="w-32 h-12 border flex flex-row mt-2 ">
                      <div className="w-2/3  flex overflow-hidden ">
                        <input
                          type="number"
                          name="maxRentalDurationHours"
                          placeholder="19"
                          className="m-2 pl-2 outline-none"
                        />
                      </div>
                      <div className="flex w-1/3 justify-items-end items-center mr-3">
                        <span className="inset-y-0 text-gray-400">Hours</span>
                      </div>
                    </div>
                  {/* )} */}
                  <div className="w-32 h-12 border flex flex-row mt-2 ml-5">
                    <div className="w-2/3  flex overflow-hidden ">
                      <input
                        type="number"
                        name="maxRentalDurationDays"
                        placeholder="30"
                        className="m-2 pl-2 outline-none"
                      />
                    </div>

                    <div className="flex w-1/3 justify-items-end items-center ">
                      <span className="inset-y-0 text-gray-400">Days</span>
                    </div>
                  </div>
                </div>
                {/* <ErrorMessage
                name="maxRentalDurationHours"
                component="div"
                className="text-red-600"
                />
                <ErrorMessage
                name="maxRentalDurationDays"
                component="div"
                className="text-red-600"
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col">
        <>
          <AddDiscout formikFieldValues={formikFieldValues} />
          <div className="flex justify-center">
            <p className="text-red-500">{error_message}</p>
          </div>
        </>
      </div> */}

      <hr className="mt-5"/>
      <EditAddDiscount />
    </div>
  );
};

export default EditAddProductPricingPage;
