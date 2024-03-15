import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { addressSchema } from "../../../validation/addressValidation";
import Map from "../../map/map";

const NewCheckout = ({ setLocationClose, locationClose }) => {
  const initialValues = {
    landmark: "",
    area: "",
    doorNo: "",
  };
  const [addLocation, setAddLocation] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [mapError, SetMapError] = useState("");
  const [addressValues, setAddressValues] = useState({});
  const [showLocation, setShowLocation] = useState(false);
  const [changeBtn, setChangeBtn] = useState(false);

  const handleSubmit = (values) => {
    if (addLocation) {
      setNewLocation(addLocation);
      setAddressValues(values);
      setShowLocation(!showLocation);
    } else {
      SetMapError("please select location");
    }
  };

  return (
    <div className="w-full h-screen fixed  top-0 right-0 bg-black/50  z-50 overflow-y-auto">
      <div
        className={`w-[40%] absolute right-0 min-h-screen h-fit bg-white border border-gray-400`}
      >
        <div className="px-8 flex justify-end py-8">
          <IoCloseOutline
            className="w-7 h-7 bg-red-500 text-white cursor-pointer"
            onClick={() => setLocationClose(!locationClose)}
          />
        </div>
        <div className="min-h-full flex flex-col justify-center gap-6 px-10">
          <div>
            <div className="flex w-full flex-col gap-6">
              <div className="  rounded-md py-4 px-5">
                <table className="w-full ">
                  <thead>
                    <tr className="text-gray-700 border-b-2 font-semibold">
                      <td>Item Details</td>
                      <td>Qty</td>
                      <td>Price</td>
                    </tr>
                  </thead>
                  <tbody className="border-b-2">
                    <tr>
                      <td className="px-2 py-2">1</td>
                      <td className="px-2 py-2">Sony D2300</td>
                      <td className="px-2 py-2">₹1560.00</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2">2</td>
                      <td className="px-2 py-2">nikon d3200</td>
                      <td className="px-2 py-2">₹15300</td>
                    </tr>
                  </tbody>
                  <tr>
                    <td className="px-2 py-2">Total</td>
                    <td className="px-2 py-2"></td>
                    <td className="px-2 py-2">₹133300</td>
                  </tr>
                </table>
              </div>
              <div className="flex justify-center items-center">
                <button className="p-2 w-[70%] bg-blue-600 text-white rounded-md font-semibold">
                  Connect
                </button>
              </div>
              <div className="pt-3 ">
                <div className="flex flex-col gap-1">
                  <h1 className="border-b-2 text-base font-semibold">
                    Duration Details
                  </h1>
                  <div className="flex text-sm  flex-col gap-2 text-gray-600">
                    <h1>
                      PickUp : 28-02-2024 <span> 10:53AM</span>
                    </h1>
                    <h1>
                      Return : 30-02-2024 <span>10:53AM</span>
                    </h1>
                    <h1 className="font-black ">
                      Total Duration: 5days 3Hours
                    </h1>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-3 border border-blue-300 rounded-lg flex justify-between items-center">
                <div className="flex flex-col gap-1 ">
                  <div>
                    <h1 className="font-black text-base">pick up from store</h1>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1>kollam</h1>
                    <h1 className="text-blue-500">
                      Exact Pickup location available once order is placed
                    </h1>
                  </div>
                </div>
                <div>
                  <input type="radio" class="form-radio" name="location" checked/>
                </div>
              </div>

              <div className="border border-gray-300 p-3 w-full  rounded-lg flex justify-between items-center">
                <div className="flex flex-col gap-1 w-full">
                  <div>
                    <h1 className="font-bold">Door step delivery</h1>
                  </div>
                  {newLocation && addressValues && (
                    <>
                      <div className="flex flex-col gap-1 text-sm">
                        <h1>{newLocation}</h1>
                        <h1>{addressValues?.landmark}</h1>
                        <h1>{addressValues?.area}</h1>
                        <h1>{addressValues?.doorNo}</h1>
                      </div>
                    </>
                  )}

                  {showLocation ? (
                    <Formik
                      initialValues={initialValues}
                      onSubmit={handleSubmit}
                      validationSchema={addressSchema}
                    >
                      <Form>
                        <>
                          <div className=" flex flex-col gap-4">
                            <div className="min-h-full flex flex-col justify-center gap-6 ">
                              <div className="w-full h-full ">
                                <Map
                                  mheight={300}
                                  setAddLocation={setAddLocation}
                                />
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
                                className="w-full p-2 bg-blue-600 text-white rounded-md py-2 font-semibold "
                                type="submit"
                              >
                                Save & Proceed
                              </button>
                            </div>
                            <div className="w-full  ">
                              <button
                                type="button"
                                className="w-full p-2 bg-red-600 text-white rounded-md py-2 font-semibold "
                                onClick={() => setShowLocation(!showLocation)}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      </Form>
                    </Formik>
                  ) : addressValues && newLocation ? (
                    <div>
                      <button
                        className="px-5 text-sm py-2 bg-blue-500 text-white rounded-lg"
                        onClick={() => setShowLocation(!showLocation)}
                      >
                        Change
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        className="px-5 text-sm py-2 bg-blue-500 text-white rounded-lg"
                        onClick={() => setShowLocation(!showLocation)}
                      >
                        Add Location
                      </button>
                    </div>
                  )}
                </div>
                {newLocation && addressValues && showLocation !== true ? (
                  <div>
                    <input type="radio" class="form-radio" name="location" />
                  </div>
                ) : null}
              </div>

              <div>
                <div className="flex flex-col gap-1">
                  <div className="border-b-2">
                    <h1 className="font-black">Payment Terms</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <ul className="font-semibold text-sm list-disc pl-4 w-[80%]">
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
                          7 AM
                        </span>
                      </h3>
                      <h3 cl>|</h3>
                      <h3>
                        <span className="text-sm font-bold">Closing Time:</span>
                        <span className="text-sm">
                          {/* {checkoutData?.productData[0]?.storeId?.closingTime} */}
                          9 PM
                        </span>
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <h3>
                        <span className="text-sm font-bold">
                          Half Day(rent):
                        </span>
                        <span className="text-sm">7 Hours</span>
                      </h3>
                      <h3 cl>|</h3>
                      <h3>
                        <span className="text-sm font-bold">
                          Full Day(rent):
                        </span>
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
          </div>
          <div className="w-full h-full ">{/* <Map mheight={300} /> */}</div>
        </div>
      </div>
      <div
        className="w-[60%] h-screen"
        onClick={() => setLocationClose(!locationClose)}
      ></div>
    </div>
  );
};

export default NewCheckout;
