import { GoDot } from "react-icons/go";
import { RxDot } from "react-icons/rx";
import CalenderSetup from "../product/addProductdetails/discount/calenderSetup";
import Notification from "./notification"; // Import your Notification component
import { useState } from "react";

const BlueBox = ({
  isValid,
  pages,
  currentPage = 1,
  handlePrevPage,
  handleNextPage,
  boxTittle,
  boxDiscription,
  buttonText,
  CalenderBox,
}) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    if (buttonText === "Create Store") {
      // You can add any logic related to store creation here
      // For demonstration purposes, I'll simulate success after a delay
      setTimeout(() => {
        setShowNotification(true);
      }, 1000);
    } else {
      // Handle other button click logic here
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="text-white md:mt-40 md:px-0 lg:ms-20">
      <div className="lg:mb-10 text-xl">
        <h1>{boxTittle}</h1>
      </div>
      <div className="text-blue-400 lg:mb-10 text-sm">
        <p>{boxDiscription}</p>
      </div>
      {CalenderBox && <div><CalenderBox/></div>}
      <div className="flex  space-x-4 mb-8 mt-20">
        <button
          type="button"
          className="bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 "
          onClick={handlePrevPage}
        >
          Back
        </button>

        {currentPage === pages ? (
          <button
            type="submit"
            disabled={!isValid}
            className="bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 "
            onClick={handleButtonClick}
          >
            {buttonText ? buttonText : "Save"}
          </button>
        ) : (
          <button
            type="button"
            className="bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 "
            onClick={handleNextPage}
          >
            Next
          </button>
        )}
      </div>
      <div className="flex items-center lg:mt-20">
        {Array.from({ length: pages }).map((_, index) => (
          <div key={index} className="outer-circle mr-8 indot">
            {currentPage === index + 1 ? <GoDot /> : <RxDot />}
          </div>
        ))}
      </div>

      {/* Notification */}
      <Notification
        showNotification={showNotification}
        onClose={handleCloseNotification}
        message="Store created successfully!"
      />
    </div>
  );
};

export default BlueBox;
