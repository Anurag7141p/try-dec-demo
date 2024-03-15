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
    <div className="overflow-x-auto pb-20">
      <div className="flex p-4 space-x-4 overflow-x-auto">
        {relatedrentals.map((curElem, index) => (
          <div key={index} className="flex-none w-72 xs:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  min-w-0 bg-gray-50">
            {/* Card Image */}
            <div className="relative">
              <img
                className="w-full h-40 sm:h-56 object-cover object-center rounded-md"
                src={curElem.image}
                alt="Card Image"
              />

              {/* Heart Icon */}
              <div className="absolute bottom-2 right-2">
                <IoMdHeartEmpty className="text-white text-2xl" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 font-frank">
              <h2 className="text-xl font-semibold mb-2 capitalize">
                {curElem.name}
              </h2>
              <p className="text-gray-800 font-semibold">Rs:{curElem.price}</p>
              <p className="text-gray-500">{curElem.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedRentals;
