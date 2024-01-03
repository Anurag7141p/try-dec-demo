import { React } from 'react'
import Layout from '../layout/authlayout';
import Input from '../reusable/input';
import { Link } from 'react-router-dom';
import { useFormik, Formik, Form } from 'formik';
import Regbtn from '../../components/auth/googlebtn/googlebtn';
import { signinValidation } from '../../validation/yup';
import FacebookBtn from './facebookbtn/facebookbtn';
import { GoogleOAuthProvider } from '@react-oauth/google';
const SignIn = () => {
    const initialValues = {
        loginep: '',
        Newpassword: '',
    };
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: signinValidation,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <div>
            <h1 className='text-lg font-medium ...'>Log In </h1>
            <h4 className='text-xlg mb-8'>Welcome back to your rental world</h4>

            <Formik
                initialValues={initialValues}
                validationSchema={signinValidation}
            >
                <Form onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        placeholder='Enter Username, Phone Number, Email'
                        name='loginep'
                        value={values.loginep}
                        onChange={handleChange}
                    />
                    {errors.loginep && <small className='text-red-500'>{errors.loginep}</small>}
                    <Input
                        type='password'
                        placeholder='password'
                        name='Newpassword'
                        value={values.Newpassword}
                        onChange={handleChange}
                    />
                    {errors.Newpassword && <small className='text-red-500'>{errors.Newpassword}</small>}
                </Form>
            </Formik>
            <Link to={'/signup'}>
                <button
                    type='button'
                    className='bg-blue-500 text-white px-4 py-2 rounded-md absolute top-0 right-0 mt-4 mr-4'
                >
                    Signup
                </button></Link>
            <Link to={'otp-auth'}>
                <button
                    type='submit'
                    className='bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-3'
                >Log in
                </button></Link>
                <GoogleOAuthProvider clientId={import.meta.env?.VITE_GOOGLE_CLIENT}>
                <Regbtn />
                </GoogleOAuthProvider>

            <FacebookBtn />
            <p className='text-center py-2'>
                Dont have an account?  <Link to="/signup" className='text-blue-500'>join here</Link>
            </p>
        </div>

    );
}
const LogIn = () => {
    const AuthLayout = Layout(SignIn)
    return <AuthLayout />
}
export default LogIn

