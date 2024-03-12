import React, { useState, useEffect } from "react";
import moment from "moment";
import { IoCloseOutline } from "react-icons/io5";
import Map from "../../map/map";

function Checkout() {
  const [productDetails, setProductDetails] = useState([
    {
      name: "Sony a7m3 body",
      price: "780",
      quantity: "2",
    },
    {
      name: "Tripod",
      price: "500.00",
      quantity: "1",
    },
  ]);

  const [orderDetails, setOrderDetails] = useState([
    {
      pickupDate: "28-02-2024",
      pickupTime: "10:54AM",
      ReturnDate: "01-03-2024",
      ReturnTime: "9:00AM",
      place: "Edapally,Ernakulam",
    },
  ]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [duration, setDuration] = useState();
  const [locationClose, setLocationClose] = useState(true);

  useEffect(() => {
    // Calculate total amount including booking and GST
    const totalBookingAmount = productDetails.reduce(
      (acc, item) => acc + parseFloat(item.bookingAmount),
      0
    );

    const gstAmount = calculateGST(calculateTotal());

    setTotalAmount(totalBookingAmount + gstAmount);

    // Calculate duration
    const pickupDateTime = moment(
      `${orderDetails[0].pickupDate} ${orderDetails[0].pickupTime}`,
      "DD-MM-YYYY hh:mmA"
    );
    const returnDateTime = moment(
      `${orderDetails[0].ReturnDate} ${orderDetails[0].ReturnTime}`,
      "DD-MM-YYYY hh:mmA"
    );

    const duration = moment.duration(returnDateTime.diff(pickupDateTime));
    const days = duration.days();
    const hours = duration.hours();

    setDuration(`${days} days ${hours} hours`);
  }, [productDetails, orderDetails]);

  // Calculate total amount
  const calculateTotal = () => {
    let totalAmount = 0;
    productDetails.forEach((item) => {
      totalAmount += parseFloat(item.price) * parseInt(item.quantity);
    });
    return totalAmount;
  };

  const BookingTotal = () => {
    let totalBookingAmount = 0;
    productDetails.forEach((item) => {
      totalBookingAmount += parseFloat(item.bookingAmount);
    });
    return totalBookingAmount;
  };

  // Calculate GST (assuming GST is 2%)
  const calculateGST = (totalAmount) => {
    const gstPercentage = 2; // Change this as needed
    const gstAmount = (gstPercentage / 100) * totalAmount;
    return gstAmount;
  };

  useEffect(() => {
    // Calculate booking amount and update productDetails state
    setProductDetails((prevProductDetails) => {
      const updatedProductDetails = prevProductDetails.map((item) => {
        const totalAmount = parseFloat(item.price) * parseInt(item.quantity);
        const bookingAmount = 0.1 * totalAmount; // 30% of the total amount
        return { ...item, bookingAmount };
      });
      return updatedProductDetails;
    });
  }, []); // Remove productDetails from the dependency array

  return (
    <>
      <div className={`h-screen ${locationClose ? "overflow-hidden" : ""}`}>
        {/* checkout section */}
        <div
          className={`w-full h-full px-20 text-base ${
            locationClose ? "pointer-events-none overflow-hidden" : ""
          }`}
        >
          <div className="flex w-full    min-h-screen h-fit py-10">
            <div className="w-3/5 flex justify-end items-center md:pr-5 lg:pr-20 ">
              <div className="border border-gray-400 p-10 rounded-lg">
                <div className="flex flex-col gap-6">
                  <div>
                    <table className="w-full border-spacing-3">
                      <thead>
                        <tr className="text-gray-700 border-b-2">
                          <th className="flex justify-start">Item Details</th>
                          <th>Qty</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productDetails.map((items) => (
                          <tr key={items.name}>
                            <td className="p-2">{items.name}</td>
                            <td className="flex justify-center p-2">
                              {items.quantity}
                            </td>
                            <td className="p-2">
                              {" "}
                              {`Rs ${
                                parseFloat(items.price) *
                                parseInt(items.quantity)
                              }`}
                            </td>
                            <td className="p-2">
                              <button className="bg-red-500 text-white rounded-md outline-none px-1">
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    {orderDetails.map((Product) => (
                      <div className="flex flex-col gap-1">
                        <div className="border-b-2">
                          <h1 className="font-bold text-gray-700">
                            Duration Details
                          </h1>
                        </div>
                        <div className="flex   flex-col gap-2">
                          <h1>
                            Pick up : {Product.pickupDate}{" "}
                            <span>{Product.pickupTime}</span>
                          </h1>
                          <h1>
                            Return :{Product.ReturnDate}{" "}
                            <span>{Product.ReturnTime}</span>
                          </h1>
                          <h1 className="font-medium">
                            Total Duration: {duration}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="w-full bg-gray-200 flex justify-between items-center p-2 rounded-md">
                      <div className=" lg:text-[12px] xl:text-[12px]">
                        <h1 className="font-bold text-gray-700">
                          Pick Up From Store
                        </h1>
                        <h1>Edapally,Ernakulam</h1>
                        <h1 className="text-blue-500">
                          Exact Pickup location available once order is placed
                        </h1>
                      </div>
                      <div>
                        <input type="checkbox" />
                      </div>
                    </div>
                    <div className="w-full border border-gray-300 flex justify-between  items-center p-2 gap-10 rounded-md">
                      <div className=" lg:text-[12px] xl:text-[12px] flex flex-col gap-2">
                        <h1 className="font-bold text-gray-700 capitalize">
                          Door step delivery
                        </h1>
                        <h1>
                          hotel kkc,panvel,navi mumbai,maharashtra 410928,india
                        </h1>
                        <button className="bg-blue-500  max-w-16 min-h-8 text-white rounded-md">
                          Exact
                        </button>
                      </div>
                      <div>
                        <input type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-1">
                      <div className="border-b-2">
                        <h1 className="font-bold text-gray-700">
                          Payment Terms
                        </h1>
                      </div>
                      <div className="flex flex-col gap-2">
                        <ul className="font-semibold text-[12px] list-disc pl-4 lg:w-[70%] xl:w-[70%] md:w-[90%]">
                          <li>
                            Cancelling before 48 hours:Full amount will be
                            refunded
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
                      <div className="flex flex-col gap-2 text-[13px]">
                        <div className="flex gap-3">
                          <h3 className="flex gap-2">
                            <span className=" font-bold">
                              Opening Time&nbsp;&nbsp;:
                            </span>
                            <span>7 AM</span>
                          </h3>
                          <h3 cl>|</h3>
                          <h3 className="flex gap-2">
                            <span className=" font-bold">
                              Closing Time &nbsp;&nbsp;:
                            </span>
                            <span className="">9 PM</span>
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          <h3 className="flex gap-2">
                            <span className=" font-bold">
                              Half Day(rent)&nbsp;&nbsp;:
                            </span>
                            <span className="">7 Hours</span>
                          </h3>
                          <h3>|</h3>
                          <h3>
                            <span className=" font-bold">
                              Full Day(rent)&nbsp;&nbsp;:
                            </span>
                            <span className="">&nbsp;&nbsp;24 Hours</span>
                          </h3>
                        </div>
                        <div className="pl-4">
                          <ul className="flex flex-col font-semibold gap-2 w-[18rem] list-disc  ">
                            <li>
                              Rs100 will be charged in addition in case of
                              product return is delayed
                            </li>
                            <li>
                              Document Should be carried with you while
                              collecting pickup
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5  flex justify-start  items-center  text-[13px]">
              <div className=" border border-gray-400 p-10 md:p-5 lg:p-10 rounded-lg ">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-8">
                    <h1 className="text-lg font-bold">Order Summary</h1>
                    {productDetails.map((items) => (
                      <div
                        className="flex flex-col w-full p-1 gap-1"
                        key={items.name}
                      >
                        <div className="border-b-2 p-1">
                          <h1 className="flex justify-between text-gray-500">
                            <span>{items.name} :</span>
                            <span>
                              {items.quantity} x {items.price}
                            </span>
                          </h1>
                        </div>
                        <h1 className="flex justify-end text-gray-500">{`Rs ${
                          parseFloat(items.price) * parseInt(items.quantity)
                        }`}</h1>
                        <h1 className="text-gray-500 flex justify-between font-semibold">
                          Booking Amount :
                          <span>
                            {items.bookingAmount
                              ? `Rs ${items.bookingAmount.toFixed(2)}`
                              : "N/A"}
                          </span>
                        </h1>
                      </div>
                    ))}
                    <div className="border-t-2 p-2">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                          <h1>Total :</h1>
                          <h1>{`Rs ${calculateTotal().toFixed(2)}`}</h1>
                        </div>
                        <div className="flex justify-between gap-5">
                          <h1>Total Booking Amount :</h1>

                          <h1>{`Rs ${BookingTotal().toFixed(2)}`}</h1>
                        </div>
                        <div className="flex justify-between ">
                          <h1>GST :</h1>
                          <h1>{`Rs ${calculateGST(calculateTotal()).toFixed(
                            2
                          )}`}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-green-400 text-white cursor-pointer   font-semibold w-[70%] rounded-md py-2">
                      {" "}
                      {`Rs ${totalAmount.toFixed(2)}   Connect`}
                    </button>
                  </div>
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
            <div
              className={`w-[40%] min-h-screen h-fit bg-white border border-gray-400 ${
                locationClose ? "overflow-y-hidden" : ""
              }`}
            >
              <div className="px-8 flex justify-end py-10">
                <IoCloseOutline
                  className="w-7 h-7 bg-red-500 text-white cursor-pointer"
                  onClick={() => setLocationClose(!locationClose)}
                />
              </div>
              <div className="min-h-full flex flex-col justify-center gap-6 px-10">
                <div className="text-xl font-semibold">
                  <h1>Select Delivery Address</h1>
                </div>
                <div className="w-full h-full ">
                  <Map mheight={300} />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Checkout;
