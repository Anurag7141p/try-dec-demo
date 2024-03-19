import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";
import { TiHomeOutline } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";

const MobFooter = () => {
  return (
    <div className="xs:h-28 xs:w-full flex text-xl font-lato  border-2 rounded-2xl items-center justify-around fixed bottom-0  bg-white ">
      <div className="hover:bg-[#1281B8] px-3 h-full  flex justify-center items-center  rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <TiHomeOutline className=" w-9 h-9 text-[#1281B8] hover:text-white" />
      </div>
      <div className="hover:bg-[#1281B8] px-3 h-full  flex justify-center items-center  rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <FaRegMessage className="w-7 h-7 text-[#1281B8] hover:text-white" />
      </div>
      <div className="hover:bg-[#1281B8] px-3 h-full  flex justify-center items-center  rounded-tr-lg rounded-br-lg rounded-bl-lg ">
        <CiSearch className="w-9 h-9 text-[#1281B8] hover:text-white" />
      </div>
      <div className="hover:bg-[#1281B8] px-3 h-full  flex justify-center items-center  rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <LuArrowDownUp className="w-9 h-9 text-[#1281B8] hover:text-white" />
      </div>
      <div className="hover:bg-[#1281B8] px-3 h-full  flex justify-center items-center  rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <VscAccount className="w-9 h-9 text-[#1281B8] hover:text-white" />
      </div>
    </div>
  );
};

export default MobFooter;
