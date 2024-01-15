import { Field, ErrorMessage } from "formik";
import { inputStyle } from "../../../utils/utils";
import { useState } from "react";
const ProSecondpage = () => {

    const mainCategories = [
        { value: "option1", label: "Camera & Equipments", subCategories: ["Lens", "Tripod", "Stabilizer"] },
        { value: "option2", label: "Vehicles", subCategories: ["Car", "Motorcycle", "Truck"] },
        { value: "option3", label: "Sound units", subCategories: ["opt1", "opt2", "op3"] },

    ];
    const [selectedMainCategory, setSelectedMainCategory] = useState('');
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);

    const handleMainCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setSelectedMainCategory(selectedCategory);
        const foundCategory = mainCategories.find(category => category.value === selectedCategory);
        if (foundCategory) {
            setSubCategoryOptions(foundCategory.subCategories);
        } else {
            setSubCategoryOptions([]);
        }
    };
    return (
        <div className="flex lg:h-screen lg:flex-row lg:ms-10">
            <div className="md:ms-4 md:mt-20 ms-2 ">
                <div className="w-full md:w-80 mt-5">
                    <label htmlFor="storeType" className="mb-2">
                        Select product category
                    </label>
                    <select
                        id="storeType"
                        name="storeType"
                        className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-500  text-gray-700 py-2 mb-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 "
                        onChange={handleMainCategoryChange}
                        value={selectedMainCategory}
                    >
                        <option value="" >Select a category</option>
                        {mainCategories.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {/* sub */}
                    <div className="relative ">
                        <label htmlFor="subCategory" className="mb-2">
                            Select sub category
                        </label>
                        <select
                            id="subCategory"
                            name="subCategory"
                            className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-500  text-gray-700 py-2 mb-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 "
                        >
                            {subCategoryOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>     
                      <div className="mb-4">
                        <label htmlFor="product">Product Name</label>
                        <Field
                            type="text"
                            name="ProductN"
                            className={inputStyle}
                        />
                        <ErrorMessage
                            name="ProductN"
                            component="div"
                            className="text-red-600"
                        />
                    </div>
                    <div className='mt-4'>
                        <h1 className='mb-2'>Including accessories</h1>
                        <div className='border border-black lg:w-80 lg:h-20 px-3 py-1 mb-2' style={{ cursor: 'text' }}>
                            <Field
                                as="textarea"
                                className='w-full h-full mb-5 outline-none resize-none'
                                name="accessoriesDescription"
                            />
                            <ErrorMessage
                                name="accessoriesDescription"
                                component="div"
                                className="text-red-600"
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <h1 className='mb-2'>Description</h1>
                    <div className='border border-black lg:w-80 lg:h-32 px-3 py-1 mb-2' style={{ cursor: 'text' }}>
                        <Field
                            as="textarea"
                            className='w-full h-full mb-5 outline-none resize-none'
                            name="otherDescription"
                        />
                        <ErrorMessage
                            name="otherDescription"
                            component="div"
                            className="text-red-600"
                        />
                    </div>
                </div>
                <button className="bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 w-20 text-white">Next</button>
            </div>
        </div>
    );
};

export default ProSecondpage;
