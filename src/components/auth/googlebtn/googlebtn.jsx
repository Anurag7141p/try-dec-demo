import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import googleLogo from '../../../assets/images/googlelogo.svg'
export default function Regbtn() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return <button
        type='submit'
        className='border border-black px-4 py-2 rounded-md w-full flex items-center justify-center mb-3'
        onClick={() => login()}>
        <img
            src={googleLogo}
            alt="Google Logo"
            className='w-6 h-7 mr-1'
        />
        Sign in with Google </button>;


}
