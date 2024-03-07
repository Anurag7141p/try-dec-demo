import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const LoggedInCategory = () => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718654/trydec/mediaproduction.png",
      category_name: "Media Production",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718874/trydec/properties.png",
      category_name: "Properties",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718874/trydec/events.png",
      category_name: "Events",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718873/trydec/computerequipments.png",
      category_name: "Computer Equipments",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718873/trydec/fashion.png",
      category_name: "Fashion",
    },

    {
      id: 6,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718654/trydec/mediaproduction.png",
      category_name: " Production",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718873/trydec/computerequipments.png",
      category_name: "Computer Equipments",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718873/trydec/fashion.png",
      category_name: "Fashion",
    },

    {
      id: 6,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718654/trydec/mediaproduction.png",
      category_name: " Production",
    },
  ];

  return (
    <div>
      <div className="relative flex items-center  rounded-3xl">
        <div
          id="popularCategorySlider"
          className=" h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide  rounded-md "
        >
          {data.map((item) => (
            <div className=" h-[150px] w-[180px] rounded-md relative  inline-block  mx-2  cursor-pointer hover:opacity-95  ease-in-out duration-300 bg-white text-black ">
              <div class="absolute bottom-0 top-0   w-full flex   flex-col justify-center items-center">
                <img src={item.img} alt="" className="w-[134px] h-[117px] " />
                <h1 class=" font-semibold text-[14px] pt-1">
                  {" "}
                  {item.category_name}{" "}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoggedInCategory;
