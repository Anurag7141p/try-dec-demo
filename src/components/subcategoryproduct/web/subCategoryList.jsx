import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SubCategoryList = () => {
  const categoryList = [
    {
      icon: "https://static.vecteezy.com/system/resources/previews/018/931/360/original/black-camera-icon-png.png",
      catName: "camera",
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/018/931/360/original/black-camera-icon-png.png",
      catName: "camera",
    },
    {
      icon: "https://simpleicon.com/wp-content/uploads/mic-4.png",
      catName: "Mic",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3365/3365630.png",
      catName: "Gimbal",
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/018/931/360/original/black-camera-icon-png.png",
      catName: "camera",
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/018/931/360/original/black-camera-icon-png.png",
      catName: "camera",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3365/3365630.png",
      catName: "Gimbal",
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/018/931/360/original/black-camera-icon-png.png",
      catName: "camera",
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/018/931/360/original/black-camera-icon-png.png",
      catName: "camera",
    },
    {
      icon: "https://static.vecteezy.com/system/resources/previews/018/931/360/original/black-camera-icon-png.png",
      catName: "camera",
    },
    {
      icon: "https://icons.veryicon.com/png/o/internet--web/digital-equipment-topics/camera-lens-1.png",
      catName: "lens",
    },
    {
      icon: "https://static.thenounproject.com/png/72766-200.png",
      catName: "Light",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/389/389754.png",
      catName: "Tripod",
    },
  ];

  const [showLeftScrollButton, setShowLeftScrollButton] = useState(false);
  const [showRightScrollButton, setShowRightScrollButton] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const scrollContainerRef = useRef(true);

  useEffect(() => {
    const handleResize = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        setShowLeftScrollButton(scrollContainer.scrollLeft > 0);
        setShowRightScrollButton(
          scrollContainer.scrollLeft <
            scrollContainer.scrollWidth - scrollContainer.clientWidth
        );
      }
    };

    const handleLoad = () => {
      handleResize();
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleResize);
      window.addEventListener("load", handleLoad);

      return () => {
        scrollContainer.removeEventListener("scroll", handleResize);
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  const handleLeftScrollButtonClick = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft - 400,
        behavior: "smooth",
      });
    }
  };

  const handleRightScrollButtonClick = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#F0FBF5] px-4 md:px-10 py-5 ">
      <div className="flex flex-col gap-3 space-x-4">
        <div className="font-montserrat font-normal text-center md:text-left">
          <h1>Camera and Equipments</h1>
        </div>

        <div>
          <div className="flex justify-normal items-center gap-3">
            {selectedCategory && (
              <>
                <div className="w-36 h-20 xs:w-20 xs:h-12 xxs:w-24 xxs:h-16 xm:w-28 xm:h-[70px] sm:w-32 sm:h-20  md:w-36 md:h-20 lg:w-36  lg:h-20 xl:w-36  py-2  bg-gradient-to-r from-blue-600  to-blue-400 ... rounded-md flex-none text-center  ">
                  <div className="w-full h-full flex justify-center items-center text-white">
                    <p className="font-frank  text-xs md:text-sm lg:text-base">
                      {selectedCategory}
                    </p>
                  </div>
                </div>
              </>
            )}

            <>
              <div>
                {showLeftScrollButton && (
                  <button
                    className="rounded-full text-2xl opacity-75 shadow-xl border border-gray-300"
                    onClick={handleLeftScrollButtonClick}
                  >
                    <FaAngleLeft />
                  </button>
                )}
              </div>
              <div
                className={`flex gap-10 justify-normal overflow-x-auto scroll-container`}
                ref={scrollContainerRef}
              >
                {categoryList.map((curElem, index) => (
                  <div
                    key={index}
                    className="w-36 h-20 xs:w-20 xs:h-12 xxs:w-24 xxs:h-16 xm:w-28 xm:h-[70px] sm:w-32 sm:h-20  md:w-36 md:h-20 lg:w-36  lg:h-20 xl:w-36  py-2  bg-blue-100 rounded-md flex-none text-center  hover:bg-blue-500 hover:text-white cursor-pointer"
                    onClick={() => setSelectedCategory(curElem.catName)}
                  >
                    <div className="w-full h-full flex justify-center items-center">
                      <p className="font-frank font-extralight text-xs md:text-sm lg:text-base">
                        {curElem?.catName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {showRightScrollButton && (
                  <button
                    disabled={!showRightScrollButton}
                    className={` rounded-full  text-2xl  opacity-75 shadow-xl border border-gray-300 ${
                      showRightScrollButton ? "opacity-75" : "opacity-50"
                    } `}
                    onClick={handleRightScrollButtonClick}
                  >
                    <FaAngleRight />
                  </button>
                )}
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryList;
