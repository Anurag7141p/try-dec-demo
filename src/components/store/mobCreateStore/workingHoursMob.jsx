import React, { useEffect, useState } from "react";

const WorkingHoursMob = ({ setFieldValue }) => {
  const [fromHours, setFromHours] = useState(9);
  const [fromMinutes, setFromMinutes] = useState(0);
  const [fromAmPm, setFromAmPm] = useState("am");
  const [toHours, setToHours] = useState(5);
  const [toMinutes, setToMinutes] = useState(0);
  const [toAmPm, setToAmPm] = useState("pm");

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
    setFieldValue("openingTime", startTimeString);
    console.log(startTimeString, "this is starting time");
  }, [fromHours, fromMinutes, fromAmPm]);

  useEffect(() => {
    const closingTimeString = `${toHours}:${toMinutes
      .toString()
      .padStart(2, "0")} ${toAmPm}`;
    setFieldValue("closingTime", closingTimeString);
    console.log(closingTimeString, "this is closing time");
  }, [toHours, toMinutes, toAmPm]);

  
  return (
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
  );
};

export default WorkingHoursMob;
