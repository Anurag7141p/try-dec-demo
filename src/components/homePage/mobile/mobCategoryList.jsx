import React from "react";

const MobCategoryList = () => {
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
    {
      image: "https://www.artodev.com/wp-content/uploads/2021/05/mov.png",
      title: "Media Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-4  gap-5">
        {data.map((curElem) => (
          <div class="h-auto   md:w-36 xs:w-20   rounded-lg overflow-hidden  ">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="shadow-inner border border-gray-200 p-2 rounded-lg ">
                <img
                  class=" md:w-24  md:h-24  xs:w-20 xs:h-20"
                  src={curElem.image}
                  alt="Sunset in the mountains"
                />
              </div>
              <div class="font-bold xl:text-[14px] lg:text-[13px] md:text-[11px] sm:text-[10px] xs:text-[8px]  mb-2">
                {curElem.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobCategoryList;
