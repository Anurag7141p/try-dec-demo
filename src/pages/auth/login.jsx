import { React, useState } from "react";
import { useDispatch } from "react-redux";
import SignInForm from "../../components/auth/signinForm";
import EmailOtp from "./emailOtp";
import { loginSchema } from "../../validation/yup";
import { loginApi, loginEmailOtpVerification } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../redux/user/authSlice";

const Login = () => {
  const initialValues = {
    phoneOrEmail: "",
    password: "",
  };

  const [error_message, setError_message] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [loginData, setLoginData] = useState({
    phoneOrEmail: "",
    password: "",
  });

  const [otpForm, setOtpForm] = useState(false);

  const handleSubmit = async (values) => {
    console.log(values);
    setLoad(true);
    const response = await loginApi(values);
    setLoad(false);
    if (response?.message == "success") {
      dispatch(userLoggedIn(response?.data));
      navigate("/");
      return;
    } else if (response?.message == "Send OTP to Your Email") {
      setLoginData(values);
      setOtpForm(true);
    } else if (response?.message) {
      setError_message(response?.message);
    }
    setLoad(false);
  };

  const handleOtpSubmit = async (otp) => {
    console.log(otp);
    setLoad(true);
    let data = { ...loginData };
    data.otp = otp;
    const response = await loginEmailOtpVerification(data);
    if (response?.message == "success") {
      dispatch(userLoggedIn(response?.data));
      navigate("/login");
      return;
    }
    setLoad(false);
    return response.message;
  };

  return otpForm ? (
    <>
      <EmailOtp
        email={loginData?.phoneOrEmail}
        handleOtpSubmit={handleOtpSubmit}
      />
      {/* {load ? <Loading /> : ""} */}
    </>
  ) : (
    <div className=" w-full  py-5 ">
      <div className="flex flex-col w-full h-full  ">
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
              Signup
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-1  rounded-md   mt-4 mr-4"
            >
              Skip
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center pt-10 py-10">
          <div className=" flex h-full  w-[70%] justify-center items-center  border border-blue-400 rounded-xl ">
            <div className="w-1/2   mx-10 md:pr-0 lg:pr-10 md:py-5 ">
              <SignInForm
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
              />
            </div>
            <div className="w-1/2   py-10 h-[600px] relative   bg-gradient-to-r from-cyan-500 to-blue-500 rounded-r-lg">
              <div className="flex h-full   flex-col justify-between  mx-10  bg-gray-300/50 rounded-xl  md:px-2 lg:px-5">
                <div className="py-10 flex justify-center text-white text-2xl font-black lg:px-8 ">
                  <h1>Let’s get started your rental journey</h1>
                </div>
                <div className="flex justify-end absolute left-32 bottom-10   ">
                  <img
                    src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710594103/trydec/loginimage.png"
                    alt="img"
                    className=" w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
