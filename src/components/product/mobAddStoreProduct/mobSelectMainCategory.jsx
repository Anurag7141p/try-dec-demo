import React from "react";
import { useDispatch } from "react-redux";
import { setProductMainCategory } from "../../../../redux/store/addProductDataSlice";
import { getMianCategoryDataApi } from "../../../../api/mainCategoryApi";

const MobSelectMainCategory = ({ setPage, page }) => {
  const itemsPerPage = 8;
  const [page] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  useEffect(() => {
    getMainCategoryData();
  }, []);

  const getMainCategoryData = async () => {
    const cardsData = await getMianCategoryDataApi();
    const visibleCards = cardsData.slice(
      page * itemsPerPage,
      (page + 1) * itemsPerPage
    );
    setVisibleCards(visibleCards);
  };
  const dispatch = useDispatch();

  const handleMainCategorySelection = (id) => {
    dispatch(setProductMainCategory(id));
    setPage(2);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-full sm:h-60 h-52 text-white  bg-blue-600   flex flex-col gap-6 justify-center pb-10 px-5 rounded-b-3xl">
          <h1 className="text-2xl font-semibold">Select target category </h1>
          <p className="text-lg">
            The rental store will host all the products you are putting on rent.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 xm:px-10 xs:px-5">
        {visibleCards &&
          visibleCards?.length !== 0 &&
          visibleCards.map((card, index) => (
            <div
              className=" xxs:h-[230px] xs:h-[120px] h-[120px] w-full border rounded-t-3xl border-gray-300 shadow-xl  relative my-5 grid grid-cols-2    cursor-pointer hover:opacity-95  ease-in-out duration-300 bg-white text-black "
              onClick={() => handleMainCategorySelection(card?._id)}
            >
              <div class="absolute bottom-0 top-0   w-full flex   flex-col justify-center items-center">
                <img
                  src={card?.image}
                  alt="image"
                  className="w-[50%] h-[65%] "
                />
                <h1 class=" font-semibold text-[14px] pt-1 w-[70%] flex justify-center">
                  {" "}
                  {card.name}
                </h1>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MobSelectMainCategory;
