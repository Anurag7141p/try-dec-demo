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
    <div className="bg-gray-200 h-screen flex justify-center items-center px-10 ">
      <div className="bg-white w-full min-h-[750px] rounded-lg p-2 overflow-auto">
        <div className="grid grid-cols-9">
          <div className="col-span-6  grid grid-cols-6 gap-4 place-items-center py-5">
            {data.map((curElem) => (
              <div class="max-w-56 rounded-lg overflow-hidden shadow-sm border border-gray-200 col-span-2">
                <div className="flex flex-col justify-center items-center border-b-2">
                  <img
                    class="w-36 h-32"
                    src={curElem.image}
                    alt="Sunset in the mountains"
                  />
                  <div class="font-bold text-[14px]  mb-2">{curElem.title}</div>
                </div>
                <div class="px-1 py-2">
                  <p class="text-gray-700 text-[10px] ">
                    {curElem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-3 bg-blue-600 min-h-[800px] rounded-2xl px-10 pt-20 text-white flex flex-col gap-5">
            <h1 className="font-semibold text-2xl">Media <br /> Production</h1>
            <p className="font-serif text-[12px]">
              From cameras to lighting equipment, this category offers a diverse
              range of tools and equipment necessary for media production
              endeavors. Filmmakers, photographers, and content creators can
              find everything they need to bring their creative visions to life,
              including cameras, lenses, tripods, drones, studio lighting, and
              audio recording equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
