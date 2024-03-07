import React, { useState } from "react";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
const HomeImageCard = ({ rental }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const productData = [
    {
      locationData: {
        name: "8FCJ+6WG, Melpadom, Kerala 689627, India",
        lat: 9.320304767811114,
        lng: 76.48169802153777,
        locationAddress: "8FCJ+6WG, Melpadom, Kerala 689627, India",
      },
      _id: "65d36369567f2c330e6edb2c",
      storeId: "65ca0c1cc1a81f4fb25d3e05",
      categoryId: "65c9904bb8ddeb87d18a0dd9",
      subCategoryId: "65c99409b8ddeb87d18a0e6a",
      allowToCart: false,
      name: "new appartments",
      images: [
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708352503/ihoicc4xdoo24vx8hseu.jpg",
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708352503/tfil9gwajwccufghgoay.jpg",
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708352503/rpvso0vyvw7jdccvalcp.jpg",
      ],
      description: "sdf",
      currency: "INR",
      availableQuantity: 1,
      minQuantity: 1,
      maxQuantity: 1,
      customFields: [
        {
          name: "No of Bedroom",
          value: [],
          displayField: true,
          _id: "65d36369567f2c330e6edb2d",
        },
        {
          name: "Bathrooms",
          value: [],
          displayField: true,
          _id: "65d36369567f2c330e6edb2e",
        },
        {
          name: "Furnishing",
          value: ["Semi Furnished"],
          displayField: true,
          _id: "65d36369567f2c330e6edb2f",
        },
        {
          name: "Available For",
          value: ["Family Only"],
          displayField: true,
          _id: "65d36369567f2c330e6edb30",
        },
        {
          name: "Floor Number",
          value: [],
          displayField: true,
          _id: "65d36369567f2c330e6edb31",
        },
        {
          name: "Facing",
          value: ["West"],
          displayField: true,
          _id: "65d36369567f2c330e6edb32",
        },
        {
          name: "Total number of floors",
          value: [],
          displayField: true,
          _id: "65d36369567f2c330e6edb33",
        },
        {
          name: "Electricity & Water Charges",
          value: ["Included"],
          displayField: true,
          _id: "65d36369567f2c330e6edb34",
        },
        {
          name: "Furnished",
          value: ["1 Bed", "2 Bed"],
          displayField: true,
          _id: "65d36369567f2c330e6edb35",
        },
      ],
      discounts: [
        {
          percentage: 10,
          startDay: "1970-01-01T00:00:00.001Z",
          endDay: "1970-01-01T00:00:00.005Z",
          _id: "65d36369567f2c330e6edb36",
        },
      ],
      productPriceDaily: 123,
      maxRentalDurationDays: 12,
      minRentalDurationDays: 1,
      paymentOption: "fullPaymentAdvance",
      advanceAmountPercentage: 10,
      __v: 0,
    },
    {
      locationData: {
        name: "Project locaion",
        lat: 9.321998715395681,
        lng: 76.50761620724867,
        locationAddress:
          "8GF4+2Q5, Melpadom - Mannar Rd, Kurattissery, Pavukkara, Kerala 689627, India",
      },
      _id: "65d389b7b213ffe555ae46cf",
      storeId: "65ca0c1cc1a81f4fb25d3e05",
      categoryId: "65c9904bb8ddeb87d18a0dd9",
      subCategoryId: "65c99409b8ddeb87d18a0e6a",
      allowToCart: false,
      name: "third location",
      images: [
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708362308/swwxzjncmqptri8zoyc8.jpg",
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708362310/jnzolemgjaf1j5rygjrn.jpg",
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708362309/ynqjuqglotdqvzqf8cyp.jpg",
      ],
      description: "dvsd",
      currency: "INR",
      availableQuantity: 1,
      minQuantity: 1,
      maxQuantity: 1,
      customFields: [
        {
          name: "No of Bedroom",
          value: [],
          displayField: true,
          _id: "65d389b7b213ffe555ae46d0",
        },
        {
          name: "Bathrooms",
          value: [],
          displayField: true,
          _id: "65d389b7b213ffe555ae46d1",
        },
        {
          name: "Furnishing",
          value: ["Fully Furnished"],
          displayField: true,
          _id: "65d389b7b213ffe555ae46d2",
        },
        {
          name: "Available For",
          value: ["Bachelor's "],
          displayField: true,
          _id: "65d389b7b213ffe555ae46d3",
        },
        {
          name: "Floor Number",
          value: [],
          displayField: true,
          _id: "65d389b7b213ffe555ae46d4",
        },
        {
          name: "Facing",
          value: ["West"],
          displayField: true,
          _id: "65d389b7b213ffe555ae46d5",
        },
        {
          name: "Total number of floors",
          value: [],
          displayField: true,
          _id: "65d389b7b213ffe555ae46d6",
        },
        {
          name: "Electricity & Water Charges",
          value: ["Not Included"],
          displayField: true,
          _id: "65d389b7b213ffe555ae46d7",
        },
        {
          name: "Furnished",
          value: ["1 Bed", "2 Bed"],
          displayField: true,
          _id: "65d389b7b213ffe555ae46d8",
        },
      ],
      discounts: [
        {
          percentage: 10,
          startDay: "1970-01-01T00:00:00.001Z",
          endDay: "1970-01-01T00:00:00.005Z",
          _id: "65d389b7b213ffe555ae46d9",
        },
      ],
      productPriceDaily: 1333,
      maxRentalDurationDays: 23,
      minRentalDurationDays: 1,
      paymentOption: "fullPaymentAdvance",
      advanceAmountPercentage: 10,
      __v: 0,
    },
    {
      locationData: {
        name: "Project locaion",
        lat: 10.10764,
        lng: 76.35158,
        locationAddress:
          "4952+3J4, Periyar Nagar, Kochi, Aluva, Kerala 683101, India",
      },
      _id: "65d75523a35e492bbdbce9ba",
      storeId: "65d753cfa35e492bbdbce8ba",
      categoryId: "65c9904bb8ddeb87d18a0dd9",
      subCategoryId: "65c99409b8ddeb87d18a0e6a",
      allowToCart: false,
      name: "Honor Play",
      images: [
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708610850/rdi0enbi4gk21obthuud.jpg",
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708610850/glelevqpd85x1y8zwhlz.png",
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708610850/p9hj3dmqdwasy444zahv.png",
      ],
      description: "ssssssssssssssssssssss",
      currency: "INR",
      availableQuantity: 1,
      minQuantity: 1,
      maxQuantity: 1,
      customFields: [
        {
          name: "Furnished",
          value: ["1 Bed", "2 Bed"],
          displayField: true,
          _id: "65d75523a35e492bbdbce9bb",
        },
      ],
      discounts: [
        {
          percentage: 10,
          startDay: "1970-01-01T00:00:00.001Z",
          endDay: "1970-01-01T00:00:00.005Z",
          _id: "65d75523a35e492bbdbce9bc",
        },
      ],
      productPriceDaily: 1,
      maxRentalDurationDays: 20,
      minRentalDurationDays: 1,
      paymentOption: "fullPaymentAdvance",
      advanceAmountPercentage: 10,
      __v: 0,
    },
  ];
  const showNextImage = () => {
    if (Array.isArray(rental.imageUrl)) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % rental.imageUrl.length
      );
    }
  };

  const showPrevImage = () => {
    if (Array.isArray(rental.imageUrl)) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? rental.imageUrl.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <>
      <div className="justify-center sm:ms-2 items-center relative ">
        <div
          className="relative  lg:h-[157px] sm:h-40    hover:cursor-pointer "
          onMouseEnter={() => setShowButtons(true)}
          onMouseLeave={() => setShowButtons(false)}
        >
          <img
            src={
              Array.isArray(rental.imageUrl)
                ? rental.imageUrl[currentImageIndex]
                : rental.imageUrl
            }
            alt={`Rentals ${rental.id}`}
            className="absolute inset-0 w-full h-full rounded object-cover"
          />
          {Array.isArray(rental.imageUrl) && (
            <>
              {currentImageIndex > 0 && showButtons && (
                <button
                  onClick={showPrevImage}
                  className={`absolute left-0 top-1/2 transform text-gray-500 px-1 py-1 bg-white rounded-full ml-2 ${
                    showButtons ? "slide-in-left" : ""
                  }`}
                >
                  <MdOutlineKeyboardArrowLeft size={"20px"} />
                </button>
              )}
              {currentImageIndex < rental.imageUrl.length - 1 &&
                showButtons && (
                  <button
                    onClick={showNextImage}
                    className={`absolute right-0 top-1/2 transform text-gray-500 px-1 py-1 bg-white rounded-full mr-2 ${
                      showButtons ? "slide-in-right" : ""
                    }`}
                  >
                    <MdKeyboardArrowRight size={"20px"} />
                  </button>
                )}
            </>
          )}
          {Array.isArray(rental.imageUrl) && (
            <div
              className={`flex items-center justify-center absolute bottom-0 w-full mb-2 ${
                showButtons ? "opacity-100" : "opacity-0"
              }`}
            >
              {rental.imageUrl.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-1 h-1.5 mx-1 rounded-full ${
                    index === currentImageIndex ? "bg-gray-400" : "bg-white"
                  } cursor-pointer`}
                ></div>
              ))}
            </div>
          )}
        </div>
        <div className="p-1 text-black flex justify-between items-center">
          {/* <img
          src={rental.smallImageUrl}
          alt={`Small Image ${rental.id}`}
          className="mr-2 h-4 w-5 rounded-full "
        /> */}
          <div className="flex">
            <p className="font-semibold overflow-hidden overflow-ellipsis ">
              {rental.title}
            </p>
          </div>
          <div className="text-black flex justify-end items-end">
            <div className="bg-yellow-100 rounded-full text-xs text-center w-12">
              <p>Top Rated</p>
            </div>
          </div>
        </div>
        <div className="sm:ms-2 sm:text-xs ">
          <p className="tracking-wide w-full sm:w-auto underline">
            {rental.paraText}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-yellow-500 text-lg">
            ★ {rental.rating} <label className="text-black">5.0</label>
          </div>
        </div>
        <div className="ml-2 font-extrabold">{rental.money}</div>
      </div>
    </>
  );
};

export default HomeImageCard;
