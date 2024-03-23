import MobileOtpForm from "../../components/auth/mobileOtpForm";
import { resentOtpApi } from "../../api/authApi";
import { errorMessage } from "../../utils/utils";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import MobOtp from "../../components/auth/mobAuth/mobEmailOtp";
import MobEmailOtp from "../../components/auth/mobAuth/mobEmailOtp";
import MobMobileOtp from "../../components/auth/mobAuth/mobMobileOtp";

const MobileOtp = ({ phone, countryCode, handleOtpSubmit }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(true);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpLength, setOtpLength] = useState(false);
  const lastThreeDigits = phone.slice(-3);
  const [error_message, setError_message] = useState("");

  useEffect(() => {
    let intervalId;

    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds]);

  const handleResend = async () => {
    const response = await resentOtpApi(countryCode, phone);
    if (response) {
      setSeconds(60);
      setIsActive(true);
    }
  };

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;

    if (e.target.value && index < 3) {
      document.getElementById(`otpInput${index + 1}`).focus();
    }
    setOtp(newOtp);
  };

  const handleSubmit = async () => {
    if (otpLength && otp.every((value) => /^\d$/.test(value))) {
      const response = await handleOtpSubmit(otp.join(""));
      setError_message(response);
    } else {
      setError_message("Invalid OTP");
    }
  };

  useEffect(() => {
    const otpFilled = otp.every((digit) => digit !== "");
    const otpLengthValid = otp.length === 4;

    setOtpLength(otpFilled && otpLengthValid);
  }, [otp]);

  return isMobile ? (
    <MobMobileOtp
      otp={otp}
      seconds={seconds}
      countryCode={countryCode}
      lastThreeDigits={lastThreeDigits}
      handleChange={handleChange}
      handleResend={handleResend}
      handleSubmit={handleSubmit}
      phone={phone}
      error_message={error_message}
      otpLength={otpLength}
    />

  ) : (
    <div className=" w-full h-screen py-5 font-serif">
      <div className="flex flex-col w-full h-full  md:px-20">
        <div className="flex justify-between items-center w-full py-3">
          <div>
            <img
              src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710590778/trydec/login_olapool_logo.png"
              alt=""
            />
          </div>
          <div></div>
        </div>
        <div className="flex justify-center items-center pt-10">
          <div className=" flex h-auto  justify-center items-center  border border-blue-400 rounded-xl ">
            <div className="w-1/2   mx-10 lg:px-16 md:px-10 h-full ">
              <MobileOtpForm
                otp={otp}
                seconds={seconds}
                countryCode={countryCode}
                lastThreeDigits={lastThreeDigits}
                handleChange={handleChange}
                handleResend={handleResend}
                handleSubmit={handleSubmit}
              />
            </div>
            <div className="w-1/2  h-full     bg-gradient-to-r from-cyan-400 to-blue-600 rounded-r-lg">
              <div className="flex flex-col lg:mx-10 md:mx-6 lg:my-10 md:my-6 bg-gray-300/50 rounded-xl h-full lg:px-5">
                <div className="lg:pt-10 md:pt-5  flex justify-center text-white text-2xl font-black lg:px-8 md:px-5 ">
                  <h1 className="md:text-lg lg:text-2xl">
                    Let’s get started your rental journey
                  </h1>
                </div>
                <div className="flex justify-end lg:pb-5">
                  <img
                    src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710594363/trydec/otpimage.png"
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

export default MobileOtp;
