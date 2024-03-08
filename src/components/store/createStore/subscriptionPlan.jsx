import React from "react";
import Footer from "../../reusable/footer/footer/footer";
import { GoDot } from "react-icons/go";
import { RxDot } from "react-icons/rx";

const SubscriptionPlan = ({
  isValid,
  pages,
  currentPage,
  handlePrevPage,
  boxTittle,
  boxDiscription,
  buttonText,
  DubbleDiscription,
}) => {
  console.log(currentPage);
  return (
    <>
      <div className="mx-auto  flex  justify-center  items-center xl:min-h-screen  lg:w-full 2xl:w-[1536px] xl:w-full  ">
        <div className="   flex justify-center  px-10 ">
          <div className="bg-white w-full  rounded-lg  overflow-auto">
            <div className="grid grid-cols-9 gap-3">
              <div className="col-span-6 md:col-span-9 xs:col-span-9 text-[14px]  lg:col-span-6  grid grid-cols-6 gap-4  xl:place-items-center lg:place-items-center md:place-items-center  md:h-full py-10">
                <div className="col-span-6 lg:col-span-6 md:col-span-6 xs:col-span-6 flex flex-col gap-6 w-full">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h1 className="font-semibold">
                        Select Your Subscription Plan
                      </h1>
                      <p>
                        Choose the subscription pack that suits your needs and
                        start earning today!
                      </p>
                    </div>
                    <div className="flex flex-col gap-5 md:text-[11px] lg:text-[13px] xl:text-base">
                      <div className="sm:flex   gap-5">
                        <div className="flex flex-col border-green-400 border-2 p-3 w-[25rem] h-auto   rounded-md gap-2 ">
                          <div className="flex justify-between">
                            <div className="flex gap-3">
                              <input
                                name="free"
                                type="radio"
                                defaultChecked
                                disabled
                              />
                              <label name="free" className="font-bold">
                                Free
                              </label>
                            </div>
                            <h1 className="font-bold">Rs 0 /mo.</h1>
                          </div>
                          <div className="flex justify-center p-3">
                            <ul className="list-disc pl-5 ">
                              <li>Start renting without any upfront cost</li>
                              <li>Only 10% commission per order</li>
                              <li>Basic features to get you started</li>
                              <li>Unlimited products</li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex flex-col text-gray-400 border-gray-200 border-2 p-3 w-[25rem] rounded-md gap-2 xs:mt-1 md:mt-0">
                          <div className="flex justify-between">
                            <div className="flex gap-3">
                              <input name="free" type="radio" disabled />
                              <label name="free" className="font-bold">
                                Small Scale
                              </label>
                            </div>
                            <h1 className="font-bold">Rs 1000 /mo.</h1>
                          </div>
                          <div className="flex justify-center p-3">
                            <ul className="list-disc pl-5 ">
                              <li>Maximum of 25 products in your store</li>
                              <li>No additional commission per order</li>
                              <li>
                                Access to basic analytics and reporting tool
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col text-gray-400 border-gray-200 border-2 p-3 w-[25rem] md:w-[24rem] sm:w-[23rem] lg:w-[22rem] xl:w-[25rem] rounded-md gap-2">
                        <div className="flex justify-between">
                          <div className="flex gap-3">
                            <input name="free" type="radio" disabled />
                            <label name="free" className="font-bold">
                              Large Scale
                            </label>
                          </div>
                          <h1 className="font-bold">Rs 4999 /mo.</h1>
                        </div>
                        <div className="flex justify-center p-3">
                          <ul className="list-disc pl-5 ">
                            <li>Maximum of 50 products in your store</li>
                            <li>
                              Full access to analytics and reporting tools{" "}
                            </li>
                            <li>
                              Contact and location access for enhanced
                              communication with customers
                            </li>
                            <li>Priority customer support </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className=" xl:text-[13px] lg:text-[10px] md:text-[8px] xs:text-[5px] ">
                          Note: Prices and features are subject to change.
                          Please refer to the Terms of Service for more details.
                        </p>
                        <p className=" xl:text-[13px] lg:text-[10px] md:text-[8px] xs:text-[5px] ">
                          Start your rental journey with OLAPool today! If you
                          have any questions or need assistance, feel free to
                          contact us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------side bar----------------------------------------------------------------------------                   */}

              <div className="col-span-3 bg-blue-600  xl:min-h-[800px] lg:min-h-screen md:min-h-screen lg:block md:hidden xs:hidden  rounded-2xl px-10 pt-20 text-white">
                <div className="flex flex-col gap-5">
                  <h1 className="font-semibold xl:text-2xl lg:text-2xl md:text-xl xs:text-xl">
                    Free Forever Subscription Dive into Success!
                  </h1>
                  <p className="font-serif xl:text-[13px] lg:text-[9px] md:text-[8px] xs:text-[5px] pt-3">
                    Welcome to Olapool, the ultimate rental marketplace where
                    you can easily create your rental store and list products
                    for users to rent.
                  </p>
                  <h1 className="font-semibold ">Why Choose OLAPool?</h1>
                  <ul className="font-serif xl:text-[13px] lg:text-[9px] md:text-[8px] xs:text-[5px] list-disc">
                    <li>
                      Easy-to-use platform for creating and managing your rental
                      store.
                    </li>
                    <li>Broaden your customer reach and increase revenue.</li>
                    <li>
                      Transparent and competitive pricing with no hidden fees.
                    </li>
                    <li>
                      Regular updates and improvements to enhance your user
                      experience.
                    </li>
                  </ul>
                  <div className="flex justify-normal items-center gap-4">
                    {currentPage == 1 ? (
                      ""
                    ) : (
                      <button
                        type="button"
                        className="bg-blue-500  2xl:px-20 xl:px-14 lg:px-14 md:px-10 w-28 flex justify-center py-2 mt-10  rounded-lg"
                        onClick={handlePrevPage}
                      >
                        Back
                      </button>
                    )}
                    <button
                      type="submit"
                      className="px-8 2xl:px-20 xl:px-14 lg:px-14 md:px-10 w-28 flex justify-center py-2 mt-10 bg-white text-black rounded-lg"
                    >
                      Continue
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    {Array.from({ length: pages }).map((_, index) => (
                      <div key={index} className="outer-circle mr-8 indot">
                        {currentPage == index + 1 ? <GoDot /> : <RxDot />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPlan;
