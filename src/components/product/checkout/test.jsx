import React, { useState } from "react";
import NewCheckout from "./newCheckout";

const Test = () => {
  const [locationClose, setLocationClose] = useState(false);

  return (
    <>
      <div>
        <button onClick={()=>setLocationClose(!locationClose)}>click</button>
      </div>
      <div className="overflow-y-auto">
        {locationClose ? (
          <NewCheckout
            setLocationClose={setLocationClose}
            locationClose={locationClose}
          />
        ) : null}
      </div>
    </>
  );
};

export default Test;
