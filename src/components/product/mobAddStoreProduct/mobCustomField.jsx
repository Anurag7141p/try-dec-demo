import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCustomDropdownValueApi,
  getEachSubCategoryDataApi,
} from "../../../../api/subCategoryApi";
import { inputStyle } from "../../../../utils/utils";
import HandleTag from "../addProduct/tags/handleTags";
import { setAddProductSecondPageData } from "../../../../redux/store/addProductDataSlice";

const MobCustomField = ({ setPage, page }) => {
  const { productData } = useSelector((state) => state?.addProductData);
  const [subCategoryData, setSubCategoryData] = useState(null);
  const [gridRow, setGridRow] = useState(4);
  const [customValues, setCustomValues] = useState({});
  const [customAddValue, setCustomAddValue] = useState("");
  const { data } = useSelector((state) => state?.userAuth);
  const [error_message, setError_message] = useState("");
  const [discription, setDiscription] = useState("");
  const dispatch = useDispatch();
  const getSubCategoryData = async () => {
    const response = await getEachSubCategoryDataApi(
      productData?.subCategoryId
    );
    setSubCategoryData(response);
  };

  useEffect(() => {
    if (productData) {
      getSubCategoryData();
    }
    setCustomValues((prev) => ({ ...prev, ...productData }));
    if (productData?.discription) {
      setDiscription(productData.discription);
    }
  }, [productData]);

  const handleCustomValueChange = (e) => {
    const { name, value } = e.target;
    setCustomValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCustomAddValue = async (id, fieldName) => {
    const newData = {
      storeId: data?.storeId,
      customfieldId: id,
      newValue: customAddValue,
      subCategoryId: subCategoryData?._id,
    };
    const response = await addNewCustomDropdownValueApi(newData);
    setSubCategoryData(response);
    setCustomValues((prev) => ({
      ...prev,
      [fieldName]: customAddValue,
    }));
    setCustomAddValue("");
  };
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item, fieldName) => {
    if (selectedItems.includes(item)) {
      const result = selectedItems.filter(
        (selectedItem) => selectedItem !== item
      );
      setSelectedItems(result);
      setCustomValues((prev) => ({
        ...prev,
        [fieldName]: result,
      }));
    } else {
      const result = [...selectedItems, item];
      setSelectedItems(result);
      setCustomValues((prev) => ({
        ...prev,
        [fieldName]: result,
      }));
    }
  };

  const handleBack = () => {
    setPage(2);
  };

  const handleSubmit = () => {
    let hasError = false;
    subCategoryData.customFields.forEach((field) => {
      if (field.optional === false && field.type !== "location") {
        if (!customValues[field.name]) {
          setError_message(`${field.name} is required`);
          hasError = true;
        }
      }
    });

    if (!hasError) {
      let addingValues = { ...customValues, discription: discription };
      dispatch(setAddProductSecondPageData(addingValues));
      setPage(4);
    }
  };

  useEffect(() => {
    if (subCategoryData?.customFields) {
      if (subCategoryData.customFields.length > 8) {
        let val = Math.round(subCategoryData.customFields.length / 2);
        setGridRow(val);
      }
    }
  }, [subCategoryData]);

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-full sm:h-60 h-52 pt-10 text-white  bg-blue-600   flex flex-col gap-6 justify-center pb-10 px-5 rounded-b-3xl">
          <h1 className="text-3xl font-semibold">Product Details </h1>
          <p className="text-balance">
            Adding documents enables us to verify and keep fraudulent activities
            out of reach.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 w-full h-3 bg-white rounded"></div>
            <div className="col-span-1 w-full h-3  rounded bg-white"></div>
            <div className="col-span-1 w-full h-3   rounded bg-blue-900"></div>
          </div>
        </div>
      </div>

      <div className="w-full px-10 py-5 pt-10 flex flex-col gap-4 z-10 pb-32">
        {subCategoryData &&
          subCategoryData.customFields &&
          subCategoryData.customFields.map((field) => (
            <>
              {field.type !== "location" && (
                <>
                  {field.type === "input" && (
                    <div className="text-xl flex flex-col gap-2">
                      <p className="text-gray-400">
                        {field.optional ? "*optional" : ""}
                      </p>
                      <label className="text-2xl">{field.name}</label>
                      <input
                        type={field.dataType}
                        name={field.name}
                        minLength={field.min}
                        maxLength={field.max}
                        onChange={(e) => handleCustomValueChange(e, field.name)}
                        value={customValues[field.name] || ""}
                        placeholder={field.placeholder}
                        className=" border border-gray-500 rounded-xl py-4 w-full p-2 focus:outline-none"
                      />
                    </div>
                  )}

                  {field.type === "dropdown" && (
                    <>
                      <p className="text-gray-400">
                        {field.optional ? "*optional" : ""}
                      </p>
                      <h1 className="text-2xl   pt-5">{field.name}</h1>
                      <div className="relative  ">
                        <select
                          as="select"
                          id={field.name}
                          name={field.name}
                          value={customValues[field.name] || ""}
                          onChange={(e) =>
                            handleCustomValueChange(e, field.name)
                          }
                          className="p-2  block appearance-none w-full bg-white border  border-gray-400  focus:border-blue-300 text-gray-700 py-4 mb-3 text-xl rounded-xl pr-8  leading-tight focus:outline-none"
                        >
                          <option value="" hidden>
                            Select Product {field.name}
                          </option>
                          {field.dropdownValues?.map((value) => (
                            <option key={value._id} value={value.name}>
                              {value.name}
                            </option>
                          ))}
                          {field.allowUserToAdd && (
                            <option value="addNew">Other</option>
                          )}
                        </select>
                        {customValues[field.name] === "addNew" && (
                          <input
                            type="text"
                            placeholder="Enter model"
                            className=" border border-gray-500 rounded-xl py-4 w-full p-2 focus:outline-none"
                            value={customAddValue}
                            onChange={(e) => setCustomAddValue(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                handleAddCustomAddValue(field._id, field.name);
                              }
                            }}
                          />
                        )}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex  bottom-3  items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          ))}
      </div>

      {/* footer */}
      <div className="xs:h-28 xs:w-full flex text-xl bg-gray-50 font-lato  border-2 rounded-t-3xl items-center justify-around fixed bottom-0 drop-shadow-3xl ">
        <div>
          <button
            className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
        <div>
          <button
            className="text-gray-500 px-10 py-3 hover:text-[#1281B8]  rounded-lg bg-white   shadow-t-xl xs:hover:bg-gray-50 border-b-4 border-r-4  border-blue-600"
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default MobCustomField;
