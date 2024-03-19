import React from "react";
import LoginBanner from "../../assets/images/LoginBanner.jpg";

const Layout = ({ Form }) => {
  return (
    <div className="flex flex-col w-full h-screen  ">
      <div className="flex justify-between items-center w-full py-3">
        <div>
          <img
            src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710590778/trydec/login_olapool_logo.png"
            alt=""
          />
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-1  rounded-md   mt-4 mr-4"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-1  rounded-md   mt-4 mr-4"
          >
            Skip
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className=" flex h-auto justify-center items-center  border border-blue-400 rounded-xl ">
          <div className="w-1/2   mx-10 pr-20 ">
            <Form />
          </div>
          <div className="w-1/2 relative h-full     bg-gradient-to-r from-cyan-500 to-blue-500 rounded-r-lg">
            <div className="flex mx-10 my-10 bg-gray-300/50 rounded-xl">
              <div className="absolute top-80">
                <img
                  src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710591453/trydec/washingmachine.png"
                  alt="img"
                  className=" w-full h-full object-contain"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710582145/trydec/signupimage.png"
                  alt="img"
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
