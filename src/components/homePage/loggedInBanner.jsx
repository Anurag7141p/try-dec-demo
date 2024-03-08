import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "slick-carousel/slick/slick-theme.css";
import "./loggedInBanner.css";

const LoggedInBanner = () => {
  const imageData = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dgkg64nql/image/upload/v1709730918/trydec/loggedinbanner.png",
      heading: "Chat with your renter before confirm your booking",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dgkg64nql/image/upload/v1709730918/trydec/loggedinbanner.png",
      heading: "Rent a camera now!",
      description:
        "Elevate your creative potential and bring your unique vision to life with our camera rentals.",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dgkg64nql/image/upload/v1709730918/trydec/loggedinbanner.png",
      heading: "Rent a camera now!",
      description:
        "Elevate your creative potential and bring your unique vision to life with our camera rentals.",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative car overflow-x:hidden justify-center items-center mx-auto overflow-hidden ml-2 mr-2 px-10">
      <Slider {...carouselSettings}>
        {imageData.map((item) => (
          <div
            key={item.id}
            className="relative sm:h-60 lg:h-[216px] w-full justify-center"
          >
            <img
              src={item.imageUrl}
              alt={item.heading}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-1/2 transform lg:px-20 sm:px-6 -translate-y-1/2 text-start text-white">
              <h1 className="text-4xl font-extrabold text-[45px] w-[1101px]">
                {item.heading}
              </h1>
              <p className="text-white-600 w-[350px]">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LoggedInBanner;
