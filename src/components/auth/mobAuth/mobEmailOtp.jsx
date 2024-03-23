import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { resentEmailOtpApi } from "../../../api/authApi";

const MobEmailOtp = ({ email, handleOtpSubmit }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(true);
  const [otpLength, setOtpLength] = useState(false);
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
    const response = await resentEmailOtpApi(email);
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
    console.log(otp,'jjjj')
  }, [otp]);

  return (
    <div className="xs:flex xs:px-3 md:flex lg:flex xl:flex 2xl:flex justify-center items-center">
      <div className=" px-4  font-montserrat ">
        <div className="flex flex-col gap-8  ">
          <div>
            <img
              src="https://pics.craiyon.com/2023-10-27/317ff35c974e48afb06c91d4fa9b0d51.webp"
              alt=""
              className="w-12 h-12 rounded"
            />
          </div>
          <div>
            <h2 className="text-gray-500 font-semibold">
              Please enter the one-time pass code sent to {email}
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

          <button
            type="submit"
            className={`${
              otpLength ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-300"
            } text-white px-4 py-2 rounded-md w-full `}
            disabled={!otpLength}
            onClick={handleSubmit}
          >
            Verify Now
          </button>
          <div className="w-full text-center ">
            <p className="text-red-500">{error_message}</p>
          </div>

          <div className="flex justify-between">
            <div className="flex text-blue-800 underline">
              <Link to={"/login"}>another way to sign in</Link>
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
        </div>
      </div>
    </div>
  );
};

export default MobEmailOtp;
