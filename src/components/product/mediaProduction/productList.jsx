import React from "react";

const ProductList = () => {
  const data = [
    {
      image: "https://www.artodev.com/wp-content/uploads/2021/05/mov.png",
      title: "Media Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil",
    },
    {
      image: "https://www.artodev.com/wp-content/uploads/2021/05/mov.png",
      title: "Media Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil",
    },
    {
      image: "https://www.artodev.com/wp-content/uploads/2021/05/mov.png",
      title: "Media Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil",
    },
    {
      image: "https://www.artodev.com/wp-content/uploads/2021/05/mov.png",
      title: "Media Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil",
    },
    {
      image: "https://www.artodev.com/wp-content/uploads/2021/05/mov.png",
      title: "Media Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil",
    },
    {
      image: "https://www.artodev.com/wp-content/uploads/2021/05/mov.png",
      title: "Media Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil",
    },
    {
      image: "https://www.artodev.com/wp-content/uploads/2021/05/mov.png",
      title: "Media Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil",
    },
  ];

  return (
    <div className="mx-auto  flex  justify-center  items-center  lg:w-full 2xl:w-[1536px] xl:w-full   ">
      <div className="   flex justify-center  px-10 ">
        <div className="bg-white w-full  rounded-lg p-2 overflow-auto">
          <div className="grid grid-cols-9 gap-3">
            <div className="col-span-6  lg:col-span-6  grid grid-cols-6 gap-4  xl:place-items-center lg:place-items-center md:place-items-center xs:h-[500px] md:h-full py-5">
              {data.map((curElem) => (
                <div class="h-auto xl:max-w-56 lg:w-44 md:w-36 xs:w-24  rounded-lg overflow-hidden shadow-sm border border-gray-200 col-span-2">
                  <div className="flex flex-col justify-center items-center border-b-2">
                    <img
                      class="xl:w-36 xl:h-32 lg:w-28 lg:h-24 md:w-24  md:h-20  xs:w-20 xs:h-16"
                      src={curElem.image}
                      alt="Sunset in the mountains"
                    />
                    <div class="font-bold xl:text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] xs:text-[8px]  mb-2">
                      {curElem.title}
                    </div>
                  </div>
                  <div class="px-1 py-2">
                    <p class="text-gray-700 xl:text-[10px] lg:text-[9px] md:text-[8px] xs:text-[5px]  ">
                      {curElem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-3 bg-blue-600 min-h-[800px] rounded-2xl px-10 pt-20 text-white flex flex-col gap-5  ">
              <h1 className="font-semibold xl:text-2xl lg:text-2xl md:text-xl xs:text-xl">
                Media <br /> Production
              </h1>
              <p className="font-serif xl:text-[10px] lg:text-[9px] md:text-[8px] xs:text-[5px] ">
                From cameras to lighting equipment, this category offers a
                diverse range of tools and equipment necessary for media
                production endeavors. Filmmakers, photographers, and content
                creators can find everything they need to bring their creative
                visions to life, including cameras, lenses, tripods, drones,
                studio lighting, and audio recording equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
