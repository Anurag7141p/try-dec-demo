import React from "react";
import { FaStar } from "react-icons/fa";
import UserReviews from "./userReviews";

const ProductReviews = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-xl">Reviews</h1>
        <h1 className="flex items-center gap-1">
          32 review for this product <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <span className="text-yellow-400 flex text-center">5</span>
        </h1>

        <div className="flex justify-normal w-2/3 items-center gap-5">
          <p>5 Star</p>
          <div className="w-1/4 h-1 rounded-lg bg-gray-300 ">
            <div className="w-4/5 h-1 rounded-lg bg-yellow-400"></div>
          </div>
          <p>(31)</p>
          <p>Rating Breakdown</p>
        </div>
        <div className="flex justify-normal w-2/3 items-center gap-5">
          <p>4 Star</p>
          <div className="w-1/4 h-1 rounded-lg bg-gray-300">
            <div className="w-1/5 h-1 rounded-lg bg-yellow-400"></div>
          </div>
          <p>(1)</p>
          <p>Seller communication level</p>
        </div>
        <div className="flex justify-normal w-2/3 items-center gap-5 text-gray-400">
          <p>3 Star</p>
          <div className="w-1/4 h-1 rounded-lg bg-gray-300">
            {/* <div className=" h-1 rounded-lg bg-yellow-400"></div> */}
          </div>
          <p>(0)</p>
          <p>Recommend to a friend</p>
        </div>
        <div className="flex justify-normal w-2/3 items-center gap-5 text-gray-400">
          <p>2 Star</p>
          <div className="w-1/4 h-1 rounded-lg bg-gray-300">
            {/* <div className="w-4/5 h-1 rounded-lg bg-yellow-400"></div> */}
          </div>
          <p>(0)</p>
          <p>Service as describe</p>
        </div>
        <div className="flex justify-normal w-2/3 items-center gap-5 text-gray-400">
          <p>1 Star</p>
          <div className="w-1/4 h-1 rounded-lg bg-gray-300">
            {/* <div className="w-4/5 h-1 rounded-lg bg-yellow-400"></div> */}
          </div>
          <p>(0)</p>
        </div>
        <UserReviews/>
      </div>
    </div>
  );
};

export default ProductReviews;
