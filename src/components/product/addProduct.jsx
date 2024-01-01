import React from 'react';
import Layout from '../layout/homelayout';
import Input from '../reusable/input';
import { HomeValidation } from '../../validation/yup';
import { useFormik, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const initialValues = {
    productname: '',
    productspe: '',
    dec: '',
    amount: '',
    discount: '',
};
const AddProducts = () => {
    const options = [
        { value: 'option1', label: 'Online' },
        { value: 'option2', label: 'Offline' },
        { value: 'option3', label: 'Both' },
    ];




    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: HomeValidation,
        onSubmit: (values) => {
            console.log(values);
        }
    });
    // year option
    const getYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];

        for (let i = currentYear; i >= currentYear - 50; i--) {
            years.push(i);
        }

        return years.map((year) => ({
            value: year,
            label: year.toString(),
        }));
    };

    // Call the function to get the list of years
    const yearOptions = getYearOptions();

    // imgUpload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const imageDataURL = e.target.result;
            // Save the image data URL to local storage
            localStorage.setItem('uploadedImage', imageDataURL);
        };

        reader.readAsDataURL(file);
    };
    // productname 
    const handleChangePro = (event) => {
        const { value } = event.target;
        localStorage.setItem('productname', value);
        handleChange(event);
    };
    // Amount
    const handleAmount = (event) => {
        const { value } = event.target;
        localStorage.setItem('amount', value);
        handleChange(event);
    };
    // Discount
    const handleDiscount = (event) => {
        const { value } = event.target;
        localStorage.setItem('discount', value);
        handleChange(event);
    };


    return (

        <div>
            <Layout>
                {{
                    leftContent: (
                        <div className='flex lg:md:h-screen flex-col md:flex-row md:ms-8 mt-6 '>
                            <div className='' >
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={HomeValidation} onSubmit={handleSubmit}>
                                    <Form className="flex flex-col justify-end w-full p-4 mt-10 ">
                                        <div className=" border-b border-gray-400 outline-none focus:border-blue-500 md:w-80 md:me-5 mb-4 md:mb-0 ">
                                            <label htmlFor="state">Product name</label>
                                            <Input
                                                style={{ cursor: 'text' }}
                                                className='outline-none w-full'
                                                type="text"
                                                name="productname"
                                                value={values.productname}
                                                onBlur={handleBlur}
                                                onChange={handleChangePro}
                                            />
                                            {errors.productname && <small className='text-red-500'>{errors.productname}</small>}
                                        </div>
                                        <div className='mt-4'>
                                            <h1 className='mb-2'>Description</h1>
                                            <div className='border border-black lg:w-80 lg:h-40 px-7 py-1 mb-2' style={{ cursor: 'text' }}>
                                                <input
                                                    className='w-full mb-5 outline-none'
                                                    type="text"
                                                    name="dec"
                                                    value={values.dec}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                {errors.dec && <small className='text-red-500 text-sm'>{errors.dec}</small>}
                                            </div>
                                        </div>
                                        <div className=" border-b border-gray-400 outline-none focus:border-blue-500 md:w-80 md:me-5 mb-4 md:mb-0 lg:mt-6">
                                            <label htmlFor="state">Product Specification</label>
                                            <input
                                                className='outline-none w-full'
                                                type="text"
                                                placeholder="Serial number"
                                                name="productspe"
                                                value={values.productspe}
                                                onBlur={handleBlur}
                                                onChange={(e) => {
                                                    handleChange(e);
                                                }}
                                            />
                                            {errors.productspe && <small className='text-red-500'>{errors.productspe}</small>}
                                        </div>
                                        <div className='w-full md:w-80 lg:mt-8'>
                                            <div className="relative">
                                                <select
                                                    id="storeType"
                                                    name="storeType"
                                                    className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-500 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                                                >
                                                    <option value="">Manufacturing Year</option>

                                                    {yearOptions.map((option) => (
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
                                </Form></Formik>
                            </div>
                        </div>

                    ),
                    midContent: (
                        <div className='lg:mt-20  '>
                            <div class="flex flex-row ...">
                                <div>
                                    <div className='flex items-center mb-4 md:mb-0'>
                                        <label htmlFor="state" className='lg:mr-2'>Currency </label>:
                                    </div>
                                </div>
                                <div className='lg:ms-28'></div>
                                <div>
                                    <select
                                        id="currency"
                                        name="currency"
                                        className='border-b border-gray-400 outline-none focus:border-blue-500 md:w-20 md:me-5 lg:ms-12'
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    >

                                        <option value="INR">INR</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>

                            </div>
                            <div class="flex flex-row ...">
                                <div>
                                    <div className='flex items-center mb-4 md:mb-0 lg:mt-5 lg:ms-1'>
                                        <label htmlFor="state" className='mr-2'>Amount </label>  :
                                    </div>

                                </div>
                                <div></div>
                                <div>
                                    <input
                                        className='border-b border-gray-400  w-20  mb-5 outline-none focus:border-blue-500 lg:mt-4 lg:ms-11 ms-4'
                                        type="text"
                                        placeholder="$ 00.0"
                                        name="amount"
                                        value={values.amount}
                                        onBlur={handleBlur}
                                        onChange={handleAmount}
                                    />
                                    {errors.amount && <small className='text-red-500'>{errors.amount}</small>}

                                </div>
                                <div>
                                    <select
                                        id="currency"
                                        name="currency"
                                        className='border-b border-gray-400 outline-none focus:border-blue-500 md:w-20 md:me-5 lg:ms-9 lg:mt-5 ms-2'
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    >
                                        <option value="INR">Fixed</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>

                            </div>
                            <div class="flex flex-row ...">
                                <div>
                                    <div className='flex items-center mb-4 md:mb-0 lg:mt-5 '>
                                        <label htmlFor="state" className='mr-2'>Discount</label>:
                                    </div>
                                </div>
                                <div>
                                    <input
                                        className='border-b border-gray-400  w-20  mb-5 outline-none focus:border-blue-500 lg:mt-4 lg:ms-11 ms-4 '
                                        type="text"
                                        placeholder="$ 00.0"
                                        name="discount"
                                        value={values.pancard}
                                        onBlur={handleBlur}
                                        onChange={handleDiscount}
                                    />
                                    {errors.discount && <small className='text-red-500 text-xs '>{errors.discount}</small>}

                                </div>
                                <div className='lg:ms-4'>
                                    <select
                                        id="currency"
                                        name="currency"
                                        className='border-b border-gray-400 outline-none focus:border-blue-500 md:w-20 md:me-5 lg:ms-5 lg:mt-4 ms-2'
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    >
                                        <option value="INR">Fixed</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                            </div>
                            <div>

                                <div className='w-full md:w-80 lg:mt-8'>
                                    <div className="relative">
                                        <label htmlFor="">Booking Availability</label>
                                        <select
                                            id="storeType"
                                            name="storeType"
                                            className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-500 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="">Online / Offline / Both</option>

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
                            </div>
                            <div className='mt-8 md:mt-12 lg:mt-16 lg:mr-10 text-center'>
                                <p className="text-center lg:mr-40">Attach store image</p>
                                <label htmlFor='imageUpload' className='block w-full md:w-72 h-20 border-2 border-dashed border-blue-300  mt-2 cursor-pointer flex items-center justify-center bg-blue-50 text-blue-500'>
                                    <input type='file' id='imageUpload' className='hidden' onChange={handleImageUpload} />
                                    <span>Click here to <br />attach your files</span>
                                </label>
                                <p className='text-gray-400 text-xs lg:w-80 text-center md:text-left mt-2'>Attach pdfs, docx, with a size less than 25mb.</p>
                            </div>
                        </div>
                    ),
                    rightContent: (
                        <div >
                            <div className='text-white md:mt-40 md:px-0 lg:ms-10 '>
                                <div className='lg:mb-10 text-lg'>
                                    <h1>Add Your product</h1>
                                </div>
                                <div className='text-blue-400 lg:mb-10 text-sm '>
                                    <p>Adding document enable us to verify and keep fraudu;ent activites out of reach.</p>
                                </div>
                                <div className="flex  space-x-3 lg:mt-20 mb-8">
                                    <Link to={'/createstore'}
                                    >
                                        <button className='bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2  '>Back</button>
                                    </Link>
                                    <Link to={'/update-product'}>
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
export default AddProducts;;