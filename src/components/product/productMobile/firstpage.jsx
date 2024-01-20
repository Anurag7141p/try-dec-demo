import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Field, ErrorMessage } from 'formik';

const FirstpageProduct = () => {
    const mainCategories = [
        { value: 'option1', label: 'Camera & Equipments', subCategories: ['Lens', 'Tripod', 'Stabilizer'] },
        { value: 'option2', label: 'Vehicles', subCategories: ['Car', 'Motorcycle', 'Truck'] },
        { value: 'option3', label: 'Sound units', subCategories: ['opt1', 'opt2', 'op3'] },
    ];

    const [selectedMainCategory, setSelectedMainCategory] = useState('');
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);

    const handleMainCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setSelectedMainCategory(selectedCategory);
        const foundCategory = mainCategories.find((category) => category.value === selectedCategory);
        if (foundCategory) {
            setSubCategoryOptions(foundCategory.subCategories);
        } else {
            setSubCategoryOptions([]);
        }
    };

    return (
        <>
            <div className='ms-8 mt-10 justify-center items-center'>
                <div className=''>
                    <label htmlFor='storeType' className='mb-2'>
                        Select product category
                    </label>
                    <div className='flex relative items-center'>
                        <select
                            id='storeType'
                            name='storeType'
                            className='block w-[200px] appearance-none bg-white border-b border-gray-400 outline-none focus:border-blue-500 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500'
                            onChange={handleMainCategoryChange}
                            value={selectedMainCategory}
                        >
                            <option value=''>Select a category</option>
                            {mainCategories.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className='absolute top-0 bottom-0 left-[calc(50%-1px)] items-center pointer-events-none'>
                            <FontAwesomeIcon icon={faCaretDown} className='text-gray-500' />
                        </div>
                    </div>
                </div>
                <div className='relative mt-4 '>
                    <label htmlFor='subCategory' className='mb-2 mr-8'>
                        Select sub category
                    </label>
                    <div className='flex items-center relative'>
                        <select
                            id='subCategory'
                            name='subCategory'
                            className='block w-[200px] appearance-none bg-white border-b border-gray-400 outline-none focus:border-blue-500 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500'
                        >
                            {subCategoryOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className='absolute top-0 bottom-0 left-[calc(50%-1px)] items-center pointer-events-none'>
                            <FontAwesomeIcon icon={faCaretDown} className='text-gray-500' />
                        </div>
                    </div>
                </div>
                <div className='mt-4 mb-4'>
                    <label htmlFor='product'>Product Name</label>
                    <div className='relative'>
                        <input
                            type='text'
                            className='border-gray-800-b block w-[200px] appearance-none bg-white border-b border-gray-400 outline-none focus:border-blue-500 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500'
                        />
                        <div className='absolute top-full left-0 ml-1 text-red-600'>
                            <ErrorMessage name='ProductN' component='div' />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="mb-2">Including accessories</h1>
                    <span className="text-gray-400">*optional</span>
                    <div
                        className="w-[340px] border border-black lg:w-80 lg:h-20 px-3 py-1 mb-2"
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
                <div className='mt-4'>
                    <h1 className='mb-2'>Description</h1>
                    <div className='w-[340px] border border-black lg:w-80 lg:h-32 px-3 py-1 mb-2' style={{ cursor: 'text' }}>
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

            </div>
        </>
    );
};

export default FirstpageProduct;
