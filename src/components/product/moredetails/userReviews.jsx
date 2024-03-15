import React, { useState } from "react";
import { FaRegThumbsDown, FaStar } from "react-icons/fa";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaRegThumbsUp } from "react-icons/fa";
import RelatedRentals from "./relatedRentals";

const UserReviews = () => {
  const initialVisibleItems = 2;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [isButtonHidden, setIsButtonHidden] = useState(false);


  const reviews = [
    {
      image:
        "https://lh3.googleusercontent.com/7K5BkEX8HqQShfGMFH3NuzAgOgIxdzBASWwsBW1FenQPy1cW5alzsLtQirKzLC4ces7_1GXnMNeOso6RYz1-A8hWPXZismqXm0pMl7UWH1ObjQlsZQ=w1440-v1-e30",
      name: "Alex",
      place: "Delhi",
      rating: "5",
      posted_Date: "2 months ago",
      review_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate quae dolores iure quam aliquid temporibus deleniti suntcorporis numquam quibusdam exercitationem quos ullam, expedita voluptatum, quo voluptate maxime placeat",
    },
    {
      image:
        "https://lh3.googleusercontent.com/7K5BkEX8HqQShfGMFH3NuzAgOgIxdzBASWwsBW1FenQPy1cW5alzsLtQirKzLC4ces7_1GXnMNeOso6RYz1-A8hWPXZismqXm0pMl7UWH1ObjQlsZQ=w1440-v1-e30",
      name: "Alex",
      place: "Delhi",
      rating: "5",
      posted_Date: "2 months ago",
      review_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate quae dolores iure quam aliquid temporibus deleniti suntcorporis numquam quibusdam exercitationem quos ullam, expedita voluptatum, quo voluptate maxime placeat",
    },
    {
      image:
        "https://lh3.googleusercontent.com/7K5BkEX8HqQShfGMFH3NuzAgOgIxdzBASWwsBW1FenQPy1cW5alzsLtQirKzLC4ces7_1GXnMNeOso6RYz1-A8hWPXZismqXm0pMl7UWH1ObjQlsZQ=w1440-v1-e30",
      name: "Alex",
      place: "Delhi",
      rating: "5",
      posted_Date: "2 months ago",
      review_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate quae dolores iure quam aliquid temporibus deleniti suntcorporis numquam quibusdam exercitationem quos ullam, expedita voluptatum, quo voluptate maxime placeat",
    },
    {
      image:
        "https://lh3.googleusercontent.com/7K5BkEX8HqQShfGMFH3NuzAgOgIxdzBASWwsBW1FenQPy1cW5alzsLtQirKzLC4ces7_1GXnMNeOso6RYz1-A8hWPXZismqXm0pMl7UWH1ObjQlsZQ=w1440-v1-e30",
      name: "Alex",
      place: "Delhi",
      rating: "5",
      posted_Date: "2 months ago",
      review_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate quae dolores iure quam aliquid temporibus deleniti suntcorporis numquam quibusdam exercitationem quos ullam, expedita voluptatum, quo voluptate maxime placeat",
    },
  ];

  const handleSeeMoreClick = () => {
    setVisibleItems(reviews.length);
    setIsButtonHidden(true)
  };

  return (
    <div className="mb-20 mt-10">
      <div className="flex flex-col gap-3">
        <div className="flex">
          <input
            type="text"
            placeholder="Search Reviews"
            className="p-1 border border-gray-300 w-1/2 rounded-l-lg"
          />
          <button className="bg-green-500 p-1 h-8.5 w-10 flex justify-center items-center rounded-r-md">
            <IoIosSearch className="text-xl text-white" />
          </button>
        </div>
        <hr className="border border-gray-200 mt-5" />

        {/* user reviews */}
        <div className="flex flex-col gap-5">
          {reviews.slice(0, visibleItems).map((curElem,index) => (
            <div className="flex flex-col gap-3" key={index}>
              <div className="flex gap-3 justify-normal items-center">
                <img
                  src={curElem.image}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div>
                  <h2>{curElem.name}</h2>
                  <p className="text-gray-600">{curElem.place}</p>
                </div>
              </div>
              <div className="flex pl-10 ">
                <h1 className="flex justify-normal items-center ">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <span className="text-yellow-500  pl-2">
                    {curElem.rating}
                  </span>
                  <span className="pl-2 text-gray-600">
                    | {curElem.posted_Date}
                  </span>
                </h1>
              </div>
              <div className="pl-10">
                <p className="text-[14px] text-gray-600">
                  {curElem.review_content}
                </p>
              </div>
              <div className="pl-10 text-[14px] flex gap-3 text-gray-500">
                <h1 className="font-semibold text-gray-800">Helpful?</h1>
                <div className="flex gap-2 justify-normal items-center text-gray-800">
                  <div className="flex justify-normal items-center gap-1">
                    <h1>Yes</h1>
                    <FaRegThumbsUp />
                  </div>
                  <div className="flex justify-normal items-center gap-1">
                    <h1>No</h1>
                    <FaRegThumbsDown />
                  </div>
                </div>
              </div>
              <hr className="border border-gray-200 mt-5" />
            </div>
          ))}
          {!isButtonHidden && (
            <button
              className="pt-1 text-green-700 flex justify-normal items-center gap-2 cursor-pointer"
              onClick={handleSeeMoreClick}
            >
              <IoMdArrowDropdown />
              See more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
