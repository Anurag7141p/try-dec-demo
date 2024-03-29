import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addressSchema } from "../../../validation/addressValidation";
// import { createOrderApi } from "../../api/orderApi";

const CheckoutMain = () => {
  const checkoutData = useSelector((state) => state?.checkout);

  const { data } = useSelector((state) => state?.userAuth);
  const navigate = useNavigate();
  useEffect(() => {
    const locationAddress =
      checkoutData?.productData[0]?.storeId?.locationAddress;
    const addressParts = locationAddress.split(",");
    if (addressParts.length >= 3) {
      const cityName = addressParts[2].trim();
      setCityName(cityName);
    }
  }, [checkoutData]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [duration, setDuration] = useState();

  const initialValues = {
    landmark: "",
    area: "",
    doorNo: "",
  };
  const [addLocation, setAddLocation] = useState("");
  const [locationClose, setLocationClose] = useState(false);
  const [newLocation, setNewLocation] = useState("");
  const [mapError, SetMapError] = useState("");
  const [addressValues, setAddressValues] = useState({});

  const handleSubmit = (values) => {
    if (addLocation) {
      setNewLocation(addLocation);
      setLocationClose(!locationClose);
      setAddressValues(values);
    } else {
      SetMapError("please select location");
    }
  };

  const parseTime = (timeString) => {
    const [time, meridiem] = timeString.split(" ");
    const [hours, minutes] = time.split(":");
    let parsedHours = parseInt(hours);
    if (meridiem === "PM" && parsedHours !== 12) {
      parsedHours += 12;
    } else if (meridiem === "AM" && parsedHours === 12) {
      parsedHours = 0;
    }
    const date = new Date();
    date.setHours(parsedHours, parseInt(minutes), 0, 0);
    return date.getTime();
  };

  const calculateDuration = () => {
    const startDate = new Date(checkoutData?.pickupDate);
    const endDate = new Date(checkoutData?.dropOffDate);

    const startTime = parseTime(checkoutData?.pickupTime);
    const endTime = parseTime(checkoutData?.dropOffTime);

    // Calculate the difference in milliseconds
    let difference = endDate - startDate + (endTime - startTime);

    // Calculate days and remaining hours
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(difference / (1000 * 60 * 60));

    return `${days} days ${hours} hours`;
  };

  useEffect(() => {
    const result = calculateDuration();
    setDuration(result);
  }, [checkoutData]);

  const [bookingAmount, setBookingAmount] = useState(0);
  useEffect(() => {
    if (checkoutData && checkoutData.productData) {
      const result = checkoutData.productData.reduce(
        (acc, currentItem) => acc + parseFloat(currentItem.productTotalPrice),
        0
      );
      setTotalAmount(result);
      if (
        checkoutData?.productData[0]?.paymentOption === "fullPaymentAdvance"
      ) {
        setBookingAmount(result);
      } else {
        let response = parseFloat(
          result / checkoutData.productData[0]?.advanceAmountPercentage
        );
        setBookingAmount(response);
      }
    }
  }, [checkoutData]);

  const formattedPickupDate = checkoutData.pickupDate
    ? checkoutData.pickupDate.toString().substring(0, 10)
    : "";
  const formattedDropOffDate = checkoutData.dropOffDate
    ? checkoutData.dropOffDate.toString().substring(0, 10)
    : "";

  const [error, setError] = useState("");

  const orderPlacing = async () => {
    console.log(checkoutData);

    const optimizedProductData = checkoutData?.productData?.map((product) => ({
      productId: product._id,
      selectedQuantity: product.selectedQuantity,
      productTotalPrice: product.productTotalPrice,
    }));
    const optimizedOrder = {
      storeId: checkoutData?.productData[0]?.storeId?._id,
      userId: data?._id,
      totalAmount: totalAmount,
      bookingAmount: bookingAmount,
      pickupDate: checkoutData?.pickupDate,
      pickupTime: checkoutData?.pickupTime,
      dropOffDate: checkoutData?.dropOffDate,
      dropOffTime: checkoutData?.dropOffTime,
      productData: optimizedProductData,
      duration: duration,
      gst: (bookingAmount * 18) / 100,
    };
    const response = await createOrderApi(optimizedOrder);
    if (response?.message == "success") {
      navigate(`/chat/${response?.chatId}/${response?.orderId}`);
      return;
    } else {
      setError(response?.message);
    }
  };

  if (checkoutData.storeId == null) {
    navigate(-1);
    return;
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex  p-5 w-[70%] gap-10">
          <div className="flex w-[58%] flex-col gap-6">
            <div>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-700 border-b-2">
                    <th className="flex justify-start">Item Details</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className="">
                  {checkoutData?.productData.map((items) => (
                    <tr key={items?.name}>
                      <td>{items.name}</td>
                      <td className="flex justify-center">
                        {items?.selectedQuantity}
                      </td>
                      <td className="">
                        {`Rs ${parseFloat(
                          items?.productTotalPrice / items?.selectedQuantity
                        )}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="flex flex-col gap-1">
                <div className="flex text-sm  flex-col gap-2">
                  <h1>
                    Pick up : {formattedPickupDate}{" "}
                    <span>{checkoutData?.pickupTime}</span>
                  </h1>
                  <h1>
                    Return :{formattedDropOffDate}{" "}
                    <span>{checkoutData?.dropOffTime}</span>
                  </h1>
                  <h1 className="font-medium">Total Duration: {duration}</h1>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-1 ">
                <div>
                  <h1 className="font-bold text-gray-700">
                    pick up from store
                  </h1>
                </div>
                <div className="flex flex-col gap-1">
                  <h1>kollam</h1>
                  <h1 className="text-blue-500">
                    Exact Pickup location available once order is placed
                  </h1>
                </div>
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </div>

            <div className="border border-gray-300 p-3 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-1 ">
                <div>
                  <h1 className="font-bold text-gray-700">
                    Door step delivery
                  </h1>
                </div>
                {newLocation && addressValues ? (
                  <>
                    <div className="flex flex-col gap-1">
                      <h1>{newLocation}</h1>
                      <h1>{addressValues?.landmark}</h1>
                      <h1>{addressValues?.area}</h1>
                      <h1>{addressValues?.doorNo}</h1>
                    </div>
                    <div>
                      <button
                        className="px-2 py-1 bg-blue-500 text-white rounded-lg"
                        onClick={() => setLocationClose(!locationClose)}
                      >
                        Change
                      </button>
                    </div>
                  </>
                ) : (
                  <div>
                    <button
                      className="px-2 py-1 bg-blue-500 text-white rounded-lg"
                      onClick={() => setLocationClose(!locationClose)}
                    >
                      Add Location
                    </button>
                  </div>
                )}
              </div>
              {newLocation && addressValues ? (
                <div>
                  <input type="checkbox" />
                </div>
              ) : null}
            </div>

            <div>
              <div className="flex flex-col gap-1">
                <div className="border-b-2">
                  <h1 className="font-bold text-gray-700">Payment Terms</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <ul className="font-semibold text-sm list-disc pl-4 w-[60%]">
                    <li>
                      Cancelling before 48 hours:Full amount will be refunded
                    </li>
                    <li>
                      Cancelling before 24 hours:50% of the amount will be
                      refunded
                    </li>
                    <li>Cancelling after 24 hours:No refund</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-1">
                <div className="border-b-2">
                  <h1 className="font-bold  text-gray-700">
                    Store rules & Information
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <h3>
                      <span className="text-sm font-bold">Opening Time:</span>
                      <span className="text-sm">
                        {checkoutData?.productData[0]?.storeId?.openingTime}
                      </span>
                    </h3>
                    <h3 cl>|</h3>
                    <h3>
                      <span className="text-sm font-bold">Closing Time:</span>
                      <span className="text-sm">
                        {checkoutData?.productData[0]?.storeId?.closingTime}
                      </span>
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <h3>
                      <span className="text-sm font-bold">Half Day(rent):</span>
                      <span className="text-sm">7 Hours</span>
                    </h3>
                    <h3 cl>|</h3>
                    <h3>
                      <span className="text-sm font-bold">Full Day(rent):</span>
                      <span className="text-sm">24 Hours</span>
                    </h3>
                  </div>
                  <div className="pl-4">
                    <ul className="flex flex-col font-semibold gap-2 w-[18rem] list-disc text-sm ">
                      {checkoutData?.productData[0]?.storeId?.rules?.map(
                        (rule) => (
                          <li key={rule}>{rule}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-xl h-[95%]  w-[40%] p-10">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-8">
                <h1 className="text-lg font-bold">Order Summary</h1>
                {checkoutData?.productData.map((items) => (
                  <div
                    className="flex flex-col w-full p-1 gap-1"
                    key={items.name}
                  >
                    <div className="border-b-2 p-1">
                      <h1 className="flex justify-between text-gray-500">
                        <span>{items.name} :</span>
                        <span>
                          {items?.selectedQuantity} x{" "}
                          {parseFloat(
                            items?.productTotalPrice / items?.selectedQuantity
                          )}
                        </span>
                      </h1>
                    </div>
                    <h1 className="flex justify-end text-gray-500">{`Rs ${parseFloat(
                      items?.productTotalPrice
                    )}`}</h1>
                    <h1 className="text-gray-500 flex justify-between font-semibold">
                      Booking Amount :
                      {items?.paymentOption == "fullPaymentAdvance" ? (
                        <span>{parseFloat(items?.productTotalPrice)}</span>
                      ) : (
                        <span>
                          {parseFloat(
                            items?.productTotalPrice /
                              items?.advanceAmountPercentage
                          )}
                        </span>
                      )}
                    </h1>
                  </div>
                ))}
                <div className="border-t-2 p-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <h1>Total :</h1>
                      <h1>{totalAmount}</h1>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <h1>Total Booking Amount :</h1>
                      <h1>{bookingAmount}</h1>
                    </div>
                    <div className="flex justify-between">
                      <h1>GST :</h1>
                      {(bookingAmount * 18) / 100}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-green-400 text-white   font-semibold w-[70%] rounded-md py-2"
                  onClick={orderPlacing}
                >
                  {`Rs ${bookingAmount + (bookingAmount * 18) / 100} Connect`}
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-red-500">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* location section */}
      {locationClose ? (
        <div
          className="w-full h-full fixed top-0 left-0 bg-black/50 "
          id="location-section"
        >
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={addressSchema}
          >
            <Form>
              <div
                className={`w-[40%] min-h-screen h-fit bg-white border  flex flex-col gap-10 border-gray-400 px-10 ${
                  locationClose ? "overflow-x-auto" : ""
                }`}
              >
                <div className=" flex justify-end py-5">
                  <IoCloseOutline
                    className="w-7 h-7 bg-red-500 text-white cursor-pointer"
                    onClick={() => setLocationClose(!locationClose)}
                  />
                </div>
                <div className="min-h-full flex flex-col justify-center gap-6 ">
                  <div className="text-xl font-semibold">
                    <h1>Select Delivery Address</h1>
                  </div>
                  <div className="w-full h-full ">
                    <Map mheight={300} setAddLocation={setAddLocation} />
                    {mapError ? (
                      <div className="text-red-600">{mapError}</div>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col gap-3 ">
                  <Field
                    type="text"
                    placeholder="landmark"
                    name="landmark"
                    className="w-full border border-gray-300 rounded-md focus:outline-blue-200 p-2 "
                  />
                  <ErrorMessage
                    name="landmark"
                    component="div"
                    className="text-red-600"
                  />
                  <Field
                    type="text"
                    name="area"
                    placeholder="area"
                    className="w-full border border-gray-300 rounded-md focus:outline-blue-200 p-2 "
                  />
                  <ErrorMessage
                    name="area"
                    component="div"
                    className="text-red-600"
                  />
                  <Field
                    type="text"
                    placeholder="doorNo"
                    name="doorNo"
                    className="w-full border border-gray-300 rounded-md focus:outline-blue-200 p-2 "
                  />
                  <ErrorMessage
                    name="doorNo"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div className="w-full  ">
                  <button
                    className="w-full p-2 bg-green-600 text-white rounded-sm"
                    type="submit"
                  >
                    Save & Proceed
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      ) : null}
    </>
  );
};

export default CheckoutMain;
