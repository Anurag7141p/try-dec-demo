import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div>
      <>
        <div className="w-full h-28 text-white  bg-blue-600 flex justify-normal items-center ">
          <div className="w-full flex justify-between px-5">
            <div className="flex justify-normal items-center ">
              <img
                src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710864334/trydec/mobile-home-sidebar.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710864705/trydec/mobile-olapool.png"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center gap-5">
              <Link to="/mobile-home/location">
                <img
                  src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710865162/trydec/mob-nav-location-icon.png"
                  className="w-8 h-8"
                />
              </Link>
              <img
                src="https://res.cloudinary.com/dgkg64nql/image/upload/v1710865172/trydec/mob-nav-notification-icon.png"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default HomeNav;
