import React from 'react'
import Input from '../reusable/input';
import Layout from '../layout/authlayout';
import { Link } from 'react-router-dom';
import { signupValidation } from '../../validation/yup';
import { useFormik, Formik, Form } from 'formik';
import Regbtn from './googlebtn/googlebtn';
import { GoogleOAuthProvider } from '@react-oauth/google';
import FacebookBtn from './facebookbtn/facebookbtn';
const initialValues = {
    name: '',
    phone: '',
    email: '',
    Newpassword: '',
    cpassword: ''

}
const Component = () => {
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: signupValidation,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signupValidation}
        >
            <Form onSubmit={handleSubmit} >

                <Input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {errors.name && <small className='text-red-500' >{errors.name}</small>}

                <Input
                    type='text'
                    placeholder='Phone Number'
                    name='phone'
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}

                />
                {errors.phone && <small className='text-red-500'>{errors.phone}</small>}

                <Input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}

                />
                {errors.email && <small className='text-red-500'>{errors.email}</small>}

                <Input
                    type='password'
                    placeholder='New Password'
                    name='Newpassword'
                    value={values.Newpassword}
                    onBlur={handleBlur}
                    onChange={handleChange}

                />
                {errors.Newpassword && <small className='text-red-500'>{errors.Newpassword}</small>}

                <Input
                    type='password'
                    placeholder='Password'
                    name='cpassword'
                    value={values.cpassword}
                    onBlur={handleBlur}
                    onChange={handleChange}

                />
                {errors.cpassword && <small className='text-red-500'>{errors.cpassword}</small>}
                <GoogleOAuthProvider clientId={import.meta.env?.VITE_GOOGLE_CLIENT}>
                    <Regbtn />
                </GoogleOAuthProvider>
                <FacebookBtn />
                <Link to="/">
                    <button
                        type='button'
                        className='bg-blue-500 text-white px-4 py-2 rounded-md absolute top-0 right-0 mt-4 mr-4'
                    >
                        Login
                    </button>
                </Link>
                <button
                    type='submit'
                    className='bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-3'
                >
                    create account
                </button>
                <p className='text-center py-2'>
                    Have an account? <Link to="/" className='text-blue-500'>Login</Link>
                </p>
            </Form>
        </Formik>
    );
}

const SignUp = () => {
    const AuthLayout = Layout(Component)

    return <AuthLayout
        title={'Create an account'}
        subtitle={`Let's get started on your rental journey`}

    />

}
export default SignUp