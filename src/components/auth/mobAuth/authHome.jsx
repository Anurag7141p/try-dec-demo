import React from "react";
import { Link } from "react-router-dom";

const AuthHome = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <div className="w-full h-[10%]">
          <div className="flex justify-between items-center w-full py-3">
            <div>
              <img
                src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710590778/trydec/login_olapool_logo.png"
                alt=""
              />
            </div>
            <div>
              <Link to="/">
                <button
                  type="button"
                  className="text-blue-600 text-xl  px-4 py-1  rounded-md   mt-4 mr-4"
                >
                  Skip
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full px-5 ">
          <div
            className=" w-full px-5   py-8   rounded-r-lg h-[60]"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dgkg64nql/image/upload/v1710773226/trydec/mobauthhome.png")`,
              //   backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col justify-between   bg-gray-300/50 rounded-xl  px-2 h-[60%]">
              <div className="py-10 flex justify-center text-white text-2xl font-black px-7 ">
                <h1>Let’s get started your rental journey</h1>
              </div>
              <div className="flex justify-end ">
                <img
                  src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710594103/trydec/loginimage.png"
                  alt="img"
                  className=" w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* footer */}
          <div className="xs:h-24 xs:w-full flex text-lg bg-gray-50 font-lato  border-2 rounded-t-3xl items-center justify-around bottom-0 fixed  drop-shadow-3xl ">
            <div>
              <Link to="/mob-auth-signup">
                <button
                  className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
                  //   onClick={handlePrevPage}
                >
                  Signup
                </button>
              </Link>
            </div>
            <div>
              <Link to="/mob-auth-login">
                <button
                  className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
                  type="submit"
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthHome;
