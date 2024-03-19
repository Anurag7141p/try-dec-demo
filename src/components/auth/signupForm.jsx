import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Regbtn from "./googlebtn/googlebtn";
import FacebookBtn from "./facebookbtn/facebookbtn";

const SignupForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  country,
  number,
  countryData,
  handleChange,
}) => {
  // console.log(country);
  return (
    <div>
      <h1 className="text-lg font-medium ...">Create an account </h1>
      <h4 className="text-lg mb-8">Let's get started on your rental journey</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            <div>
              <Field
                type="text"
                name="firstName"
                placeholder="Name"
                className="border-b border-gray-400 w-full pb-4   outline-none focus:border-blue-500"
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
                className="border-b border-gray-400 w-full pb-4   outline-none focus:border-blue-500"
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
                  padding: "12px",
                  fontSize: "16px",
                  border: "none",
                  borderBottom: "1px solid #ccc",
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
                className="border-b  border-gray-400 w-full pb-4   outline-none focus:border-blue-500"
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
                className="border-b border-gray-400 w-full pb-4   outline-none focus:border-blue-500"
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
                className="border-b border-gray-400 w-full pb-4   outline-none focus:border-blue-500"
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
