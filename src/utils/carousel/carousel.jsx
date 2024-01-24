import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'slick-carousel/slick/slick-theme.css';
import imageData from '../../data/carouselData/carouselData';

const Carousel=() =>{

  const [selectedPickDate, setSelectedPickDate] = useState(null);
  const [selectedDropDate, setSelectedDropDate] = useState(null);


  const [selectedTime, setSelectedTime] = useState(new Date());


  const handlePickUpDateChange = (date) => {
    setSelectedPickDate(date);
  };
  const handleDropUpDateChange = (date) => {
    setSelectedDropDate(date);
  };





  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative car  ">
      <Slider {...carouselSettings}>
        {imageData.map((item) => (
          <div key={item.id} className="relative sm:h-60 lg:h-[600px] w-full ">
            <img src={item.imageUrl} alt={item.heading} className="w-full h-full object-cover" />
            <div className="absolute top-1/2  transform px-10 -translate-y-1/2 text-start text-white">
              <h1 className="text-4xl font-extrabold w-[300px] ">{item.heading}</h1>
              <p className="text-white-600 w-[350px]">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="hidden  lg:block absolute bottom-0 left-[2%] w-[98%] h-[120px]  bg-white p-3 ">

        <div className=" bg-gray-200 pl-4 rounded-lg">

          <div className="  flex flex-row space-x-8">

            <div className="flex items-center ">
              <input
                type="text"
                placeholder="Pick-up Location"
                className="border p-2 pl-10 rounded-md w-[300px] h-[80px] focus:outline-none border-light-green"
              />
              <div className="absolute  left-10 p-2 flex items-center ">
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
              </div>
            </div>


            <div className="pt-4">
              <label className=" pl-3 pt-2 text-black-900 text-md font-light absolute z-10   ">Pick-up date</label>

              <DatePicker

                selected={selectedPickDate}
                onChange={handlePickUpDateChange}
                dateFormat="eee d MMM"
                className="p-4 pt-9 border w-[120px] h-[80px] border-gray-300 rounded-md focus:outline-none text-green-500  relative "
              />



            </div>


            <div className="relative pt-4">
              <label className=" pl-7 pt-2 text-black-900 text-md font-light absolute z-10   ">
                Time
              </label>
             
              <TimePicker
              
                value={selectedTime}
                onChange={handleTimeChange}
                disableClock
                border={null}
                clockIcon={null}
                clearIcon={null}
                className="p-4 pt-9  bg-white w-[120px] h-[80px] rounded-md focus:outline-none text-green-500 "
              />
            </div>


            <div className="pt-4">
              <label className=" pl-3 pt-2 text-black-900 text-md font-light absolute z-10   ">Drop-off date</label>
              <DatePicker
                selected={selectedDropDate}
                onChange={handleDropUpDateChange}
                dateFormat="eee d MMM"
                className="p-4 pt-9 border w-[120px] h-[80px] border-gray-300 rounded-md focus:outline-none text-green-500  relative "
              />



            </div>
            <div className="relative pt-4">
              <label className=" pl-7 pt-2 text-black-900 text-md font-light absolute z-10   ">
                Time
              </label>
             
              <TimePicker
                value={selectedTime}
                onChange={handleTimeChange}
                disableClock
                clockIcon={null}
                clearIcon={null}
                className="p-4 pt-9  bg-white w-[120px] h-[80px] rounded-md focus:outline-none text-green-500 "
              />
            </div>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Find camera,lens and more ..."
                className="border p-2 pl-10 rounded-md  w-full lg:w-[300px] h-12 lg:h-[80px] focus:outline-none border-light-green"
              />
              <div className="absolute lg:pl-4 flex items-center ">
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
              </div>
            </div>

            <div className='p-10 '>
              <button className=" text-green-500  font-extrabold w-full ">SEARCH</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
