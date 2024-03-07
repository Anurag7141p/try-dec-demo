import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { useEffect, useState } from "react";

const TimePickerComponent = ({ style }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const storeTime = {
    openingTime: "7:00 am",
    closingTime: "7:00 pm",
  };

  const { openingTime, closingTime } = storeTime || {};

  const handleTimeChange = (value) => {
    setSelectedTime(value);
  };

  const disabledHours = () => {
    const disabled = [];
    for (let i = 0; i < 24; i++) {
      if (i < openingTime || i > closingTime) {
        disabled.push(i);
      }
    }
    return disabled;
  };

  const disabledMinutes = (hour) => {
    if (hour === openingTime) {
      const disabled = [];
      for (let i = 0; i < 60; i++) {
        if (i < openingTime % 100) {
          disabled.push(i);
        }
      }
      return disabled;
    } else if (hour === closingTime) {
      const disabled = [];
      for (let i = (closingTime % 100) + 1; i < 60; i++) {
        disabled.push(i);
      }
      return disabled;
    }
    return [];
  };

  return (
    <div>
      <TimePicker
        showSecond={false}
        defaultValue={selectedTime}
        onChange={handleTimeChange}
        format="h:mm a"
        placeholder="12:00"
        clearIcon={null}
        disabledHours={disabledHours}
        disabledMinutes={disabledMinutes}
        className={
          style
            ? "custom-timepicker w-full placeholder:text-gray-800 "
            : "custom-timepicker w-full   rounded-md px-3 py-1  "
        }
      />
    </div>
  );
};

export default TimePickerComponent;

// import moment from "moment";
// import TimePicker from "rc-time-picker";
// import "rc-time-picker/assets/index.css";
// import { useEffect, useRef, useState } from "react";

// const TimePickerComponent = ({ style, openingTime, closingTime, setTime }) => {
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [timePickerKey, setTimePickerKey] = useState(0);

//   // Convert openingTime and closingTime to 24-hour format
//   const convertTo24HourFormat = (time) => {
//     const [hours, minutes] = time.split(":");
//     let hoursNumeric = parseInt(hours, 10);
//     const isPM = time.toLowerCase().includes("pm");

//     if (isPM && hoursNumeric !== 12) {
//       hoursNumeric += 12;
//     } else if (!isPM && hoursNumeric === 12) {
//       hoursNumeric = 0;
//     }

//     return `${hoursNumeric.toString().padStart(2, "0")}:${minutes}`;
//   };

//   const openingTimeNumeric = convertTo24HourFormat(openingTime);
//   const closingTimeNumeric = convertTo24HourFormat(closingTime);

//   const disabledHours = () => {
//     const disabled = [];
//     for (let i = 0; i < 24; i++) {
//       if (
//         i < parseInt(openingTimeNumeric.split(":")[0], 10) ||
//         i > parseInt(closingTimeNumeric.split(":")[0], 10)
//       ) {
//         disabled.push(i);
//       }
//     }
//     return disabled;
//   };

//   const disabledMinutes = (hour) => {
//     if (hour === parseInt(openingTimeNumeric.split(":")[0], 10)) {
//       const disabled = [];
//       for (let i = 0; i < 60; i++) {
//         if (i < parseInt(openingTimeNumeric.split(":")[1], 10)) {
//           disabled.push(i);
//         }
//       }
//       return disabled;
//     } else if (hour === parseInt(closingTimeNumeric.split(":")[0], 10)) {
//       const disabled = [];
//       for (
//         let i = parseInt(closingTimeNumeric.split(":")[1], 10) + 1;
//         i < 60;
//         i++
//       ) {
//         disabled.push(i);
//       }
//       return disabled;
//     }
//     return [];
//   };

//   const handleTimeChange = (value) => {
//     const newTime = value.clone(); // Clone the moment object to avoid mutating the original

//     // If the selected time is equal to the closing time, set minutes to 0
//     if (newTime.format("h:mm a") === closingTimeNumeric) {
//       newTime.minute(0);
//     }

//     setSelectedTime(newTime);
//     console.log(newTime.format("h:mm a"));

//     setTimePickerKey((prevKey) => prevKey + 1);
//     // Manually close the dropdown after both hour and minute are selected
//   };

//   useEffect(() => {
//     // Set selected time when the component mounts
//     setSelectedTime(moment(openingTime, "h:mm a"));
//   }, [openingTime]);

//   return (
//     <div>
//       <TimePicker
//         key={timePickerKey}
//         showSecond={false}
//         defaultValue={selectedTime}
//         onChange={handleTimeChange}
//         format="h:mm a"
//         placeholder="12:00"
//         clearIcon={null}
//         disabledHours={disabledHours}
//         disabledMinutes={disabledMinutes}
//         className={
//           style
//             ? " w-full placeholder:text-gray-800 focus:outline-none focus:border-blue-400"
//             : " w-full   rounded-md px-3 py-1  focus:outline-none focus:border-blue-400 "
//         }
//       />
//     </div>
//   );
// };

// export default TimePickerComponent;
