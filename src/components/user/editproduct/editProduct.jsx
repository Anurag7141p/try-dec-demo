import React from "react";
import AddProductPricingPage from "./editAddProductPricingPage";
import EditAddProductPricingPage from "./editAddProductPricingPage";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  // const
  // console.log(categoryList);
  const { id } = useParams();
  console.log(id);

  return (
    <div className="card-box bg-white w-full rounded py-4 mt-6 mx-4 px-4 lg:ms-10 flex flex-col gap-3">
      <div className="grid grid-cols-2 px-20 ">
        <div className="flex flex-col gap-4">
          <div className="w-full flex gap-4 ">
            <div className="w-2/4">
              <img
                src="https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-225157.jpg&fm=jpg"
                alt=""
                className="rounded-md"
              />
            </div>
            <div className="w-1/5 flex flex-col gap-2">
              <img
                src="https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-225157.jpg&fm=jpg"
                alt=""
                className="rounded-md"
              />
              <img
                src="https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-225157.jpg&fm=jpg"
                alt=""
                className="rounded-md"
              />
              <img
                src="https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-225157.jpg&fm=jpg"
                alt=""
                className="rounded-md"
              />
            </div>
          </div>
          <div>
            <h1>product name</h1>
            <input
              type="text"
              className="w-3/4 border border-gray-300 focus:outline-none rounded-md bg-blue-50"
            />
          </div>
          <div>
            <h1>product Id</h1>
            <input
              type="text"
              className="w-3/4 border border-gray-300 focus:outline-none rounded-md bg-blue-50"
            />
          </div>
          <div>
            <h1>product Description</h1>
            <textarea
              type="text"
              className="w-3/4 border border-gray-300 focus:outline-none rounded-md bg-blue-50"
            />
          </div>
          <div>
            <h1>Accessories Including</h1>
            <textarea
              type="text"
              className="w-3/4 border border-gray-300 focus:outline-none rounded-md bg-blue-50"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h1>Brand</h1>
            <input
              type="text"
              className="w-3/4 border border-gray-300 focus:outline-none rounded-md bg-blue-50"
            />
          </div>
          <div>
            <h1>Model</h1>
            <input
              type="text"
              className="w-3/4 border border-gray-300 focus:outline-none rounded-md bg-blue-50"
            />
          </div>
          <div>
            <h1>Camera Type</h1>
            <input
              type="text"
              className="w-3/4 border border-gray-300 focus:outline-none rounded-md bg-blue-50"
            />
          </div>
        </div>
      </div>
      <hr />
      <EditAddProductPricingPage />
    </div>
  );
};

export default EditProduct;
