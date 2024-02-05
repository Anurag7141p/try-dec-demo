import React from 'react';
import Navbar from '../../components/reusable/navbar/homenav/navbar';
import Carousel from '../../components/reusable/carousel/carousel';
import Category from '../../components/homePage/category';
import BestInRental from '../../components/homePage/bestInRental';
import CameraUnits from '../../components/homePage/cameraUnits';
import RentalLocation from '../../components/homePage/rentalLocation';
import RentalVehicle from '../../components/homePage/rentalVehicle';
import Helpline from '../../components/reusable/footer/helpline/helpline';
import Footer from '../../components/reusable/footer/footer/footer';

export default function HomeView() {
  return (
    <div className='mx-auto justify-center  items-center lg:w-[1536px] '>
      <Navbar />
      <Carousel />
      <Category />
      <BestInRental />
      <CameraUnits />
      <RentalLocation />
      <RentalVehicle />
      <Helpline />
      <Footer />
      </div>
  );
}
