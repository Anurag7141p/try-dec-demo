import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, addMonths, differenceInCalendarDays } from "date-fns";
import { isWithinInterval } from "date-fns";

const AvailDate = ({
  style,
  workingDays,
  setDropOffDate,
  setPickupDate,
  minRentalDurationDays,
  maxRentalDurationDays,
}) => {
  return (
    <>
      <div>
        <div className="relative">
          <DatePicker
            // selected={startDate}
            // onSelect={onSelect}
            // onChange={onChange}
            // minDate={new Date()}
            // maxDate={addMonths(new Date(), 5)}
            // startDate={startDate}
            // endDate={endDate}
            // selectsRange
            // filterDate={filterDate}
            // onCalendarClose={onCalendarClose}
            // onCalendarOpen={onCalendarOpen}
            // dayClassName={dayClassName}
            dateFormat="dd/MM/yyyy"
            shouldCloseOnSelect={true}
            showDisabledMonthNavigation
            placeholderText="30/09/2001"
            // open={calendarOpen}
            withPortal
            className={
              style
                ? "md:w-12 lg:w-full xl:w-34 text-gray-800 border border-gray-300 rounded-sm   text-[13px] px-2 py-1 pl-10 focus:outline-none focus:border-blue-500 placeholder:text-gray-700 "
                : "md:w-12 lg:w-28 xl:w-34 text-gray-500 border border-gray-300 rounded-md text-[13px] px-2 py-1 pl-10 focus:outline-none focus:border-blue-500"
            }
          />
          <div className="absolute left-3 top-1 ">
            <FaCalendarAlt className="text-gray-500" />
          </div>
        </div>
      </div>
    </>
  );
};
export default AvailDate;
