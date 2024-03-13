import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const DiscountComponent = ({
  pricing,
  selectedPricing,
  setPricing,
  setAnyError,
}) => {
  const [error_message, setError_message] = useState("");
  const [discountCount, setDiscountCount] = useState(1);
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    if (pricing.discounts) {
      setDiscounts(pricing?.discounts);
      setDiscountCount(pricing?.discounts?.length);
    }
  }, [selectedPricing]);

  useEffect(() => {
    setPricing((prev) => ({
      ...prev,
      [selectedPricing]: {
        ...prev[selectedPricing],
        discounts: discounts,
      },
    }));
  }, [discounts]);

  const addDiscount = () => {
    if (discounts.length == 0) {
      setDiscounts((prevDiscounts) => [
        ...prevDiscounts,
        {
          percentage: 0,
          start: 0,
          end: 0,
        },
      ]);
      setDiscountCount(1);
      return;
    }
    if (discountCount < 4) {
      if (
        parseInt(discounts[discounts.length - 1].end) >=
          parseInt(pricing.maxDuration) ||
        parseInt(discounts[discounts.length - 1].end) + 1 >=
          parseInt(pricing.maxDuration)
      ) {
        return;
      }

      setDiscountCount(discountCount + 1);
      setDiscounts((prevDiscounts) => [
        ...prevDiscounts,
        {
          percentage:
            Number(prevDiscounts[prevDiscounts.length - 1].percentage) + 1,
          start: Number(prevDiscounts[prevDiscounts.length - 1].end) + 1,
          end: Number(prevDiscounts[prevDiscounts.length - 1].end) + 2,
        },
      ]);
    }
  };

  const removeDiscount = (index) => {
    setDiscountCount(discountCount - 1);
    setDiscounts(discounts.filter((_, i) => i !== index));
  };

  const handleInputChange = (e, index, field) => {
    let isError = false;
    const { value } = e.target;
    if (isNaN(value)) {
      return;
    }
    if (field === "percentage" && parseInt(value) > 90) {
      setError_message("Percentage value must be 90 or less.");
      isError = true;
      setAnyError(true);
      return;
    }

    if (field === "start") {
      if (index > 0 && parseInt(value) < parseInt(discounts[index - 1].end)) {
        isError = true;
        setAnyError(true);
        setError_message(
          "Start day must be greater than the previous discount's end day."
        );
      }
    }

    if (field === "end") {
      if (parseInt(pricing.maxDuration) < parseInt(value)) {
        isError = true;
        setAnyError(true);
        setError_message(
          "End day must be less than or equal to the maximum duration."
        );
      }
    }

    if (
      (field === "percentage" &&
        index > 0 &&
        parseInt(value) <= parseInt(discounts[index - 1].percentage)) ||
      (field === "start" &&
        index > 0 &&
        parseInt(value) <= parseInt(discounts[index - 1].start))
    ) {
      setError_message(
        "Invalid input. Please enter a value greater than the previous value."
      );
    }
    if (field == "start" && parseInt(value) > parseInt(discounts[index].end)) {
      setDiscounts((prev) =>
        prev.map((discount, i) =>
          i === index
            ? { ...discount, [field]: value, ["end"]: Number(value) + 1 }
            : discount
        )
      );
      return;
    }
    setDiscounts((prev) =>
      prev.map((discount, i) =>
        i === index ? { ...discount, [field]: value } : discount
      )
    );
    if (!isError) {
      isError = false;
      setAnyError(false);
      setError_message("");
    }
  };

  const handleDiscountCalculationStart = (position) => {
    if (discounts && discounts[position] && discounts[position].start) {
      const amount = pricing?.amount * discounts[position].start;
      const result = (amount * discounts[position].percentage) / 100;
      return amount - result;
    }
    return 0;
  };

  const handleDiscountCalculationEnd = (position) => {
    if (discounts && discounts[position] && discounts[position].end) {
      const amount = pricing?.amount * discounts[position].end;
      const result = (amount * discounts[position].percentage) / 100;
      return amount - result;
    }
    return 0;
  };

  return (
    <>
      {Array.from({ length: discountCount }).map((_, index) => (
        <div key={index}>
          <div className="xm:flex gap-2 text-xs">
            {/* Percentage */}
            <div className="xm:w-1/5 xs:w-3/4  h-10 border-2 border-gray-300 bg-white flex flex-row mt-2  rounded-lg ">
              <div className="w-2/3 flex overflow-hidden pl-3 ">
                <input
                  type="number"
                  name={`discounts.${index}.percentage`}
                  placeholder="0"
                  className="m-2 pl-2 outline-none"
                  value={discounts[index]?.percentage}
                  onChange={(e) => handleInputChange(e, index, "percentage")}
                />
              </div>
              <div className="flex w-1/3 justify-items-end items-center">
                <span className="inset-y-0 text-gray-400">%</span>
              </div>
            </div>

            {/* Start and End  */}
            <div className="xm:w-1/3 xs:w-3/4 h-10 border-2 border-gray-300 bg-white  flex flex-row mt-2  rounded-lg">
              {/* Start  */}
              <div className="flex w-2/3 overflow-hidden pl-3">
                <input
                  type="number"
                  name={`discounts.${index}.start`}
                  placeholder="0"
                  className="m-2 pl-2 outline-none"
                  value={discounts[index]?.start}
                  onChange={(e) => handleInputChange(e, index, "start")}
                />
              </div>
              <div className="flex w-1/3 justify-center items-center">
                <span className="inset-y-0 text-gray-400">-</span>
              </div>

              {/* End  */}
              <div className="flex w-2/3  overflow-hidden ">
                <input
                  type="number"
                  name={`discounts.${index}.end`}
                  placeholder="0"
                  className="m-2  outline-none"
                  value={discounts[index]?.end}
                  onChange={(e) => handleInputChange(e, index, "end")}
                />
              </div>
              <div className="flex w-1/3 justify-center items-center pr-3">
                <span className="inset-y-0 text-gray-400 mx-2">
                  {selectedPricing === "hourlyPrice" && "Hourly"}
                  {selectedPricing === "dayPricing" && "Daily"}
                  {selectedPricing === "monthlyPricing" && "Monthly"}
                </span>
              </div>
            </div>

            {/* Discount Calculation */}
            <div className="flex justify-normal items-center gap-3 w-full h-10">
              <div className=" xm:w-3/4 xs:w-3/4 h-10 border-2 border-gray-300 bg-white  flex flex-row mt-2  rounded-lg text-black">
                <div className="flex w-2/3 overflow-hidden pl-1">
                  <div className="flex justify-center items-center">
                    <span className="inset-y-0 text-black">₹</span>
                  </div>
                  <p className="m-2  outline-none">
                    {handleDiscountCalculationStart(index)}
                  </p>
                </div>

                <h1 className="flex w-1/3 justify-center items-center">-</h1>

                <div className="flex w-2/3 overflow-hidden ">
                  <div className="flex  justify-center items-center">
                    <span className="inset-y-0 text-black">₹</span>
                  </div>
                  <p className="m-2  outline-none">
                    {handleDiscountCalculationEnd(index)}
                  </p>
                </div>
              </div>
              <div className="xm:flex   ">
                {" "}
                <AiOutlineDelete
                  className="cursor-pointer"
                  onClick={() => removeDiscount(index)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <p className="text-red-500 text-sm w-full items-center flex justify-center">
        {error_message}
      </p>
      <div className="pt-3">
        <button
          type="button"
          onClick={addDiscount}
          className="bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 w-20 text-white"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default DiscountComponent;
