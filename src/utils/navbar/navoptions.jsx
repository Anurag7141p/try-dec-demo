import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import store from "../../assets/images/store.jpg";

const Notification = ({ showNotification, onClose, message }) => {
  useEffect(() => {
    if (showNotification) {
      const timeout = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showNotification, onClose]);

  return (
    <>
      {showNotification && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="notification-container">
            <div className="bg-white p-8 rounded shadow-md text-center relative">
              <div className="image-container">
                <img src={store} alt="" />
              </div>
              <p className="text-green-500 font-medium text-xl">{message}</p>
              <h1 className="mt-2 text-black">Let's add your first product.</h1>
              <div className="mt-4 flex justify-center">
                <button
                  className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:text-blue-500 hover:bg-white border border-blue-300"
                  onClick={onClose}
                >
                  Skip for now!
                </button>
                <Link to="/products">
                  <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:text-blue-500 hover:bg-white border border-blue-300">
                    Add Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
