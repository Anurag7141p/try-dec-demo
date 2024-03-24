import React from "react";
import { FaStar } from "react-icons/fa";

const OwnerProfileReviewsContent = () => {
  const performanceList = [
    {
      name: "Performance",
      rating: "4.2",
    },
    {
      name: "Ethics",
      rating: "4.2",
    },
    {
      name: "Commitment",
      rating: "4.2",
    },
    {
      name: "Communication",
      rating: "4.2",
    },
  ];

  const userReviews = [
    {
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
      name: "Henry",
      place: "Kochi",
      rating: "4.2",
      reviewTime: "3 weeks ago",
      review:
        "Was a pleasure working with john.Really an interesting actor.Good luck for your future john",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
      name: "Henry",
      place: "Kochi",
      rating: "4.2",
      reviewTime: "3 weeks ago",
      review:
        "Was a pleasure working with john.Really an interesting actor.Good luck for your future john",
    },
  ];

  return (
    <div>
      <div className="pt-3 font-montserrat  text-gray-700 mt-10">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="flex justify-center items-center gap-3">
              4.2 <FaStar className="text-yellow-400 text-xl" />
              Rating (20 Reviews)
            </h1>
            <p className="text-sm text-cyan-500">See All</p>
          </div>

          {performanceList.map((curElem) => (
            <div className="flex justify-between items-center">
              <h1>{curElem.name}</h1>
              <h1 className="flex justify-normal items-center gap-3">
                {curElem.rating} <FaStar className="text-yellow-400 text-xl" />
              </h1>
            </div>
          ))}

          <hr className="h-0 border border-gray-300 mt-4" />
        </div>

        <div className="flex flex-col mt-4 gap-4">
          <div className="flex justify-between items-center">
            <h1>20 Reviews </h1>
            <p className="text-sm text-cyan-500">See All</p>
          </div>
          {userReviews.map((curElem) => (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center ">
                <div className="flex justify-normal items-center gap-2">
                  <img
                    src={curElem.image}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h1>{curElem.name}</h1>
                    <h2 className="text-gray-500">{curElem.place}</h2>
                  </div>
                </div>

                <div>
                  <h1 className="flex justify-normal items-center gap-2">
                    {curElem.rating}{" "}
                    <FaStar className="text-yellow-400 text-xl" />
                  </h1>
                  <p className="text-sm text-gray-500">{curElem.reviewTime}</p>
                </div>
              </div>
              <div>
                <h1>{curElem.review}</h1>
              </div>
              {/* <hr className="h-0 border border-gray-300 mt-4" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnerProfileReviewsContent;
