import React, { useEffect, useState } from "react";
import ProductAvailability from "./productAvailability";
import RelatedRentals from "./relatedRentals";
import ProductDetails from "./productDetails";
import AddProduct from "./addProductSameStore";
import AddProductSameStore from "./addProductSameStore";

const ProductMoreDetails = () => {
  const product_details = {
    message: "success",
    productData: {
      _id: "65bb8dc1be7ec801cd89ffb2",
      storeId: {
        paymentSetup: {
          payAtStore: false,
          onlineOrOffline: true,
          payOnline: false,
          onlinePercentage: 0,
        },
        storeLocation: {
          lat: 10.096534410702105,
          lng: 76.34937304873503,
        },
        _id: "65b90a5da1581faefd6134e6",
        userId: {
          _id: "65b89193cac19a7b6c14089f",
          firstName: "Nideesh",
          lastName: "pp",
          email: "nideeshnd313@gmail.com",
          username: "nideesh1511",
          countryCode: "91",
          phone: "9037961005",
          verificationLevel: 4,
          emailVerification: true,
          phoneVerification: true,
          adharVerificationStatus: true,
          gstVerificationStatus: false,
          drivingLicenseVerificationStatus: false,
          panCardVerificationStatus: false,
          password:
            "$2a$10$TBnXPtdvt10T2mLQeP3xJeBgQHA5JOMwP/RhvgIAnOZjW2PRQrcru",
          verificationValueStatus: false,
          storeStatus: true,
          role: "storeowner",
          verified: true,
          status: true,
          countryStatus: true,
          stateStatus: true,
          districtStatus: true,
          createdAt: "2024-01-30T06:05:07.916Z",
          updatedAt: "2024-01-31T07:16:28.619Z",
          __v: 0,
          wallet: "65b89193cac19a7b6c1408a1",
          emailVerificationOtp: null,
          storeId: "65b90a5da1581faefd6134e6",
          responseData: {
            client_id: "aadhaar_v2_XfizYpZUHthgdjZgzUjN",
            otp_sent: true,
            if_number: true,
            valid_aadhaar: true,
            status: "generate_otp_success",
          },
        },
        storeName: "MYstore",
        image:
          "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1706625763/ehvwwok0asyldxhqpaet.jpg",
        storeMode: "My home is my store",
        username: "nideesh1511",
        serviceType: "Product Rental",
        subscriptionType: "freeTrial",
        isSubscriptionExpired: false,
        workingDays: [
          {
            name: "SUN",
            working: false,
            _id: "65b90a5da1581faefd6134e7",
          },
          {
            name: "MON",
            working: true,
            _id: "65b90a5da1581faefd6134e8",
          },
          {
            name: "TUE",
            working: true,
            _id: "65b90a5da1581faefd6134e9",
          },
          {
            name: "WED",
            working: true,
            _id: "65b90a5da1581faefd6134ea",
          },
          {
            name: "THU",
            working: true,
            _id: "65b90a5da1581faefd6134eb",
          },
          {
            name: "FRI",
            working: true,
            _id: "65b90a5da1581faefd6134ec",
          },
          {
            name: "SAT",
            working: true,
            _id: "65b90a5da1581faefd6134ed",
          },
        ],
        openingTime: "9:00 am",
        closingTime: "5:00 pm",
        locationAddress:
          "38WX+GRH, Banglamparambu Rd, Kunnathery Thikavu, Aluva, Kerala 683101, India",
        storeAddress: "sdfsadfsadfsadfsdf",
        district: "kerala",
        country: "india",
        state: "malappuram",
        pincode: 673638,
        walletId: "65b89193cac19a7b6c1408a1",
        rules: ["Must carry original ID proof of your self", "sdfasdf"],
        ownerStatus: true,
        approve: false,
        subscriptionStartDate: "2024-01-30T14:40:29.652Z",
        subscriptionEndDate: "2024-03-30T14:40:29.652Z",
        createdAt: "2024-01-30T14:40:29.664Z",
        updatedAt: "2024-01-30T14:40:29.664Z",
        __v: 0,
      },
      categoryId: "65bb68209f5c53b6291ca895",
      subCategoryId: "65bb68329f5c53b6291ca899",
      brandId: "65bb683f9f5c53b6291ca8a1",
      modelId: "65bb72c19f5c53b6291ca985",
      name: "Fastrack 2023",
      images: [
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1706790472/wjmswbqikam6duzaf2ux.jpg",
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1706790472/cmbiugwyowbqxegrceoe.jpg",
        "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1706790472/zcocfgb41mv6atihdhfq.jpg",
      ],
      description: "asdasd",
      currency: "INR",
      availableQuantity: 1,
      minQuantity: 1,
      maxQuantity: 1,
      customFields: [
        {
          name: "color",
          value: "white",
          _id: "65bb8dc1be7ec801cd89ffb3",
        },
      ],
      accessories: "asdfasv",
      discounts: [
        {
          percentage: 10,
          startDay: 1,
          endDay: 5,
          _id: "65bb8dc1be7ec801cd89ffb4",
        },
      ],
      productPriceHourly: 100,
      productPriceDaily: 1000,
      maxRentalDurationHours: 19,
      maxRentalDurationDays: 30,
      minRentalDurationHours: 6,
      minRentalDurationDays: 5,
      paymentOption: "advancePayment",
      advanceAmountPercentage: 10,
      tags: [],
      __v: 0,
    },
  };

  return (
    <div className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 px-4 md:px-10 lg:px-10 xl:px-10">
        <div className="md:col-span-4">
          <ProductDetails product_details={product_details.productData} />
        </div>

        <div className="md:col-span-2">
          <ProductAvailability data={product_details} />
          <AddProductSameStore />
        </div>
      </div>
      <div className="px-4 md:px-2 lg:px-4 xl:px-6">
        <RelatedRentals />
      </div>
    </div>
  );
};

export default ProductMoreDetails;
