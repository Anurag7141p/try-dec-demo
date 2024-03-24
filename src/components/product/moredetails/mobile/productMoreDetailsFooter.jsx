import React from "react";
import { Link } from "react-router-dom";

const ProductMoreDetailsFooter = ({data}) => {
  return (
    <div className="xs:h-28 xs:w-full flex text-xl bg-white font-lato  border-2 rounded-t-3xl items-center justify-around fixed bottom-0 drop-shadow-3xl ">
      <div>
          <h1 className="text-gray-500 px-10 py-3   rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50">
            Total <span className="text-blue-600">₹ 1524</span>
          </h1>
      </div>
      <div>
        <Link>
          <button className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600">
            Connect
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductMoreDetailsFooter;
