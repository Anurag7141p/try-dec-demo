import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Regbtn from "../googlebtn/googlebtn";
import FacebookBtn from "../facebookbtn/facebookbtn";
import { registerSchema } from "../../../validation/yup";
import { getCountryApi } from "../../../api/countryApi";
import { userRegisterApi } from "../../../api/authApi";
import { Link, useNavigate } from "react-router-dom";

const MobSignup = () => {
  const [otpForm, setOtpForm] = useState(false);

  const [registerData, setRegisterData] = useState({});

  const [defaultCountry] = useState("in");
  const [country, setCountry] = useState("91");
  const [number, setNumber] = useState("");
  const [country_error, sestCountry_error] = useState("");
  const [email_error, setEmail_error] = useState("");
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
    countryCode: "91",
  };
  const [countryData, setCountryData] = useState([]);

  const getCountry = async () => {
    const data = await getCountryApi();
    setCountryData(data);
  };

  useEffect(() => {
    getCountry();
  }, []);

  const handleSubmit = async (values) => {
    console.log(values);
    setLoad(true);
    console.log(countryData, "country data", values);
    setNumber(values.phone);
    const foundCountry = countryData.find((country) => {
      return country?.countryCode.includes(parseInt(values?.countryCode));
    });

    if (foundCountry) {
      if (!foundCountry.status) {
        sestCountry_error("This application is not available in this country.");
        setLoad(false);
        return;
      }
    } else {
      sestCountry_error("Service is not available in this country.");
      setLoad(false);
      return;
    }
    const response = await userRegisterApi(values);
    if (response == "success") {
      setOtpForm(true);
      setRegisterData(values);
    } else if (response == "This Number already registered") {
      sestCountry_error(response);
      setEmail_error("");
    } else if (response == "This Email already registered") {
      setEmail_error(response);
      sestCountry_error("");
    } else if (response == "Invalid email address") {
      setEmail_error(response);
      sestCountry_error("");
    } else if (response == "Invalid phone number format") {
      sestCountry_error(response);
      setEmail_error("");
    }
    setLoad(false);
  };

  const handleChange = (value, countryData) => {
    setCountry(countryData.dialCode);
  };

  const handleOtpSubmit = async (otp) => {
    console.log(otp);
    setLoad(true);
    let data = { ...registerData };
    data.otp = otp;
    const response = await registerOtpVerificationApi(data);
    if (response == "success") {
      navigate("/login");
      return;
    }
    setLoad(false);
    return response;
  };
  return (
    <>
      <div className="w-full h-screen ">
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, setFieldValue }) => (
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
              <div className="px-5">
                <h1 className="text-lg font-medium ...">Create an account </h1>
                <h4 className="text-lg mb-8">
                  Let's get started on your rental journey
                </h4>

                <div className="flex flex-col gap-4 pb-24">
                  <div>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Name"
                      className="border rounded-lg border-blue-500  w-full p-4   outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last name "
                      className="border rounded-lg border-blue-500  w-full p-4   outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <PhoneInput
                      country={country}
                      value={number}
                      placeholder="Phone Number "
                      onChange={(val, countryData) => {
                        handleChange(val, countryData);
                        setFieldValue("phone", val);
                        setFieldValue("countryCode", country);
                      }}
                      inputStyle={{
                        width: "calc(100%)",
                        padding: "25px",
                        fontSize: "16px",
                        border: "none",
                        border: "1px solid #2196F3",
                        borderRadius: "4px",
                        paddingLeft: "40px",
                      }}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                      className="border rounded-lg border-blue-500  w-full p-4   outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border rounded-lg border-blue-500  w-full p-4   outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      type="password"
                      name="cpassword"
                      placeholder="Password"
                      className="border rounded-lg border-blue-500  w-full p-4   outline-none focus:border-blue-500"
                    ></Field>
                    <ErrorMessage
                      name="cpassword"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center ">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-3"
                      disabled={!isValid}
                    >
                      create account
                    </button>

                    <GoogleOAuthProvider
                      clientId={import.meta.env?.VITE_GOOGLE_CLIENT}
                    >
                      <Regbtn />
                    </GoogleOAuthProvider>

                    <FacebookBtn />
                  </div>
                </div>
              </div>
              <div>
                {/* footer */}
                <div className="xs:h-24 xs:w-full flex text-lg bg-gray-50 font-lato  border-2 rounded-t-3xl items-center justify-around bottom-0 fixed  drop-shadow-3xl ">
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
                  <div>
                    <button className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600">
                      Create
                    </button>
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

export default MobSignup;
