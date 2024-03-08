import { storeShema } from "../../validation/yup";
import StoreFirstForm from "./firstForm";
import StoreSecondForm from "./secondForm";
import StoreLayout from "../layout/storelayoutdemo";
import BlueBox from "./rightSideBox";
import { useState } from "react";
import ServiceType from "./serviceType";
import DocumnetFirstForm from "./documnetFirstForm";
import DocumnetSecondForm from "./documnetSecondForm";
import CalenderSetup from "../product/addProductdetails/discount/calenderSetup";
import Notification from "./notification";
const HandleCreateStore = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages] = useState(3);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  const handleSubmit = async (values) => {
    console.log(values);
  };
  const handleCreateStore = async (values) => {
    console.log(values);
  
    // Perform logic related to store creation
    // For demo purposes, I'll simulate a successful creation after a delay
    setTimeout(() => {
      // Set the notification message
      setNotificationMessage("Store created successfully!");
        setShowNotification(true);
    }, 1000);
  };
      const initialValues = {
    storeName: "",
    address: "",
    district: "",
    country: "",
    state: "",
    pincode: "",
    serviceType: "",
    pancard: "",
    storeRules:""
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
      <div>
        {/* StoreLayout with BlueBox */}
        <StoreLayout
          validationSchema={storeShema}
          initialValues={initialValues}
          handleSubmit={handleCreateStore}
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


<Notification
  showNotification={showNotification}
  onClose={handleCloseNotification}
/>


      </div>
    );
  }
};

export default HandleCreateStore;
