import React from "react";
import LoginBanner from "../../assets/images/LoginBanner.jpg";

const Layout = ({ Form }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/5 mt-20 w-full px-4">
        <Form />
      </div>
      <div className="md:w-1/2 w-full lg:mt-20 md:mt-0 lg:ms-40">
        <img src={LoginBanner} alt="img" className="w-full h-auto " />
      </div>
    </div>
  );
};

export default Layout;
