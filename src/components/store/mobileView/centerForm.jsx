import React, { useState } from 'react';
import Check from '../../../assets/footerImages/checkmark-flat.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { ErrorMessage } from "formik";

const CenterForm = ({ setFieldValue }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [panCardNumber, setPanCardNumber] = useState('');
    const [isValidPan, setIsValidPan] = useState(false);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setPanCardNumber(inputValue);

        setIsValidPan(inputValue.length === 8);
    };
    const handleImageUpload = (e) => {
    };
    const [rules, setRules] = useState([
    ]);

    const [rulesCount, setRulesCount] = useState(2);
    const updateRule = (index, value) => {
        const updatedRules = [...rules];
        updatedRules[index] = value;
        setRules(updatedRules);
        setFieldValue("storeRules", updatedRules);
    };

    const handleRulesCount = () => {
        if (rulesCount < 4) {
            setRulesCount(rulesCount + 1);
        }
    };

    return (
        <>
            <h1 className='ms-3 mt-4  text-gray-500'>Documents</h1>            <p className='text-sm ms-3 text-gray-600'>Please take a moment to verify your account. You will unlock benefits after verification.</p>
            <div className='mt-4 h-[700px] flex flex-col items-center'>
                <div className="text-gray-800 mt-2">
                    <h1>Select ID proof</h1>
                    <div className="border border-gray-500 rounded w-[340px] h-8 mt-2">
                        <select
                            className="text-sm ms-3 w-80 h-full outline-none"
                            defaultValue=""
                            onChange={handleSelectChange}
                        >
                            <option value="" disabled hidden>
                                Gst/Pan Card/ Aadhar
                            </option>
                            <option value="GST">GST</option>
                            <option value="PAN">PAN Card</option>
                            <option value="Aadhar">Aadhar</option>
                        </select>
                    </div>
                    <div className="mt-2 ">
                        <h1>Enter your Pan card number</h1>
                        <div className='border border-gray-500 rounded w-[340px] h-8 mt-2 flex items-center relative'>
                            <input
                                type="text"
                                className='w-full h-full px-2 outline-none'
                                value={panCardNumber}
                                onChange={handleInputChange}
                            />

                            {isValidPan && (
                                <img src={Check} alt="checkmark" className="absolute right-2 w-4" />
                            )}
                        </div>
                        <ErrorMessage
                            name="pancard"
                            component="div"
                            className="text-red-600"
                        />
                    </div>
                    <div className='mt-2'>
                        <h1>Upload images</h1>
                        <label htmlFor='imageUpload' className='flex items-center cursor-pointer'>
                            <div className='border border-gray-400 px-6 h-10 py-2 w-34 mt-1 rounded'>
                                <FontAwesomeIcon icon={faCamera} className='mr-2' />
                                Add image
                            </div>
                            <input
                                type='file'
                                id='imageUpload'
                                accept='image/*'
                                className='hidden'
                                onChange={handleImageUpload}
                            />
                        </label>
                    </div>
                    <div>
                        <div className="mt-2 ">
                            <h1 className="mb-2">Store Rules</h1>
                            {Array.from({ length: rulesCount }).map((_, index) => (
                                <div key={index} className="border border-gray-400 rounded w-[340px] px-7 py-1 mb-2">
                                    <input
                                        className="w-full outline-none focus:border-blue-500 "
                                        type="text"
                                        value={rules[index]}
                                        onChange={(e) => updateRule(index, e.target.value)}
                                    />
                                </div>
                            ))}
                            <ErrorMessage
                                name="storeRules"
                                component="div"
                                className="text-red-600"
                            />
                            <div>
                                <label
                                    htmlFor="additionalRulesUpload"
                                    className="w-[340px] h-10 border-2 rounded mt-2  flex items-center justify-center  text-center"
                                >
                                    <button
                                        type="button"
                                        id="additionalRulesUpload"
                                        className="hidden"
                                        onClick={handleRulesCount}
                                    />
                                    <p className='text-gray-500'><i className="fa-solid fa-circle-plus"></i> Add</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CenterForm;