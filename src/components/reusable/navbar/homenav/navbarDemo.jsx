import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import Brandlogo from "../../../assets/images/navabrImages/img_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faTimes,
  faL,
} from "@fortawesome/free-solid-svg-icons";
// import New from "../../../assets/images/new-icon.png";
// import { useSelector } from "react-redux";
// import NavLocation from "../../map/navLocation";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Location from "../../../location/location";
// import { getCategoryDataApi } from "../../../api/categoryApi";

const NavbarDemo = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [success, setSuccess] = useState(true);
  // const { success } = useSelector((state) => state.userAuth);
  // const locations = [
  //   { value: "option1", label: "location a" },
  //   { value: "option2", label: "location b" },
  // ];

  // const getCategory = async () => {
  //   const response = await getCategoryDataApi();
  //   setCategoryList(response);
  // };

  // useEffect(() => {
  //   getCategory();
  // }, []);

  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const handleAccountHover = () => {
    setAccountDropdownOpen(true);
  };

  const handleAccountLeave = () => {
    setAccountDropdownOpen(false);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <>
      <nav className="p-2 h-20 sticky lg:w-full top-0 z-50 bg-gray-50 lg:bg-transparent shadow-sm px-10 flex justify-between items-center lg:bg-white ">
        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        <Link to="/" className="pl-4">
          <img src="" alt="Logo" className=" w-22 h-12 " />
        </Link>

        {/* Search Bar */}
        <div className="lg:flex items-center hidden space-x">
          <div className="relative">
            <input
              type="text"
              placeholder="Find camera, lens and more ..."
              className="p-2 border border-light-green rounded-l-md focus:outline-none  w-full md:w-[500px] lg:h-[42px]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer bg-green-500 hover:bg-green-600 text-white rounded-r-md">
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>

        {/* Location Selector */}
        <div className="hidden lg:flex ml-10">
          <div className="relative">
            <Location />
            </div>
        </div>
        <div className="flex justify-end items-center lg:hidden">
          {/* Icon 1 */}
          <div className=" ml-40 mr-4">
            <i className="fa-solid fa-location-dot text-xl"></i>
          </div>
          {/* Icon 2 */}
          <div>
            <i className="fa-regular fa-bell text-xl"></i>
          </div>
        </div>

        {/* Navigation Links */}

        <div className="hidden lg:flex items-center ">
          {success ? (
            <>
              <div className="flex items-center">
                <Link to="/wishlist" className="text-gray-700 px-4 py-2">
                  <CiHeart size={24} />
                </Link>
              </div>
              <div className="flex items-center">
                <Link to="/wishlist" className="text-gray-700 px-4 py-2">
                  <IoIosNotificationsOutline size={24} />
                </Link>
              </div>
              <div className="relative mr-4">
                <div
                  className="flex items-center cursor-pointer"
                  onMouseEnter={handleAccountHover}
                  onMouseLeave={handleAccountLeave}
                >
                  <span className="text-black px-2 py-2">Account</span>
                  <div className="text-white bg-orange-400 rounded-full px-2 mr-1">
                    <span className="relative">S</span>
                  </div>
                  <div className="absolute h-2 w-2 bg-green-500 rounded-full ml-[104px] mt-3"></div>
                </div>

                {/* Account Dropdown */}
                {isAccountDropdownOpen && (
                  <div
                    className="absolute z-50 top-12   bg-white border border-gray-400 rounded-md w-36 right-0 move-up-animation with-pointer"
                    onMouseEnter={handleAccountHover}
                    onMouseLeave={handleAccountLeave}
                  >
                    <Link
                      to="/account/settings"
                      className="block px-2 py-1 text-black  hover:text-green-500"
                    >
                      Settings
                    </Link>
                    <Link
                      to="/logout"
                      className="block px-2 py-1 text-black  hover:text-green-500"
                    >
                      Logout
                    </Link>
                    <Link
                      to="/select-type"
                      className="block px-2 py-1  hover:text-green-500"
                    >
                      Create Store
                    </Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-2 text-white">
                <div className="flex items-center border border-green rounded-md ">
                  <Link to="/login">
                    <button className=" px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 hover:shadow-lg">
                      Log in
                    </button>
                  </Link>
                </div>
                <div className="flex items-center border border-green rounded-md  hover:bg-gray-50">
                  <Link to="/signup">
                    <button className=" px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 hover:shadow-lg">
                      Sign up
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* ------------------------------------------------------List Category----------------------------------------------------*/}

      <div className="p-1 mb-1 bg-white   font-popins px-10">
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
            {categoryList &&
              categoryList?.length !== 0 &&
              categoryList?.map((item, index) => (
                <div className="inline-block p-2 px-5" key={item?._id || index}>
                  <div
                    className="w-full sm:w-1/2 lg:w-auto transition duration-200 border-b-4 border-transparent hover:border-green-500 cursor-pointer"
                    key={item?._id || index}
                  >
                    <h1 className="text-center whitespace-nowrap">
                      {item?.name}
                    </h1>
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

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } w-[100%] mb-2 bg-black me-[500px] nav`}
      >
        <div className="flex flex-col p-5 text-white">
          <ul>
            <li className=" flex hover:text-gray-800">
              <p className="text-xl mr-2 font-bold">Hi</p>{" "}
              <p className="mt-1">Yuvan</p> ,
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li className="flex items-center">
              <img src="" className="bg-white w-6 mr-2" alt="" /> Post Rental
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-indian-rupee-sign mr-4"></i> Wallet
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-cart-shopping mr-2"></i> My Order
            </li>
            <hr className="border-t border-gray-100 my-2" />{" "}
            <li>
              <i className="fa-solid fa-cart-shopping mr-2"></i> My Store
            </li>
            <hr className="border-t border-gray-100 my-2" />{" "}
            <li>
              <i className="fa-regular fa-heart mr-3"></i> wishlist
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-qrcode mr-3"></i> Scan
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-exclamation mr-5"></i> About us
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-book mr-3"></i>Terms of Use
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-question mr-4"></i>Support
            </li>
            <hr className="border-t border-gray-100 my-2" />
            <li>
              <i className="fa-solid fa-file-invoice mr-4"></i>History
            </li>
            <hr className="border-t border-gray-100 my-2" />
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarDemo;
