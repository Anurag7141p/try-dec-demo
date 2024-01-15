import MobileView from "../../layout/mobileLayout";
import CenterForm from "./centerForm";
import MobileBtn from "./mobileBtn";
import TopBlueBox from "./topBlueBox";
import { useState } from "react";
import { storeShema } from "../../../validation/yup";
import StoreFirst from "./storeFirst";
import StoreSecond from "./storeSecond";
const HandleMobile=()=>{
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
    pancard:"",
    address: "",
    district: "",
    country: "",
    state: "",
    pincode: "",
    serviceType:"",
  };
  if (currentPage == 1) {
    const Tittle = "Store";
    const subTittle="";
    const boxDiscription =""
    return (
      <MobileView
      Tittle={Tittle}
      subTittle={subTittle}
      boxDiscription={boxDiscription}
      validationSchema={storeShema}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      CenterForm={StoreFirst}
      TopBlueBox={TopBlueBox}
      pages={pages}
      currentPage={currentPage}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      MobileBtn={MobileBtn}
    />
    );
  }
  if (currentPage == 2) {
    const Tittle = "Olapool";
    const subTittle="Create your Rental store";
    const boxDiscription ="The rentaal storw will host all the products you are putting on rent";
    return (
      <MobileView
        Tittle={Tittle}
        subTittle={subTittle}
        boxDiscription={boxDiscription}
        validationSchema={storeShema}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        CenterForm={StoreSecond}
        TopBlueBox={TopBlueBox}
        pages={pages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        MobileBtn={MobileBtn}
      />
    );
  }
  if (currentPage == 3) {
    const Tittle = "Olapool";
    const subTittle="Add Documnets";
    const boxDiscription ="Adding documents enables us to verify and keep fraudulent activitiesout of reach.";
    return (
      <MobileView
        Tittle={Tittle}
        subTittle={subTittle}
        boxDiscription={boxDiscription}
        validationSchema={storeShema}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        CenterForm={CenterForm}
        TopBlueBox={TopBlueBox}
        pages={pages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        MobileBtn={MobileBtn}
      />
    );
  }


}
export default  HandleMobile