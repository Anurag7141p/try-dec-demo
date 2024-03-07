import React, { useEffect, useState } from "react";

const WorkingDays = () => {
  const [week, setWeek] = useState([
    { name: "SUN", working: true },
    { name: "MON", working: true },
    { name: "TUE", working: true },
    { name: "WED", working: true },
    { name: "THU", working: true },
    { name: "FRI", working: true },
    { name: "SAT", working: true },
  ]);
  const handleCheckboxChange = (name) => {
    const workingDaysCount = week.filter((day) => day.working == true).length;
    const slectedDay = week.filter((day) => day.name == name);
    if (workingDaysCount == 5 && slectedDay[0].working == true) {
      return;
    }
    const updatedWeek = week.map((day) => {
      if (day.name === name) {
        return { ...day, working: !day.working };
      }
      return day;
    });
    setWeek(updatedWeek);
  };

  // useEffect(() => {
  //   setFieldValue("workingDays", week);
  // }, [week]);
  return (
    <div className="ml-2 grid min-w-64 max-w-64  grid-cols-3 gap-4 mt-4">
      {week.map((day) => (
        <div className="flex items-center" key={day.name}>
          <p className="m-0 min-w-8 max-w-8">{day.name}</p>
          <input
            className="m-3  w-4 h-4 border border-gray-300 rounded-md bg-green-600"
            type="checkbox"
            checked={day.working}
            onChange={() => handleCheckboxChange(day.name)}
          />
        </div>
      ))}
    </div>
  );
};

export default WorkingDays;
