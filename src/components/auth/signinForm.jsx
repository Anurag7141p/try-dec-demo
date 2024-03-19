import { React } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Regbtn from "./googlebtn/googlebtn";
import FacebookBtn from "./facebookbtn/facebookbtn";
import { GoogleOAuthProvider } from "@react-oauth/google";

const SignInForm = ({ initialValues, validationSchema, onSubmit }) => {
  return (
    <div className="w-full">
      <div>
        <h1 className="text-lg font-medium ...">Log In </h1>
        <h4 className="text-lg mb-8">Welcome back to your rental world</h4>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <Form className="flex flex-col gap-5">
            <div className="w-full">
              <Field
                type="text"
                name="phoneOrEmail"
                placeholder="Enter Email"
                className="border-b border-gray-400 w-full pb-4   outline-none focus:border-blue-500"
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
                className="border-b border-gray-400 w-full pb-4   outline-none focus:border-blue-500"
              ></Field>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-3"
              disabled={!isValid}
            >
              Log in
            </button>
          </Form>
        )}
      </Formik>

      <GoogleOAuthProvider clientId={import.meta.env?.VITE_GOOGLE_CLIENT}>
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
  );
};

export default SignInForm;
