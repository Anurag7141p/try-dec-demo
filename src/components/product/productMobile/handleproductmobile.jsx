import MobileView from "../../layout/mobileLayout";
import TopBlueBox from "../../store/mobileView/topBlueBox";
import { useState } from "react";
import FirstpageProduct from "./firstpage";
import { FaArrowLeft } from "react-icons/fa";
import { ProductValidation } from "../../../validation/yup";
const HandleProductMobile=()=>{
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
    storeRules:"",
  };
  if (currentPage == 1) {
    const centertittle = "Add Products";
    const subTittle="";
    const boxDiscription =""

    return (
      <MobileView
        subTittle={subTittle}
        boxDiscription={boxDiscription}
        validationSchema={ProductValidation}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        CenterForm={FirstpageProduct}
        TopBlueBox={TopBlueBox}
        pages={pages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        centertittle={centertittle}
        showBottomBar={false}
        backarrow={<FaArrowLeft size={20}/>}
        
      />
    );
  }

}
export default  HandleProductMobile