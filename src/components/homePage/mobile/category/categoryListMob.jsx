import React from "react";
import { Link } from "react-router-dom";

const CategoryListMob = () => {
  const categoryList = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/2005/2005064.png",
      category: "Camera & Lens",
      description: "Photography,video production,drones",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1510/1510415.png",
      category: "Light Units",
      description: "Photography,video production,LED unit",
    },
    {
      image: "https://simpleicon.com/wp-content/uploads/film.png",
      category: "Film Making Equipments",
      description: "Gimmy Gib,Gimbal,Dolly,Crane",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/48/48704.png",
      category: "Location",
      description: "Studio,House,Properties,Green Mat Floor",
    },
    {
      image:
        "https://i.pinimg.com/originals/9f/88/d4/9f88d4afe1547b32d5c5591c2f77e02f.png",
      category: "Art Properties",
      description: "Antiques,Flowers,Books,Lamps",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1460/1460449.png",
      category: "Costumes",
      description: "Fancy Dress,Character Uniforms",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2237/2237677.png",
      category: "Ornaments",
      description: "Jewelry,Custom made",
    },
    {
      image: "https://www.iconpacks.net/icons/2/free-car-icon-2901-thumb.png",
      category: "Shooting Vehicles",
      description: "Offcial Vehicles,Private rentals",
    },
  ];
  return (
    <div>
      <div className="h-screen overflow-auto w-full pt-10 px-5 flex flex-col gap-3">
        {categoryList.map((curElem) => (
          <Link to="/mobile-home/sub-category-product">
            <div className="bg-slate-50 w-full h-16 grid grid-cols-5 py-2 rounded-md hover:bg-blue-500 hover:text-white">
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src={curElem.image}
                  alt=""
                  className="w-10 h-10 "
                />
              </div>
              <div className="col-span-4 flex flex-col justify-center">
                <h1 className="font-montserrat text-xl ">{curElem.category}</h1>
                <p className="font-montserrat text-[15px] ">
                  {curElem.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryListMob;
