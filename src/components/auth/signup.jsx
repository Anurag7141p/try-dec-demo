import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Regbtn from "./googlebtn/googlebtn";
import FacebookBtn from "./facebookbtn/facebookbtn";
import { errorMessage, inputStyle, successMessage } from "../../utils/utils";
import { getCountryApi } from "../../api/countryApi";
import { registerOtpVerificationApi, userRegisterApi } from "../../api/authApi";
import { registerSchema } from "../../validation/yup";
import Otp from "./otp";

const Signup = () => {
  const [otpForm , setOtpForm] = useState(false)
  const [registerData, setRegisterData] = useState({})

  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
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
    const foundCountry = countryData.find((country) => {
      return country.countryCode.includes(parseInt(values?.countryCode));
    });

    if (foundCountry) {
      if (!foundCountry.status) {
        errorMessage("This application is not available in this country.");
        return;
      }
    } else {
      errorMessage("Service is not available in this country.");
      return;
    }
    const response = await userRegisterApi(values);
    successMessage(response);
    setOtpForm(true);
    setRegisterData(values)
  };

  const [country, setCountry] = useState("in");
  const [number, setNumber] = useState("");

  const handleChange = (value, countryData) => {
    setCountry(countryData.dialCode);
    setNumber(value);
  };

  const handleOtpSubmit = async (otp)=>{
    let data = { ...registerData };
    data.otp = otp;
    const response = await registerOtpVerificationApi(data)
    successMessage(response);
    navigate('/')
  }

  return otpForm ? <Otp phone={number} countryCode={country} handleOtpSubmit={handleOtpSubmit}/> :(
    <div>
      <h1 className="text-lg font-medium ...">Create an account </h1>
      <h4 className="text-xlg mb-8">Let's get started on your rental journey</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, setFieldValue }) => (
          <Form>
            <Field type="text" name="firstName" className={inputStyle}></Field>
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-600"
            />
            <Field type="text" name="lastName" className={inputStyle}></Field>
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-600"
            />
            <PhoneInput
              country={country}
              value={number}
              onChange={(val, countryData) => {
                handleChange(val, countryData);
                setFieldValue("phone", val);
                setFieldValue("countryCode", country);
              }}
              containerStyle={{
                width: "100%",
                marginBottom: "15px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                position: "relative",
              }}
              inputStyle={{
                width: "calc(100% - 30px)",
                padding: "12px",
                fontSize: "16px",
                border: "none",
                borderBottom: "1px solid #ccc",
                borderRadius: "4px",
                paddingLeft: "35px",
              }}
              buttonStyle={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "5px",
                zIndex: "1",
              }}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-600"
            />
            <Field
              type="text"
              name="email"
              placeholder="Enter Email"
              className={inputStyle}
            ></Field>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600"
            />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={inputStyle}
            ></Field>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600"
            />
            <Field
              type="password"
              name="cpassword"
              placeholder="Password"
              className={inputStyle}
            ></Field>
            <ErrorMessage
              name="cpassword"
              component="div"
              className="text-red-600"
            />
            <GoogleOAuthProvider clientId={import.meta.env?.VITE_GOOGLE_CLIENT}>
              <Regbtn />
            </GoogleOAuthProvider>

            <FacebookBtn />
            <Link to="/">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md absolute top-0 right-0 mt-4 mr-4"
              >
                Login
              </button>
            </Link>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-3"
              disabled={!isValid}
            >
              create account
            </button>
            <p className="text-center py-2">
              Have an account?{" "}
              <Link to="/login  " className="text-blue-500">
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
