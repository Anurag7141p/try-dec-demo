import React, { useState } from 'react';
const ProductSetdiscount = ({
    hourAmount,
    dayAmount,
    maximumHours,
    maximumDays,
    minimumhours,
    minimumDays }) => {

    const [selectedHour, setSelectedHour] = useState('05:00');
    const [selectedDay, setSelectedDay] = useState('6');
    const [discountPercentage, setDiscountPercentage] = useState(0);

    const handleHourChange = (e) => {
        setSelectedHour(e.target.value);
    };
    const handleDiscountChange = (e) => {
        setDiscountPercentage(e.target.value);
    };

    const generateHourOptions = () => {
        const options = [];
        for (let i = 1; i <= 24; i++) {
            const hour = `${i < 10 ? '0' + i : i}:00`;
            options.push(
                <option key={hour} value={hour}>
                    {hour}
                </option>
            );
        }
        return options;
    };

    const calculateHour = () => {
        const discountedAmount = hourAmount * parseFloat(selectedHour);
        const discountFactor = 1 - discountPercentage / 100;
        return discountedAmount * discountFactor;
    };
    // DAYs
    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    };
    const generateDayOptions = () => {
        const options = [];
        for (let i = 1; i <= 31; i++) {
            options.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return options;
    };
    const calculateDayAmount = () => {
        const discountedAmount = dayAmount * parseFloat(selectedDay);
        const discountFactor = 1 - discountPercentage / 100;
        return discountedAmount * discountFactor;
    };

    return (
        <div className="">
            <h1 className='mt-4'>Set discount limit</h1>
            <div className='flex flex-col md:flex-row w-1/3'>
                {/* First input group */}
                <div className='mr-3'>
                    <div className="border rounded mt-3 flex w-20 h-12 relative">
                        <input
                            type="text"
                            placeholder="0"
                            className="px-3 outline-none"
                            onChange={handleDiscountChange}
                        />
                        <span className="absolute inset-y-0 mt-3 items-center text-gray-400 right-2">%</span>
                    </div>
                </div>
                <div className=''>
                    <div className="border rounded mt-3 flex w-60 h-12 relative lg:ml-4 ">
                        <div className="absolute inset-0 flex items-center justify-center w-full">
                            <p>01:00</p>
                            <span className="text-lg font-bold mr-2 ml-9">-</span>
                            <div className="flex items-center ">
                                <select
                                    className="border-none focus:outline-none px-2"
                                    value={selectedHour}
                                    onChange={handleHourChange}
                                >
                                    {generateHourOptions()}
                                </select>
                                <p className='ms-4 text-gray-500'>Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="border rounded mt-3 flex w-60 h-12 relative lg:ml-4 bg-green-300">
                        <div className="absolute inset-0 flex items-center justify-center w-full">
                            <div className="flex items-center mr-4">
                                <span>&#8377;</span>
                                <p>{hourAmount}</p>
                            </div>
                            <span className="text-lg font-bold mr-2">-</span>
                            <div className="flex items-center mr-3">
                                <span>&#8377;</span>
                                <p>{calculateHour()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second */}
            <div className='flex flex-col md:flex-row w-1/3'>
                <div className='mr-3'>
                    <div className="border rounded mt-3 flex w-20 h-12  relative">
                        <input
                            type="text"
                            placeholder="0"
                            className="px-3 outline-none"
                            onChange={handleDiscountChange}
                        />
                        <span className="absolute inset-y-0 mt-3 items-center text-gray-400 right-2">%</span>
                    </div>
                </div>
                <div className=''>
                    <div className="border rounded mt-3 flex w-60 h-12 relative lg:ml-4 ">
                        <div className="absolute inset-0 flex items-center justify-center w-full">
                            <p>1</p>
                            <span className="text-lg font-bold mr-2 ml-9">-</span>
                            <div className="flex items-center ">
                                <select
                                    className="border-none focus:outline-none px-2"
                                    value={selectedDay}
                                    onChange={handleDayChange}
                                >
                                    {generateDayOptions()}
                                </select>
                                <p className='ms-6 text-gray-500 '>Days</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="border rounded mt-3 flex w-60 h-12 relative lg:ml-4 bg-green-300">
                        <div className="absolute inset-0 flex items-center justify-center w-full">
                            <div className="flex items-center mr-4">
                                <span>&#8377;</span>
                                <p>{dayAmount}</p>
                            </div>
                            <span className="text-lg font-bold mr-2">-</span>
                            <div className="flex items-center mr-3">
                                <span>&#8377;</span>
                                <p>{calculateDayAmount()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* third */}
            {/* <div className='flex flex-col md:flex-row w-1/3'>
                <div className='mr-3'>
                    <div className="border rounded mt-3 flex w-20 h-12  relative">
                        <input
                            type="text"
                            placeholder="0"
                            className="px-3 outline-none"
                            onChange={handleDiscountChange}
                        />
                        <span className="absolute inset-y-0 mt-3 items-center text-gray-400 right-2">%</span>
                    </div>
                </div>
                <div className=''>
                    <div className="border rounded mt-3 flex w-60 h-12 relative lg:ml-4 ">
                        <div className="absolute inset-0 flex items-center justify-center w-full">
                            <p>1</p>
                            <span className="text-lg font-bold mr-2 ml-9">-</span>
                            <div className="flex items-center ">
                                <select
                                    className="border-none focus:outline-none px-2"
                                    value={selectedDay}
                                    onChange={handleDayChange}
                                >
                                    {generateDayOptions()}
                                </select>
                                <p className='ms-4 text-gray-500 '>Days</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=''>
                    <div className="border rounded mt-3 flex w-60 h-12 relative lg:ml-4 bg-green-300">
                        <div className="absolute inset-0 flex items-center justify-center w-full">
                            <div className="flex items-center mr-4">
                                <span>&#8377;</span>
                                <p>{dayAmount}</p>
                            </div>
                            <span className="text-lg font-bold mr-2">-</span>
                            <div className="flex items-center mr-3">
                                <span>&#8377;</span>
                                <p>{calculateDayAmount()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Fourth */}
            {/* <div className='flex flex-col md:flex-row w-1/3'>
                <div className='mr-3'>
                    <div className="border rounded mt-3 flex w-20 h-12  relative">
                        <input
                            type="text"
                            placeholder="0"
                            className="px-3 outline-none"
                            onChange={handleDiscountChange}
                        />
                        <span className="absolute inset-y-0 mt-3 items-center text-gray-400 right-2">%</span>
                    </div>
                </div>
                <div className=''>
                    <div className="border rounded mt-3 flex w-60 h-12 relative lg:ml-4 ">
                        <div className="absolute inset-0 flex items-center justify-center w-full">
                            <p>1</p>
                            <span className="text-lg font-bold mr-2 ml-9">-</span>
                            <div className="flex items-center ">
                                <select
                                    className="border-none focus:outline-none px-2"
                                    value={selectedDay}
                                    onChange={handleDayChange}
                                >
                                    {generateDayOptions()}
                                </select>
                                <p className='ms-4 text-gray-500 '>Days</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=''>
                    <div className="border rounded mt-3 flex w-60 h-12 relative lg:ml-4 bg-green-300">
                        <div className="absolute inset-0 flex items-center justify-center w-full">
                            <div className="flex items-center mr-4">
                                <span>&#8377;</span>
                                <p>{dayAmount}</p>
                            </div>
                            <span className="text-lg font-bold mr-2">-</span>
                            <div className="flex items-center mr-3">
                                <span>&#8377;</span>
                                <p>{calculateDayAmount()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <button className="bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 w-20 text-white">
                Add
            </button>
        </div>
    )
}

export default ProductSetdiscount;
