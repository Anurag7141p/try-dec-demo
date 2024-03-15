import { useState } from "react";

import MobSelectMainCategory from "./mobSelectMainCategory";
import MobSelecteCategoryAndData from "./mobSelecteCategoryAndData";
import MobCustomField from "./mobCustomField";
import MobProductPricingAndQuantity from "./mobProductPricingAndQuantity";

const MobHandleAddProduct = () => {
  const [page, setPage] = useState(1);

  if (page == 1) {
    return <MobSelectMainCategory setPage={setPage} page={page}/>;
  }
  if (page == 2) {
    return <MobSelecteCategoryAndData setPage={setPage} page={page}/>;
  }
  if (page == 3) {
    return <MobCustomField setPage={setPage} page={page}/>;
  }
  if (page == 4) {
    return <MobProductPricingAndQuantity setPage={setPage} page={page}/>;
  }
};

export default MobHandleAddProduct;
