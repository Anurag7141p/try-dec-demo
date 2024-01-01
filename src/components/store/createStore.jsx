import { React, useState } from 'react';
import Layout from '../layout/homelayout';
import Input from '../reusable/input';
import { Link } from 'react-router-dom';
import { useFormik, Form, Formik } from 'formik';
import { HomeValidation } from '../../validation/yup';
const initialValues = {
    storename: '',
    address: '',
    district: '',
    country: '',
    state: '',
    pincode: '',
    hours: 9,
    pmam: 'pmam',
};

const CreateStore = () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: HomeValidation,
        onSubmit: (values) => {
            console.log(values);
        }
    });
    // Time Button
    const [fromHours, setFromHours] = useState(9);
    const [fromMinutes, setFromMinutes] = useState(0);
    const [fromAmPm, setFromAmPm] = useState('am');

    const [toHours, setToHours] = useState(5);
    const [toMinutes, setToMinutes] = useState(0);
    const [toAmPm, setToAmPm] = useState('pm');

    const incrementFromHour = () => {
        setFromHours((prevHours) => (prevHours % 12) + 1);
    };


    const incrementFromMinutes = () => {
        setFromMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));
    };


    const toggleFromAmPm = () => {
        setFromAmPm((prevAmPm) => (prevAmPm === 'am' ? 'pm' : 'am'));
    };

    const decrementToHour = () => {
        setToHours((prevHours) => (prevHours === 1 ? 12 : prevHours - 1));
    };

    const decrementToMinutes = () => {
        setToMinutes((prevMinutes) => (prevMinutes === 0 ? 59 : prevMinutes - 1));
    };

    const toggleToAmPm = () => {
        setToAmPm((prevAmPm) => (prevAmPm === 'am' ? 'pm' : 'am'));
    };
    // imgUpload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const imageDataURL = e.target.result;
            // Save the image data URL to local storage
            localStorage.setItem('imghome', imageDataURL);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div>
            <Layout>
                {{
                    leftContent: (
                        // first div section

                        <div className='flex  lg:h-screen flex-col md:flex-row md:ms-8 lg:mt-10'>
                            <div >
                                <div className='w-full md:w-1/2 ' >
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={HomeValidation} onSubmit={handleSubmit}>
                                        <Form className="flex flex-col justify-end w-full p-4 mt-10">
                                            <label className='w-60' htmlFor="storeName ">Choose a name for your store</label>
                                            <Input
                                                type="text"
                                                placeholder=""
                                                name="storename"
                                                value={values.storename}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            {errors.storename && <small className='text-red-500' >{errors.storename}</small>}



                                            <div className='w-full md:w-96'>
                                                <label htmlFor="storeType" className="mb-2">Select your store type</label>
                                                <div className="relative">
                                                    <select
                                                        id="storeType"
                                                        name="storeType"
                                                        className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-500  text-gray-700 py-2  pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 "
                                                    >
                                                        <option value="">Select type</option>
                                                        {options.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
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
                                            </div>
                                            <div className='w-full md:w-96 mt-5'>
                                                <label htmlFor="storeType" className="mb-2">Select your store Location</label>

                                                <div className="relative">
                                                    <select
                                                        id="storeType"
                                                        name="storeType"
                                                        className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-500  text-gray-700 py-2 mb-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 "
                                                    >
                                                        <option value="">Select location</option>
                                                        {options.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
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
                                            </div>


                                            <label htmlFor="permanentAddress" className="mb-2">Permanent address</label>
                                            <Input
                                                type="text"
                                                placeholder="Permanent address"
                                                name="address"
                                                value={values.address}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            {errors.address && <small className='text-red-500' >{errors.address}</small>}


                                        </Form></Formik>

                                </div>
                                {/* second div section */}
                                <div className="flex flex-col md:flex-row md:space-x-11 ml-4 ">
                                    <div className="border-b border-gray-400 outline-none focus:border-blue-500 md:w-40 md:me-5 mb-4 md:mb-0">
                                        <label htmlFor="district">District</label>
                                        <input
                                            className='outline-none w-full'
                                            type="text"
                                            placeholder="District"
                                            name="district"
                                            value={values.district}
                                            onBlur={handleBlur}
                                            onChange={(e) => {
                                                handleChange(e);
                                            }}
                                        />
                                        {errors.district && <small className='text-red-500'>{errors.district}</small>}
                                    </div>
                                    <div className=" border-b border-gray-400 outline-none focus:border-blue-500 md:w-40 md:me-5 mb-4 md:mb-0 ">
                                        <label htmlFor="state">State</label>
                                        <input
                                            className='outline-none w-full'
                                            type="text"
                                            placeholder="State"
                                            name="state"
                                            value={values.state}
                                            onBlur={handleBlur}
                                            onChange={(e) => {
                                                handleChange(e);
                                            }}
                                        />
                                        {errors.state && <small className='text-red-500'>{errors.state}</small>}
                                    </div>
                                </div>
                                {/* third div secgtion */}
                                <div className="flex flex-col md:flex-row md:space-x-11 md:mt-7 ms-4 ">
                                    <div className="border-b border-gray-400 outline-none focus:border-blue-500 md:w-40 md:me-5 mb-4 md:mb-0">
                                        <label htmlFor="country">Country</label>
                                        <input
                                            className='outline-none w-full'
                                            type="text"
                                            placeholder="Country"
                                            name="country"
                                            value={values.country}
                                            onBlur={handleBlur}
                                            onChange={(e) => {
                                                handleChange(e);
                                            }}
                                        />
                                        {errors.country && <small className='text-red-500'>{errors.country}</small>}
                                    </div>
                                    <div className="border-b border-gray-400 outline-none focus:border-blue-500 md:w-40">
                                        <label htmlFor="pincode">Pincode</label>
                                        <input
                                            className='outline-none w-full'
                                            type="text"
                                            placeholder="Pincode"
                                            name="pincode"
                                            value={values.pincode}
                                            onBlur={handleBlur}
                                            onChange={(e) => {
                                                handleChange(e);
                                            }}
                                        />
                                        {errors.pincode && <small className='text-red-500'>{errors.pincode}</small>}
                                    </div>
                                </div>
                            </div> </div>
                    ),
                    midContent: (
                        <div className='lg:ms-10'>
                            <h4 className="text-lg md:text-xl lg:text-2xl text-center lg:mt-40 lg:mr-40">Working hours</h4>

                            <div className="flex flex-row items-center justify-center md:flex-row md:items-start md:justify-start md:space-x-3 lg:space-x-0.5 mt-4 md:mt-6 lg:mt-4">
                                <div>
                                    <button onClick={incrementFromHour} className='bg-blue-500 w-8 rounded-l-lg text-white py-1 px-2 lg:px-4 '>{fromHours}:</button>
                                    <button onClick={incrementFromMinutes} className='bg-blue-500 w-8 text-white py-1 '>{fromMinutes < 10 ? `0${fromMinutes}` : fromMinutes}</button>
                                </div>
                                <button onClick={toggleFromAmPm} className='bg-blue-500 rounded-r-lg w-12 ml-0.5 text-white py-1'>{fromAmPm}</button>
                                <p className='mt-5 mx-3 md:mt-0 lg:mt-0'>{`to`}</p>
                                <div>
                                    <button onClick={decrementToHour} className='bg-blue-500 w-8 rounded-l-lg text-white py-1 px-2 lg:px-4'>{toHours}:</button>
                                    <button onClick={decrementToMinutes} className='bg-blue-500  w-8 text-white py-1'>{toMinutes < 10 ? `0${toMinutes}` : toMinutes}</button>
                                </div>
                                <button onClick={toggleToAmPm} className='bg-blue-500 rounded-r-lg w-12 ml-0.5 text-white py-1'>{toAmPm}</button>
                            </div>


                            <div className='mt-8 md:mt-12 lg:mt-16 lg:mr-10'>
                                <p className="text-center lg:mr-20">Attach store image</p>
                                <label htmlFor='imageUpload' className='block w-full md:w-72 h-20 border-2 border-dashed border-blue-300 rounded-lg mt-2 cursor-pointer flex items-center justify-center bg-blue-50 text-blue-500'>
                                    <input type='file' id='imageUpload' className='hidden' onChange={handleImageUpload} />
                                    <span>Click here to <br />attach your files</span>
                                </label>
                                <p className='text-gray-400 text-sm text-center md:text-left mt-2'>Attach pdfs, docx, with a size less than 25mb.</p>
                            </div>
                        </div>
                    ),
                    rightContent: (
                        <div >
                            <div className='text-white md:mt-40 md:px-0 lg:ms-20 '>
                                <div className='lg:mb-10 text-xl'>
                                    <h1>Create your Rental store</h1>
                                </div>
                                <div className='text-blue-400 lg:mb-10 text-sm'>
                                    <p>Adding document enable us to verify and keep fraudu;ent activites out of reach.</p>
                                </div>
                                <div className="flex  space-x-4 mb-8 mt-20">
                                    <Link to={'/'}
                                    >
                                        <button className='bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 '>Back</button>
                                    </Link>
                                    <Link to={'/add-document'}>
                                        <button className='bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 '>Save</button>
                                    </Link>
                                </div>
                                <div className="flex i">
                                    <div className='outer-circle mr-8 mt-40'>
                                        <div className='inner-dot'></div>
                                    </div>
                                    <div className='outer-circle mr-8 indot '></div>
                                    <div className='outer-circle mr-8  indot '></div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Layout>
        </div>

    );
}

export default CreateStore;