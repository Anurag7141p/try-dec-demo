import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Regbtn from "../googlebtn/googlebtn";
import FacebookBtn from "../facebookbtn/facebookbtn";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { loginSchema } from "../../../validation/yup";
import { useDispatch } from "react-redux";
import { loginApi, loginEmailOtpVerification } from "../../../api/authApi";
import { userLoggedIn } from "../../../redux/user/authSlice";
import MobFooter from "../../chat/mobFooter";

const MobLogin = () => {
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

  return (
    <>
      <div className="w-full h-screen ">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form>
              <div className="w-full">
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
              <div className="w-full px-6  pt-10  h-full">
                <div>
                  <h1 className="text-lg font-medium ...">Log In </h1>
                  <h4 className="text-lg mb-8">
                    Welcome back to your rental world
                  </h4>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="w-full">
                    <Field
                      type="text"
                      name="phoneOrEmail"
                      placeholder="Enter Email"
                      className="border rounded-lg border-blue-500  w-full p-4   outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="phoneOrEmail"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className="w-full">
                    <Field
                      type="password"
                      name="password"
                      placeholder="password"
                      className="border rounded-lg border-blue-500  w-full p-4   outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className=" flex justify-normal items-center gap-2  px-4 py-2 rounded-md w-full mb-3">
                    <div className="w-1/2  border"></div>
                    <p className="px-5"> OR</p>
                    <div className="w-1/2  border"></div>
                  </div>
                </div>

                <GoogleOAuthProvider
                  clientId={import.meta.env?.VITE_GOOGLE_CLIENT}
                >
                  <Regbtn />
                </GoogleOAuthProvider>

                <FacebookBtn />
                <p className="text-center py-2">
                  Dont have an account?{" "}
                  <Link to="/signup" className="text-blue-500">
                    join here
                  </Link>
                </p>
              </div>

              <div>
                {/* footer */}
                <div className="xs:h-24 xs:w-full flex text-lg bg-gray-50 font-lato  border-2 rounded-t-3xl items-center justify-around bottom-0 fixed  drop-shadow-3xl ">
                  <div>
                    <Link to="/mob-auth-signup">
                      <button className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600">
                        Signup
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/mob-auth-login">
                      <button
                        className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
                        disabled={!isValid}
                        type="submit"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default MobLogin;
