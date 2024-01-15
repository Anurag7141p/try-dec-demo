import React, { useState } from 'react';
import ProductSetdiscount from './productSetdiscount';

const ProductPricing = () => {
    const [MaxselectedHour, setMaxSelectedHour] = useState('01:00');
    const [MaxselectedDay, setMaxSelectedDay] = useState('1');
    const [MinselectedHour, setMinSelectedHour] = useState('01:00');
    const [MinselectedDay, setMinSelectedDay] = useState('1');
  
    const [hourAmount, setHourAmount] = useState('');
    const [dayAmount, setDayAmount] = useState('');

    const handleHourAmountChange = (e) => {
        setHourAmount(e.target.value);
    };

    const handleDayAmountChange = (e) => {
        setDayAmount(e.target.value);
    };
// Max and Min
    const MaxhandleHourChange = (e) => {
        setMaxSelectedHour(e.target.value);
    };
    const MinhandleHourChange = (e) => {
        setMinSelectedHour(e.target.value);
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
// Max and Min
    const MaxhandleDayChange = (e) => {
        setMaxSelectedDay(e.target.value);
    };
    const MinhandleDayChange = (e) => {
        setMinSelectedDay(e.target.value);
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

    const Maximumhours = "05:00";
    const Minimumhours = "05:00";
    const Maximumdays = "30";
    const Minimumdays = "30";

    return (
        <div>
            <div className="flex mb-20 lg:flex-row lg:ms-10">
                <div className="md:ms-4 md:mt-20 ms-2 ">
                    <h1 className="text-lg">Product pricing & image</h1>
                    <div className="flex mt-4">
                        <div>
                            <div className='flex items-center mb-4 md:mb-0'>
                                <label htmlFor="state" className='lg:mr-2'>Currency </label>:
                            </div>
                        </div>
                        <div>
                            <select
                                id="currency"
                                name="currency"
                                className='border-b border-gray-400 outline-none focus:border-blue-500 md:w-20 md:me-5 lg:ms-12'
                            >
                                <option value="INR">INR</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mt-4">
                            <h1>Product price</h1>
                            <h2 className="text-gray-400 mt-3">Enter price without GST</h2>
                            <div className='flex '>
                                <div className="border rounded mt-3 flex w-32 h-12 mr-6 relative">
                                    <input
                                        type="text"
                                        placeholder="0.00"
                                        className="px-3 outline-none"
                                        value={hourAmount}
                                        onChange={handleHourAmountChange}
                                    />
                                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">Hr</span>
                                </div>

                                <div className="border rounded mt-3 flex w-32 h-12 relative">
                                    <input
                                        type="text"
                                        placeholder="0.00"
                                        className="px-3 outline-none"
                                        value={dayAmount}
                                        onChange={handleDayAmountChange}
                                    />
                                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">Day</span>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h1>Maximum rental duration</h1>
                                <div className='flex'>
                                    <div className="border rounded mt-3 flex w-32 h-12 mr-6 relative">
                                        <select
                                            className="border-none focus:outline-none px-2"
                                            value={MaxselectedHour}
                                            onChange={MaxhandleHourChange}
                                        >
                                            {generateHourOptions()}
                                        </select>
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">Hours</span>
                                    </div>
                                    <div className="border rounded mt-3 flex w-32 h-12 relative">
                                        <select
                                            className="border-none focus:outline-none px-2"
                                            value={MaxselectedDay}
                                            onChange={MaxhandleDayChange}
                                        >
                                            {generateDayOptions()}
                                        </select>
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">Days</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h1>Minimum rental duration</h1>
                                <div className='flex '>
                                    <div className="border rounded mt-3 flex w-32 h-12 mr-6 relative">
                                        <select
                                            className="border-none focus:outline-none px-2"
                                            value={MinselectedHour}
                                            onChange={MinhandleHourChange}
                                        >
                                            {generateHourOptions()}
                                        </select>
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">Hours</span>
                                    </div>
                                    <div className="border rounded mt-3 flex w-32 h-12 relative">
                                         <select
                                            className="border-none focus:outline-none px-2"
                                            value={MinselectedDay}
                                            onChange={MinhandleDayChange}
                                        >
                                            {generateDayOptions()}
                                        </select>
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">Days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductSetdiscount hourAmount={hourAmount}
                     dayAmount={dayAmount}
                     maximumHours={MaxselectedHour}
                     maximumDays={MaxselectedDay}
                     minimumhours={MinselectedHour}
                     minimumDays={MinselectedDay} />
                </div>
            </div>
        </div>
    )
}

export default ProductPricing;
