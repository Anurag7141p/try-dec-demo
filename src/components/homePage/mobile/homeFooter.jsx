import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";
import { RiHomeLine } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";


const HomeFooter = () => {
  return (
    <div className="xs:h-24 xs:w-full flex text-xl font-lato  border-2 rounded-2xl items-center justify-around fixed bottom-0  bg-white ">
      <div className="hover:bg-blue-600 px-3 h-full  flex justify-center items-center  rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <Link to="/mobile-home">
          <RiHomeLine className=" w-9 h-9 text-blue-600 hover:text-white" />
        </Link>
      </div>
      <div className="hover:bg-blue-600 px-3 h-full  flex justify-center items-center  rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <FiMessageSquare className="w-7 h-7 text-blue-600 hover:text-white" />
      </div>
      <div className="hover:bg-blue-600 px-3 h-full  flex justify-center items-center  rounded-tr-lg rounded-br-lg rounded-bl-lg ">
        <Link to="/mobile-home/category">
          <CiSearch className="w-9 h-9 text-blue-600 hover:text-white" />
        </Link>
      </div>
      <div className="hover:bg-blue-600 px-3 h-full  flex justify-center items-center  rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <LuArrowDownUp className="w-9 h-9 text-blue-600 hover:text-white" />
      </div>
      <div className="hover:bg-blue-600 px-3 h-full  flex justify-center items-center  rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <VscAccount className="w-9 h-9 text-blue-600 hover:text-white" />
      </div>
    </div>
  );
};

export default HomeFooter;
