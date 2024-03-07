import React, { useState } from "react";
import Map from "../../map/map";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { createStoreFormInitialValues } from "./storeCreateInitialValues";
// import { storeFormSchema } from "../../../validation/storeYup";
import { storeShemaMain } from "../../../validation/storeYup";

const StoreDetails = () => {
  const [selectedStoreType, setSelectedStoreType] = useState("");

  const selectstoretype = [
    { value: "Registered rental store", label: "Registered rental store" },
    { value: "My home is my store", label: "My home is my store" },
  ];

  const handleSelectChange = (e) => {
    setSelectedStoreType(e.target.value);
    setFieldValue("storeMode", e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="mx-auto  flex  justify-center  items-center  lg:w-full 2xl:w-[1536px] xl:w-full  ">
      <div className="   flex justify-center  px-10 ">
        <div className="bg-white w-full  rounded-lg p-2 overflow-auto">
          <Formik
            initialValues={createStoreFormInitialValues}
            validationSchema={storeShemaMain}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="grid grid-cols-9 gap-3">
                <div className="col-span-6 md:col-span-9 xs:col-span-9 text-[14px]  lg:col-span-6  grid grid-cols-6 gap-4  xl:place-items-center lg:place-items-center md:place-items-center  md:h-full py-5">
                  <div className="col-span-3 lg:col-span-3 md:col-span-6 xs:col-span-6 flex flex-col gap-6 ">
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold">
                        Choose a Name for your store{" "}
                      </label>
                      <Field
                        type="text"
                        placeholder="store name"
                        name="storeName"
                        className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 "
                      />
                      <ErrorMessage
                        name="storeName"
                        component="div"
                        className="text-red-600"
                      />
                    </div>
                    <div className="md:min-w-full md:max-w-96    ">
                      <label htmlFor="storeType" className="mb-2 font-semibold">
                        Select Location
                      </label>

                      <div className="relative py-2 min-w-full max-w-full  ">
                        <Map />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="relative flex flex-col gap-3 ">
                        <label className="font-semibold">
                          Select Store Type{" "}
                        </label>

                        <select
                          id="storeMode"
                          name="storeMode"
                          className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-300 text-gray-700 py-2 mb-4 pr-8 rounded leading-tight focus:outline-none"
                          value={selectedStoreType}
                          onChange={handleSelectChange}
                        >
                          {selectstoretype.map((option) => (
                            <option
                              className="rounded"
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
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

                    {/* second div section */}
                    <div className="lg:w-full w-full  flex flex-col justify-center items-center">
                      <div className="xl:w-fit">
                        <div className="w-full   py-2 flex flex-col justify-center">
                          <label
                            htmlFor="permanentAddress"
                            className="mb-2  font-semibold"
                          >
                            Store address
                          </label>

                          <Field
                            type="text"
                            placeholder="Permanent address"
                            name="storeAddress"
                            className="border-b  border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 "
                          />
                          <ErrorMessage
                            name="storeAddress"
                            component="div"
                            className="text-red-600"
                          />
                        </div>
                        <div className="flex w-full">
                          <div className=" w-full lg:w-1/2 p-3">
                            <label htmlFor="district" className="font-semibold">
                              District
                            </label>

                            <Field
                              type="text"
                              placeholder="District"
                              name="district"
                              className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 "
                            />
                            <ErrorMessage
                              name="district"
                              component="div"
                              className="text-red-600"
                            />
                          </div>
                          <div className=" w-full lg:w-1/2 p-3">
                            <label htmlFor="state" className="font-semibold">
                              State
                            </label>

                            <Field
                              type="text"
                              placeholder="State"
                              name="state"
                              className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 "
                            />
                            <ErrorMessage
                              name="state"
                              component="div"
                              className="text-red-600"
                            />
                          </div>
                        </div>
                        <div className="flex w-full">
                          <div className=" w-full lg:w-1/2 p-3">
                            <label htmlFor="country" className="font-semibold">
                              Country
                            </label>

                            <Field
                              type="text"
                              placeholder="Country"
                              name="country"
                              className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 "
                            ></Field>
                            <ErrorMessage
                              name="country"
                              component="div"
                              className="text-red-600"
                            />
                          </div>
                          <div className=" w-full lg:w-1/2 p-3">
                            <label htmlFor="Pincode" className="font-semibold">
                              Pincode
                            </label>

                            <Field
                              type="text"
                              placeholder="Pincode"
                              name="pincode"
                              className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 "
                            />
                            <ErrorMessage
                              name="pincode"
                              component="div"
                              className="text-red-600"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-span-3"></div> */}
                </div>

                {/* -----------------------------------------side bar----------------------------------------------------------------------------                   */}

                <div className="col-span-3 bg-blue-600 xl:min-h-[800px] lg:block md:hidden xs:hidden  rounded-2xl px-10 pt-20 text-white   ">
                  <h1 className="font-semibold xl:text-2xl lg:text-2xl md:text-xl xs:text-xl">
                    Welcome to Your rental store creation page!
                  </h1>
                  <p className="font-serif xl:text-[13px] lg:text-[9px] md:text-[8px] xs:text-[5px] pt-5">
                    Ready to dive into the rental market? Get started in minutes
                    with our easy platform. Create unlimited categories, from
                    party supplies to outdoor gear. Set up your store, manage
                    inventory, and launch your business hassle-free. Let's get
                    started!
                  </p>
                  <button className="px-8 py-1 mt-10 bg-white text-black rounded-lg">
                    Next
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
