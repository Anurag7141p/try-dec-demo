import React, { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const StoreProductCard = ({ data }) => {
  const proData = {
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
  };

  useEffect(() => {
    // const totalDiscount=data.
    console.log(proData.discounts.length);
  }, []);
  return (
    <div className="flex flex-wrap mt-4 ml-5">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2 min-h-20">
        <Link to={"add-product"}>
          <div className="mb-4 md:mb-0 border-2 border-blue-400  rounded h-full flex flex-col justify-center items-center">
            <FaPlus size={14} className="text-blue-500 mb-1 mx-auto" />
            <p className="mx-auto text-blue-500 font-semibold">Add Product</p>
          </div>
        </Link>
      </div>
      {data.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
          {/* Image container */}
          <div className=" border border-gray-500  rounded flex items-center justify-start overflow-hidden ">
            <Link to={`edit-product/${product._id}`}>
              <img
                src={product.images[0]}
                alt=""
                className="w-24 h-28 object-cover"
              />
            </Link>
            <div className="absolute top-0 right-0 p-2 cursor-pointer">
              <span>
                <BsThreeDotsVertical />
              </span>
            </div>

            <div className="flex flex-col mt-2">
              <h1 className="font-medium ms-3 text-sm sm:mt-2">
                {product.name}
              </h1>
              <p className="text-sm font-medium text-blue-500 ms-3">
                from ₹{" "}
                {product?.productPriceHourly * product?.minRentalDurationHours}
              </p>
              <p className="text-sm font-medium text-gray-400 ms-3">
                {product?.modelId?.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoreProductCard;
