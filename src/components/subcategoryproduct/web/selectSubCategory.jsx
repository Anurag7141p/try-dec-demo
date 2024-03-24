import React, { useEffect, useRef, useState } from "react";
import SubCategoryList from "./subCategoryList";
import Filter from "./filter";
import ProductList from "./productList";
import { useMediaQuery } from "react-responsive";

const SelectSubCategory = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [filterLocation, setFilterLocation] = useState("");

  return (
    <div className="relative h-screen ">
      <div className="sticky top-0 z-50">
        <SubCategoryList />
      </div>
      <div className="w-full flex bg-[#F1F3F6]  fixed px-3 h-full">
        {/* Filter section */}
        <div className="w-[20%] border-r bg-white p-2 shadow-lg  ">
          <Filter
            filterLocation={filterLocation}
            setFilterLocation={setFilterLocation}
          />
        </div>
        {/* Product list section */}
        <div className="w-[80%] bg-white shadow-lg ">
          <ProductList
            filterLocation={filterLocation}
            setFilterLocation={setFilterLocation}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectSubCategory;
