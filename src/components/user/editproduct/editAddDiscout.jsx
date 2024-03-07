import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";

const EditAddDiscount = () => {
  // { formikFieldValues }
  // console.log(formikFieldValues);

  // const [discountCount, setDiscountCount] = useState(1);
  // const addDiscoutCount = () => {
  //   if (discountCount < 4) {
  //     setDiscountCount(discountCount + 1);
  //   }
  // };
  // const handleDiscountCalculationStartDay = (position) => {
  //   if (
  //     formikFieldValues &&
  //     formikFieldValues.discounts &&
  //     formikFieldValues.discounts[position] &&
  //     formikFieldValues.discounts[position].startDay
  //   ) {
  //     const amount =
  //       formikFieldValues?.productPriceDaily *
  //       formikFieldValues.discounts[position].startDay;
  //     const result =
  //       (amount * formikFieldValues.discounts[position].percentage) / 100;
  //     return amount - result;
  //   }
  //   return 0;
  // };
  // const handleDiscountCalculationEndDay = (position) => {
  //   if (
  //     formikFieldValues &&
  //     formikFieldValues.discounts &&
  //     formikFieldValues.discounts[position] &&
  //     formikFieldValues.discounts[position].endDay
  //   ) {
  //     const amount =
  //       formikFieldValues?.productPriceDaily *
  //       formikFieldValues.discounts[position].endDay;
  //     const result =
  //       (amount * formikFieldValues.discounts[position].percentage) / 100;
  //     return amount - result;
  //   }
  //   return 0;
  // };
  return (
    <>
      <div className="w-full px-10">
        <h1 className="mt-4 font-medium">Set discount limit</h1>
      </div>

      {/* {Array.from({ length: discountCount }).map((_, index) => ( */}
      <div className="flex flex-col gap-5 px-10">
        <div className="flex">
          <div className="w-24 h-12 border-2 border-gray-300 flex flex-row mt-2  rounded-lg ">
            <div className="w-2/3 flex overflow-hidden pl-3 ">
              <input
                type="number"
                // name={`discounts.${index}.percentage`}
                placeholder="0"
                className="m-2 pl-2 outline-none"
              />
            </div>
            <div className="flex w-1/3 justify-items-end items-center">
              <span className="inset-y-0 text-gray-400">%</span>
            </div>
          </div>

          <div className="w-64 h-12 border-2 border-gray-300  flex flex-row mt-2 ml-5 rounded-lg">
            <div className="flex w-2/3 overflow-hidden pl-3">
              <input
                type="number"
                // name={`discounts.${index}.startDay`}
                placeholder="0"
                className="m-2 pl-2 outline-none"
              />
            </div>
            <div className="flex w-1/3 justify-center items-center">
              <span className="inset-y-0 text-gray-400">-</span>
            </div>

            <div className="flex w-2/3 overflow-hidden pl-3">
              <input
                type="number"
                // name={`discounts.${index}.endDay`}
                placeholder="0"
                className="m-2 pl-2 outline-none"
              />
            </div>
            <div className="flex w-1/3 justify-center items-center pr-3">
              <span className="inset-y-0 text-gray-400 mx-2">Days</span>
            </div>
          </div>

          <div className="w-1/3 h-12 border-2 border-gray-300  flex flex-row mt-2 ml-5 rounded-lg bg-green-500 text-black">
            <div className="flex w-2/3 overflow-hidden pl-3">
              <div className="flex w-1/3 justify-center items-center">
                <span className="inset-y-0 text-black">₹</span>
              </div>
              <p className="m-2 pl-2 outline-none">
                {/* {handleDiscountCalculationStartDay(index)} */}
              </p>
            </div>

            <h1 className="flex w-1/3 justify-center items-center">-</h1>

            <div className="flex w-2/3 overflow-hidden ">
              <div className="flex w-1/3 justify-center items-center">
                <span className="inset-y-0 text-black">₹</span>
              </div>
              <p className="m-2 pl-2 outline-none">
                {/* {handleDiscountCalculationEndDay(index)} */}
              </p>
            </div>
          </div>
        </div>
        {/* <ErrorMessage
            name={`discounts.${index}.percentage`}
            component="div"
            className="text-red-600"
          />
          <ErrorMessage
            name={`discounts.${index}.startDay`}
            component="div"
            className="text-red-600"
          />
          <ErrorMessage
            name={`discounts.${index}.endDay`}
            component="div"
            className="text-red-600"
          /> */}
        <div className="flex gap-3 mt-10">
          <button className="px-4 py-2 rounded-md text-white bg-red-500">
            delete
          </button>
          <button className="px-4 py-2 rounded-md text-white bg-blue-500">
            Edit
          </button>
          <button className="px-4 py-2 rounded-md text-white bg-blue-500">
            Save
          </button>
        </div>
      </div>
      {/* ))} */}
    </>
  );
};

export default EditAddDiscount;
