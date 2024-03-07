import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import StoreProductCard from "./storeProductCard";
import { FaSortAmountDown } from "react-icons/fa";
import { useSelector } from "react-redux";
// import { getStoreProductsApi } from "../../../api/storeApi";

const Inventory = () => {
  const categoryList = {
    message: "success",
    productData: [
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
    ],
  };

  // const { data } = useSelector((state) => state.userAuth);
  const [products, setProducts] = useState([]);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isSubCategoryDropdownOpen, setSubCategoryDropdownOpen] =
    useState(false);

  useEffect(() => {
    setData(categoryList.productData);
  }, []);

  console.log('this is data',data);

  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setSortDropdownOpen(!isSortDropdownOpen);
  };

  const toggleCategoryDropdown = () => {
    setSubCategoryDropdownOpen(false);
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
  };
  const toggleSubCategoryDropdown = () => {
    setCategoryDropdownOpen(false);
    setSubCategoryDropdownOpen(!isSubCategoryDropdownOpen);
  };

  const getStoreProducts = async () => {
    const response = await getStoreProductsApi(data.storeId);
    setProducts(response);
  };
  useEffect(() => {
    getStoreProducts();
  }, []);
  return (
    <>
      <div className="flex justify-end my-5 mr-5">
        <div className="bg-green-300 mr-3">
          <div className="relative inline-block text-left">
            <button
              type="button"
              onClick={toggleCategoryDropdown}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300"
            >
              Select Category
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v10a1 1 0 01-1.555.832L5.055 12.11a1 1 0 010-1.32l5.39-6.022a1 1 0 011.554.832z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isCategoryDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-green-300">
          <div className="relative inline-block text-left">
            <button
              type="button"
              onClick={toggleSubCategoryDropdown}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300"
            >
              Select Sub Category
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v10a1 1 0 01-1.555.832L5.055 12.11a1 1 0 010-1.32l5.39-6.022a1 1 0 011.554.832z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isSubCategoryDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex  w-full h-screen">
        <div className="w-72 ">
          <div className="ml-5 mr-3 flex justify-between hover:bg-[#B1CAFA] p-5 rounded-lg">
            <Link to={"inventory"}>Products</Link>
            <div>
              <span className="px-2 py-1 rounded-full bg-gray-100">{"31"}</span>
            </div>
          </div>
          <div className="ml-5 mr-3 flex justify-between hover:bg-[#B1CAFA] p-5 rounded-lg">
            <Link to={"inventory"}>Order Request</Link>
            <div>
              <span className="px-2 py-1 rounded-full bg-gray-100">{"31"}</span>
            </div>{" "}
          </div>
          <div className="ml-5 mr-3 flex justify-between hover:bg-[#B1CAFA] p-5 rounded-lg">
            <Link to={"inventory"}>Upcoming Orders</Link>
            <div>
              <span className="px-2 py-1 rounded-full bg-gray-100">{"31"}</span>
            </div>
          </div>
          <div className="ml-5 mr-3 flex justify-between hover:bg-[#B1CAFA] p-5 rounded-lg">
            <Link to={"inventory"}>Ongoing Orders</Link>
            <div>
              <span className="px-2 py-1 rounded-full bg-gray-100">{"31"}</span>
            </div>
          </div>
          <div className="ml-5 mr-3 flex justify-between hover:bg-[#B1CAFA] p-5 rounded-lg">
            <Link to={"inventory"}>Store Settings</Link>
            <div>
              <span className="px-2 py-1 rounded-full bg-gray-100">{"31"}</span>
            </div>
          </div>
          <div className="ml-5 mr-3 flex justify-between hover:bg-[#B1CAFA] p-5 rounded-lg">
            <Link to={"inventory"}>Orders</Link>
          </div>
        </div>

        <div className="w-full bg-white mr-5">
          <div className="mr-5  ml-2 bg-white">
            <div className="flex justify-end  pt-3  ">
              <div className="flex bg-green-200 rounded-lg border border-black">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none px-4 py-2 rounded-l-lg"
                />
                <button className="bg-blue-500 text-white rounded-r px-4 py-2">
                  <IoSearch />
                </button>
              </div>
              <div className="pl-4">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  <div className="pr-2">
                    <FaSortAmountDown />
                  </div>
                  Sort
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v10a1 1 0 01-1.555.832L5.055 12.11a1 1 0 010-1.32l5.39-6.022a1 1 0 011.554.832z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isSortDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <button
                        type="button"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        role="menuitem"
                      >
                        Option 1
                      </button>
                      <button
                        type="button"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        role="menuitem"
                      >
                        Option 2
                      </button>
                      <button
                        type="button"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        role="menuitem"
                      >
                        Option 3
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <StoreProductCard data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
