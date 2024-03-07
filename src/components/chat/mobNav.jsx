import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

const MobNav = ({ ordersData, setStoreOrdersData, messages, setMessages }) => {
  // console.log(ordersData, ".....");

  const setBackBtn = () => {
    if (messages.length !== 0) {
      setMessages([]);
    } else if (messages.length == 0 && ordersData) {
      setStoreOrdersData([]);
    }
  };
  return (
    <div className="sticky top-0 ">
      {ordersData.length == 0 ? (
        <>
          <div className="w-full h-36 text-white  bg-[#1281B8]   flex justify-between items-end pb-10 px-5">
            <div className="flex flex-col justify-center items-center">
              <h1 className="flex justify-normal items-center font-semibold text-2xl font-montserrat gap-2">
                Inbox
              </h1>
            </div>
            <div>
              <IoSearchOutline className="w-8 h-8" />
            </div>
          </div>

          <div className="grid grid-cols-3 items-center font-montserrat font-semibold text-gray-500 bg-white ">
            <div className="flex justify-center  py-5  rounded-bl-lg  border-gray-400 border-r-2  border-r-gray-300">
              <h1 className="text-main-color">All</h1>
            </div>
            <div className="flex justify-center py-5 border-b-4  border-gray-500 border-r-2 border-r-gray-300 shadow-lg">
              <h1>Store</h1>
            </div>
            <div className="flex justify-center  py-5 border-r-2 border-b-4 border-gray-500 rounded-br-lg">
              <h2 className="flex justify-normal items-center gap-2 text-gray-500 font-semibold text-[16px]">
                Bookings
              </h2>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-36 text-white  bg-[#1281B8]   flex justify-between items-end pb-10 px-5">
            <IoArrowBack className="w-7 h-7" onClick={() => setBackBtn()} />
            <h1>hi</h1>
            <h1></h1>
          </div>

          <div className="grid grid-cols-3 items-center font-montserrat font-semibold text-gray-800 bg-white ">
            <div className="flex justify-center  py-5  rounded-bl-lg  border-gray-400 ">
              <h1 className="text-main-color flex justify-center items-center gap-2 ">
                Orders <FaAngleDown />
              </h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobNav;
