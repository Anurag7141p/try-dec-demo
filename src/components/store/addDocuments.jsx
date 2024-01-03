import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Layout from '../layout/homelayout';
import { HomeValidation } from '../../validation/yup';
import axios from 'axios';

HomeValidation
const initialValues = {
    pancard: ""
};

const AddDocument = () => {
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
    const uploadImage = (files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_API_KEY); 
    
        axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, formData)
            .then((res) => {
                console.log("imgurl:", res.data.url);
            })
            .catch((error) => {
                console.error('Error uploading image:', error);
            });
    };
    return (
        <div >
            <Layout>
                {{
                    leftContent: (

                        <div className="flex lg:h-screen lg:flex-row lg:ms-10 ">
                            <div>
                                <div className='md:ms-4 md:mt-40 ms-2 '>
                                    <p>Documents</p>
                                    <p className="text-gray-500 mt-2 ">
                                        Please take a moment to verify your <br /> account. You will unlock benefits <br /> after verification.
                                    </p>
                                </div>
                                <form className="flex flex-col justify-end w-full md:w-2/3 lg:w-1/2 p-4 mt-10">
                                    <div className='w-full sm:w-80 w-full'>
                                        <label htmlFor="storeType" className="mb-2">Select your ID proof</label>
                                        <div className="relative">
                                            <select
                                                id="storeType"
                                                name="storeType"
                                                className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-500 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                                            >
                                                <option value="">GST / Pan Card / Aadhar</option>
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
                                    <div className='w-full md:w-80 sm:w-full mt-8'>
                                        <label htmlFor="storeType" className="mb-2">Enter your pan card number</label>
                                        <div >
                                            <input
                                                className='border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500'
                                                type="text"
                                                placeholder="XVSDF02345D"
                                                name="pancard"
                                                value={values.pancard}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            {errors.pancard && <small className='text-red-500' >{errors.pancard}</small>}

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    ),
                    midContent: (
                        <div className='mt-40 m-3 lg:w-1/2 '>
                            <h1>Upload images</h1>
                            <p className='text-gray-500 text-sm '>Front and back of your Aadhar</p>
                            <label htmlFor='imageUpload' className='block w-40 h-10 border-2 border-dashed border-blue-300  mt-2 cursor-pointer flex items-center justify-center  bg-blue-50 text-blue-500 text-center'>
                                <input type='file' id='imageUpload' className='hidden'onChange={(event) => { uploadImage(event.target.files) }}  />
                                +Add image
                            </label>
                            <div className='mt-10'>
                                <h1 className='mb-2'>Store rule</h1>
                                <div className='border border-black w-80 px-7 py-1 mb-2'>
                                    <p className='mt-2 text-'>Must carry original ID proof of your  self</p>
                                </div>
                            </div>
                            <div className='border border-black w-80 px-7 py-1 '>
                                <label htmlFor="">Enter store rule</label>
                                <input
                                    className='  w-full  mb-5 outline-none focus:border-blue-500'
                                    type="text"
                                />
                            </div>
                            <div >
                                <label htmlFor='imageUpload' className='block w-80 h-10 border-2 border-dashed border-blue-300  mt-2 cursor-pointer flex items-center justify-center  bg-blue-50 text-blue-500 text-center'>
                                    <input type='file' id='imageUpload' className='hidden' onChange={(event) => { uploadImage(event.target.files) }} />
                                    +Add image
                                </label>

                            </div>
                        </div>
                    ),
                    rightContent: (
                        <div className='text-white md:mt-40 md:px-20 '>
                            <div className='mb-10 text-lg'>
                                <h1>Add Documnet</h1>
                            </div>
                            <div className='text-blue-400'>
                                <p>Adding document enable us to verify and keep fraudu;ent activites out of reach.</p>
                            </div>
                            <div className="flex  space-x-4 mb-8 mt-20">
                                <Link to={'/create-store'}
                                >
                                    <button className='bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 '>Back</button>
                                </Link>
                                <Link to={'/add-product'}>
                                    <button className='bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 '>Create Store</button>
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
                    )
                }}
            </Layout>
        </div>
    )
}
export default AddDocument;