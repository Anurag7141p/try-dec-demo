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
    speed: 900,
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
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
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
        ></div>
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
        ></div>
      )
    );
  }

  return (
    <div className="justify-center items-center  lg:mt-8 mx-10 lg:pl-12 lg:pr-10"> 
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
