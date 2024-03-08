import StoreLayout from "../../layout/storelayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { storeFormSchema, storeShemaMain } from "../../../validation/storeYup";
import {
  createStoreFormInitialValues,
  documentInitialValues,
  serviceInitialValues,
  storeFullInitialValues,
} from "./storeCreateInitialValues";
import StoreDetails from "./storeDetails";
import PersonalizedStore from "./personalizedStore";
import { storeShema } from "../../../validation/yup";
import SubscriptionPlan from "./subscriptionPlan";
import AddDocument from "./addDocument";
import { documentSchema } from "../../../validation/documentYup";

const HandleCreateStore = () => {
  const [currentPage, setCurrentPage] = useState(4);
  const [pages] = useState(4);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error_message, setError_message] = useState("");
  const [otpsend, setOtpsend] = useState(false);
  const [load, setLoad] = useState(false);
  const [clientId, setClientId] = useState(null);
  const [finishingMessage, setfinishingMessage] = useState(false);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleStoreSubmit = () => {
    handleNextPage();
  };

  const handleSubmit = () => {
    alert("hello");
  };

  const handlePlanSubmit = () => {
    handleNextPage();
  };

  const handleDocumentSubmit = () => {
    alert('document submitted')
  };

  const handleSkip = () => {
    // alert("successfully created store");
    setOtpsend(false);
    setLoad(false);
    setfinishingMessage(true);
    console.log("skip");
    // navigate("/");
  };

  // ------------------------------------------------------------------------------------------------------------

  if (currentPage == 1) {
    const boxTittle = "Create your Rental Store";
    const boxDiscription =
      "Adding documents enables us to verify and keep fraudulent activitiesout of reach.";

    return (
      <>
        {load ? <Loading /> : ""}

        <StoreLayout
          validationSchema={storeFormSchema}
          initialValues={createStoreFormInitialValues}
          handleSubmit={handleStoreSubmit}
          FormComponent={StoreDetails}
          boxTittle={boxTittle}
          boxDiscription={boxDiscription}
          pages={pages}
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          buttonText={"Next"}
        />
      </>
    );
  }
  if (currentPage == 2) {
    const boxTittle = "Personalize store";
    const boxDiscription =
      "Adding documents enables us to verify and keep fraudulent activitiesout of reach.";
    return (
      <>
        {load ? <Loading /> : ""}

        <StoreLayout
          validationSchema={storeShemaMain}
          initialValues={storeFullInitialValues}
          handleSubmit={handleSubmit}
          FormComponent={PersonalizedStore}
          boxTittle={boxTittle}
          boxDiscription={boxDiscription}
          pages={pages}
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          buttonText={"Create Store"}
          error_message={error_message}
        />
      </>
    );
  }
  if (currentPage == 3) {
    const boxTittle = "Personalize store";
    const boxDiscription =
      "Adding documents enables us to verify and keep fraudulent activitiesout of reach.";
    return (
      <>
        {load ? <Loading /> : ""}

        <StoreLayout
          // validationSchema={storeShema}
          // initialValues={storeFullInitialValues}
          handleSubmit={handlePlanSubmit}
          FormComponent={SubscriptionPlan}
          boxTittle={boxTittle}
          boxDiscription={boxDiscription}
          pages={pages}
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          buttonText={"Create Store"}
          error_message={error_message}
        />
      </>
    );
  }
  if (currentPage == 4) {
    const boxTittle = "Add Document Verification";
    const boxDiscription =
      "Adding documents enables us to verify and keep fraudulent activitiesout of reach.";
    return (
      <>
        {load ? <Loading /> : ""}

        <StoreLayout
          validationSchema={documentSchema}
          initialValues={documentInitialValues}
          handleSubmit={handleDocumentSubmit}
          FormComponent={AddDocument}
          boxTittle={boxTittle}
          boxDiscription={boxDiscription}
          pages={pages}
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          handleSkip={handleSkip}
          clientId={clientId}
          error_message={error_message}
        />
        {finishingMessage && (
          <>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75 backdrop-filter backdrop-blur-lg">
              <div className="bg-white p-8 rounded shadow-md text-center z-10">
                <div className="image-container flex justify-center items-center">
                  <img
                    src={
                      "data:image/jpeg;base64,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"
                    }
                    alt=""
                  />
                </div>
                <p className="text-green-500 font-medium text-xl">
                  {"Store created successfully!"}
                </p>
                <h1 className="mt-2 text-black">
                  Let's add your first product.
                </h1>
                <div className="mt-4 flex justify-center">
                  <Link to={"/store"}>
                    <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:text-blue-500 hover:bg-white border border-blue-300">
                      Skip for now!
                    </button>
                  </Link>
                  <Link to="/store/add-product">
                    <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:text-blue-500 hover:bg-white border border-blue-300">
                      Add Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
};

export default HandleCreateStore;
