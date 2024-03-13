import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Map from "../../map/map";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addressSchema } from "../../../validation/addressValidation";

const CheckoutDemo = () => {
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
                  {/* {checkoutData?.productData.map((items) => ( */}
                  <tr>
                    <td>iphone</td>
                    <td className="flex justify-center">2</td>
                    <td className="">2000</td>
                  </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </div>
            <div>
              <div className="flex flex-col gap-1">
                <div className="flex text-sm  flex-col gap-2">
                  <h1>
                    Pick up :<span>11:00</span>
                  </h1>
                  <h1>
                    Return :11:22 <span>202:@</span>
                  </h1>
                  <h1 className="font-medium">Total Duration: </h1>
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
                <input type="radio" class="form-radio" name="location" />
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
                    <div className="flex flex-col gap-1 text-sm">
                      <h1>{newLocation}</h1>
                      <h1>{addressValues?.landmark}</h1>
                      <h1>{addressValues?.area}</h1>
                      <h1>{addressValues?.doorNo}</h1>
                    </div>
                    <div>
                      <button
                        className="px-5 text-sm py-2 bg-blue-500 text-white rounded-lg"
                        onClick={() => setLocationClose(!locationClose)}
                      >
                        Change
                      </button>
                    </div>
                  </>
                ) : (
                  <div>
                    <button
                      className="px-5 text-sm py-2 bg-blue-500 text-white rounded-lg"
                      onClick={() => setLocationClose(!locationClose)}
                    >
                      Add Location
                    </button>
                  </div>
                )}
              </div>
              {newLocation && addressValues ? (
                <div>
                  <input type="radio" class="form-radio" name="location" />
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
                        {/* {checkoutData?.productData[0]?.storeId?.openingTime} */}
                      </span>
                    </h3>
                    <h3 cl>|</h3>
                    <h3>
                      <span className="text-sm font-bold">Closing Time:</span>
                      <span className="text-sm">
                        {/* {checkoutData?.productData[0]?.storeId?.closingTime} */}
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
                      {/* {checkoutData?.productData[0]?.storeId?.rules?.map(
                      (rule) => (
                        <li key={rule}>{rule}</li>
                      )
                    )} */}
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
                {/* {checkoutData?.productData.map((items) => ( */}
                <div className="flex flex-col w-full p-1 gap-1">
                  <div className="border-b-2 p-1">
                    <h1 className="flex justify-between text-gray-500">
                      <span>hd</span>
                      <span>2222</span>
                    </h1>
                  </div>
                  <h1 className="flex justify-end text-gray-500">22</h1>
                  <h1 className="text-gray-500 flex justify-between font-semibold">
                    Booking Amount : sdfdf
                  </h1>
                </div>

                <div className="border-t-2 p-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <h1>Total :</h1>
                      <h1>3232</h1>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <h1>Total Booking Amount :</h1>
                      <h1>2323</h1>
                    </div>
                    <div className="flex justify-between">
                      <h1>GST :</h1>
                      232
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-green-400 text-white   font-semibold w-[70%] rounded-md py-2"
                  // onClick={orderPlacing}
                >
                  2323
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-red-500">232</p>
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
                  locationClose ? "overflow-x-auto " : ""
                }`}
              >
                <div className=" flex justify-end py-5">
                  <IoCloseOutline
                    className="w-7 h-7 bg-red-500 text-white cursor-pointer"
                    onClick={() => setLocationClose(!locationClose)}
                  />
                </div>
                <div className="px-16 flex flex-col gap-4">
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
                      className="w-full border border-gray-300  focus:outline-blue-200 p-2 py-2 px-4"
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
                      className="w-full border border-gray-300  focus:outline-blue-200 p-2 py-2 px-4"
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
                      className="w-full border border-gray-300  focus:outline-blue-200 p-2 py-2 px-4"
                    />
                    <ErrorMessage
                      name="doorNo"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className="w-full  ">
                    <button
                      className="w-full p-2 bg-green-600 text-white rounded-md py-3 font-semibold "
                      type="submit"
                    >
                      Save & Proceed
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      ) : null}
    </>
  );
};

export default CheckoutDemo;
