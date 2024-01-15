import { storeShema } from "../../validation/yup";
import StoreFirstForm from "./firstForm";
import StoreSecondForm from "./secondForm";
import StoreLayout from "../layout/storelayout";
import BlueBox from "./rightSideBox";
import { useState } from "react";
import ServiceType from "./serviceType";
import DocumnetFirstForm from "./documnetFirstForm";
import DocumnetSecondForm from "./documnetSecondForm";
import CalenderSetup from "../product/addProductdetails/discount/calenderSetup";
const HandleCreateStore = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages] = useState(3);

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
    storeName: "",
    address: "",
    district: "",
    country: "",
    state: "",
    pincode: "",
    serviceType:"",
    pancard:""
  };
  if (currentPage == 1) {
    const boxTittle = "Select your Rental store type";
    const boxDiscription = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, laboriosam mollitia explicabo, eius quaerat sunt molestiae ducimus placeat aut laborum nesciunt illum asperiores vero 
      id quod tempora magni in!`;
    return (
      <StoreLayout
        validationSchema={storeShema}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        FirstForm={ServiceType}
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
    const boxTittle = "Create your Rental Store";
    const boxDiscription =
      "Adding documents enables us to verify and keep fraudulent activitiesout of reach.";

    return (
      <StoreLayout
        validationSchema={storeShema}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        FirstForm={StoreFirstForm}
        SecondForm={StoreSecondForm}
        BlueBox={BlueBox}
        boxTittle={boxTittle}
        boxDiscription={boxDiscription}
        CalenderBox={<CalenderSetup />}
        pages={pages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    );
  }
  if (currentPage == 3) {
    const boxTittle = "Add Documnet";
    const boxDiscription =
      "Adding documents enables us to verify and keep fraudulent activitiesout of reach.";

    return (
      <StoreLayout
      
        validationSchema={storeShema}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        FirstForm={DocumnetFirstForm}
        SecondForm={DocumnetSecondForm}
        BlueBox={BlueBox}
        boxTittle={boxTittle}
        boxDiscription={boxDiscription}
        pages={pages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        buttonText={"Create Store"}
      />
    );
  }
};

export default HandleCreateStore;
