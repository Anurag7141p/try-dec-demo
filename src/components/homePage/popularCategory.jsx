import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PopularCategory = () => {
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
  ];

  const slideLeft = () => {
    var slider = document.getElementById("popularCategorySlider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("popularCategorySlider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center text-[25px] py-2">
          <h1>Explore Popular Category</h1>
        </div>
        <div
          className="relative flex items-center p-10 "
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dgkg64nql/image/upload/v1710847666/trydec/popularcategorynewbg.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-12 h-12 bg-white shadow-lg rounded-full flex justify-center items-center absolute left-11 z-10">
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeft}
              size={40}
            />
          </div>
          <div
            id="popularCategorySlider"
            className=" h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mx-7 rounded-md "
          >
            {data.map((item) => (
              <div className=" h-[203px] w-[216px] rounded-md relative  inline-block  mx-2  cursor-pointer hover:opacity-95  ease-in-out duration-300 bg-white text-black ">
                <div class="absolute bottom-0 top-0   w-full flex   flex-col justify-center items-center">
                  <img src={item.img} alt="" className="w-[143px] h-[129px] " />
                  <h1 class=" font-semibold text-[14px] pt-1">
                    {" "}
                    {item.category_name}{" "}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="w-12 h-12 bg-slate-100 shadow-sm rounded-full flex justify-center items-center absolute right-11 ">
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideRight}
              size={40}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
