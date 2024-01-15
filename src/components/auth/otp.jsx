import React, { useState, useEffect } from "react";
import { resentOtpApi } from "../../api/authApi";
import { errorMessage } from "../../utils/utils";

const Otp = ({ phone, countryCode, handleOtpSubmit }) => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(true);
  const [otp, setOtp] = useState(["", "", "", ""]);

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
    setSeconds(60);
    await resentOtpApi(countryCode,phone);
    setIsActive(true);
  };

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;

    if (e.target.value && index < 3) {
      document.getElementById(`otpInput${index + 1}`).focus();
    }
    setOtp(newOtp);
  };

  const handleSubmit = async ()=>{
    const isOtpValid = otp.every((value) => /^\d$/.test(value)) && otp.length === 4;
    if (isOtpValid) {
        await handleOtpSubmit(otp.join(""));
        return;
      } else {
        errorMessage(`Invalid OTP ${otp.join("")}`)
        return;
      }
  }

  return (
    <div>
      <h1 className="text-lg font-medium mb-2 ">Verify Phone Number </h1>
      <h4 className="text-gray-700 text-xlg mb-8">
        Please enter the one-time pass code sent to +{countryCode}-xxxxx-xxxxx
      </h4>
      <div className="flex items-center justify-between gap-2 mb-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <input
            key={index}
            id={`otpInput${index}`}
            type="tel"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            className="w-10 h-10 px-2 py-1 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-300 text-center"
          />
        ))}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        onClick={handleSubmit}
      >
        Verify Now
      </button>
      <div className="flex justify-end text-blue-500">
        {seconds === 0 ? (
          <span className="cursor-pointer" onClick={handleResend}>
            Resend Now
          </span>
        ) : (
          <span>
            Resend
            <span className="text-black px-1">
              {" "}
              00:{seconds < 10 ? `0${seconds}` : seconds}s
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Otp;