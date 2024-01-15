import { ErrorMessage } from "formik";
import { useEffect, useState } from "react";

const StoreSecondForm = ({ setFieldValue }) => {
  const [fromHours, setFromHours] = useState(9);
  const [fromMinutes, setFromMinutes] = useState(0);
  const [fromAmPm, setFromAmPm] = useState("am");
  const [toHours, setToHours] = useState(5);
  const [toMinutes, setToMinutes] = useState(0);
  const [toAmPm, setToAmPm] = useState("pm");

  const incrementFromHour = () => {
    setFromHours((prevHours) => (prevHours % 12) + 1);
  };

  const incrementFromMinutes = () => {
    setFromMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));
  };

  const toggleFromAmPm = () => {
    setFromAmPm((prevAmPm) => (prevAmPm === "am" ? "pm" : "am"));
  };

  const decrementToHour = () => {
    setToHours((prevHours) => (prevHours === 1 ? 12 : prevHours - 1));
  };

  const decrementToMinutes = () => {
    setToMinutes((prevMinutes) => (prevMinutes === 0 ? 59 : prevMinutes - 1));
  };

  const toggleToAmPm = () => {
    setToAmPm((prevAmPm) => (prevAmPm === "am" ? "pm" : "am"));
  };

  useEffect(() => {
    const startTimeString = `${fromHours}:${fromMinutes
      .toString()
      .padStart(2, "0")} ${fromAmPm}`;
    setFieldValue("startTime", startTimeString);
  }, [fromHours, fromMinutes, fromAmPm]);

  useEffect(() => {
    const closingTimeString = `${toHours}:${toMinutes
      .toString()
      .padStart(2, "0")} ${toAmPm}`;
    setFieldValue("closingTime", closingTimeString);
  }, [toHours, toMinutes, toAmPm]);

  const [selectedStoreType, setSelectedStoreType] = useState("");

  const selectstoretype = [
    { value: "Registered rental store", label: "Registered rental store" },
    { value: "My home is my store", label: "My home is my store" },
  ];

  const handleSelectChange = (e) => {
    setSelectedStoreType(e.target.value);
    setFieldValue("storeMode", e.target.value)
  };

  return (
    <div className="lg:ms-10">
      <div className="w-full md:w-96 lg:mt-20">
        <div className="relative ">
          <select
            id="storeType"
            name="storeMode"
            className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-300 text-gray-700 py-2 mb-4 pr-8 rounded leading-tight focus:outline-none"
            value={selectedStoreType}
            onChange={handleSelectChange}
          >
            <option value="" disabled hidden>
              Select your store mode
            </option>
            {selectstoretype.map((option) => (
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
      </div>

      <h4 className="text-lg md:text-xl lg:text-2xl text-center lg:mt-20 lg:mr-40">
        Working hours
      </h4>

      <div className="flex flex-row items-center justify-center md:flex-row md:items-start md:justify-start md:space-x-3 lg:space-x-0.5 mt-4 md:mt-6 lg:mt-4">
        <div>
          <button
            type="button"
            onClick={incrementFromHour}
            className="bg-blue-500 w-8 rounded-l-lg text-white py-1 px-2 lg:px-4 "
          >
            {fromHours}:
          </button>
          <button
            type="button"
            onClick={incrementFromMinutes}
            className="bg-blue-500 w-8 text-white py-1 "
          >
            {fromMinutes < 10 ? `0${fromMinutes}` : fromMinutes}
          </button>
        </div>
        <button
          type="button"
          onClick={toggleFromAmPm}
          className="bg-blue-500 rounded-r-lg w-12 ml-0.5 text-white py-1"
        >
          {fromAmPm}
        </button>
        <p className="mt-5 mx-3 md:mt-0 lg:mt-0">{`to`}</p>
        <div>
          <button
            type="button"
            onClick={decrementToHour}
            className="bg-blue-500 w-8 rounded-l-lg text-white py-1 px-2 lg:px-4"
          >
            {toHours}:
          </button>
          <button
            type="button"
            onClick={decrementToMinutes}
            className="bg-blue-500  w-8 text-white py-1"
          >
            {toMinutes < 10 ? `0${toMinutes}` : toMinutes}
          </button>
        </div>
        <button
          type="button"
          onClick={toggleToAmPm}
          className="bg-blue-500 rounded-r-lg w-12 ml-0.5 text-white py-1"
        >
          {toAmPm}
        </button>
      </div>
      <ErrorMessage name="startTime" component="div" className="text-red-600" />
      <ErrorMessage
        name="closingTime"
        component="div"
        className="text-red-600"
      />
      <div className="mt-8 md:mt-12 lg:mt-16 lg:mr-10">
        <p className="text-center lg:mr-20">Attach store image</p>
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
          <span>
            Click here to <br />
            attach your files
          </span>
        </label>
        <p className="text-gray-400 text-sm text-center md:text-left mt-2">
          Attach an image file (JPG, PNG) with a size less than 25MB.
        </p>
      </div>
    </div>
  );
};

export default StoreSecondForm;
