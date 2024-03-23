import React from "react";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const SubCatProductList = () => {
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
      place: "kannur",
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
      place: "kochi",
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
      place: "kannur",
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
      place: "kannur",
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
      place: "kannur",
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
      place: "kannur",
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
      place: "kannur",
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
      place: "kannur",
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
      place: "kannur",
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
      place: "kannur",
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
      place: "kannur",
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
      place: "kannur",
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
      place: "kannur",
    },
  ];
  return (
    <div className="grid grid-cols-2 px-3 mt-8 gap-3 pb-28" >
      {product.map((curElem) => (
        <div className="col-span-1 ">
          <div className="w-full font-frank flex flex-col gap-2 h-80 bg-gray-50 border border-gray-300 rounded-lg shadow-xl">
            <div>
              <img
                src={curElem.product_image}
                alt=""
                className="rounded-t-lg w-full h-36 object-cover"
              />
            </div>
            <div className="flex justify-around items-center px-2">
              <img
                src={curElem.profile_image}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h1 className="flex justify-normal gap-2 items-center text-yellow-500">
                  <FaStar />
                  {curElem.star}
                </h1>
                <h1>{curElem.place}</h1>
              </div>
              <div>
                <MdFavoriteBorder className="w-7 h-7" />
              </div>
            </div>
            <div>
              <h1 className="font-frank text-xl px-3">
                {curElem.product_name}
              </h1>
            </div>
            <div className="flex justify-end pr-4">
              <h1>
                From{" "}
                <span className="text-2xl text-[#1281B8]">
                  ₹{curElem.price}
                </span>
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCatProductList;
