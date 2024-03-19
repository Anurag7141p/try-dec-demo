import React, { useState, useEffect } from "react";

const MobileOtpForm = ({
  otp,
  seconds,
  countryCode,
  lastThreeDigits,
  handleChange,
  handleResend,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-lg font-medium mb-2 ">Verify Phone Number </h1>
        <h4 className="text-gray-600 text-lg mb-8">
          Please enter the one-time pass code sent to +{countryCode}-xxxxx-xx
          {lastThreeDigits}
        </h4>
      </div>
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
      <div>
        <button
          type="submit"
          className="bg-[#69C4E7] text-white px-4 py-2 rounded-md w-full"
          onClick={handleSubmit}
        >
          Verify Now
        </button>
        <div className="flex justify-end text-blue-500 pt-2">
          {seconds === 0 ? (
            <span className="cursor-pointer" onClick={handleResend}>
              Resend Now
            </span>
          ) : (
            <span>
              Resend
              <span className="text-gray-500 px-1">
                {" "}
                00:{seconds < 10 ? `0${seconds}` : seconds}s
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileOtpForm;
