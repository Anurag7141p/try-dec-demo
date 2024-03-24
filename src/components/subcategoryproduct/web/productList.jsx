import React from "react";
import { FaStar } from "react-icons/fa";
import Map from "../../map/map";

const ProductList = ({ filterLocation, setFilterLocation }) => {
  const product = [
    {
      product_image:
        "https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },
    {
      product_image:
        "https://cdn.mos.cms.futurecdn.net/SXtKY6DhYhKeSXL9BhX9s9.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "nik",
      rating: "Top Rated",
      product_name: "Nikon D32",
      star: "5",
      price: "823",
    },

    {
      product_image:
        "https://i.ytimg.com/vi/5a7jjrjKEGE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAvfGnK28R3FSO-foaVQ0x7Kgyujg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },

    {
      product_image:
        "https://www.instax.in/cdn/shop/products/1_5_83a546e4-adff-4a37-913b-63cb06341474.png?v=1701170429",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },

    {
      product_image:
        "https://pro.sony/s3/2017/09/18134059/hdc5500_3q_190225_01-Large.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },

    {
      product_image:
        "https://www.novo-monde.com/app/uploads/2021/04/panasonic-s5.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },

    {
      product_image:
        "https://i.gadgets360cdn.com/products/cameras/large/1548234727_832_canon_eos-3000d-18-0mp-dslr-camera.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },
    {
      product_image:
        "https://i.gadgets360cdn.com/products/cameras/large/1548234727_832_canon_eos-3000d-18-0mp-dslr-camera.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },
    {
      product_image:
        "https://i.gadgets360cdn.com/products/cameras/large/1548234727_832_canon_eos-3000d-18-0mp-dslr-camera.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },
    {
      product_image:
        "https://i.gadgets360cdn.com/products/cameras/large/1548234727_832_canon_eos-3000d-18-0mp-dslr-camera.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },
    {
      product_image:
        "https://i.gadgets360cdn.com/products/cameras/large/1548234727_832_canon_eos-3000d-18-0mp-dslr-camera.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },
    {
      product_image:
        "https://i.gadgets360cdn.com/products/cameras/large/1548234727_832_canon_eos-3000d-18-0mp-dslr-camera.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },
    {
      product_image:
        "https://i.gadgets360cdn.com/products/cameras/large/1548234727_832_canon_eos-3000d-18-0mp-dslr-camera.jpg",
      profile_image:
        "https://img.mensxp.com/media/content/2021/Dec/John-Abraham-Net-Worth-Monthly-Income-Movie-Fees-11_61bc379d069f7.jpeg",
      owner: "roshan",
      rating: "Top Rated",
      product_name: "Sony D32",
      star: "5",
      price: "823",
    },
  ];

  return filterLocation ? (
    <div className="py-5 md:px-5 sm:h-screen  pb-52 ">
      <div className="flex justify-end pb-2">
        <div className="relative inline-flex font-roboto">
          <select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-10 leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-base sm:text-base lg:text-base">
            <option value="lowest">new(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 14l-7-7h14z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full flex   lg:gap-2 pt-1  h-full">
        <div className="w-[30%] overflow-y-auto ">
          {product.map((curElem, index) => (
            <div
              key={index}
              className="rounded  w-full  h-80 mt-3"
            >
              <div className="px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 font-frank text-base md:text-base lg:text-base">
                <div>
                  <img
                    src={curElem.product_image}
                    alt=""
                    className="rounded-md w-full h-36 xs:h-20 xxs:h-28 xm:h-32 md:h-36 object-cover"
                  />
                </div>
                <div className="flex justify-between items-center pt-3">
                  {/* <img
                  src={curElem.profile_image}
                  alt=""
                  className="w-8 h-8  rounded-full"
                /> */}
                  <h1 className="text-base md:text-base lg:text-lg">
                    {curElem.owner}
                  </h1>
                  <h1 className="bg-[#FEEEBA] p-1 rounded">{curElem.rating}</h1>
                </div>
                <div className="pt-2">
                  <h1 className="text-base md:text-base lg:text-lg underline">
                    {curElem.product_name}
                  </h1>
                </div>
                <div className="pt-2">
                  <span className="flex justify-normal items-center gap-2 text-base">
                    <FaStar className="text-[#2fbd79] w-4 h-4" />
                    {curElem.star}
                  </span>
                </div>
                <div className="pt-2">
                  <h1 className="text-base md:text-base lg:text-lg">
                    From Rs: {curElem.price}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[70%]">
          <Map mheight={500} />
        </div>
      </div>
    </div>
  ) : (
    <div className="py-5 md:px-5 sm:h-screen overflow-y-auto pb-52">
      <div className="flex justify-end pb-2">
        <div className="relative inline-flex font-roboto">
          <select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-10 leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-base sm:text-base lg:text-base">
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 14l-7-7h14z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 pt-1 ">
        {product.map((curElem, index) => (
          <div
            key={index}
            className="rounded  w-full xs:w-[130px] xxs:w-[200px]  xm:w-60  sm:w-72  md:w-72 lg:w-72 xl:w-72 2xl:w-72 h-80 mt-3"
          >
            <div className="px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 font-frank text-base md:text-base lg:text-base">
              <div>
                <img
                  src={curElem.product_image}
                  alt=""
                  className="rounded-md w-full h-36 xs:h-20 xxs:h-28 xm:h-32 md:h-36 object-cover"
                />
              </div>
              <div className="flex justify-between items-center pt-3">
                {/* <img
                  src={curElem.profile_image}
                  alt=""
                  className="w-8 h-8  rounded-full"
                /> */}
                <h1 className="text-base md:text-base lg:text-lg">
                  {curElem.owner}
                </h1>
                <h1 className="bg-[#FEEEBA] p-1 rounded">{curElem.rating}</h1>
              </div>
              <div className="pt-2">
                <h1 className="text-base md:text-base lg:text-lg underline">
                  {curElem.product_name}
                </h1>
              </div>
              <div className="pt-2">
                <span className="flex justify-normal items-center gap-2 text-base">
                  <FaStar className="text-[#2fbd79] w-4 h-4" />
                  {curElem.star}
                </span>
              </div>
              <div className="pt-2">
                <h1 className="text-base md:text-base lg:text-lg">
                  From Rs: {curElem.price}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
