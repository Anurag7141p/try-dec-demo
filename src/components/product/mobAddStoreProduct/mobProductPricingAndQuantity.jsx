import React from "react";
import DiscountComponent from "./discountComponent";
import { AiOutlineDelete } from "react-icons/ai";

import React, { useEffect, useState } from "react";
import notIcon from "../../../../assets/images/icon/notIcon.png";
import DiscountComponent from "./DiscountComponent";
import EditIcon from "../../../../assets/images/icon/edit.png";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addProductApi } from "../../../../api/productApi";
import {
  cleareAddProductData,
  setAddProductSecondPageData,
} from "../../../../redux/store/addProductDataSlice";
import { getEachSubCategoryDataApi } from "../../../../api/subCategoryApi";
const pricingInitialState = {
  hourlyPricing: {
    amount: "",
    minDuration: 1,
    maxDuration: 1,
    discounts: [
      {
        percentage: 0,
        start: 0,
        end: 0,
      },
    ],
  },
  dayPricing: {
    amount: "",
    minDuration: 1,
    maxDuration: 1,
    discounts: [
      {
        percentage: 0,
        start: 0,
        end: 0,
      },
    ],
  },
  monthlyPricing: {
    amount: "",
    minDuration: 1,
    maxDuration: 1,
    discounts: [
      {
        percentage: 0,
        start: 0,
        end: 0,
      },
    ],
  },
};

