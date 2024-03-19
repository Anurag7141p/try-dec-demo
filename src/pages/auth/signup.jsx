import { useState } from "react";
import SignupForm from "../../components/auth/signupForm";
import MobileOtp from "./mobileOtp";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
// import { errorMessage, inputStyle, successMessage } from "../../utils/utils";
import { getCountryApi } from "../../api/countryApi";
import { registerOtpVerificationApi, userRegisterApi } from "../../api/authApi";
import { registerSchema } from "../../validation/yup";

const Signup = () => {
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

  return otpForm ? (
    <MobileOtp
      phone={number}
      countryCode={country}
      handleOtpSubmit={handleOtpSubmit}
    />
  ) : (
    <div className="w-full h-screen py-5">
      <div className="flex flex-col w-full h-full">
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
          <div className=" flex h-full md:w-[90%] lg:w-auto justify-center items-center  border border-blue-400 rounded-xl ">
            <div className="w-1/2   mx-10 md:pr-0 lg:pr-10 md:py-5 ">
              <SignupForm
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={handleSubmit}
                country={country}
                number={number}
                countryData={countryData}
                handleChange={handleChange}
                isva
              />
            </div>
            <div className="w-1/2 relative h-full  py-10   bg-gradient-to-r from-cyan-500 to-blue-500 rounded-r-lg">
              <div className="flex flex-col justify-between mx-10  bg-gray-300/50 rounded-xl h-full">
                <div className=" flex justify-center text-white text-2xl font-black lg:px-8 pt-5 md:px-4">
                  <h1>Let’s get started your rental journey</h1>
                </div>
                <div className="absolute top-96  lg:block">
                  <img
                    src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710591453/trydec/washingmachine.png"
                    alt="img"
                    className=" w-full  h-full  object-contain md:hidden lg:block"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710582145/trydec/signupimage.png"
                    alt="img"
                    className=" w-full h-[500px] md:object-cover lg:object-cover"
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

export default Signup;
