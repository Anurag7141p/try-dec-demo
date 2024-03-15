import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import ProductReviews from "./productReviews";

const ProductDetails = ({ product_details }) => {
  console.log(product_details);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage(
      (prevImage) =>
        (prevImage + 1) % Object.values(product_details.images).length
    );
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevImage) =>
        (prevImage - 1 + Object.values(product_details.images).length) %
        Object.values(product_details[0].image).length
    );
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 font-frank">
      <div className="relative">
        <div className="carousel-container">
          {Object.values(product_details.images).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product Image ${index + 1}`}
              className={`w-full h-80 rounded object-cover ${
                index === currentImage ? "visible" : "hidden"
              }`}
            />
          ))}
        </div>
        <button className="prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="next" onClick={handleNext}>
          ❯
        </button>
      </div>
      <div
        key={product_details._id}
        className="flex flex-col gap-1 pt-4 pb-8 md:pb-10"
      >
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xl font-semibold">
            <h1>{product_details.name}</h1>
            <h1 className="mt-2 md:mt-0">
              $ {product_details.productPriceDaily}
              <span className="text-[14px]"> per day</span>
            </h1>
          </div>
          <h1 className="text-gray-500">
            Listed by{" "}
            <span className="text-blue-500">
              @{product_details.storeId.userId.firstName}{" "}
            </span>
            | Home Store
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 text-gray-500">
          <p className="flex items-center">
            <FaLocationDot />
            {product_details.storeId.state}
          </p>
          <p>9km km from map centre</p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <h1 className="font-semibold text-gray-800 text-xl">
            Store rules & information
          </h1>
          <div className="text-gray-500 text-[15px]">
            <p>
              Opening Time : {product_details.storeId.openingTime}{" "}
              <span className="px-3">|</span> Closing Time :{" "}
              {product_details.storeId.closingTime}
            </p>
            <p>
              Opening Time : {product_details.storeId.openingTime}{" "}
              <span className="px-3">|</span> Closing Time :{" "}
              {product_details.storeId.closingTime}
            </p>
          </div>
          <div className="px-2 text-[15px] w-1/2">
            <ul className="list-disc pl-6">
              <li>
                Passport, Adhaar, Driving license, and Gov.Id are accepted as ID
                proof
              </li>
              <li>
                Documents should be carried with you while collecting pickup
              </li>
            </ul>
          </div>
        </div>
        <hr className="border border-gray-300 mt-3" />
        <div className="text-[15px] flex flex-col gap-2 text-gray-600 pt-4">
          <h1 className="font-semibold text-gray-800 text-xl">
            Product Details
          </h1>
          <div>
            <p>{product_details.description}</p>
          </div>
          <p>Canon d3200 </p>
          <p>Model 2323</p>
          <p>Color: black</p>
          <p>Insurance: akjlkjaja</p>
        </div>
      </div>
      <div>
        <ProductReviews />
      </div>
    </div>
  );
};

export default ProductDetails;
