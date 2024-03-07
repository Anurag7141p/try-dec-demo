import React from "react";
import ImageData from "../../data/landingpagedata/categoryData/categoryData";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CategoryListCircle = () => {

  const circleSlideLeft = () => {
    var slider = document.getElementById("categorySliderCircle");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const circleSlideRight = () => {
    var slider = document.getElementById("categorySliderCircle");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      {/* <div className="flex overflow-x-auto justify-start items-center lg:mx-20 ms-4">
        {ImageData.map((item, index) => (
          <Link
            to={"/"}
            key={index}
            className="mr-[50px] p-4 flex flex-col items-center sm:ms-4"
            style={{ flex: "0 0 auto", width: "calc(100vw / 14)" }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden ">
              <img
                src={item.image}
                alt={`Image ${index}`}
                className="w-full h-full object-cover "
              />
            </div>
            <div className="mt-2 text-center">
              <p className="text-xs w-60 ">{item.title}</p>
            </div>
          </Link>
        ))}
      </div> */}

      <div className="relative flex items-center">
        <div className="xs:w-6 xs:h-6  sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white/50 shadow-lg rounded-full flex justify-center items-center absolute xs:mx-5 sm:left-0  md:left-5 lg:left-6 z-10 ">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={circleSlideLeft}
            size={40}
          />
        </div>
        <div
          id="categorySliderCircle"
          className="flex overflow-x-auto justify-start scroll-smooth items-center xs:mx-8 sm:mx-8  md:mx-14  lg:mx-16 "
        >
          {ImageData.map((item,index) => (
            <Link
              to={"/"}
              key={index}
              className="mr-[10px] p-4 flex flex-col items-center xs:ms-5 sm:ms-6 md:ms-6 lg:ms-5 "
              style={{ flex: "0 0 auto", width: "calc(100vw / 14)" }}
            >
              <div className="w-20 h-20  overflow-hidden ">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={item.image}
                  alt="/"
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs w-60 ">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="xs:w-6 xs:h-6  sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white/50 shadow-lg rounded-full flex justify-center items-center absolute xs:mx-2 xs:right-2 sm:right-3  md:right-8 lg:right-9 ">
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={circleSlideRight}
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryListCircle;
