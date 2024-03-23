import React from "react";
import SubCatNav from "./subCatNav";
import SubCatProductList from "./subCatProductList";
import FilterSelect from "./filterSelect";
import HomeFooter from "../homeFooter";

const SubCatProduct = () => {
  return (
    <div>
      <SubCatNav />
      <FilterSelect />
      <SubCatProductList />
      <HomeFooter />
    </div>
  );
};

export default SubCatProduct;
