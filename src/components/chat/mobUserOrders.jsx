import React from "react";
import { MdLaptopMac } from "react-icons/md";
import MobChatMessage from "./mobChatMessage";

const MobUserOrders = ({
  ordersData,
  setSelectedOrderId,
  selectedOrderId,
  messages,
  setMessages,
  setStoreOrdersData,
}) => {
  const data = [
    {
      id: "122121",
      messages: "sdfsdfsdf",
    },
  ];

  // console.log(messages, "this is");

  const selectProduct = () => {
    setMessages(data);
  };
  console.log(messages, "this is message data");

  return (
    <>
      {messages.length == 0 ? (
        <div className="px-5 pb-32 ">
          {ordersData &&
            ordersData?.map((order, index) => (
              <div
                className="w-full p-1 bg-gray-200/50  mt-3 rounded-md"
                key={order._id}
                onClick={() => selectProduct()}
              >
                <div
                  className="px-2 flex flex-col gap-3 py-2"
                  onClick={() => setSelectedOrderId(order?._id)}
                >
                  <div className="flex justify-normal items-center gap-5">
                    <MdLaptopMac className="w-8 h-8" />
                    {order?.productData?.map((product) => (
                      <h1
                        className="capitalize font-semibold"
                        key={product?._id}
                      >
                        {product?.productId?.name}
                      </h1>
                    ))}
                  </div>
                  <div>
                    <h2 className="text-gray-500 font-semibold">
                      Booking ID: {order?.orderId}
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-gray-700">
                      ₹ {order?.totalAmount + order?.gst}
                    </h1>
                  </div>
                  <div className="flex justify-between ">
                    {order?.status == "Pending" && (
                      <p className="text-green-400 font-medium">New Order</p>
                    )}
                    {order?.status == "Approved" && (
                      <p className="text-gray-400">Progressing</p>
                    )}
                    {order?.status == "Confirmed" && (
                      <p className="text-gray-400">Progressing</p>
                    )}
                    {order?.status == "Canceled" && (
                      <p className="text-red-500">Canceled</p>
                    )}
                    {order?.status == "Rejected" && (
                      <p className="text-red-500">Cancelled</p>
                    )}
                    {order?.status == "Completed" && (
                      <p className="text-green-500">Completed</p>
                    )}
                    {/* <p className="text-gray-800"> {curElem.date}</p> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <MobChatMessage />
      )}
    </>
  );
};

export default MobUserOrders;
