import React, { useState } from "react";
import Map from "../../map/map";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { storeFormSchema } from "../../../validation/storeYup";
import { createStoreFormInitialValues } from "../createStore/storeCreateInitialValues";

const MobCreateStoreForm = ({
  validationSchema,
  handleSubmit,
  initialValues,
}) => {
  const [AddLocation, setAddLocation] = useState("");
  const [selectedStoreType, setSelectedStoreType] = useState("");

  const handleSelectChange = (e) => {
    setSelectedStoreType(e.target.value);
    setFieldValue("storeMode", e.target.value);
  };

  const selectstoretype = [
    { value: "Registered rental store", label: "Registered rental store" },
    { value: "My home is my store", label: "My home is my store" },
  ];

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-full sm:h-52 min-h-40 pt-3 text-white  bg-blue-600   flex flex-col gap-4 justify-center pb-5 px-5 rounded-b-3xl">
          <img
            src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710520065/trydec/olapoolimage.png"
            alt=""
            className="w-1/4"
          />
          <h1 className="text-xl font-semibold">Product Details </h1>
          <p className="text-md">
            Adding documents enables us to verify and keep fraudulent activities
            out of reach.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 w-full h-2 bg-white rounded"></div>
            <div className="col-span-1 w-full h-2  rounded bg-blue-900"></div>
            <div className="col-span-1 w-full h-2   rounded bg-blue-900"></div>
          </div>
        </div>
      </div>

      {/* body */}

      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ isValid, setFieldValue, values }) => (
          <Form>
            <div className="w-full px-10 py-5 pt-5 flex flex-col gap-4 z-10 pb-32">
              <div className="w-full">
                <div className="flex justify-normal items-center gap-2">
                  <img
                    src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710522196/trydec/listbulbicon.png"
                    alt=""
                  />
                  <h1>Tips : It helps to keep your identity real!</h1>
                </div>
                <ul class="list-disc text-sm pl-16">
                  <li>
                    The name you provide will help users find you in future. So
                    keep it relvant.
                  </li>
                  <li>
                    Ensure accurate location settings to reach your customers
                    effectively
                  </li>
                  <li>Set your store type to better understanding</li>
                </ul>
              </div>
              {/* title */}
              <div>
                <Field
                  type="text"
                  name="storeName"
                  className=" border-b-2 border-blue-500 w-full p-2 focus:outline-none text-base"
                  placeholder="Choose a name for your store"
                />
                <ErrorMessage
                  name="storeName"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="w-full pt-2">
                <Map
                  setAddLocation={setAddLocation}
                  setFieldValue={setFieldValue}
                />
              </div>

              <div className="xl:w-fit">
                <div className="w-full   py-2 flex flex-col justify-center">
                  <label
                    htmlFor="permanentAddress"
                    className="mb-2 font-medium"
                  >
                    Permanent address
                  </label>

                  <Field
                    type="text"
                    placeholder="Permanent address"
                    name="storeAddress"
                    className="border  border-gray-400 p-2 rounded-lg w-full   mb-1 outline-none focus:border-blue-500 "
                  />
                  <ErrorMessage
                    name="storeAddress"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div className="flex w-full gap-4 py-2">
                  <div className=" w-full  ">
                    <label htmlFor="district" className="font-medium">
                      District
                    </label>
                    <Field
                      className="border  border-gray-400 p-2 rounded-lg w-full   mb-1 outline-none focus:border-blue-500 "
                      type="text"
                      placeholder="District"
                      name="district"
                    />
                    <ErrorMessage
                      name="district"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className=" w-full  ">
                    <label htmlFor="state" className="font-medium">
                      State
                    </label>

                    <Field
                      className="border  border-gray-400 p-2 rounded-lg w-full   mb-1 outline-none focus:border-blue-500 "
                      type="text"
                      placeholder="State"
                      name="state"
                    />
                    <ErrorMessage
                      name="state"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-4 py-2">
                  <div className=" w-full  ">
                    <label htmlFor="country" className="font-medium">
                      Country
                    </label>
                    <Field
                      className="border  border-gray-400 p-2 rounded-lg w-full   mb-1 outline-none focus:border-blue-500 "
                      type="text"
                      placeholder="Country"
                      name="country"
                    ></Field>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className=" w-full  ">
                    <label htmlFor="Pincode" className="font-medium">
                      Pincode
                    </label>

                    <Field
                      className="border  border-gray-400 p-2 rounded-lg w-full   mb-1 outline-none focus:border-blue-500 "
                      type="text"
                      placeholder="Pincode"
                      name="pincode"
                    />
                    <ErrorMessage
                      name="pincode"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>
              </div>
              <div className="relative my-3 mb-7">
                <select
                  id="storeMode"
                  name="storeMode"
                  className="block font-sm appearance-none w-full p-3 mb-1 bg-white border border-r-gray-300 rounded-lg border-gray-400 outline-none focus:border-blue-300 text-gray-700     leading-tight focus:outline-none"
                  value={selectedStoreType}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled hidden>
                    Select your store type
                  </option>
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

            {/* footer */}
            <div className="xs:h-24 xs:w-full flex text-lg bg-gray-50 font-lato  border-2 rounded-t-3xl items-center justify-around fixed bottom-0 drop-shadow-3xl ">
              <div>
                <button
                  className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
                  // onClick={prev}
                >
                  Back
                </button>
              </div>
              <div>
                <button
                  className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MobCreateStoreForm;
