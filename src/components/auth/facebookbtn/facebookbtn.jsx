import React from "react";
import FaceBook from "../../../assets/images/FaceBookLogo.svg";
import { LoginSocialFacebook } from "reactjs-social-login";
const FacebookBtn = () => {
  return (
    <LoginSocialFacebook
      appId={import.meta.env?.VITE_FB_APP}
      onResolve={(response) => {
        console.log(response);
      }}
      onReject={(error) => {
        console.log(error);
      }}
      className="w-full border border-black px-4 py-2 rounded-md  flex items-center justify-center mb-3"
    >
      <button
        type="submit"
        className="flex items-center justify-center"
      >
        {" "}
        <img src={FaceBook} alt="Facebook Logo" className="w-8 h-8 mr-4 " />
        Sign in with Facebook
      </button>
    </LoginSocialFacebook>
  );
};

export default FacebookBtn;
