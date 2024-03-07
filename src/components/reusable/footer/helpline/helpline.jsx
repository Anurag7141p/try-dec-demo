import React from "react";
import FooterImage1 from "../../../../assets/footerImages/FooterImage1.jpg";

export default function Helpline() {
  return (
    <div
      className="mb-10 xl:h-[308px] lg:h-[308px] md:h-[200px] w-full rounded-2xl text-black outline outline-white"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dgkg64nql/image/upload/v1709729380/trydec/helpline.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:flex  items-center  lg:mx-6 lg:gap-3  pl-4  rounded-lg space-x-4 lg:justify-normal lg:items-center h-full">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="xl:text-3xl lg:text-2xl md:text-xl lg:ms-20  md:ms-10 font-bold">Olapool helpline</h3>
            <p className="  lg:ms-20 md:ms-10">
              Provides support for all your service needs.
            </p>
          </div>
          <button className="bg-green-500 lg:ms-20 md:ms-10 md:w-1/2  px-4 py-2 rounded-md text-white">
            Get Call Back
          </button>
        </div>
      </div>
    </div>
  );
}
