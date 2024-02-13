import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'slick-carousel/slick/slick-theme.css';
import imageData from '../../../data/carouselData/carouselData';

const Carousel = () => {

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative car overflow-x:hidden justify-center items-center mx-auto overflow-hidden ml-2 mr-2">
      <Slider {...carouselSettings}> 
        {imageData.map((item) => (
          <div key={item.id} className="relative sm:h-60 lg:h-[500px] w-full justify-center">
            <img
              src={item.imageUrl}
              alt={item.heading}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-1/2 transform lg:px-20 sm:px-6 -translate-y-1/2 text-start text-white">
              <h1 className="text-4xl font-extrabold w-[300px] ">{item.heading}</h1>
              <p className="text-white-600 w-[350px]">{item.description}</p>

              {/* Search bar inside the slider */}
              <div className="relative  lg:mt-4 flex items-center">
                <input
                  type="text"
                  placeholder="Find camera, lens and more ..."
                  className="p-2 text-black border border-light-green rounded-lg focus:outline-none h-8 lg:w-[400px] sm:w-[300px]"
                />
                <div className="absolute  right-0 mr-1 flex items-center lg:px-3 lg:py-1 sm:px-2 sm:py-2 pointer-events-none bg-green-500  rounded-r-md ">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
