import React, { useEffect, useState } from "react";
import MobNav from "./mobNav";
import MobFooter from "./mobFooter";
import MobChatUser from "./mobChatUser";
import MobUserOrders from "./mobUserOrders";
import { useParams } from "react-router-dom";
import { useMediaQueries, useMediaQuery } from "@react-hook/media-query";
import ExtraDeatails from "../product/mediaProduction/extraDeatails";

const MobChatMain = () => {
  const data = {
    message: "success",
    chatsData: [
      {
        _id: "65e169222c7b56948b215747",
        userId: {
          _id: "65d7533aa35e492bbdbce86e",
          firstName: "anurag",
          lastName: "pp",
          status: true,
        },
        storeUserId: {
          _id: "65ca098cc1a81f4fb25d3d29",
          firstName: "Nideesh",
          lastName: "pp",
          status: true,
        },
        createdAt: "2024-03-01T03:58:34.143Z",
        userMessageCount: 0,
        storeMessageCount: 0,
        userMessageSeenStatus: true,
        storeMessageSeenStatus: true,
        newMessageTime: "2024-03-01T05:35:30.484Z",
        __v: 0,
      },
      {
        _id: "65e0806bc22a6ddca60959df",
        userId: {
          _id: "65ae14ab4195c6acc26f86a2",
          firstName: "muhammed",
          lastName: "raheem",
          status: true,
        },
        storeUserId: {
          _id: "65ca098cc1a81f4fb25d3d29",
          firstName: "Nideesh",
          lastName: "pp",
          status: true,
        },
        userMessageCount: 0,
        storeMessageCount: 0,
        userMessageSeenStatus: true,
        storeMessageSeenStatus: true,
        newMessageTime: "2024-02-29T13:53:39.871Z",
        createdAt: "2024-02-29T13:02:35.693Z",
        __v: 0,
      },
      {
        _id: "65e0839127d9d4a19156b659",
        userId: {
          _id: "65c92129b8ddeb87d18a07f6",
          firstName: "MOHAMMED",
          lastName: "AFSAL",
          status: true,
        },
        storeUserId: {
          _id: "65ca098cc1a81f4fb25d3d29",
          firstName: "Nideesh",
          lastName: "pp",
          status: true,
        },
        createdAt: "2024-02-29T13:14:51.138Z",
        userMessageCount: 0,
        storeMessageCount: 0,
        userMessageSeenStatus: true,
        storeMessageSeenStatus: true,
        newMessageTime: "2024-02-29T13:22:18.959Z",
        __v: 0,
      },
    ],
  };

  const storeData = {
    message: "success",
    ordersData: [
      {
        _id: "65e16a002c7b56948b21582a",
        orderId: "TD3852718338527183",
        userId: "65d7533aa35e492bbdbce86e",
        storeId: "65ca0c1cc1a81f4fb25d3e05",
        pickupDate: "2024-02-27T06:20:30.000Z",
        pickupTime: "9:00 am",
        dropOffDate: "2024-02-29T06:20:30.000Z",
        dropOffTime: "9:00 am",
        pickupCodeStatus: false,
        dropoffCodeStatus: false,
        history: {
          _id: "65e16a002c7b56948b215829",
        },
        bookingAmount: 3998,
        totalAmount: 3998,
        gstIncludeAmount: 4717.64,
        duration: "2 days 0 hours",
        gst: 719.64,
        paymentMode: "Online payment",
        paymentStatus: "Pending",
        status: "Approved",
        userNewMessage: false,
        storeNewMessage: false,
        userReviewStatus: false,
        storeReviewStatus: false,
        productData: [
          {
            productId: {
              _id: "65d362fd567f2c330e6eda50",
              name: "new camera",
              images: [
                "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708352392/c5rfbeomyrtyfmenb4d2.jpg",
                "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708352394/mmnf7clcngjt5zcbqzlv.jpg",
                "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708352392/jxx48bulkwgvfbltw7e7.jpg",
              ],
            },
            selectedQuantity: 1,
            productTotalPrice: 3998,
            _id: "65e16a002c7b56948b21582b",
          },
        ],
        orderDate: "2024-03-01T05:39:12.586Z",
        newMessageTime: "2024-03-01T05:39:12.586Z",
        createdAt: "2024-03-01T05:39:12.586Z",
        __v: 0,
        dropoffCode: 3941,
        pickupCode: 7962,
      },
      {
        _id: "65e169222c7b56948b215742",
        orderId: "TD4530438245304382",
        userId: "65d7533aa35e492bbdbce86e",
        storeId: "65ca0c1cc1a81f4fb25d3e05",
        pickupDate: "2024-02-27T06:20:30.000Z",
        pickupTime: "9:00 am",
        dropOffDate: "2024-02-29T06:20:30.000Z",
        dropOffTime: "9:00 am",
        pickupCodeStatus: false,
        dropoffCodeStatus: false,
        history: {
          _id: "65e169222c7b56948b215741",
        },
        bookingAmount: 3998,
        totalAmount: 3998,
        gstIncludeAmount: 4717.64,
        duration: "2 days 0 hours",
        gst: 719.64,
        paymentMode: "Online payment",
        paymentStatus: "Pending",
        status: "Approved",
        userNewMessage: false,
        storeNewMessage: false,
        userReviewStatus: false,
        storeReviewStatus: false,
        productData: [
          {
            productId: {
              _id: "65d362fd567f2c330e6eda50",
              name: "new camera",
              images: [
                "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708352392/c5rfbeomyrtyfmenb4d2.jpg",
                "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708352394/mmnf7clcngjt5zcbqzlv.jpg",
                "https://res.cloudinary.com/trydecgrandcafe/image/upload/v1708352392/jxx48bulkwgvfbltw7e7.jpg",
              ],
            },
            selectedQuantity: 1,
            productTotalPrice: 3998,
            _id: "65e169222c7b56948b215743",
          },
        ],
        orderDate: "2024-03-01T05:35:30.452Z",
        newMessageTime: "2024-03-01T05:35:30.452Z",
        createdAt: "2024-03-01T05:35:30.452Z",
        __v: 0,
        dropoffCode: 9976,
        pickupCode: 3681,
      },
    ],
  };

  const [users, setUsers] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const { chatId, orderId } = useParams();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //orders list
  const [storeOrdersData, setStoreOrdersData] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState("");

  //message

  const [messages, setMessages] = useState([]);

  const getStoreOrders = async (chatId) => {
    setStoreOrdersData(storeData.ordersData);
  };
  console.log(storeOrdersData, "this is store orders");

  const handleUserSelect = (chatId) => {
    setSelectedChatId(chatId);
    setSelectedOrderId("");

    getStoreOrders();
  };

  useEffect(() => {
    if (chatId) {
      setSelectedChatId(chatId);
    }
    if (orderId) {
      setSelectedOrderId(orderId);
    }
  }, [chatId, orderId]);

  useEffect(() => {
    setUsers(data.chatsData);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth >= 768;

  return (
    <div className="bg-slate-100 h-screen">
      {isMobile ? (
        /* Render your new component for mobile view here */
        <ExtraDeatails />
      ) : (
        <>
          <MobChatUser
            users={users}
            handleUserSelect={handleUserSelect}
            onlineUsers={onlineUsers}
            selectedChatId={selectedChatId}
            //order component prop
            ordersData={storeOrdersData}
            setSelectedOrderId={setSelectedOrderId}
            selectedOrderId={selectedOrderId}
            setStoreOrdersData={setStoreOrdersData}
            //message
            messages={messages}
            setMessages={setMessages}
          />
          {messages ? null : <MobFooter />}
        </>
      )}
    </div>
  );
};

export default MobChatMain;
