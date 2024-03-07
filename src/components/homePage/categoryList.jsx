import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CategoryList = () => {
  const data = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/36/5d/b5/365db580d68932e131bb94a34235ab9b.jpg",
      category_name: "Camera & Equipment",
    },
    {
      id: 2,
      img: "https://static.vecteezy.com/system/resources/previews/033/110/845/non_2x/cars-side-view-road-light-close-up-showcases-sleek-white-vehicle-and-pathway-glow-for-social-media-post-size-ai-generated-free-photo.jpg",
      category_name: "Vehicles",
    },
    {
      id: 3,
      img: "https://www.littlefingersindia.com/wp-content/uploads/2022/09/LFbridalset351.jpg",
      category_name: "Ornaments",
    },
    {
      id: 4,
      img: "https://st.depositphotos.com/1004377/1826/i/950/depositphotos_18262863-stock-photo-vertical-landscape.jpg",
      category_name: "Land",
    },
    {
      id: 5,
      img: "https://static.vecteezy.com/system/resources/previews/030/467/172/large_2x/a-black-canvas-sets-the-stage-for-a-multimedia-acoustic-sound-speaker-vertical-mobile-wallpaper-ai-generated-free-photo.jpg",
      category_name: "Sound unit",
    },

    {
      id: 12,
      img: "https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("categorySlider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("categorySlider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="relative flex items-center">
        <div className="w-14 h-14 bg-white shadow-lg rounded-full flex justify-center items-center absolute left-0 z-10">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
        </div>
        <div
          id="categorySlider"
          className=" h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mx-7 rounded-md"
        >
          {data.map((item) => (
            <div
              className=" h-[345px] w-[274px] rounded-md relative  inline-block mx-2  cursor-pointer hover:opacity-95  ease-in-out duration-300"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
              }}
            >
              <div class="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
                <h1 class="text-white font-semibold text-3xl">
                  {" "}
                  {item.category_name}{" "}
                </h1>
                <p class="text-gray-200">
                  I love kittens very much. They are amazing.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-14 h-14 bg-slate-100 shadow-sm rounded-full flex justify-center items-center absolute right-0 ">
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryList;
