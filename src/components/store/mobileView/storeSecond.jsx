import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Field,ErrorMessage } from "formik";

const StoreSecond = () => {
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('00:00');

    const handleStartTimeChange = (time) => {
        setStartTime(time);
    };

    const handleEndTimeChange = (time) => {
        setEndTime(time);
    };

    return (
        <div className="place-items-center h-[600px] px-4 md:px-8 lg:px-16">
            <div>
                <h1 className="text-xl text-gray-500 mt-1">Choose a name for your store</h1>
                <hr className="bg-custom-blue h-0.5 mt-1 mb-4" />
            </div>
            <div className="flex items-center">
                <FaLightbulb size={14} color="yellow" className="mr-2" />
                <h1 className="text-sm flex items-center">
                    <span>Tips: It helps to keep your identity real!</span>
                </h1>
            </div>
            <div className="text-[11px] text-gray-700">
                <ul>
                    <li className="flex items-start ml-12">
                        <span className="mr-1">&#8226;</span>
                        <span>The name you provide will help users find you in the future. So keep it relevant.</span>
                    </li>
                    <li className="flex items-start ml-12">
                        <span className="mr-1">&#8226;</span>
                        <span>Name should be same as your registered name.</span>
                    </li>
                    <li className="flex items-start ml-12">
                        <span className="mr-1">&#8226;</span>
                        <span>Name shoukd contain only letters and no numbers or special characters</span>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="text-gray-800 mt-3">Permanent address</h1>
                <div className="border border-gray-300 rounded h-10 mt-2 px-2 py-1">
                    <input type="text" placeholder="Permanent address" className="text-gray-400" />
                    <ErrorMessage
                        name="address"
                        component="div"
                        className="text-red-600 text-sm mt-1 mb-1"
                    />
                </div>
                <div className="flex ">
                    <div className="border border-gray-300 rounded h-10 mt-2 px-2 py-1 mr-5">
                        <input type="text" placeholder="District" className="text-gray-400 w-36" />
                        <ErrorMessage
                            name="district"
                            component="div"
                            className="text-red-600 text-sm mt-1"
                        />
                    </div>
                    <div className="border border-gray-300 rounded h-10 mt-2 px-2 py-1">
                        <input type="text" placeholder="State" className="text-gray-400 w-36" />
                        <ErrorMessage
                            name="state"
                            component="div"
                            className="text-red-600 text-sm mt-1 "
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="border border-gray-300 rounded h-10 mt-2 px-2 py-1 mr-5">
                        <input type="text" placeholder="Country" className="text-gray-400 w-36" />
                        <ErrorMessage
                            name="country"
                            component="div"
                            className="text-red-600 text-sm mt-2 mb-1"
                        />
                    </div>
                    <div className="border border-gray-300 rounded h-10 mt-2 px-2 py-1">
                        <input type="text" placeholder="Pincode" className="text-gray-400 w-36" />
                        <ErrorMessage
                            name="pincode"
                            component="div"
                            className="text-red-600 text-sm mt-2"
                        />
                    </div>
                </div>
            </div>
            <div className="flex mt-3">
                <h1 className="mt-2 text-gray-400 mr-2">Opening hours</h1>
                <div className="mt-2 mr-6">
                    <TimePicker
                        onChange={handleStartTimeChange}
                        value={startTime}
                        disableClock
                        clearIcon={null}
                        className="custom-time-picker"
                    />
                </div>
                <div className="mt-2">
                    <TimePicker
                        onChange={handleEndTimeChange}
                        value={endTime}
                        disableClock
                        clearIcon={null}
                        className="custom-time-picker"
                    />
                </div>
            </div>
            <div className='mt-3'>
                <h1>Set store image</h1>
                <label htmlFor='imageUpload' className='flex items-center cursor-pointer'>
                    <div className=' px-3 h-10 py-2 w-34 mt-2 rounded'>
                        <FontAwesomeIcon icon={faCamera} className='mr-2' />
                        Add image
                    </div>
                    <input
                        type='file'
                        id='imageUpload'
                        accept='image/*'
                        className='hidden'
                    />
                </label>
                <p className="text-gray-500 text-sm mt-3">Attach.png,.jpeg,.jpg with sizeless than 5mb.</p>
            </div>
        </div>
    );
};

export default StoreSecond;
