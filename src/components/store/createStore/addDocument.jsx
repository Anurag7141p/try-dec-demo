import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { GoDot } from "react-icons/go";
import { RxDot } from "react-icons/rx";
import {
  validateAadharFormat,
  validateGSTFormat,
  validateLicenseFormat,
  validatePANFormat,
} from "../../../validation/documentValidation";

const AddDocument = ({
  currentPage,
  handlePrevPage,
  setFieldValue,
  isValid,
  handleSkip,
  error_message,
  clientId,
  pages,
}) => {
  console.log(currentPage);

  const options = [
    { value: "gstNumber", label: "GST" },
    // { value: "panCardNumber", label: "Pan Card" },
    { value: "aadharNumber", label: "Aadhar" },
    { value: "licenseNumber", label: "driving licence" },
  ];
  const [isGSTRegistered, setIsGSTRegistered] = useState(false);
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState({
    value: "aadharNumber",
    label: "Aadhar",
  });
  const [registerdStore, setRegisterdStore] = useState(false);
  // const { data } = useSelector((state) => state?.store);
  const data = true;

  useEffect(() => {
    if (data && data?.storeMode == "Registered rental store") {
      setIsGSTRegistered("setIsGSTRegistered");
      setSelectedValue({ value: "gstNumber", label: "GST" });
      setRegisterdStore(true);
      setFieldValue("userId", data?.userId);
    }
  }, [data]);
  const handleDocumentValue = (e) => {
    setValue(e.target.value);
    if (selectedValue.value == "gstNumber") {
      const isValidGSTFormat = validateGSTFormat(e.target.value);
      if (!isValidGSTFormat) {
        setErrorMessage("Invalid GSTIN format");
        setFieldValue("verificationValueStatus", false);
      } else {
        setErrorMessage("");
        setFieldValue("verificationValue", e.target.value);
        setFieldValue("verificationValueStatus", true);
        setFieldValue("verificationValueType", selectedValue.value);
      }
    } else if (selectedValue.value == "aadharNumber") {
      const isValidAadharFormat = validateAadharFormat(e.target.value);
      if (!isValidAadharFormat) {
        setErrorMessage("Aadhar number must be exactly 12 digits");
        setFieldValue("verificationValueStatus", false);
      } else {
        setErrorMessage("");
        setFieldValue("verificationValue", e.target.value);
        setFieldValue("verificationValueStatus", true);
        setFieldValue("verificationValueType", selectedValue.value);
      }
    } else if (selectedValue.value == "panCardNumber") {
      const isValidPANFormat = validatePANFormat(e.target.value);
      if (!isValidPANFormat) {
        setErrorMessage("Invalid PAN card format");
        setFieldValue("verificationValueStatus", false);
      } else {
        setErrorMessage("");
        setFieldValue("verificationValue", e.target.value);
        setFieldValue("verificationValueStatus", true);
        setFieldValue("verificationValueType", selectedValue.value);
      }
    } else if (selectedValue.value == "licenseNumber") {
      const isValidLicenseFormat = validateLicenseFormat(e.target.value);
      if (!isValidLicenseFormat) {
        setErrorMessage("Invalid Indian driving license format");
        setFieldValue("verificationValueStatus", false);
      } else {
        setErrorMessage("");
        setFieldValue("verificationValue", e.target.value);
        setFieldValue("verificationValueStatus", true);
        setFieldValue("verificationValueType", selectedValue.value);
      }
    }
  };

  const handleCheckboxChange = (e) => {
    setIsGSTRegistered(e.target.checked);
  };

  const handleSelectChange = (e) => {
    const selectedOption = options.find(
      (option) => option.value === e.target.value
    );
    setSelectedValue(selectedOption);
    setErrorMessage("");
    setValue("");
    setFieldValue("verificationValue", "");
    setFieldValue("verificationValueStatus", false);
    setFieldValue("verificationValueType", "");
  };

  useEffect(() => {
    if (isGSTRegistered == true) {
      setSelectedValue({ value: "gstNumber", label: "GST" });
      setErrorMessage("");
      setValue("");
      setFieldValue("verificationValue", "");
      setFieldValue("verificationValueStatus", false);
      setFieldValue("verificationValueType", "");
    }
  }, [isGSTRegistered]);

  useEffect(() => {
    if (clientId) {
      setFieldValue("clientId", clientId);
    }
  }, [clientId]);

  return (
    <div className="mx-auto  flex  justify-center xl:min-h-screen  items-center  lg:w-full 2xl:w-[1536px] xl:w-full  ">
      <div className="   flex justify-center  px-10 ">
        <div className="bg-white w-full  rounded-lg  overflow-auto">
          <div className="grid grid-cols-9 gap-3">
            <div className="col-span-6 md:col-span-9  xs:col-span-9 text-[14px]  lg:col-span-6  grid grid-cols-6 gap-4  xl:place-items-center lg:place-items-center md:place-items-center  md:h-full py-5">
              <div className="col-span-3 lg:col-span-3  md:col-span-6 xs:col-span-6 flex flex-col gap-10  lg:w-3/4 md:w-full">
                <div className=" sm:flex sm:flex-col ">
                  <p className="font-semibold">Documents</p>
                  <p className="text-gray-500 mt-2 ">
                    Please take a moment to verify your <br /> account. You will
                    unlock benefits <br /> after verification.
                  </p>
                </div>
                <div className=" flex">
                  <p className="text-gray-500 ">Are you GST Registered?</p>
                  <input
                    checked={isGSTRegistered}
                    onChange={handleCheckboxChange}
                    className="ml-3"
                    type="checkbox"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  {isGSTRegistered ? (
                    ""
                  ) : (
                    <div className="relative flex flex-col gap-3 ">
                      <label className="font-semibold">
                        Select Your Id Proof
                      </label>

                      <select
                        className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-300 text-gray-700 py-2 mb-4 pr-8 rounded leading-tight focus:outline-none"
                        id="storeType"
                        name="storeType"
                        value={selectedValue?.value}
                        onChange={handleSelectChange}
                      >
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
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
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Enter Your {selectedValue?.label} Number
                  </label>
                  <input
                    type="number"
                    placeholder="XVSDF02345D"
                    value={value}
                    onChange={handleDocumentValue}
                    className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 "
                  />
                  <p className="text-red-600">{errorMessage}</p>
                </div>
                {registerdStore ? (
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold">
                      Enter Store Registration Details
                    </label>
                    <Field
                      type="text"
                      placeholder="Enter any details of License, Trade certificate ...."
                      name="storeName"
                      className="border-b border-gray-400 w-full pb-2  mb-1 outline-none focus:border-blue-500 "
                    />
                    <ErrorMessage
                      name="storeName"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="lg:col-span-3 md:col-span-9 xs:col-span-9 flex  flex-col gap-5 justify-center ">
                <div className=" sm:flex sm:flex-col capitalize flex flex-col gap-2">
                  <p className="font-semibold ">
                    Enter Your Details as per {selectedValue?.label}
                  </p>
                  <p className="text-gray-500 mt-2 ">
                    try to enter correct data
                  </p>
                </div>
                <div className=" w-full flex flex-col ">
                  <label htmlFor="storeType" className="font-semibold mb-2">
                    Enter Name
                  </label>
                  <div>
                    <Field
                      type="text"
                      placeholder="name"
                      name="name"
                      className="border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>
                <div className=" w-full flex flex-col ">
                  <label htmlFor="storeType" className="font-semibold mb-2">
                    Date of Birth
                  </label>
                  <div>
                    <Field
                      type="text"
                      placeholder="YYYY-MM-DD"
                      maxLength="10"
                      name="dob"
                      className="border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="dob"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>
                <div className=" w-full">
                  <label htmlFor="storeType" className="font-semibold mb-2">
                    Address
                  </label>
                  <div>
                    <Field
                      type="text"
                      placeholder="Address"
                      name="address"
                      className="border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col w-full  mr-3">
                    <div className=" w-full">
                      <div>
                        <Field
                          type="text"
                          placeholder="Country"
                          name="country"
                          className="border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500"
                        ></Field>
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full ">
                    <div className="flex flex-col w-full mr-3">
                      <div className=" w-full">
                        <div>
                          <Field
                            type="text"
                            placeholder="State"
                            name="state"
                            className="border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500"
                          ></Field>
                          <ErrorMessage
                            name="state"
                            component="div"
                            className="text-red-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col w-full mr-3">
                    <div className=" w-full">
                      <div>
                        <Field
                          type="text"
                          placeholder="District"
                          name="district"
                          className="border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500"
                        ></Field>
                        <ErrorMessage
                          name="district"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full ">
                    <div className="flex flex-col w-full mr-3">
                      <div className=" w-full">
                        <div>
                          <Field
                            type="text"
                            placeholder="Pincode"
                            name="pincode"
                            className="border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500"
                          ></Field>
                          <ErrorMessage
                            name="district"
                            component="div"
                            className="text-red-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full">
                  <div>
                    <Field
                      type="text"
                      placeholder="Enter Phone Number"
                      name="phone"
                      className="border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>
                <div className=" w-full">
                  <div>
                    <Field
                      type="email"
                      placeholder="Enter Email Address"
                      name="email"
                      className="border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>
                <div className="mx-3">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`${isValid && "bg-blue-500 "} ${
                      !isValid && "bg-blue-300 "
                    } rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 text-white`}
                    // className="rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 bg-blue-500 text-white"
                  >
                    Verify Now
                  </button>
                </div>
              </div>
            </div>

            {/* -----------------------------------------side bar----------------------------------------------------------------------------                   */}

            <div className="col-span-3 bg-blue-600  xl:min-h-[800px] lg:min-h-screen md:min-h-screen lg:block md:hidden xs:hidden  rounded-2xl px-10 pt-20 text-white">
              <div className="flex flex-col justify-around h-1/2">
                <h1 className="font-semibold xl:text-2xl lg:text-2xl md:text-xl xs:text-xl">
                  Add Document
                </h1>
                <p className="font-serif xl:text-[13px] lg:text-[9px] md:text-[8px] xs:text-[5px] pt-5">
                  Adding document enable us to verify and keep fraudulent
                  activities out of reach.
                </p>

                <div className="flex justify-normal items-center gap-4">
                  {currentPage == 1 ? (
                    ""
                  ) : (
                    <button
                      type="button"
                      className="bg-blue-500  2xl:px-20 xl:px-14 lg:px-14 md:px-10 w-28 flex justify-center py-2 mt-10  rounded-lg"
                      onClick={handlePrevPage}
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="px-8 2xl:px-20 xl:px-14 lg:px-14 md:px-10 w-28 flex justify-center py-2 mt-10 bg-white text-black rounded-lg"
                  >
                    Skip
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  {Array.from({ length: pages }).map((_, index) => (
                    <div key={index} className="outer-circle mr-8 indot">
                      {currentPage == index + 1 ? <GoDot /> : <RxDot />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDocument;
