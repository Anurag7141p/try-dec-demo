import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarOptions = () => {
  const [showDashboardOptions, setShowDashboardOptions] = useState(false);
  const [showStoreOptions, setShowStoreOptions] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showHelpOptions, setShowHelpOptions] = useState(false);
  const [showPrivacyOptions, setShowPrivacyOptions] = useState(false);
  const [activeOption, setActiveOption] = useState(null);

  const toggleOptions = (option) => {
    const isActive = option === activeOption;
    setShowDashboardOptions(
      option === "dashboard" ? !showDashboardOptions : false
    );
    setShowStoreOptions(option === "store" ? !showStoreOptions : false);
    setShowProfileOptions(option === "profile" ? !showProfileOptions : false);
    setShowPaymentOptions(option === "Payment" ? !showPaymentOptions : false);
    setShowHelpOptions(option === "Help" ? !showHelpOptions : false);
    setShowPrivacyOptions(
      option === "Privacy&Policy" ? !showPrivacyOptions : false
    );

    setActiveOption(isActive ? null : option);
  };

  return (
    <div>
      <div className="mt-6 flex items-center ms-6 bg-white ">
        <div className="relative">
          <div
            onClick={() => toggleOptions("dashboard")}
            className={`my-2 cursor-pointer flex items-center rounded h-8 py-1 p-1  transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:bg-blue-600 ${
              activeOption === "dashboard" ? "active bg-blue-700" : ""
            }`}
          >
            <MdOutlineDashboard size={24} className="mr-8" />
            Dashboard
            <IoIosArrowDown size={24} className="ml-8" />
          </div>
          {showDashboardOptions && (
            <div className="dropdown-content flex flex-col ml-4 w-full overflow-hidden bg-green-100">
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/products" className="dropdown-item ">
                  Products
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/order-requests" className="dropdown-item ">
                  Order Requests
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/upcoming" className="dropdown-item ">
                  Upcoming
                </Link>
              </div>
            </div>
          )}

          <div
            onClick={() => toggleOptions("store")}
            className={`my-2 cursor-pointer flex items-center rounded h-8 py-1 p-1  transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:bg-blue-600 ${
              activeOption === "store" ? "active bg-blue-700" : ""
            }`}
          >
            <IoStorefrontOutline size={24} className="mr-8" />
            Store
            <IoIosArrowDown size={24} className="ml-[72px]" />
          </div>
          {showStoreOptions && (
            <div className="dropdown-content flex flex-col ml-4 w-full overflow-hidden bg-green-100">
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/products" className="dropdown-item ">
                  Products
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/order-requests" className="dropdown-item ">
                  Order Requests
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/upcoming" className="dropdown-item ">
                  Upcoming
                </Link>
              </div>
            </div>
          )}

          <div
            onClick={() => toggleOptions("profile")}
            className={`my-2 cursor-pointer flex items-center rounded h-8 py-1 p-1  transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:bg-blue-600 ${
              activeOption === "profile" ? "active bg-blue-700" : ""
            }`}
          >
            <FaRegUser size={24} className="mr-8" />
            Profile
            <IoIosArrowDown size={24} className="ml-[63px]" />
          </div>
          {showProfileOptions && (
            <div className="dropdown-content flex flex-col ml-4 w-full overflow-hidden bg-green-100">
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/products" className="dropdown-item ">
                  Products
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/order-requests" className="dropdown-item ">
                  Order Requests
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/upcoming" className="dropdown-item ">
                  Upcoming
                </Link>
              </div>
            </div>
          )}

          <div
            onClick={() => toggleOptions("Payment")}
            className={`my-2 cursor-pointer flex items-center rounded h-8 py-1 p-1  transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:bg-blue-600 ${
              activeOption === "Payment" ? "active bg-blue-700" : ""
            }`}
          >
            <FaRegUser size={24} className="mr-8" />
            Payment
            <IoIosArrowDown size={24} className="ml-[49px]" />
          </div>

          {showPaymentOptions && (
            <div className="dropdown-content flex flex-col ml-4 w-full overflow-hidden bg-green-100">
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/products" className="dropdown-item ">
                  Products
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/order-requests" className="dropdown-item ">
                  Order Requests
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/upcoming" className="dropdown-item ">
                  Upcoming
                </Link>
              </div>
            </div>
          )}

          <div
            onClick={() => toggleOptions("Help")}
            className={`my-2 cursor-pointer flex items-center rounded h-8 py-1 p-1  transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:bg-blue-600 ${
              activeOption === "Help" ? "active bg-blue-700" : ""
            }`}
          >
            <FaRegUser size={24} className="mr-8" />
            Help
            <IoIosArrowDown size={24} className="ml-[77px]" />
          </div>

          {showHelpOptions && (
            <div className="dropdown-content flex flex-col ml-4 w-full overflow-hidden bg-green-100">
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/products" className="dropdown-item ">
                  Products
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/order-requests" className="dropdown-item ">
                  Order Requests
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/upcoming" className="dropdown-item ">
                  Upcoming
                </Link>
              </div>
            </div>
          )}

          <div
            onClick={() => toggleOptions("Privacy&Policy")}
            className={`my-2 cursor-pointer flex items-center rounded h-8 py-1 p-1  transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:bg-blue-600 ${
              activeOption === "Privacy&Policy" ? "active bg-blue-700" : ""
            }`}
          >
            <FaRegUser size={24} className="mr-8" />
            Privacy&Policy
            <IoIosArrowDown size={24} className="ml-2" />
          </div>

          {showPrivacyOptions && (
            <div className="dropdown-content flex flex-col ml-4 w-full overflow-hidden bg-green-100">
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>
              <div className="mx-3 my-2">
                <Link to="/store-inventory" className="dropdown-item ">
                  Store Inventory
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/products" className="dropdown-item ">
                  Products
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/order-requests" className="dropdown-item ">
                  Order Requests
                </Link>
              </div>{" "}
              <div className="mx-3 my-2">
                <Link to="/upcoming" className="dropdown-item ">
                  Upcoming
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarOptions;
