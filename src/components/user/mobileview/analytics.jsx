import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosArrowDown } from "react-icons/io";
import { SlCalender } from 'react-icons/sl';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Topbox from './topbox';
import Bottombtn from './bottombtn';
import { useNavigate } from 'react-router-dom';
const CustomDatePicker = ({ selected, onChange, dateFormat, placeholderText, className }) => {
    return (
        <div className='relative'>
            <DatePicker
                selected={selected}
                onChange={onChange}
                dateFormat={dateFormat}
                placeholderText={placeholderText}
                className={`${className} rounded-lg px-3 py-2 h-10 border border-gray-400 pr-10`}
            />
            <p className='text-gray-400 absolute top-2 right-3'><IoIosArrowDown /></p>
        </div>
    );
}

const PhoneInputWithFlagOnLeft = ({ value, onChange, country, ...restProps }) => {
    return (
        <div className='relative'>
            <PhoneInput
                value={value}
                onChange={onChange}
                country={country}
                inputStyle={{
                    width: "calc(100% - 30px)",
                    padding: "12px",
                    fontSize: "16px",
                    border: "none",
                    borderBottom: "1px ",
                    borderRadius: "4px",
                    paddingLeft: "35px",
                }}
                buttonStyle={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: "5px",
                    zIndex: "1",
                }}
                {...restProps}
            />
        </div>
    );
}


const Analytics = () => {
    const [startDate, setStartDate] = useState(null);
    const [number, setNumber] = useState("");
    const [country, setCountry] = useState("in");

    const handleChange = (value, countryData) => {
        setNumber(value);
        setCountry(countryData.countryCode);
    };
    const navigate = useNavigate();
    const navigateToAnalytics2 = () => {
        navigate('/analytics2'); // Use navigate instead of history.push
      };
    
    return (
        <>
        <Topbox
        showHeaderText={false}
        showLogout={false}
        />
        <div className='mt-[110px] ms-4 h-screen'>
            <div className='flex'>
                <div className='mt-20 w-[180px] rounded-lg px-3 py-2 h-10 mr-4 border border-gray-400'>
                    <input type='text' placeholder='First Name' className='w-full h-full outline-none' />
                </div>
                <div className='mt-20 w-[180px] rounded-lg px-3 py-2 h-10 border border-gray-400'>
                    <input type='text' placeholder='Last Name' className='w-full h-full outline-none' />
                </div>
            </div>
            <div>
                <p className='mt-3 text-blue-400'> Change Password</p>
                <p className='mt-3 text-lg'>Date of Birth</p>
                <div className='flex mt-4'>
                    <CustomDatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat='dd'
                        placeholderText='Date'
                        className='w-24 mr-2'
                    />
                    <CustomDatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat='MM'
                        showMonthYearDropdown
                        placeholderText='Month'
                        className='w-24 mr-2'
                    />
                    <CustomDatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat='yyyy'
                        showYearDropdown
                        placeholderText='Year'
                        className='w-24 mr-2'
                    />
                    <p className='ms-4 bg-custom-blue text-white rounded-lg px-2 py-2'>
                        <SlCalender size={24} />
                    </p>
                </div>
                <div className='mt-4 w-[380px] rounded-lg px-3 py-2 h-10 border border-gray-400'>
                    <input type='text' placeholder='Choose your username' className='w-full h-full outline-none' />
                </div>
                <div className='mt-4 w-[380px] rounded-lg px-3 h-10 border border-gray-400'>
                    <PhoneInputWithFlagOnLeft
                        value={number}
                        onChange={(val, countryData) => handleChange(val, countryData)}
                        country={country}
                        placeholder={`+${country}`}
                    />
                </div>
                <div className='flex mt-4 '>
                    <div className='w-[312px] rounded-l-lg px-3 py-2 h-10 border border-gray-400'>
                        <input type='text' placeholder='E-mail id' className='h-full outline-none' />
                    </div>
                    <div className='rounded-r-lg  px-3 py-2 h-10 border border-gray-400 text-gray-400'>
                        Verify
                    </div>
                </div>
                <p className='mt-4 mb-2'>Permanent address</p>
                <div className=' w-[380px] rounded-l-lg px-3 py-2 h-10 border border-gray-400 rounded-lg'>
                    <input type='text' placeholder='permanent address' className='h-full outline-none' />
                </div>
                <div className='flex'>
                    <div className='mt-4 mb-4 w-[180px] rounded-lg px-3 py-2 h-10 mr-4 border border-gray-400'>
                        <input type='text' placeholder='District' className='w-full h-full outline-none' />
                    </div>
                    <div className='mt-4 mb-4 w-[180px] rounded-lg px-3 py-2 h-10 border border-gray-400'>
                        <input type='text' placeholder='State' className='w-full h-full outline-none' />
                    </div>
                </div>
                <div className='flex'>
                    <div className=' w-[180px] rounded-lg px-3 py-2 h-10 mr-4 border border-gray-400'>
                        <input type='text' placeholder='Country' className='w-full h-full outline-none' />
                    </div>
                    <div className=' w-[180px] rounded-lg px-3 py-2 h-10 border border-gray-400'>
                        <input type='text' placeholder='Pincode' className='w-full h-full outline-none' />
                    </div>
                </div>
                <p className='mt-4 mb-4'>Language</p>
                <div className=' w-[380px] rounded-l-lg px-3 py-2 h-10 border border-gray-400 rounded-lg'>
                    <input type='text' placeholder='Language' className='h-full outline-none' />
                </div>
            </div>
        </div>
        <Bottombtn onClick={navigateToAnalytics2}/>
        </>
    );
};

export default Analytics;
