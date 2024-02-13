import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from './card/categorycard';

function SlickCarousel({ imageData }) {
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
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 400,
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
      currentSlide < imageData.length - settings.slidesToScroll && (
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
          backgroundColor: "	#E8E8E8",
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
            left: "0",
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
    <div className="slider-container  lg:w-[1100px] ">
      <h1 className="lg:mx-5 sm:ms-16 mt-5 font-bold lg:text-2xl ">Best in Category's</h1>

      <Slider {...settings}>
        {imageData.map((item, index) => (
          <div key={index}>
            <div style={{ position: 'relative' }}>
              <CategoryCard data={item} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickCarousel;
