import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Regbtn from "../../components/auth/googlebtn/googlebtn";
import { loginSchema } from "../../validation/yup";
import FacebookBtn from "./facebookbtn/facebookbtn";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { loginApi } from "../../api/authApi";
import { userLoggedIn } from "../../redux/user/authSlice";
import { inputStyle, successMessage } from "../../utils/utils";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const response = await loginApi(values);
    if (response) {
      dispatch(userLoggedIn(response?.data));
      successMessage(response?.message);
      navigate("/");
    }
  };

  return (
    <div>
      <h1 className="text-lg font-medium ...">Log In </h1>
      <h4 className="text-xlg mb-8">Welcome back to your rental world</h4>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
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
              placeholder="password"
              className={inputStyle}
            ></Field>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600"
            />
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
      <Link to={"/signup"}>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md absolute top-0 right-0 mt-4 mr-4"
        >
          Signup
        </button>
      </Link>
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

export default SignIn;