const MobProductPricingAndQuantity = ({ setPage, page }) => {
  const [anyError, setAnyError] = useState(false);
  const { productData } = useSelector((state) => state?.addProductData);
  const [quantity, setQuantity] = useState({
    availableQuantity: 1,
    minQuantity: 1,
    maxQuantity: 1,
    manageQuantityStatus: false,
  });
  const [paymentOptions, setPaymentOptions] = useState({
    singlePaymentStatus: true,
    monthlyPaymentStatus: false,
    payAtStore: true,
    payOnline: true,
    advanceAmountPercentage: 10,
  });
  const [pricing, setPricing] = useState(pricingInitialState);
  const [selectedPricing, setSelectedPricing] = useState("hourlyPricing");
  const [error_message, setError_message] = useState("");
  const [pricing_error_message, setPricing_error_message] = useState("");
  const [securityDeposit, setSecurityDeposit] = useState({
    securityDepositStatus: false,
    securityDepositAmount: 0,
  });
  const [deliveryService, setDeliveryService] = useState({
    deliveryServiceStatus: false,
    deliveryCharge: [{ start: 1, end: 5, price: 10 }],
  });
  const dispatch = useDispatch();
  const [subCategoryData, setSubCategoryData] = useState(null);
  const getSubCategoryData = async () => {
    const response = await getEachSubCategoryDataApi(
      productData?.subCategoryId
    );
    setSubCategoryData(response);
  };

  useEffect(() => {
    if (productData) {
      getSubCategoryData();
    }
  }, [productData]);
  const removeDeliveryCharge = (index) => {
    setDeliveryService((prevState) => ({
      ...prevState,
      deliveryCharge: prevState.deliveryCharge.filter((_, i) => i !== index),
    }));
  };

  const handleDeliveryChargePrice = (e, index) => {
    let value = e.target.value;
    if (!isNaN(value)) {
      setDeliveryService((prevState) => ({
        ...prevState,
        deliveryCharge: prevState.deliveryCharge.map((charge, i) =>
          i === index ? { ...charge, price: value } : charge
        ),
      }));
    }
  };
  const handleDeliveryChargeStart = (e, index) => {
    let value = e.target.value;
    let isError = false;
    if (!isNaN(value)) {
      if (
        index > 0 &&
        parseInt(value) <=
          parseInt(deliveryService.deliveryCharge[index - 1].end)
      ) {
        isError = true;
        setError_message(
          "Start value must be greater than the previous end value."
        );
      }

      if (
        parseInt(deliveryService.deliveryCharge[index].end) &&
        parseInt(deliveryService.deliveryCharge[index].end) < parseInt(value)
      ) {
        isError = true;
        setError_message("Start value must be less than the end value.");
      }

      setDeliveryService((prevState) => ({
        ...prevState,
        deliveryCharge: prevState.deliveryCharge.map((charge, i) =>
          i === index ? { ...charge, start: value } : charge
        ),
      }));
      if (!isError) {
        setError_message("");
      }
    }
  };
  const handleDeliveryChargeEnd = (e, index) => {
    let value = e.target.value;
    if (!isNaN(value)) {
      if (
        parseInt(deliveryService.deliveryCharge[index].start) &&
        parseInt(deliveryService.deliveryCharge[index].start) > parseInt(value)
      ) {
        setError_message(
          "Start value must be less than or equal to the end value."
        );
      } else {
        setError_message("");
      }

      setDeliveryService((prevState) => ({
        ...prevState,
        deliveryCharge: prevState.deliveryCharge.map((charge, i) =>
          i === index ? { ...charge, end: value } : charge
        ),
      }));
    }
  };

  const handleDeliveryChargeAdd = () => {
    if (deliveryService.deliveryCharge.length >= 3) {
      return;
    }
    if (
      deliveryService.deliveryCharge &&
      deliveryService.deliveryCharge.length == 0
    ) {
      setDeliveryService((prevState) => ({
        ...prevState,
        deliveryCharge: [{ start: 1, end: 5, price: 10 }],
      }));
      return;
    }

    setDeliveryService((prevState) => {
      const lastCharge =
        prevState.deliveryCharge[prevState.deliveryCharge.length - 1];
      const newStart = parseInt(lastCharge.end, 10) + 1;
      const newEnd = parseInt(lastCharge.end, 10) + 2;

      return {
        ...prevState,
        deliveryCharge: [
          ...prevState.deliveryCharge,
          {
            start: newStart,
            end: newEnd,
            price: 11,
          },
        ],
      };
    });
  };

  const handleAdvanceAmountPercentage = (e) => {
    let value = e.target.value;

    if (!isNaN(value)) {
      value = parseInt(value);
      if (value <= 100) {
        setPaymentOptions((prev) => ({
          ...prev,
          advanceAmountPercentage: value,
        }));
      } else {
        setPaymentOptions((prev) => ({ ...prev, advanceAmountPercentage: "" }));
      }
    }
  };

  const handleSecurityDeposit = (e) => {
    let value = e.target.value;
    if (!isNaN(value)) {
      setSecurityDeposit((prev) => ({
        ...prev,
        securityDepositAmount: value,
      }));
    }
  };
  const handleAvailableQuantityChange = (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      setQuantity((prev) => ({ ...prev, availableQuantity: value }));
    }
  };

  const handleMinQuantityChange = (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      setQuantity((prev) => ({ ...prev, minQuantity: value }));
    }
  };

  const handleMaxQuantityChange = (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      setQuantity((prev) => ({ ...prev, maxQuantity: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (anyError) {
      setError_message(
        "Please correct the errors in your product discount settings"
      );
      return;
    } else {
      setError_message("");
    }
    if (quantity.manageQuantityStatus) {
      if (quantity.maxQuantity < quantity.minQuantity) {
        setError_message(
          "Minimum quantity cannot be greater than maximum quantity"
        );
        return;
      } else if (quantity.maxQuantity < quantity.availableQuantity) {
        setError_message(
          "Maximum quantity cannot be less than available quantity"
        );
        return;
      } else {
        setError_message("");
      }
    } else {
      setError_message("");
    }
    if (securityDeposit.securityDepositStatus) {
      if (securityDeposit.securityDepositAmount <= 0) {
        setError_message(
          "Please enter a valid number for the security deposit amount."
        );
        return;
      } else {
        setError_message("");
      }
    }

    if (
      !paymentOptions.singlePaymentStatus &&
      !paymentOptions.monthlyPaymentStatus
    ) {
      setError_message(
        "Please select either Single Payment or Monthly Payment."
      );
      return;
    } else if (paymentOptions.advanceAmountPercentage < 10) {
      setError_message("Advance amount percentage should be at least 10%.");
      return;
    } else {
      setError_message("");
    }

    if (deliveryService.deliveryServiceStatus) {
      if (deliveryService.deliveryCharge.length === 0) {
        setError_message("Please add at least one delivery charge.");
        return;
      } else {
        let hasOverlap = false;
        const sortedCharges = deliveryService.deliveryCharge
          .slice()
          .sort((a, b) => a.start - b.start);
        for (let i = 0; i < sortedCharges.length - 1; i++) {
          const currentCharge = sortedCharges[i];
          const nextCharge = sortedCharges[i + 1];
          if (currentCharge.end >= nextCharge.start) {
            hasOverlap = true;
            break;
          }
        }

        if (hasOverlap) {
          setError_message(
            "Please ensure that each delivery charge has a unique start and end value."
          );
          return;
        } else {
          setError_message("");
        }
      }
    }

    // pricing
    // Validate hourly pricing
    const validateDiscounts = (pricingType) => {
      const discounts = pricing[pricingType].discounts;
      for (let i = 0; i < discounts.length; i++) {
        const discount = discounts[i];
        if (
          discount.start < 0 ||
          discount.end < 0 ||
          discount.start > discount.end ||
          discount.percentage < 0 ||
          discount.percentage > 100
        ) {
          hasError = true;
          setError_message("Please enter valid values for discounts.");
          return;
        }
      }
    };
    if (
      pricing.hourlyPricing.maxDuration > 24 &&
      (pricing.dayPricing.amount !== "" || pricing.monthlyPricing.amount !== "")
    ) {
      validateDiscounts("hourlyPricing");
    } else {
      validateDiscounts("hourlyPricing");
      validateDiscounts("dayPricing");
      validateDiscounts("monthlyPricing");
    }

    const productAddData = {
      quantity: quantity,
      paymentOptions: paymentOptions,
      pricing: pricing,
      selectedPricing: selectedPricing,
      securityDeposit: securityDeposit,
      deliveryService: deliveryService,
    };
    dispatch(setAddProductSecondPageData(productAddData));
    if (productData) {
      let addProductData = { ...productData, ...productAddData };
      const response = await addProductApi(addProductData);
      if (response == "success") {
        dispatch(cleareAddProductData());
        alert("success");
      }
    }
  };

  const handleInputChange = (e, type, field) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      if (field == "minDuration") {
        const numericValue = parseFloat(value);
        let max = pricing[type]?.maxDuration;

        if (numericValue > max) {
          setPricing((prevState) => ({
            ...prevState,
            [type]: {
              ...prevState[type],
              [field]: value,
              ["maxDuration"]: value,
            },
          }));
          return;
        }
      }
      if (field == "maxDuration") {
        const numericValue = parseFloat(value);
        let min = pricing[type].minDuration;
        if (numericValue < min) {
          setPricing((prevState) => ({
            ...prevState,
            [type]: {
              ...prevState[type],
              [field]: value,
              ["minDuration"]: value,
            },
          }));
          return;
        }
      }
      setPricing_error_message("");
      setPricing((prevState) => ({
        ...prevState,
        [type]: {
          ...prevState[type],
          [field]: value,
        },
      }));
    } else {
      setPricing_error_message("Input must be a number.");
    }
  };

  const handleSelectChange = (e) => {
    setSelectedPricing(e.target.value);
  };
  const handleBack = () => {
    setPage(3);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-full sm:h-60 h-52 pt-10 text-white  bg-blue-600   flex flex-col gap-6 justify-center pb-10 px-5 rounded-b-3xl">
          <h1 className="text-2xl font-semibold">Product Pricing </h1>
          <p className="text-base">
            Adding documents enables us to verify and keep fraudulent activities
            out of reach.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 w-full h-3 bg-white rounded"></div>
            <div className="col-span-1 w-full h-3  rounded bg-white"></div>
            <div className="col-span-1 w-full h-3   rounded bg-white"></div>
          </div>
        </div>
      </div>

      {/* manage quantity */}
      <div className="w-full px-10 py-5 pt-10 flex flex-col gap-4 z-10 pb-32">
        <div className="flex flex-col  gap-2 pt-5">
          {subCategoryData && subCategoryData?.allowToCart && (
            <>
              <div className="flex gap-5 text-2xl">
                <label>Manage Quantity</label>
                <input
                  type="checkbox"
                  className="w-4"
                  color="blue"
                  checked={quantity?.manageQuantityStatus}
                  onChange={(e) =>
                    setQuantity((prev) => ({
                      ...prev,
                      manageQuantityStatus: e.target.checked,
                    }))
                  }
                />
              </div>
              <div className="pt-4 text-gray-600 text-base">
                <p>
                  Ensure that all products in this quantity have the same color,
                  size, measurements,
                  <br /> quality, and condition.
                </p>
              </div>
            </>
          )}

          {quantity && quantity?.manageQuantityStatus && (
            <div className="border border-blue-400 bg-blue-100  rounded-lg px-2 py-5 w-full">
              <div className=" flex flex-col gap-4">
                <div className="flex gap-4 justify-between">
                  <label htmlFor="">Available Quantity</label>
                  <input
                    type="text"
                    placeholder="0"
                    onChange={handleAvailableQuantityChange}
                    value={quantity?.availableQuantity}
                    maxLength={6}
                    className="w-1/5 p-2 h-10 border border-blue-400 rounded-lg  outline-blue-300"
                  />
                </div>

                <div className="flex gap-4 justify-between">
                  <label>Minimum Quantity Per Order</label>
                  <input
                    placeholder="0"
                    type="text"
                    onChange={handleMinQuantityChange}
                    maxLength={6}
                    value={quantity?.minQuantity}
                    className="w-1/5 p-1  h-10 border border-blue-400 rounded-lg  outline-blue-300"
                  />
                </div>

                <div className="flex gap-4 justify-between">
                  <label htmlFor="">Maximum Quantity Per Order</label>
                  <input
                    placeholder="0"
                    onChange={handleMaxQuantityChange}
                    maxLength={6}
                    value={quantity?.maxQuantity}
                    type="text"
                    className="w-1/5 p-2 h-10 border border-blue-400 rounded-lg  outline-blue-300"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* pricing */}
        <div className="flex items-center">
          <h2 className="mr-2 text-base font-semibold">Pricing</h2>
        </div>
        <div>
          {pricing &&
            Object.keys(pricing).map((key, index) => (
              <div key={key} className="pt-2 text-sm">
                {key == "hourlyPricing" && pricing[key].maxDuration >= 24 && (
                  <div className="flex justify-between items-center w-full gap-2 xm:w-[70%] xs:w-full">
                    <div>
                      <img
                        src={EditIcon}
                        alt="icon"
                        className="cursor-pointer"
                        onClick={() => setSelectedPricing(key)}
                      />
                    </div>
                    <div className="pl-5 fles justify-start items-start w-28">
                      <p>₹ {pricing[key].amount}</p>
                    </div>
                    <div>
                      {key === "hourlyPricing" && "Hourly"}
                      {key === "dayPricing" && "Daily"}
                      {key === "monthlyPricing" && "Monthly"}
                    </div>
                    <div>
                      {pricing[key].minDuration}-{pricing[key].maxDuration}{" "}
                      {key === "hourlyPricing" && "Hourly"}
                      {key === "dayPricing" && "Daily"}
                      {key === "monthlyPricing" && "Monthly"}
                    </div>
                  </div>
                )}

                {pricing["hourlyPricing"].maxDuration < 24 && (
                  <div className="flex justify-between items-center w-full gap-2 xm:w-[70%] xs:w-full">
                    <div>
                      <img
                        src={EditIcon}
                        alt="icon"
                        className="cursor-pointer"
                        onClick={() => setSelectedPricing(key)}
                      />
                    </div>
                    <div className="pl-5 fles justify-start items-start w-28">
                      <p>₹ {pricing[key].amount}</p>
                    </div>
                    <div>
                      {key === "hourlyPricing" && "Hourly"}
                      {key === "dayPricing" && "Daily"}
                      {key === "monthlyPricing" && "Monthly"}
                    </div>
                    <div>
                      {pricing[key].minDuration}-{pricing[key].maxDuration}{" "}
                      {key === "hourlyPricing" && "Hourly"}
                      {key === "dayPricing" && "Daily"}
                      {key === "monthlyPricing" && "Monthly"}
                    </div>
                  </div>
                )}
              </div>
            ))}

          <div className="rounded-xl border border-blue-400 bg-blue-50 w-full h-fit my-5 px-5 py-5">
            <div className=" flex flex-col gap-4">
              <div className="flex gap-8 justify-between">
                <div className="py-1 bg-white  border rounded-md w-40 flex justify-center items-center outline-none h-10 border-blue-500 ">
                  <p>₹</p>
                  <input
                    placeholder="0.00"
                    type="text"
                    maxLength={5}
                    onChange={(e) =>
                      handleInputChange(e, selectedPricing, "amount")
                    }
                    value={pricing[selectedPricing]?.amount}
                    className=" text-black  rounded-md w-full flex justify-center items-center outline-none focus:border-blue-500 h-9 px-3 "
                  />
                </div>
                <select
                  className=" text-xs border rounded-md w-full xs:w-full xxm:w-1/4  flex justify-center items-center outline-none focus:border-blue-500 h-10 px-2"
                  value={selectedPricing}
                  onChange={handleSelectChange}
                >
                  {pricing &&
                  pricing?.hourlyPricing &&
                  pricing?.hourlyPricing?.maxDuration >= 24 ? (
                    <option value="hourlyPricing">Per Hour</option>
                  ) : (
                    <>
                      <option value="hourlyPricing">Per Hour</option>
                      <option value="dayPricing">Per Day</option>
                      <option value="monthlyPricing">Per Month</option>
                    </>
                  )}
                </select>
              </div>

              <div className="flex gap-8 justify-between">
                <label>Minimum Rental Duration</label>
                <input
                  placeholder="0"
                  onChange={(e) =>
                    handleInputChange(e, selectedPricing, "minDuration")
                  }
                  value={pricing[selectedPricing]?.minDuration}
                  type="text"
                  className=" border rounded-md xs:w-full xxm:w-1/4  flex justify-center items-center outline-none focus:border-blue-500 h-10 px-5 "
                />
              </div>

              <div className="flex gap-8 justify-between">
                <label htmlFor="">Maximum Quantity Per Order</label>
                <input
                  placeholder="0"
                  onChange={(e) =>
                    handleInputChange(e, selectedPricing, "maxDuration")
                  }
                  value={pricing[selectedPricing]?.maxDuration}
                  type="text"
                  className=" border rounded-md xs:w-full xxm:w-1/4  flex justify-center items-center outline-none focus:border-blue-500 h-10 px-5 "
                />
              </div>
              <p className="text-red-500 text-sm w-full items-center flex justify-center">
                {pricing_error_message}
              </p>
            </div>

            <div>
              <div className="flex flex-col ">
                <h2 className="mr-2 text-base font-semibold">
                  Set discount limit
                </h2>
              </div>
              <DiscountComponent
                pricing={pricing[selectedPricing]}
                selectedPricing={selectedPricing}
                setAnyError={setAnyError}
                setPricing={setPricing}
              />
            </div>
          </div>

          {/* rent payment option */}
          <div>
            <div className="rounded-xl border border-blue-400 bg-blue-50 w-full h-fit my-5">
              <div className="w-full h-full p-5 flex">
                <div className="w-full  h-full ">
                  <div className="flex w-full">
                    <div className="w-1/2">
                      <h2 className="font-semibold ">Rent Payment Options</h2>
                      <div className="flex items-center h-10 my-2 text-sm  ">
                        <div>
                          <input
                            id="ripple-on"
                            type="checkbox"
                            label=""
                            ripple={true}
                            checked={paymentOptions?.singlePaymentStatus}
                            onChange={(e) =>
                              setPaymentOptions((prev) => ({
                                ...prev,
                                singlePaymentStatus: e.target.checked,
                              }))
                            }
                            color="blue"
                          />
                        </div>
                        <div>
                          <p className="pl-5">Single payment</p>
                        </div>
                      </div>

                      <div className="flex items-center h-10 my-2 text-sm ">
                        <div>
                          <input
                            id="ripple-on"
                            type="checkbox"
                            label=""
                            ripple={true}
                            checked={paymentOptions?.monthlyPaymentStatus}
                            onChange={(e) =>
                              setPaymentOptions((prev) => ({
                                ...prev,
                                monthlyPaymentStatus: e.target.checked,
                              }))
                            }
                            color="blue"
                          />
                        </div>
                        <div>
                          <p className="pl-5">Monthly payment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-0.5 bg-gray-200"></div>

                  <div className="text-sm text-gray-500">
                    <div className="flex justify-between items-center py-2">
                      <h2>Pay at store</h2>
                      <div className="pl-5">
                        <input
                          type="checkbox"
                          color="blue"
                          checked={paymentOptions?.payAtStore}
                          onChange={(e) =>
                            setPaymentOptions((prev) => ({
                              ...prev,
                              payAtStore: e.target.checked,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <h2>
                        Pay advance online at <br /> the time of booking
                      </h2>
                      <div className="pl-5">
                        <input
                          type="checkbox"
                          color="blue"
                          checked={paymentOptions?.payOnline}
                          onChange={(e) =>
                            setPaymentOptions((prev) => ({
                              ...prev,
                              payOnline: e.target.checked,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="xxs:flex justify-between items-center pt-3 ">
                      <h2>
                        Advance Booking <br /> Amount
                      </h2>
                      <div className="xxs:flex flex-col  justify-center items-center gap-2 xs:pt-2">
                        <div className="py-1 bg-white  border rounded-md w-32 xxs:mx-5  flex justify-center items-center outline-none h-10 border-blue-500 ">
                          <input
                            placeholder=""
                            type="text"
                            maxLength={3}
                            value={paymentOptions?.advanceAmountPercentage}
                            onChange={handleAdvanceAmountPercentage}
                            className=" text-black  rounded-md max-w-20 flex justify-center items-center outline-none focus:border-blue-500 h-9 px-5 "
                          />
                          <p>%</p>
                        </div>
                        <p className="xs:pt-2">₹ 100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* security deposit */}
          {subCategoryData && subCategoryData?.allowToSecurityDeposit && (
            <div className="rounded-xl border border-blue-400 bg-blue-50 w-full h-fit my-5">
              <div className="w-full h-full p-5 flex flex-col">
                <div className="flex items-center">
                  <h2>Security Deposit</h2>
                  <div className="pl-5">
                    <input
                      type="checkbox"
                      color="blue"
                      checked={securityDeposit?.securityDepositStatus}
                      onChange={(e) =>
                        setSecurityDeposit((prev) => ({
                          ...prev,
                          securityDepositStatus: e.target.checked,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="pt-5">
                  <div className="py-1 bg-white border rounded-md w-1/2 flex justify-center items-center outline-none h-10 border-blue-500 ">
                    <input
                      placeholder="Enter Amount"
                      type="text"
                      maxLength={7}
                      value={securityDeposit?.securityDepositAmount}
                      onChange={handleSecurityDeposit}
                      className=" text-black  rounded-md w-full px-3 flex justify-center items-center outline-none focus:border-blue-500 h-9 "
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* delivery service */}
          {subCategoryData && subCategoryData?.allowToDeliveryService && (
            <div className="rounded-xl border border-blue-400 bg-blue-50 w-full h-fit my-5">
              <div className="w-full h-full p-5 flex flex-col">
                <div className="flex items-center">
                  <h2>Delivery Service</h2>
                  <div className="pl-5">
                    <input
                      type="checkbox"
                      color="blue"
                      onChange={(e) =>
                        setDeliveryService((prev) => ({
                          ...prev,
                          deliveryServiceStatus: e.target.checked,
                        }))
                      }
                    />
                  </div>
                </div>
                {deliveryService && deliveryService?.deliveryServiceStatus && (
                  <>
                    <div className=" w-full ">
                      <div className="flex w-fit mr-3 items-center h-10 my-2 text-sm text-gray-500">
                        <h2>Delivery charge</h2>
                      </div>
                      <div className="flex flex-col">
                        {deliveryService &&
                          deliveryService.deliveryCharge.map(
                            (option, index) => (
                              <div
                                className="xxm:flex w-full gap-2"
                                key={index}
                              >
                                <div>
                                  <div className="py-1  mt-3 bg-white  border rounded-md w-fit min-w-40  flex justify-center items-center outline-none h-10 border-blue-500 ">
                                    <input
                                      placeholder=""
                                      type="text"
                                      maxLength={5}
                                      value={option?.start}
                                      onChange={(e) =>
                                        handleDeliveryChargeStart(e, index)
                                      }
                                      className=" text-black  rounded-md w-full flex justify-center items-center outline-none focus:border-blue-500 h-9 px-3 "
                                    />
                                    <p className="text-xs">Km</p>
                                    <input
                                      placeholder=""
                                      type="text"
                                      maxLength={5}
                                      value={option?.end}
                                      onChange={(e) =>
                                        handleDeliveryChargeEnd(e, index)
                                      }
                                      className=" text-black  rounded-md w-full flex justify-center items-center outline-none focus:border-blue-500 h-9 px-3 "
                                    />
                                    <p className="text-xs pr-2">Km</p>
                                  </div>
                                </div>
                                <div className="flex">
                                  <div className="py-1 mt-3 bg-white border rounded-md w-fit min-w-28  flex justify-center items-center outline-none h-10 border-blue-500 ">
                                    <p className="text-xs pl-2">₹</p>
                                    <input
                                      placeholder=""
                                      type="text"
                                      maxLength={5}
                                      value={option?.price}
                                      onChange={(e) =>
                                        handleDeliveryChargePrice(e, index)
                                      }
                                      className=" text-black  rounded-md w-full flex justify-center items-center outline-none focus:border-blue-500 h-9 px-3 "
                                    />
                                  </div>
                                  <div className="flex w-10 h-16 justify-center items-center ">
                                    {" "}
                                    <AiOutlineDelete
                                      className="cursor-pointer"
                                      onClick={() =>
                                        removeDeliveryCharge(index)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </div>

                    <div className="flex  mt-2 ">
                      <button
                        onClick={handleDeliveryChargeAdd}
                        className="w-20 h-10 bg-white hover:bg-gray-50 ml-1 rounded-md border border-gray-200"
                      >
                        + Add
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
        <p className="text-red-500 text-sm w-full items-center flex justify-center">
          {error_message}
        </p>
      </div>

      {/* footer */}
      <div className="xs:h-28 xs:w-full flex text-xl bg-gray-50 font-lato  border-2 rounded-t-3xl items-center justify-around fixed bottom-0 drop-shadow-3xl ">
        <div>
          <button
            className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
        <div>
          <button
            className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default MobProductPricingAndQuantity;
