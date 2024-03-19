import axios from "axios";
import userAxios from "../axios/axios";

export const loginApi = async (data) => {
  const response = await userAxios.post("/login", data);
  localStorage.setItem("userToken", response?.data?.token);
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${response?.data?.token}`;
  return { message: response?.data?.message, data: response?.data?.user };
};

export const loginEmailOtpVerification = async (data) => {
  const response = await userAxios.post("/verify_email_otp", data);
  console.log(response);
  if (response?.data?.token) {
    localStorage.setItem("userToken", response?.data?.token);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response?.data?.token}`;
  }
  return { message: response?.data?.message, data: response?.data?.user };
};

export const resentEmailOtpApi = async (email)=>{
  const response = await userAxios.get(`/resend_email_otp/${email}`);
  return response.data?.message;
}

export const userRegisterApi = async (data) => {
  const response = await userAxios.post("/register_verification", data);
  return response.data?.message;
};

export const registerOtpVerificationApi = async (data) => {
  const response = await userAxios.post("/register_otp_verification", data);
  return response.data?.message;
};

export const resentOtpApi = async (countryCode, phone) => {
  const response = await userAxios.get("/resent-otp", { phone, countryCode });
  return response.data?.message;
};
