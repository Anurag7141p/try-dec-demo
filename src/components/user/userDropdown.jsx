import React, { useState } from 'react';

const UserDropdown = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedSubCategory('');
    };

    const handleSubCategoryChange = (event) => {
        setSelectedSubCategory(event.target.value);
    };

    return (
        <div className="flex flex-wrap  items-center sm:ms-6 md:ms-0 mt-10 ">
                <div className="relative mb-2 md:mb-0 md:mr-3 border border-black w-[250px] rounded-md px-2">
                    {/* Dropdown for categories */}
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="appearance-none outline-none lg:w-full py-0.5 pl-3 pr-8 border-none bg-blue-50"
                    >
                        <option value="" className='hide' disabled>Select Category</option>
                        <option value="camera">Camera</option>
                        <option value="phone">Phone</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        {/* Dropdown icon */}
                        <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className="relative mb-2 md:mb-0 md:mr-3 border border-black w-[250px] rounded-md px-2 ">
                    {/* Dropdown for subcategories */}
                    <select
                        value={selectedSubCategory}
                        onChange={handleSubCategoryChange}
                        className="appearance-none outline-none w-full py-0.5 pl-3 pr-8 border-none bg-blue-50"
                        disabled={!selectedCategory}
                    >
                        <option value="" className='hide' disabled>Select Sub Category</option>
                        {selectedCategory === 'camera' && (
                            <>
                                <option value="dslr">DSLR</option>
                                <option value="mirrorless">Mirrorless</option>
                            </>
                        )}
                        {selectedCategory === 'phone' && (
                            <>
                                <option value="smartphone">Smartphone</option>
                                <option value="featurephone">Feature Phone</option>
                            </>
                        )}
                        {selectedCategory === 'vehicles' && (
                            <>
                                <option value="car">Car</option>
                                <option value="motorcycle">Motorcycle</option>
                            </>
                        )}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
                        {/* Dropdown icon */}
                        <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
    );
};

export default UserDropdown;
