import React, { useEffect, useRef } from "react";
import ImageData from "../../data/landingpagedata/categoryData/categoryData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Categoryhead = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      const slider = sliderRef.current;
      const leftButton = document.getElementById("leftButton");
      const rightButton = document.getElementById("rightButton");

      // Show/hide left button based on scroll position
      leftButton.style.display = slider.scrollLeft > 0 ? "block" : "none";

      // Show/hide right button based on scroll position and end of scroll
      rightButton.style.display =
        slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 1
          ? "block"
          : "none";
    };

    slider.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slideLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="p-1 mb-2 border border-gray-50 shadow-sm">
      <div className="relative flex items-center">
        <MdChevronLeft
          id="leftButton"
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={35}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          ref={sliderRef}
        >
          {ImageData.map((item, index) => (
            <div className="inline-block p-2 px-5" key={item.id || index}>
              <div
                className="w-full sm:w-1/2 lg:w-auto transition duration-200 border-b-4 border-transparent hover:border-green-500 cursor-pointer"
                key={item.id || index}
              >
                <h1 className="text-center whitespace-nowrap">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          id="rightButton"
          className="opacity-50 cursor-pointer hover:opacity-100 "
          onClick={slideRight}
          size={35}
        />
      </div>
    </div>
  );
};

export default Categoryhead;
