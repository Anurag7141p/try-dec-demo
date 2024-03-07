import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { IoStorefront } from "react-icons/io5";

const SiteAd = () => {
  return (
    <div
      className="w-full xl:h-[692px] lg:h-[470px] md:h-[310px] sm:h-[110px] rounded-3xl "
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dgkg64nql/image/upload/v1709723656/trydec/sitead.png")`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
      }}
    >
      <div className="grid grid-cols-5 place-items-center h-full">
        <div className=" col-span-3 grid grid-cols-5 ">
          <div className="col-span-3 flex flex-col justify-center items-center gap-5">
            <h1 className="xl:text-[36px] lg:text-[27px] md:text-[20px] font-semibold xl:pl-32 lg:pl-20 md:pl-10">
              Why you should choose Olapool
            </h1>
            <h2 className="xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[12px]">Rental MarketPlace</h2>

            <div className="xl:w-[261px] xl:h-[120px] lg:w-[201px] lg:h-[100px] md:w-[131px] md:h-[60px]  rounded-2xl flex justify-center  items-center gap-10 bg-green-800 text-[30px] text-[#C0FFF6]">
              <FaUserCheck className="xl:w-[44px] xl:h-[44px] lg:w-[34px] lg:h-[34px] " />
              <h1 className="xl:text-[30px] lg:text-[20px] md:text-[15px]">
                Store <br /> Chat
              </h1>
            </div>
          </div>
          <div className="col-span-2 flex flex-col  text-[#C0FFF6] gap-16">
            <div className="xl:w-[261px] xl:h-[120px] lg:w-[201px] lg:h-[100px] md:w-[131px] md:h-[60px] rounded-2xl flex justify-center  items-center gap-10 bg-green-800 text-[30px]">
              <IoStorefront className="xl:w-[44px] xl:h-[44px] lg:w-[34px] lg:h-[34px]" />
              <h1 className="xl:text-[30px] lg:text-[20px] md:text-[15px]">
                Store <br /> Chat
              </h1>
            </div>
            <div className="xl:w-[261px] xl:h-[120px] lg:w-[201px] lg:h-[100px] md:w-[131px] md:h-[60px] rounded-2xl flex justify-center  items-center gap-10 bg-green-800 text-[30px]">
              <GrMapLocation className="xl:w-[44px] xl:h-[44px] lg:w-[34px] lg:h-[34px]" />
              <h1 className="xl:text-[30px] lg:text-[20px] md:text-[15px]">
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
