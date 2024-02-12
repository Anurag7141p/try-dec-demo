import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rentalsData from '../../data/landingpagedata/bestRentalData/bestRentalData';
import HomeImageCard from '../../components/reusable/card/homecard';

const BestInRental = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (prev, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      currentSlide < rentalsData.length - settings.slidesToScroll && (
        <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          width: "40px",
          height: "40px",
          backgroundColor: "#E8E8E8",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        </div>
      )
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      currentSlide > 0 && (
        <div
          className={className}
          style={{
            ...style,
            position: "absolute",
            top: "50%",
            left: "",
            zIndex: 1,
            transform: "translateY(-50%)",
            width: "40px",
            height: "40px",
            backgroundColor: "#E8E8E8",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={onClick}
        >
        </div>
      )
    );
  }

  return (
    <div className="lg:w-[1370px] md:p-4 lg:p-1 over-flow-x-none  justify-center items-center mx-auto lg:mt-20"> 
    <h1 className='ms-2 p-4 font-bold text-lg'>Best In Rentals</h1>
      <Slider {...settings}>
       {rentalsData.map((rentalData, index) => (
          <HomeImageCard key={rentalData.id} rental={rentalData} />
        ))}
    </Slider>
    </div>
  );
}

export default BestInRental;
