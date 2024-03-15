import React from "react";

const MobSelectMainCategory = ({ setPage, page }) => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718654/trydec/mediaproduction.png",
      category_name: "Media Production",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718874/trydec/properties.png",
      category_name: "Properties",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718874/trydec/events.png",
      category_name: "Events",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718873/trydec/computerequipments.png",
      category_name: "Computer Equipments",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718873/trydec/fashion.png",
      category_name: "Fashion",
    },

    {
      id: 6,
      img: "https://res.cloudinary.com/dgkg64nql/image/upload/v1709718654/trydec/mediaproduction.png",
      category_name: " Production",
    },
    {
      id: 6,
      img: "https://static.vecteezy.com/system/resources/thumbnails/025/061/745/small/4k-beautiful-colorful-abstract-wallpaper-photo.jpg",
      category_name: " Production",
    },
  ];

  const next = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-full sm:h-60 min-h-40 text-white pt-5  bg-blue-600   flex flex-col gap-6 justify-center pb-10 px-5 rounded-b-3xl">
          <h1 className="text-xl font-semibold">Select target category </h1>
          <p className="text-md ">
            The rental store will host all the products you are putting on rent.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 xm:px-10 xs:px-5">
        {data.map((item) => (
          <div
            className="xs:h-[130px] xxs:h-[210px]  sm:h-[300px] h-[120px] w-full border rounded-t-3xl border-gray-300 shadow-xl  relative my-5 grid grid-cols-2    cursor-pointer hover:opacity-95  ease-in-out duration-300 bg-white text-black "
            onClick={next}
          >
            <div class="absolute bottom-0 top-0   w-full flex   flex-col justify-center items-center">
              <img
                src={item.img}
                alt=""
                className="w-[60%] h-[60%] object-cover rounded-lg"
              />
              <h1 class=" font-semibold text-[14px] pt-1 w-[70%] flex justify-center">
                {" "}
                {item.category_name}{" "}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobSelectMainCategory;
