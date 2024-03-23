import React from "react";
import MobNav from "../../chat/mobNav";
import MobFooter from "../../chat/mobFooter";
import HomeNav from "./homeNav";
import HomeFooter from "./homeFooter";
import MobCategoryList from "./mobCategoryList";
import RelatedRentals from "./relatedRentals";

const MobHome = () => {
  return (
    <div>
      <div className="mb-28">
        <HomeNav />
        <div
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dgkg64nql/image/upload/v1710870711/trydec/mobhero.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[250px]"
        >
          <div className="w-full h-full bg-black/30"></div>
        </div>
        <div className="px-5 pt-5">
          <MobCategoryList />
        </div>
        <div>
          <div className="text-gray-500 px-5 font-semibold text-xl pt-5">
            <h1>Trending Now</h1>
          </div>
          <RelatedRentals />
        </div>
        <div>
          <div className="text-gray-500 px-5 font-semibold text-xl ">
            <h1>Trending Now</h1>
          </div>
          <RelatedRentals />
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default MobHome;
