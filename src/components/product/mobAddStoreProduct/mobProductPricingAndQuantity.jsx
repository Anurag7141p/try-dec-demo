import React from "react";
import DiscountComponent from "./discountComponent";
import { AiOutlineDelete } from "react-icons/ai";

const MobProductPricingAndQuantity = ({ setPage, page }) => {
  const prev = () => {
    setPage(page - 1);
  };
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-full sm:h-54 h-52 pt-10 text-white  bg-blue-600   flex flex-col gap-6 justify-center pb-10 px-5 rounded-b-3xl">
          <h1 className="text-xl font-semibold">Product Pricing </h1>
          <p className="text-md">
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
          <div className="flex gap-5 text-2xl">
            <label>Manage Quantity</label>
            <input type="checkbox" className="w-4" />
          </div>
          <div className="pt-4 text-gray-600 text-base">
            <p>
              Ensure that all products in this quantity have the same color,
              size, measurements,
              <br /> quality, and condition.
            </p>
          </div>
          <div className="border border-blue-400 bg-blue-100  rounded-lg px-2 py-5 w-full">
            <div className=" flex flex-col gap-4">
              <div className="flex gap-4 justify-between">
                <label htmlFor="" className="text-base">Available Quantity</label>
                <input
                  type="number"
                  className="w-1/5 p-2 h-10 border border-blue-400 rounded-lg  outline-blue-300"
                />
              </div>

              <div className="flex gap-4 justify-between">
                <label>Minimum Quantity Per Order</label>
                <input
                  type="number"
                  className="w-1/5 p-1  h-10 border border-blue-400 rounded-lg  outline-blue-300"
                />
              </div>

              <div className="flex gap-4 justify-between">
                <label htmlFor="">Maximum Quantity Per Order</label>
                <input
                  type="number"
                  className="w-1/5 p-2 h-10 border border-blue-400 rounded-lg  outline-blue-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* pricing */}
        <div className=" ">
          <div className="flex items-center">
            <h2 className="mr-2 text-lg font-semibold">Pricing</h2>
          </div>

          <div className="pt-2 text-sm">
            <div className="flex justify-between items-center w-full gap-2 xm:w-[70%] xs:w-full">
              <div>
                <img
                  // src={EditIcon}
                  alt="icon"
                  className="cursor-pointer"
                  // onClick={() => setSelectedPricing(key)}
                />
              </div>
              <div className="pl-5 fles justify-start items-start w-28">
                <p>₹ 000</p>
              </div>
              <div>Hourly</div>
              <div >Hourly</div>
            </div>
          </div>

          <div className="rounded-xl border border-blue-400 bg-blue-50 w-full h-fit my-5 px-5 py-5">
            <div className=" flex flex-col gap-4">
              <div className="flex gap-8 justify-between">
                <div className="py-1 bg-white  border rounded-md w-40 flex justify-center items-center outline-none h-10 border-blue-500 ">
                  <p className="pl-1">₹</p>
                  <input
                    placeholder="0.00"
                    type="text"
                    // maxLength={5}
                    // onChange={(e) =>
                    //   handleInputChange(e, selectedPricing, "amount")
                    // }
                    // value={pricing[selectedPricing]?.amount}
                    className=" text-black  rounded-md w-full flex justify-center items-center outline-none focus:border-blue-500 h-9 px-3 "
                  />
                </div>
                <select
                  className=" text-xs border rounded-md w-full xs:w-full xxm:w-1/4  flex justify-center items-center outline-none focus:border-blue-500 h-10 px-2"
                  // value={selectedPricing}
                  // onChange={handleSelectChange}
                >
                  <>
                    <option value="hourlyPricing">Per Hour</option>
                    <option value="dayPricing">Per Day</option>
                    <option value="monthlyPricing">Per Month</option>
                  </>
                </select>
              </div>

              <div className="flex gap-8 justify-between">
                <label>Minimum Rental Duration</label>
                <input
                  placeholder="0"
                  // onChange={(e) =>
                  //   handleInputChange(
                  //     e,
                  //     selectedPricing,
                  //     "minDuration"
                  //   )
                  // }
                  // value={pricing[selectedPricing]?.minDuration}
                  type="text"
                  className=" border rounded-md xs:w-full xxm:w-1/4  flex justify-center items-center outline-none focus:border-blue-500 h-10 px-5 "
                />
              </div>

              <div className="flex gap-8 justify-between">
                <label htmlFor="">Maximum Quantity Per Order</label>
                <input
                  placeholder="0"
                  // onChange={(e) =>
                  //   handleInputChange(
                  //     e,
                  //     selectedPricing,
                  //     "maxDuration"
                  //   )
                  // }
                  // value={pricing[selectedPricing]?.maxDuration}
                  type="text"
                  className=" border rounded-md xs:w-full xxm:w-1/4  flex justify-center items-center outline-none focus:border-blue-500 h-10 px-5 "
                />
              </div>
              <p className="text-red-500 text-sm w-full items-center flex justify-center">
                {/* {pricing_error_message} */}
              </p>
            </div>

            <div>
              <div className="flex flex-col ">
                <h2 className="mr-2 text-base font-semibold">
                  Set discount limit
                </h2>
              </div>
              <DiscountComponent
              // pricing={pricing[selectedPricing]}
              // selectedPricing={selectedPricing}
              // setAnyError={setAnyError}
              // setPricing={setPricing}
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
                            // ripple={true}
                            // checked={paymentOptions?.singlePaymentStatus}
                            // onChange={(e) =>
                            //   setPaymentOptions((prev) => ({
                            //     ...prev,
                            //     singlePaymentStatus: e.target.checked,
                            //   }))
                            // }
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
                            // ripple={true}
                            // checked={paymentOptions?.monthlyPaymentStatus}
                            // onChange={(e) =>
                            //   setPaymentOptions((prev) => ({
                            //     ...prev,
                            //     monthlyPaymentStatus: e.target.checked,
                            //   }))
                            // }
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
                          // checked={paymentOptions?.payAtStore}
                          // onChange={(e) => setPaymentOptions((prev) => ({ ...prev, payAtStore: e.target.checked }))}
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
                          // checked={paymentOptions?.payOnline}
                          // onChange={(e) => setPaymentOptions((prev) => ({ ...prev, payOnline: e.target.checked }))}
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
                            // value={paymentOptions?.advanceAmountPercentage}
                            // onChange={handleAdvanceAmountPercentage}
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
          <div className="rounded-xl border border-blue-400 bg-blue-50 w-full h-fit my-5">
            <div className="w-full h-full p-5 flex flex-col">
              <div className="flex items-center">
                <h2>Security Deposit</h2>
                <div className="pl-5">
                  <input
                    type="checkbox"
                    color="blue"
                    // checked={securityDeposit?.securityDepositStatus}
                    // onChange={(e) =>
                    //   setSecurityDeposit((prev) => ({
                    //     ...prev,
                    //     securityDepositStatus: e.target.checked,
                    //   }))
                    // }
                  />
                </div>
              </div>

              <div className="pt-5">
                <div className="py-1 bg-white border rounded-md w-1/2 flex justify-center items-center outline-none h-10 border-blue-500 ">
                  <input
                    placeholder="Enter Amount"
                    type="text"
                    // value={securityDeposit?.securityDepositAmount}
                    // onChange={handleSecurityDeposit}
                    className=" text-black  rounded-md w-full px-3 flex justify-center items-center outline-none focus:border-blue-500 h-9 "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* delivery service */}
          <div className="rounded-xl border border-blue-400 bg-blue-50 w-full h-fit my-5">
            <div className="w-full h-full p-5 flex flex-col">
              <div className="flex items-center">
                <h2>Delivery Service</h2>
                <div className="pl-5">
                  <input
                    type="checkbox"
                    color="blue"
                    // onChange={(e) =>
                    //   setDeliveryService((prev) => ({
                    //     ...prev,
                    //     deliveryServiceStatus: e.target.checked,
                    //   }))
                    // }
                  />
                </div>
              </div>
              <>
                <div className=" w-full ">
                  <div className="flex w-fit mr-3 items-center h-10 my-2 text-sm text-gray-500">
                    <h2>Delivery charge</h2>
                  </div>
                  <div className="flex flex-col">
                    <div className="xxm:flex w-full gap-2">
                      <div>
                        <div className="py-1  mt-3 bg-white  border rounded-md w-fit min-w-40  flex justify-center items-center outline-none h-10 border-blue-500 ">
                          <input
                            placeholder=""
                            type="text"
                            className=" text-black  rounded-md w-full flex justify-center items-center outline-none focus:border-blue-500 h-9 px-3 "
                          />
                          <p className="text-xs">Km</p>
                          <input
                            placeholder=""
                            type="text"
                            maxLength={5}
                            // value={option?.end}
                            // onChange={(e) => handleDeliveryChargeEnd(e, index)}
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
                            // value={option?.price}
                            // onChange={(e) =>
                            //   handleDeliveryChargePrice(e, index)
                            // }
                            className=" text-black  rounded-md w-full flex justify-center items-center outline-none focus:border-blue-500 h-9 px-3 "
                          />
                        </div>
                        <div className="flex w-10 h-16 justify-center items-center ">
                          {" "}
                          <AiOutlineDelete
                            className="cursor-pointer"
                            // onClick={() => removeDeliveryCharge(index)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex  mt-2 ">
                  <button
                    // onClick={handleDeliveryChargeAdd}
                    className="w-20 h-10 bg-white hover:bg-gray-50 ml-1 rounded-md border border-gray-200"
                  >
                    + Add
                  </button>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="xs:h-28 xs:w-full flex text-xl bg-gray-50 font-lato  border-2 rounded-t-3xl items-center justify-around fixed bottom-0 drop-shadow-3xl ">
        <div>
          <button
            className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
            onClick={prev}
          >
            Back
          </button>
        </div>
        <div>
          <button className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default MobProductPricingAndQuantity;
