import { ProductValidation } from "../../../validation/yup";
import StoreLayout from "../../layout/storelayout";
import BlueBox from "../../../components/store/rightSideBox";
import Profirstpage from "./profirstpage";
import ProSecondpage from "./proSecondpage";
import { useState } from "react";
import UpdateProducts from "./updateProducts";
import ProductPricing from "./discount/productPricing";
import CalenderSetup from "./discount/calenderSetup";
import CenterImageAttach from "./centerImageAttach";
const HandleAddProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages] = useState(4);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  const initialValues = {
    productBrand: "",
    productModel: "",
    ProductN: ""
  };
  if (currentPage == 1) {
    const boxTittle = "Add your product";
    const boxDiscription = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, laboriosam mollitia explicabo, eius quaerat sunt molestiae ducimus placeat aut laborum nesciunt illum asperiores vero 
      id quod tempora magni in!`;
    return (
      <StoreLayout
        validationSchema={ProductValidation}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        FirstForm={Profirstpage}
        BlueBox={BlueBox}
        boxTittle={boxTittle}
        boxDiscription={boxDiscription}
        pages={pages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />

    );
  }
  if (currentPage == 2) {
    const boxTittle = "Add your product";
    const boxDiscription =
      "Adding documents enables us to verify and keep fraudulent activitiesout of reach.";

    return (
      <StoreLayout
        validationSchema={ProductValidation}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        FirstForm={ProSecondpage}
        SecondForm={CenterImageAttach}
        BlueBox={BlueBox}
        boxTittle={boxTittle}
        boxDiscription={boxDiscription}
        pages={pages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    );
  }
  if (currentPage == 3) {
    const boxTittle = "Manage your Inventory";
    const boxDiscription = "Lorem ipsum dolor sit amet, consectetur adip";

    return (
      <StoreLayout
        validationSchema={ProductValidation}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        FirstForm={ProductPricing}
        BlueBox={BlueBox}
        boxTittle={boxTittle}
        boxDiscription={boxDiscription}
        CalenderBox={CalenderSetup}
        pages={pages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />

    );
  }
  if (currentPage == 4) {
    const boxTittle = "Manage your Inventory";
    const boxDiscription =
      "Lorem ipsum dolor sit amet, consectetur adip";

    return (
      <StoreLayout
        validationSchema={ProductValidation}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        FirstForm={UpdateProducts}
        BlueBox={BlueBox}
        boxTittle={boxTittle}
        boxDiscription={boxDiscription}
        pages={pages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        buttonText={"Update Store"}
      />
    );
  }

};

export default HandleAddProducts;
