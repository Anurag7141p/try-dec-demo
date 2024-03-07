import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { IoStorefront } from "react-icons/io5";

const SiteAd = () => {
  return (
    <div
      className="w-full h-[692px] rounded-3xl "
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dgkg64nql/image/upload/v1709723656/trydec/sitead.png")`,
      }}
    >
      <div className="grid grid-cols-5 place-items-center h-full">
        <div className=" col-span-3 grid grid-cols-5 ">
          <div className="col-span-3 flex flex-col justify-center items-center gap-5">
            <h1 className="text-[36px] font-semibold lg:pl-32">
              Why you should choose Olapool
            </h1>
            <h2 className="text-[24px]">Rental MarketPlace</h2>
            <div className="w-[261px] h-[120px] rounded-2xl flex justify-center  items-center gap-10 bg-green-800 text-[30px] text-[#C0FFF6]">
              <FaUserCheck className="w-[44px] h-[44px]" />
              <h1>
                Store <br /> Chat
              </h1>
            </div>
          </div>
          <div className="col-span-2 flex flex-col  text-[#C0FFF6] gap-16">
            <div className="w-[261px] h-[120px] rounded-2xl flex justify-center  items-center gap-10 bg-green-800 text-[30px]">
              <IoStorefront className="w-[44px] h-[44px]" />
              <h1>
                Store <br /> Chat
              </h1>
            </div>
            <div className="w-[261px] h-[120px] rounded-2xl flex justify-center  items-center gap-10 bg-green-800 text-[30px]">
              <GrMapLocation className="w-[44px] h-[44px]" />
              <h1>
                Track <br /> Rent
              </h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SiteAd;
