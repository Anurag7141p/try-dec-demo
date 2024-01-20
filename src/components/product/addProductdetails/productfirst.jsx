import { ErrorMessage, Field } from "formik";
// import { getCategoryDataApi } from "../../../../api/categoryApi";
import { useState, useEffect } from "react";
// import { inputStyle } from "../../../../utils/utils";
// import { getCategorySubCategoryApi } from "../../../../api/subCategoryApi";

const AddProductFirstPage = ({ setFieldValue }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [subCategoryData, setSubCategoryData] = useState([
    {
      _id: "33221",
      categoryId: 1311,

      name: "Electronics-2222",
    },
    {
      _id: "32123",
      categoryId: 1113,
      name: "Clothing-3232",
    },
    {
      _id: "39721",
      categoryId: 12211,
      name: "Home & Kitchen-323232323",
    },
  ]);
  const [categories, setCategories] = useState([
    {
      _id: 1311,
      name: "Electronics",
    },
    {
      _id: 1113,
      name: "Clothing",
    },
    {
      _id: 12211,
      name: "Home & Kitchen",
    },
  ]);

  const handleCategorySelectChange = (e) => {
    setSelectedCategory(e.target.value);
    setFieldValue("categoryId", e.target.value);
  };

  const handleSubCategorySelectChange = (e) => {
    setSelectedSubCategory(e.target.value);
    setFieldValue("subCategoryId", e.target.value);
  };

  console.log(selectedCategory);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategoryDataApi();
        setCategories(response.data); // Assuming the data property holds the array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // fetchCategories();
  }, []);
  const getSelectedCategorySubCategory = async () => {
    const response = await getCategorySubCategoryApi(selectedCategory);
    setSubCategoryData(response);
  };
  useEffect(() => {
    // getSelectedCategorySubCategory()
  }, [selectedCategory]);

  return (
    <>
      <div className="flex justify-center items-center lg:h-screen lg:flex-row lg:ms-10">
        <div className="">
          <div className="w-full md:w-80 mt-5">
            <label htmlFor="subCategory" className="mb-2 font-semibold">
              Select Product category
            </label>
            <div className="relative my-3 mb-7">
              <select
                id="storeMode"
                name="storeMode"
                className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-300 text-gray-700 py-2 mb-4 pr-8 rounded leading-tight focus:outline-none"
                value={selectedCategory}
                onChange={handleCategorySelectChange}
              >
                <option value="" disabled hidden>
                  Select your product category
                </option>
                {categories.map((category) => (
                  <option
                    className="rounded"
                    key={category._id}
                    value={category._id}
                  >
                    {category?.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
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
            {/* sub */}
            {selectedCategory ? (
              <>
                <label htmlFor="subCategory" className="mb-2 font-semibold">
                  Select sub category
                </label>
                <div className="relative my-3 mb-7">
                  <select
                    id="storeMode"
                    name="storeMode"
                    className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-300 text-gray-700 py-2 mb-4 pr-8 rounded leading-tight focus:outline-none"
                    value={selectedSubCategory}
                    onChange={handleSubCategorySelectChange}
                  >
                    <option value="" disabled hidden>
                      Select your product category
                    </option>
                    {subCategoryData.map((subCategory) => (
                      <option
                        className="rounded"
                        key={subCategory._id}
                        value={subCategory._id}
                      >
                        {subCategory?.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
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
            ) : (
              ""
            )}
            <div className="mb-4">
              <label htmlFor="ProductN">Product Name</label>
              <Field type="text" 
              placeholder="Enter Product name"
              name="name" className={inputStyle} />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600"
                
              />
            </div>
            <div className="mt-4">
              <h1 className="mb-2">Including accessories</h1>
              <span className="text-gray-400">*optional</span>
              <div
                className="border border-black lg:w-80 lg:h-20 px-3 py-1 mb-2"
                style={{ cursor: "text" }}
              >
                <Field
                  as="textarea"
                  className="w-full h-full mb-5 outline-none resize-none"
                  name="accessories"
                />

                <ErrorMessage
                  name="accessories"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="mb-2">Description</h1>
            <div
              className="border border-black lg:w-80 lg:h-32 px-3 py-1 mb-2"
              style={{ cursor: "text" }}
            >
              <Field
                as="textarea"
                className="w-full h-full mb-5 outline-none resize-none"
                name="discription"
              />
              <ErrorMessage
                name="discription"
                component="div"
                className="text-red-600"
              />
            </div>
          </div>
          {/* <button className="bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 w-20 text-white">
            Next
          </button> */}
        </div>
      </div>
    </>
  );
};

export default AddProductFirstPage;
