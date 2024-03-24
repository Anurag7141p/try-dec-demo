import React, { useState } from "react";
import MobMoreDetailsNav from "./mobMoreDetailsNav";
import MobProductDetails from "./mobProductDetails";
import ProductMoreDetailsFooter from "./productMoreDetailsFooter";
import MobSloatDates from "./mobSloatDates";

const MobProductMoreDetails = ({ data }) => {
  const [date, setDate] = useState(false);
  return (
    <div className="h-full w-full ">
      <div>
        <MobMoreDetailsNav data={data} />
      </div>
      {date ? (
        <div className="absolute top-0 bg-black/70  w-full">
          <div className="   w-full mt-20">
            <MobSloatDates data={data}  />
          </div>
        </div>
      ) : (
        <div className="absolute top-[25%] h-full w-full ">
          <MobProductDetails data={data} setDate={setDate} date={date}/>
        </div>
      )}

      <div>
        <ProductMoreDetailsFooter data={data} />
      </div>
    </div>
  );
};

export default MobProductMoreDetails;
