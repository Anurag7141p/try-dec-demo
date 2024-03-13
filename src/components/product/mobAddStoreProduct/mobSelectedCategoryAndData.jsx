import React from "react";
import CenterImageAttach from "../addProductdetails/centerImageAttach";
import MobCenterImageAttach from "./mobCenterImageAttach";
import { inputStyle } from "../../../../utils/utils";
import { addBrandApi, getSubCategoryBrandApi } from "../../../../api/brandApi";
import { addModelApi, getBrandModelApi } from "../../../../api/modelApi";
import { getAllCategoryApi } from "../../../../api/categoryApi";
import { getCategorySubCategoryApi } from "../../../../api/subCategoryApi";
import { useDispatch, useSelector } from "react-redux";
import AddProductLocation from "./addProductLocation";
import { setAddProductSecondPageData } from "../../../../redux/store/addProductDataSlice";
import AddProductAddImage from "./addProductImage";

const MobSelectedCategoryAndData = ({ setPage }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [images, setImages] = useState([]);
  const [addModelValue, setAddModelValue] = useState("");
  const [addBrandValue, setAddBrandValue] = useState("");
  const [error_message, setError_message] = useState("");
  const { productData } = useSelector((state) => state?.addProductData);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [modelData, setModelData] = useState([]);
  const [locationData, setLocationData] = useState(null);
  const [selectedSubCategoryData, setSelectedSubCategoryData] = useState(null);
  const [brandData, setBrandData] = useState([]);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.userAuth);

  useEffect(() => {
    getAllCategory();
  }, [productData]);

  useEffect(() => {
    if (productData?.categoryId) {
      setSelectedCategory(productData?.categoryId);
    }
    if (productData?.subCategoryId) {
      setSelectedSubCategory(productData?.subCategoryId);
    }
    if (productData?.name) {
      setName(productData.name);
    }
    if (productData?.brandId) {
      setSelectedBrand(productData?.brandId);
    }
    if (productData?.modelId) {
      setSelectedModel(productData?.modelId);
    }
    if (productData?.images && productData?.images.length !== 0) {
      setImages((prev) => [...prev, ...productData?.images]);
    }
    if (productData?.locationData) {
      setLocationData(productData?.locationData);
    }
  }, [productData]);

  useEffect(() => {
    if (selectedSubCategory && subCategoryData) {
      const subCategory = subCategoryData.find(
        (sub) => sub?._id == selectedSubCategory
      );
      setSelectedSubCategoryData(subCategory);
    }
  }, [selectedSubCategory, subCategoryData]);

  const getAllCategory = async () => {
    const response = await getAllCategoryApi(productData?.mainCategoryId);
    setCategoryData(response);
  };

  const getSelectedCategorySubCategory = async () => {
    const response = await getCategorySubCategoryApi(selectedCategory);
    setSubCategoryData(response);
  };

  useEffect(() => {
    if (selectedCategory != "") {
      getSelectedCategorySubCategory();
    }
  }, [selectedCategory]);

  const handleCategorySelectChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubCategory("");
  };

  const handleSubCategorySelectChange = (e) => {
    setSelectedSubCategory(e.target.value);
  };

  const getSubCategoryBrand = async () => {
    const response = await getSubCategoryBrandApi(selectedSubCategory);
    if (productData && productData.subCategoryId !== selectedSubCategory) {
      setSelectedBrand("");
      setSelectedModel("");
    }
    if (response?.subCategoryData?.brand == true) {
      setBrandData(response?.brandData);
    }
  };

  const handleAddBrand = async () => {
    if (!addBrandValue) {
      setError_message("Brand name is empty");
      return;
    }

    const minLength = 2;
    const maxLength = 20;

    if (addBrandValue.length < minLength) {
      setError_message("Brand name is too short");
      return;
    }

    if (addBrandValue.length > maxLength) {
      setError_message("Brand name is too long");
      return;
    }
    const newValue = {
      name: addBrandValue,
      subCategoryId: subCategoryData._id,
      storeId: data?.storeId,
    };
    const response = await addBrandApi(newValue);
    if (response) {
      getSubCategoryBrand();
      setSelectedBrand(response?._id);
    }
  };

  const handleAddModel = async () => {
    if (!addModelValue) {
      setError_message("Model name is empty");
      return;
    }

    const minLength = 2;
    const maxLength = 20;

    if (addModelValue.length < minLength) {
      setError_message("Model name is too short");
      return;
    }

    if (addModelValue.length > maxLength) {
      setError_message("Model name is too long");
      return;
    }
    const newData = {
      name: addModelValue,
      brandId: formikFieldValues?.brandId,
      storeId: data.storeId,
    };
    const response = await addModelApi(newData);
    if (response) {
      getBrandModel();
      setSelectedModel(response?._id);
    }
  };

  useEffect(() => {
    if (selectedBrand != "" && selectedBrand != "addNew") {
      getBrandModel();
    }
  }, [selectedBrand]);

  const getBrandModel = async () => {
    const response = await getBrandModelApi(selectedBrand);
    setModelData(response);
  };

  const handleBrandSelectChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel("");
  };

  useEffect(() => {
    if (selectedSubCategory !== "" && selectedSubCategory) {
      getSubCategoryBrand();
    }
  }, [selectedSubCategory]);

  const handleModelSelectChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedCategory === "" || !selectedCategory) {
      setError_message("Category is required");
      return;
    }
    if (selectedSubCategory === "" || !selectedSubCategory) {
      setError_message("Sub Category is required");
      return;
    }
    if (!name || name.length < 3 || name.length > 20) {
      setError_message("Name must be between 3 and 20 characters");
      return;
    }
    if (images.length !== 3) {
      setError_message("Please select three images");
      return;
    }
    if (selectedSubCategoryData.brand) {
      if (selectedBrand === "" || !selectedBrand) {
        setError_message("Please select brand");
        return;
      }
    }
    if (selectedSubCategoryData.model) {
      if (selectedModel === "" || !selectedModel) {
        setError_message("Please select model");
        return;
      }
    }
    const productData = {
      categoryId: selectedCategory,
      subCategoryId: selectedSubCategory,
      brandId: selectedBrand,
      modelId: selectedModel,
      storeId: data?.storeId,
      name: name,
      images: images,
      locationData: locationData,
    };
    dispatch(setAddProductSecondPageData(productData));
    setPage(3);
  };

  const handleBack = () => {
    setPage(1);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="w-full sm:h-60 h-52 pt-10 text-white  bg-blue-600   flex flex-col gap-6 justify-center pb-10 px-5 rounded-b-3xl">
          <h1 className="text-3xl font-semibold">Add Product </h1>
          <p className="text-xl">
            The rental store will host all the products you are putting on rent.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 w-full h-3 bg-white rounded"></div>
            <div className="col-span-1 w-full h-3  rounded bg-blue-900"></div>
            <div className="col-span-1 w-full h-3   rounded bg-blue-900"></div>
          </div>
        </div>
      </div>

      {/* category and subcategory */}
      <div className="w-full px-10 py-5 pt-10 flex flex-col gap-4 z-10 pb-32">
        <h1 className="text-xl text-gray-600 font-semibold">
          Category & SubCategory
        </h1>
        <div className="relative  ">
          <select
            id="storeMode"
            name="storeMode"
            className="p-2  block appearance-none w-full bg-white border  border-gray-400  focus:border-blue-300 text-gray-700 py-4 mb-3 text-xl rounded-xl pr-8  leading-tight focus:outline-none"
            value={selectedCategory}
            onChange={handleCategorySelectChange}
          >
            <option value="" disabled hidden>
              Select your product category
            </option>
            {categoryData &&
              categoryData?.length !== 0 &&
              categoryData.map((category) => (
                <option
                  className="rounded"
                  key={category._id}
                  value={category._id}
                >
                  {category?.name}
                </option>
              ))}
          </select>
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

        {/* subcategory */}

        {selectedCategory && (
          <div className="relative  ">
            <select
              name="category"
              className="p-2  block appearance-none w-full bg-white border  border-gray-400  focus:border-blue-300 text-gray-700 py-4 mb-3 text-xl rounded-xl pr-8  leading-tight focus:outline-none"
            >
              <option className="rounded">Camera</option>
              <option className="rounded">Vehicle</option>
            </select>
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
        )}

        {/* title */}
        <div className="text-xl">
          <input
            type="text"
            placeholder="Enter Product name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" border-b-2 border-blue-500 w-full p-2 focus:outline-none"
          />
        </div>

        {/* brand and model */}
        <h1 className="text-xl text-gray-600 font-semibold pt-5">
          Brand & Model
        </h1>
        {selectedSubCategoryData?.brand === true && (
          <div className="relative  ">
            <select
              id="storeMode"
              name="storeMode"
              className="p-2  block appearance-none w-full bg-white border  border-gray-400  focus:border-blue-300 text-gray-700 py-4 mb-3 text-xl rounded-xl pr-8  leading-tight focus:outline-none"
              value={selectedBrand}
              onChange={handleBrandSelectChange}
            >
              <option value="" disabled hidden>
                Select your product Brand
              </option>
              {brandData &&
                brandData.map((brand) => (
                  <>
                    {brand.storeId === data?.storeId ? (
                      <option
                        className="rounded"
                        key={brand._id}
                        value={brand._id}
                      >
                        {brand?.name}
                      </option>
                    ) : (
                      brand?.status && (
                        <option
                          className="rounded"
                          key={brand._id}
                          value={brand._id}
                        >
                          {brand?.name}
                        </option>
                      )
                    )}
                  </>
                ))}
              {selectedSubCategoryData?.allowUserToAddBrand === true && (
                <option value="addNew">Other Brand</option>
              )}
            </select>
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
        )}

        {selectedSubCategoryData?.model === true &&
          selectedBrand !== "addNew" &&
          modelData && (
            <div className="relative  ">
              <select
                id="storeMode"
                name="storeMode"
                value={selectedModel}
                onChange={handleModelSelectChange}
                className="p-2  block appearance-none w-full bg-white border  border-gray-400  focus:border-blue-300 text-gray-700 py-4 mb-3 text-xl rounded-xl pr-8  leading-tight focus:outline-none"
              >
                <option value="" disabled>
                  Select your product brand model
                </option>
                {modelData &&
                  modelData.map((model) => (
                    <>
                      {model?.storeId === data?.storeId ? (
                        <option
                          className="rounded"
                          key={model._id}
                          value={model._id}
                        >
                          {model?.name}
                        </option>
                      ) : (
                        model?.status && (
                          <option
                            className="rounded"
                            key={model._id}
                            value={model._id}
                          >
                            {model?.name}
                          </option>
                        )
                      )}
                    </>
                  ))}
                {selectedSubCategoryData?.allowUserToAddModel === true && (
                  <option value="addNew">Other Model</option>
                )}
              </select>
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
          )}
        {/* attach image */}
        <div>
          <MobCenterImageAttach setImages={setImages} images={images} />
        </div>
      </div>
      <p className="text-red-500 text-sm w-full items-center flex justify-center">
        {error_message}
      </p>

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

export default MobSelectedCategoryAndData;
