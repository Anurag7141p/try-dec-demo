import { ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";

import WorkingDays from "./workingDays";
import { TiDelete } from "react-icons/ti";
import { GoDot } from "react-icons/go";
import { RxDot } from "react-icons/rx";

const supportedImageExtensions = ["jpg", "jpeg", "png", "gif"];

const PersonalizedStore = ({
  setFieldValue,
  error_message,
  isValid,
  pages,
  currentPage,
  handlePrevPage,
  boxTittle,
  boxDiscription,
  buttonText,
  DubbleDiscription,
}) => {
  const [fromHours, setFromHours] = useState(9);
  const [fromMinutes, setFromMinutes] = useState(0);
  const [fromAmPm, setFromAmPm] = useState("am");
  const [toHours, setToHours] = useState(5);
  const [toMinutes, setToMinutes] = useState(0);
  const [toAmPm, setToAmPm] = useState("pm");

  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [rules, setRules] = useState([
    "Must carry original ID proof of your self",
  ]);
  const [rulesCount, setRulesCount] = useState(1);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const handleFromHoursChange = (event) => {
    setFromHours(parseInt(event.target.value, 10));
  };

  const handleFromMinutesChange = (event) => {
    setFromMinutes(parseInt(event.target.value, 10));
  };

  const handleFromAmPmChange = (event) => {
    setFromAmPm(event.target.value);
  };

  const handleToHoursChange = (event) => {
    setToHours(parseInt(event.target.value, 10));
  };

  const handleToMinutesChange = (event) => {
    setToMinutes(parseInt(event.target.value, 10));
  };

  const handleToAmPmChange = (event) => {
    setToAmPm(event.target.value);
  };

  // useEffect(() => {
  //   setFieldValue("storeRules", rules);
  // }, []);

  // const uploadImage = (files) => {
  //   const file = files[0];
  //   const fileName = file.name.toLowerCase();
  //   const extension = fileName.split(".").pop();

  //   if (file.type.startsWith("image/")) {
  //     if (supportedImageExtensions.includes(extension)) {
  //       if (file.size <= 5 * 1024 * 1024) {
  //         setImage(file);
  //         setFieldValue("image", file);
  //         setError("");
  //       } else {
  //         setError("Image size should be less than 5MB");
  //       }
  //     } else {
  //       setError("Invalid image file extension");
  //     }
  //   } else {
  //     setError("File is not an image");
  //   }
  // };

  // useEffect(() => {
  //   const startTimeString = `${fromHours}:${fromMinutes
  //     .toString()
  //     .padStart(2, "0")} ${fromAmPm}`;
  //   setFieldValue("openingTime", startTimeString);
  // }, [fromHours, fromMinutes, fromAmPm]);

  // useEffect(() => {
  //   const closingTimeString = `${toHours}:${toMinutes
  //     .toString()
  //     .padStart(2, "0")} ${toAmPm}`;
  //   setFieldValue("closingTime", closingTimeString);
  // }, [toHours, toMinutes, toAmPm]);

  // const updateRule = (index, value) => {
  //   const updatedRules = [...rules];
  //   updatedRules[index] = value;
  //   setRules(updatedRules);
  //   setFieldValue("storeRules", updatedRules);
  // };

  const handleRulesCount = () => {
    if (rulesCount < 4) {
      setRulesCount(rulesCount + 1);
    }
  };

  const handleDelete = (position) => {
    const updatedRules = [...rules];
    updatedRules.splice(position, 1);
    setRules(updatedRules);
    setRulesCount(rulesCount - 1);
  };

  console.log(error);

  return (
    <div className="mx-auto   flex  justify-center  items-center xl:h-screen  lg:w-full 2xl:w-[1536px] xl:w-full  ">
      <div className="   flex justify-center  px-10 ">
        <div className="bg-white w-full  rounded-lg  overflow-auto">
          <div className="grid grid-cols-9 gap-3">
            <div className="col-span-6 md:col-span-9 xs:col-span-9 text-[14px]  lg:col-span-6  grid grid-cols-6 gap-4    md:h-full xl:p-3 py-5">
              <div className="col-span-3 lg:col-span-3 md:col-span-3 xs:col-span-6 flex flex-col gap-6 ">
                {/*------------------------------------------ time ---------------------------------------------*/}
                <div className="w-full  bg-white">
                  <div className=" h-fit w-full flex  mt-10">
                    <p className="font-semibold">Set working hours</p>
                  </div>
                  <div className=" h-fit w-full flex ">
                    <p className="font-sans text-gray-500 ml-2 mt-1.5 w-[65%]">
                      Effortlessly manage product pickup and drop-off with our
                      user-friendly store working hour setup
                    </p>
                  </div>
                  <div className="w-full  flex ">
                    <div className=" flex flex-row  md:flex-row md:items-start md:justify-start md:space-x-3 lg:space-x-0.5 mt-4 md:mt-6 lg:mt-4">
                      <div className="flex">
                        <select
                          value={fromHours}
                          onChange={handleFromHoursChange}
                          className="bg-blue-500 w-9 rounded-l-lg text-white py-1 px-2 appearance-none focus:outline-none"
                        >
                          {hours.map((hour) => (
                            <option key={hour} value={hour}>
                              {hour}
                            </option>
                          ))}
                        </select>

                        <div className="bg-blue-500 flex justify-center items-center gap-2 text-white">
                          <span>:</span>
                          <select
                            value={fromMinutes}
                            onChange={handleFromMinutesChange}
                            className="bg-blue-500 w-8  text-white py-1 px-1   appearance-none focus:outline-none"
                          >
                            {minutes.map((minute) => (
                              <option key={minute} value={minute}>
                                {minute < 10 ? `0${minute}` : minute}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <select
                        value={fromAmPm}
                        onChange={handleFromAmPmChange}
                        className="bg-blue-500 rounded-r-lg w-12 px-3 text-white py-1 pr-1 appearance-none "
                      >
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                      </select>

                      <p className="mt-1 px-2 mx-3 tex">{`to`}</p>

                      <div className="min-w-7 flex">
                        <select
                          value={toHours}
                          onChange={handleToHoursChange}
                          className="bg-blue-500 w-9 rounded-l-lg text-white py-1 px-2 appearance-none focus:outline-none"
                        >
                          {hours.map((hour) => (
                            <option key={hour} value={hour}>
                              {hour}
                            </option>
                          ))}
                        </select>

                        <div className="bg-blue-500 flex justify-center items-center gap-2 text-white">
                          <span>:</span>
                          <select
                            value={toMinutes}
                            onChange={handleToMinutesChange}
                            className="bg-blue-500 w-8  text-white py-1 px-1   appearance-none focus:outline-none"
                          >
                            {minutes.map((minute) => (
                              <option key={minute} value={minute}>
                                {minute < 10 ? `0${minute}` : minute}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <select
                        value={toAmPm}
                        onChange={handleToAmPmChange}
                        className="bg-blue-500 rounded-r-lg w-12 px-3 text-white py-1 pr-1 appearance-none "
                      >
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                      </select>
                    </div>
                  </div>
                  <div className=" h-fit w-full flex ">
                    <WorkingDays setFieldValue={setFieldValue} />
                  </div>

                  <div className=" h-fit w-full flex  mt-10">
                    <p className="font-semibold">Store Image</p>
                  </div>
                  {image ? (
                    <div className="w-3/4 h-fit flex flex-col justify-center items-center relative mb-3 mx-2 xl:mt-10 lg:mt-10 xs:mt-5">
                      <img
                        className="w-full h-40 object-cover    shadow-md border border-gray-200 rounded-xl"
                        src={URL.createObjectURL(image)}
                        alt="posts"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        <label
                          htmlFor="imageUpload"
                          className="text-white text-sm cursor-pointer"
                        >
                          Replace Image
                          <input
                            type="file"
                            id="imageUpload"
                            className="hidden"
                            accept="image/*"
                            onChange={(event) => {
                              uploadImage(event.target.files);
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className="h-fit w-full flex ">
                      <div className="mt-8 ">
                        <p className="text-center lg:mr-20">
                          Attach store image
                        </p>
                        <label
                          htmlFor="imageUpload"
                          className="w-full md:w-72 h-20 border-2 border-dashed border-blue-300 rounded-lg mt-2 cursor-pointer flex items-center justify-center bg-blue-50 text-blue-500"
                        >
                          <input
                            type="file"
                            id="imageUpload"
                            className="hidden"
                            accept="image/*"
                            onChange={(event) => {
                              uploadImage(event.target.files);
                            }}
                          />

                          <span className="text-center flex items-center justify-center">
                            Click here to attach <br /> your store image
                          </span>
                        </label>
                        <p className="text-gray-400 text-sm text-center flex items-center justify-center md:text-left mt-2">
                          Attach an image file (JPG, PNG) with a size less than
                          5MB.
                        </p>
                        <p className="text-red-500">{error}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ---------------------------------------set store rules------------------------------------------------------------------- */}

              <div className="col-span-3">
                {/* rules */}
                <div className="w-full lg:w-1/2 bg-white ">
                  <div className="mt-10 w-full">
                    <p className="text-red-500">{error_message}</p>

                    <div className="flex justify-center">
                      <h1 className="mb-2 font-semibold">Store Rules</h1>
                    </div>
                    {Array.from({ length: rulesCount }).map((_, index) => (
                      <div key={index} className="flex justify-center">
                        <div
                          key={index}
                          className="flex border border-black w-80 px-7 py-1 mb-2 relative rounded-md"
                        >
                          <textarea
                            placeholder="Enter store rule"
                            className="w-full outline-none  focus:border-blue-500"
                            value={rules[index]}
                            maxLength={80}
                            rows="3"
                            onChange={(e) => updateRule(index, e.target.value)}
                          />

                          <span
                            className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                            onClick={() => handleDelete(index)}
                          >
                            <TiDelete size={30} />
                          </span>
                        </div>
                      </div>
                    ))}
                    <ErrorMessage
                      name="storeRules"
                      component="div"
                      className="text-red-600"
                    />
                    {rulesCount < 4 ? (
                      <div className="flex justify-center">
                        <label
                          htmlFor="additionalRulesUpload"
                          className="w-80 h-10 border-2 border-dashed border-blue-300 mt-2 cursor-pointer flex items-center justify-center bg-blue-50 text-blue-500 text-center"
                        >
                          <button
                            type="button"
                            id="additionalRulesUpload"
                            className="hidden"
                            onClick={handleRulesCount}
                          />
                          + Add more rules
                        </label>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              {/* -----------------------------------------side bar----------------------------------------------------------------------------                   */}
            </div>
            <div className="col-span-3 bg-blue-600 xl:min-h-[800px] md:min-h-screen  lg:block md:hidden xs:hidden  rounded-2xl px-10 pt-20 text-white   ">
              <div className="flex flex-col justify-between h-1/2">
                <h1 className="font-semibold xl:text-2xl lg:text-2xl md:text-xl xs:text-xl">
                  Personalize Store!
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
                    type="submit"
                    className="px-8 2xl:px-20 xl:px-14 lg:px-14 md:px-10 w-28 flex justify-center py-2 mt-10 bg-white text-black rounded-lg"
                  >
                    Next
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

export default PersonalizedStore;
