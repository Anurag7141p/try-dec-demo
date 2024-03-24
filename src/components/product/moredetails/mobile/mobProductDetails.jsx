import React from "react";
import ProductSameStoreList from "./productSameStoreList";
import OwnerProfileReviewsContent from "./ownerProfileReviewsContent";
import { FaRegCalendarAlt } from "react-icons/fa";

const MobProductDetails = ({ data, setDate, date }) => {
  console.log(data);
  // Get the current date
  const currentDate = new Date();

  // Extract day, month, and year
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Adding 1 because months are zero-indexed
  const year = currentDate.getFullYear() % 100; // Get last two digits of the year

  // Pad day and month with leading zeros if necessary
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Format the date as dd/mm/yy
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
  return (
    <div className="h-auto w-full bg-white rounded-t-3xl pb-32">
      <div className="px-5 pt-10 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl">{data.name}</h1>
          <div className="flex gap-3 ">
            <h1 className="text-gray-500 line-through">₹1500</h1>
            <h1>₹1500 per hour</h1>
          </div>
          <div className="flex gap-3 ">
            <h1 className="text-gray-500 line-through">₹1500</h1>
            <h1>₹1500 per day</h1>
          </div>
          <div className="flex gap-3 ">
            <h1 className="text-gray-500 line-through">₹1500</h1>
            <h1>₹1500 per month</h1>
          </div>
          <div>
            <h1 className="text-gray-500 text-sm pt-4">
              Listed by{" "}
              <span className="text-blue-500">
                @{data.storeId.userId.firstName}{" "}
              </span>
            </h1>
            <h1 className="text-sm">{data.storeId.locationAddress}</h1>
          </div>
        </div>
        <div className="w-full  border"></div>
        <div className="flex flex-col gap-3">
          <div className="flex  justify-between w-full gap-3">
            <div className="w-1/2">
              <h1>Pickup Date</h1>
              <button
                onClick={() => setDate(!date)}
                className="border border-gray-300 rounded-lg flex justify-between items-center gap-4 p-2 w-full"
              >
                <p>{formattedDate}</p>
                <p>
                  <FaRegCalendarAlt />
                </p>
              </button>
            </div>
            <div className="w-1/2">
              <h1>Pickup Date</h1>
              <button
                onClick={() => setDate(!date)}
                className="border border-gray-300 rounded-lg flex justify-between items-center gap-4 p-2 w-full"
              >
                <p>{formattedDate}</p>
                <p>
                  <FaRegCalendarAlt />
                </p>
              </button>
            </div>
          </div>
          <div className="flex  justify-between w-full gap-3">
            <div className="w-1/2">
              <h1>Return Date</h1>
              <button
                onClick={() => setDate(!date)}
                className="border border-gray-300 rounded-lg flex justify-between items-center gap-4 p-2 w-full"
              >
                <p>{formattedDate}</p>
                <p>
                  <FaRegCalendarAlt />
                </p>
              </button>
            </div>
            <div className="w-1/2">
              <h1>Return Date</h1>
              <button
                onClick={() => setDate(!date)}
                className="border border-gray-300 rounded-lg flex justify-between items-center gap-4 p-2 w-full"
              >
                <p>{formattedDate}</p>
                <p>
                  <FaRegCalendarAlt />
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="text-[15px] flex flex-col gap-2 text-gray-600 pt-4">
          <h1 className="font-semibold text-gray-800 text-xl">
            Product Details
          </h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              totam mollitia iste vel voluptatibus quod deleniti, reprehenderit
              sequi corrupti nulla! Ipsa, perspiciatis suscipit tenetur fugiat
              sequi fuga? Ea, nemo recusandae!
            </p>
          </div>
          <p>* Canon d3200 </p>
          <p>* Model 2323</p>
          <p>* Color: black</p>
          <p>Insurance: yes</p>
          <p>Certified : yes</p>
        </div>

        <div className="w-full  border"></div>
        <div className="flex flex-col gap-2 pt-4">
          <h1 className="font-semibold text-gray-800 text-xl">
            Store rules & information
          </h1>
          <div className="text-gray-500 text-[15px]">
            <p>
              Opening Time : {data.storeId.openingTime}{" "}
              <span className="px-3">|</span> Closing Time :{" "}
              {data.storeId.closingTime}
            </p>
          </div>
          <div className="px-2 text-[15px] w-full">
            <ul className="list-disc pl-6">
              <li>
                Passport, Adhaar, Driving license, and Gov.Id are accepted as ID
                proof
              </li>
              <li>
                Documents should be carried with you while collecting pickup
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-5">
          <h1 className="text-xl   text-gray-500">Product From Same Store</h1>
          <ProductSameStoreList />
        </div>
        <div>
          <OwnerProfileReviewsContent />
        </div>
      </div>
    </div>
  );
};

export default MobProductDetails;
