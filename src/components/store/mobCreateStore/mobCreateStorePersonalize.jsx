import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import WorkingDays from "../createStore/workingDays";
import { TiDelete } from "react-icons/ti";
import { FaCamera } from "react-icons/fa";

const supportedImageExtensions = ["jpg", "jpeg", "png", "gif"];

const MobCreateStorePersonalize = ({
  validationSchema,
  handleSubmit,
  initialValues,
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

  useEffect(() => {
    const startTimeString = `${fromHours}:${fromMinutes
      .toString()
      .padStart(2, "0")} ${fromAmPm}`;
    // setFieldValue("openingTime", startTimeString);
  }, [fromHours, fromMinutes, fromAmPm]);

  useEffect(() => {
    const closingTimeString = `${toHours}:${toMinutes
      .toString()
      .padStart(2, "0")} ${toAmPm}`;
    // setFieldValue("closingTime", closingTimeString);
  }, [toHours, toMinutes, toAmPm]);

  const updateRule = (index, value) => {
    const updatedRules = [...rules];
    updatedRules[index] = value;
    setRules(updatedRules);
    // setFieldValue("storeRules", updatedRules);
  };

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

  const uploadImage = (files) => {
    const file = files[0];
    const fileName = file.name.toLowerCase();
    const extension = fileName.split(".").pop();

    if (file.type.startsWith("image/")) {
      if (supportedImageExtensions.includes(extension)) {
        if (file.size <= 5 * 1024 * 1024) {
          setImage(file);
          setFieldValue("image", file);
          setError("");
        } else {
          setError("Image size should be less than 5MB");
        }
      } else {
        setError("Invalid image file extension");
      }
    } else {
      setError("File is not an image");
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-full sm:h-52 min-h-40 pt-3 text-white  bg-blue-600   flex flex-col gap-4 justify-center pb-5 px-5 rounded-b-3xl">
          <img
            src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710520065/trydec/olapoolimage.png"
            alt=""
            className="w-1/4"
          />
          <h1 className="text-xl font-semibold">Personalize store </h1>
          <p className="text-md">
            Adding documents enables us to verify and keep fraudulent activities
            out of reach.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 w-full h-2 bg-white rounded"></div>
            <div className="col-span-1 w-full h-2  rounded bg-white"></div>
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
            <div className="w-full px-8 py-5 pt-5 flex flex-col gap-4 z-10 pb-32">
              <div className="w-full flex flex-col gap-2">
                <p className="font-semibold text-lg">Set working hours</p>
                <p className="text-sm">
                  Effortlessly manage product pickup and drop-off with our
                  user-friendly store working hour setup
                </p>
                <div>
                  <div className=" flex flex-row  pt-4  justify-center">
                    <div className="flex">
                      <select
                        value={fromHours}
                        onChange={handleFromHoursChange}
                        className="bg-blue-500  rounded-l-lg text-white py-1 px-2 appearance-none focus:outline-none"
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
                          className="bg-blue-500   text-white py-1 px-1   appearance-none focus:outline-none"
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
                      className="bg-blue-500 rounded-r-lg  px-3 text-white py-1 pr-1 appearance-none "
                    >
                      <option value="am">AM</option>
                      <option value="pm">PM</option>
                    </select>

                    <p className="mt-1 px-3  ">-</p>

                    <div className=" flex">
                      <select
                        value={toHours}
                        onChange={handleToHoursChange}
                        className="bg-blue-500  rounded-l-lg text-white py-1 px-2 appearance-none focus:outline-none"
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
                          className="bg-blue-500   text-white py-1 px-1   appearance-none focus:outline-none"
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
                      className="bg-blue-500 rounded-r-lg  px-3 text-white py-1 pr-1 appearance-none "
                    >
                      <option value="am">AM</option>
                      <option value="pm">PM</option>
                    </select>
                  </div>
                </div>
                <div className=" h-fit w-full flex justify-center">
                  <WorkingDays setFieldValue={setFieldValue} />
                </div>

                {/* rules */}
                <div className="w-full  bg-white ">
                  <div className="mt-5 w-full">
                    {/* <p className="text-red-500">{error_message}</p> */}
                    <div className="flex ">
                      <h1 className="mb-2 font-semibold text-lg">Store Rules</h1>
                    </div>
                    {Array.from({ length: rulesCount }).map((_, index) => (
                      <div key={index} className="flex justify-center">
                        <div
                          key={index}
                          className="flex border border-black w-full rounded-lg px-7 py-1 mb-2 relative"
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
                    {/* <ErrorMessage
                      name="storeRules"
                      component="div"
                      className="text-red-600"
                    /> */}
                    {rulesCount < 4 ? (
                      <div className="flex justify-center">
                        <label
                          htmlFor="additionalRulesUpload"
                          className="w-full h-10 border border-gray-400 mt-2 cursor-pointer flex items-center justify-center rounded-lg text-gray-600 font-semibold text-center"
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

                {/* add store image  */}
                {image ? (
                  <>
                    <div className=" h-fit w-full flex justify-start  mt-4">
                      <p className="font-semibold text-lg">Store Image</p>
                    </div>
                    <div className="w-full h-fit flex justify-start items-center relative mb-3 ">
                      <img
                        className="w-52 h-32 object-cover pt-3"
                        src={URL.createObjectURL(image)}
                        alt="posts"
                      />
                      <div className="w-52  absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                  </>
                ) : (
                  <div className="h-fit w-full  ">
                    <div className="mt-8 ">
                      <p className="font-semibold text-lg">Attach store image</p>
                      <label
                        htmlFor="imageUpload"
                        className="  rounded-lg mt-2 w-1/2 cursor-pointer flex  border border-gray-400 p-3 "
                      >
                        <input
                          type="file"
                          id="imageUpload"
                          className="hidden "
                          accept="image/*"
                          onChange={(event) => {
                            uploadImage(event.target.files);
                          }}
                        />

                        <span className="flex justify-center items-center gap-3">
                          <FaCamera className="w-5 h-5"/>
                          Add image
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
                  Create Store
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MobCreateStorePersonalize;
