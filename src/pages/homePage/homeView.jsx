import React, { useState } from "react";
import Navbar from "../../components/reusable/navbar/homenav/navbar";
import Carousel from "../../components/reusable/carousel/carousel";
import Category from "../../components/homePage/category";
import BestInRental from "../../components/homePage/bestInRental";
import CameraUnits from "../../components/homePage/cameraUnits";
import RentalLocation from "../../components/homePage/rentalLocation";
import RentalVehicle from "../../components/homePage/rentalVehicle";
import Helpline from "../../components/reusable/footer/helpline/helpline";
import Footer from "../../components/reusable/footer/footer/footer";
import Categoryhead from "../../components/homePage/categoryhead";
import CategoryList from "../../components/homePage/categoryList";
import CategoryListCircle from "../../components/homePage/categoryListCircle";
import NavbarDemo from "../../components/reusable/navbar/homenav/navbarDemo";
import PopularCategory from "../../components/homePage/popularCategory";
import { IoStorefront } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { FaUserCheck } from "react-icons/fa";
import SiteAd from "../../components/homePage/siteAd";
import LoggedInBanner from "../../components/homePage/loggedInBanner";
import LoggedInCategory from "../../components/homePage/loggedInCategory";

export default function HomeView() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="mx-auto justify-center  items-center lg:w-[1536px]  ">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Categoryhead />
      <div
        className={`${
          isLoggedIn
            ? "flex flex-col gap-16 pt-5 px-20"
            : "flex flex-col gap-16 pt-5 px-20 bg-[#F5F5F5]"
        }`}
      >
        {isLoggedIn ? <LoggedInCategory /> : null}
        {isLoggedIn ? <LoggedInBanner /> : <Carousel />}

        {isLoggedIn ? null : <PopularCategory />}

        <BestInRental />
        <BestInRental />
        {isLoggedIn ? <BestInRental /> : <SiteAd />}

        <RentalVehicle />
        <Helpline />
      </div>

      <Footer />
    </div>
  );
}

{
  /* <NavbarDemo/> */
}
{
  /* <CategoryList /> */
}
{
  /* <CategoryListCircle /> */
}
{
  /* <Category /> */
}
{
  /* <CameraUnits /> */
}

{
  /* <RentalLocation />
      <RentalVehicle /> */
}
