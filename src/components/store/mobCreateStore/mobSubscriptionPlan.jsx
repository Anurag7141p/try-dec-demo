import React from "react";

const MobSubscriptionPlan = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-full sm:h-52 min-h-40 pt-3 text-white  bg-blue-600   flex flex-col gap-4 justify-center pb-5 px-5 rounded-b-3xl">
          <img
            src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710520065/trydec/olapoolimage.png"
            alt=""
            className="w-1/4"
          />
          <h1 className="text-xl font-semibold">Create your Inventory </h1>
          <p className="text-md">
            Add all the Items you would like to host in your rental store.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 w-full h-2 bg-white rounded"></div>
            <div className="col-span-1 w-full h-2  rounded bg-white"></div>
            <div className="col-span-1 w-full h-2   rounded bg-white"></div>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="w-full px-8 py-5 pt-5 flex flex-col gap-4 z-10 pb-32">
        <div className="w-full flex flex-col gap-2">
          <p className="font-semibold text-lg">Select your Subscription plan</p>
          <p className="text-base">
            Choose the subscription pack that suits your needs and start earning
            today!
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex flex-col  border-green-400 border-2 p-2  h-auto   rounded-md gap-2 ">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <input name="free" type="radio" defaultChecked disabled />
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

          <div className="flex flex-col text-gray-400 border-gray-200 border-2 p-2  rounded-md gap-2  ">
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
                <li>Access to basic analytics and reporting tool</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col text-gray-400 border-gray-200 border-2 p-2  rounded-md gap-2">
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
                <li>Full access to analytics and reporting tools </li>
                <li>
                  Contact and location access for enhanced communication with
                  customers
                </li>
                <li>Priority customer support </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-sm pt-3">
          <p>
            Note: Prices and features are subject to change. Please refer to the
            Terms of Service for more details. Start your rental journey with
            olapool today! If you have any questions or need assistance, feel
            free to contact us.
          </p>
        </div>
      </div>

      {/* footer */}
      <div className="xs:h-24 xs:w-full flex text-lg bg-gray-50 font-lato  border-2 rounded-t-3xl items-center justify-around fixed bottom-0 drop-shadow-3xl ">
        <div>
          <button
            className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
            type="submit"
          >
            Finish
          </button>
        </div>
      </div>
    </>
  );
};

export default MobSubscriptionPlan;
