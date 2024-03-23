import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const RelatedRentals = () => {
  const relatedrentals = [
    {
      image:
        "https://www.findingtheuniverse.com/wp-content/uploads/2021/05/Canon-EOS-R5-review_by_Laurence-Norah.jpg",
      name: "nikon d3200",
      price: "192000",
      location: "Kochi",
    },
    {
      image:
        "https://shotkit.com/wp-content/uploads/bb-plugin/cache/canon-eos-r5-review-handheld-01-landscape-2157ee7dbfd0053af1cd547199203f43-zybravgx2q47.jpg",
      name: "nikon d3200",
      price: "192000",
      location: "Kochi",
    },
    {
      image:
        "https://www.photographyblog.com/uploads/entryImages/_1200x630_fit_center-center_90_none/canon_eos_r5_hands_on_july_9th.jpg",
      name: "nikon d3200",
      price: "192000",
      location: "Kochi",
    },
    {
      image:
        "https://www.findingtheuniverse.com/wp-content/uploads/2021/05/Canon-EOS-R5-review_by_Laurence-Norah.jpg",
      name: "nikon d3200",
      price: "192000",
      location: "Kochi",
    },
    {
      image:
        "https://www.photographyblog.com/uploads/entryImages/_1200x630_fit_center-center_90_none/canon_eos_r5_hands_on_july_9th.jpg",
      name: "nikon d3200",
      price: "192000",
      location: "Kochi",
    },
    {
      image:
        "https://www.photographyblog.com/uploads/entryImages/_1200x630_fit_center-center_90_none/canon_eos_r5_hands_on_july_9th.jpg",
      name: "nikon d3200",
      price: "192000",
      location: "Kochi",
    },
    {
      image:
        "https://www.photographyblog.com/uploads/entryImages/_1200x630_fit_center-center_90_none/canon_eos_r5_hands_on_july_9th.jpg",
      name: "nikon d3200",
      price: "192000",
      location: "Kochi",
    },
  ];
  return (
    <>
      <div className="overflow-x-auto pb-5">
        <div className="flex p-4 space-x-4 overflow-x-auto ">
          {relatedrentals.map((curElem, index) => (
            <div
              key={index}
              className="flex-none w-72 xs:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  min-w-0 bg-gray-50 rounded-2xl shadow-lg border  border-gray-200 py-3"
            >
              {/* Card Image */}
              <div className="relative">
                <img
                  className="w-full h-40 sm:h-56 object-cover object-center rounded-md"
                  src={curElem.image}
                  alt="Card Image"
                />

                {/* Heart Icon */}
              </div>

              {/* Card Content */}
              <div className="p-3 font-frank">
                <div className="flex justify-between">
                  <p className="text-gray-500">{curElem.location}</p>
                  <IoMdHeartEmpty className=" text-2xl" />
                </div>
                <h2 className="text-xl font-semibold mb-2 capitalize">
                  {curElem.name}
                </h2>
              </div>
              <div className="flex justify-end px-4">
                <p className="text-black ">
                  Rs:{" "}
                  <span className="text-blue-600 font-semibold">
                    {curElem.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedRentals;
