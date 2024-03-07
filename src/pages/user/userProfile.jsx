import { useMediaQuery } from "@react-hook/media-query";
import InventoryDemo from "../../components/user/inventoryDemo";
import ProfileMobile from "../../components/user/mobileview/profileMobile";
const UserProfile = () => {
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

  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? (
    <ProfileMobile categoryList={categoryList} />
  ) : (
    <InventoryDemo categoryList={categoryList} />
    
  );
};
export default UserProfile;
