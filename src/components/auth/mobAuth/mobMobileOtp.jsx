import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const MobMobileOtp = ({
  phone,
  otp,
  seconds,
  countryCode,
  lastThreeDigits,
  handleChange,
  handleResend,
  handleSubmit,
  error_message,
  otpLength,
}) => {
  return (
    <>
      <div className="h-screen w-full py-5">
        <div className="w-full">
          <div className="flex justify-between items-center w-full py-3 px-10 ">
            <div className="flex gap-5  justify-center items-center text-xl">
              <IoArrowBack />
              <h1>OTP Verification</h1>
            </div>
            <div className="flex justify-normal items-center">
              <Link to="/">
                <button
                  type="button"
                  className="text-blue-600 text-xl  px-4 py-1  rounded-md   mr-4"
                >
                  Skip
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="xs:flex  flex justify-center items-center pt-20">
          <div className="  font-montserrat ">
            <div className="flex flex-col gap-8  ">
              <div className="flex justify-center">
                <h2 >
                  We have sent a verification code to {phone}
                </h2>
              </div>

              <div>
                <div className="flex justify-center ">
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
                      className="w-12 h-12 mx-2 border border-gray-400 text-center text-xl rounded focus:outline-none focus:border-blue-500"
                    />
                  ))}
                </div>
              </div>

              {/* <button
                type="submit"
                className={`${
                  otpLength ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-300"
                } text-white px-4 py-2 rounded-md w-full `}
                disabled={!otpLength}
                onClick={handleSubmit}
              >
                Verify Now
              </button> */}
              <div className="w-full text-center ">
                <p className="text-red-500">{error_message}</p>
              </div>

              <div className="flex justify-between">
                <div className="flex  ">
                  <Link to={"/login"}>Didn’t get the OTP? Resend SMS in </Link>
                </div>

                <div className="flex text-blue-500">
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
              <div className="flex justify-center">
                <h1 className="text-blue-600">Back To Login</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobMobileOtp;
