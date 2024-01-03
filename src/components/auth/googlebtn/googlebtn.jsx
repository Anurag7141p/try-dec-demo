import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import googleLogo from '../../../assets/images/googlelogo.svg';

export default function Regbtn() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            const accessToken = tokenResponse.access_token;
            fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then(response => response.json())
                .then(data => {
                    console.log('User details:', data);
                })
                .catch(error => {
                    console.error('Error fetching user details:', error);
                });
        },
        onError: () => {
            console.log("Login Failed");
        },
    });

    return (
        <button
            type='submit'
            className='border border-black px-4 py-2 rounded-md w-full flex items-center justify-center mb-3'
            onClick={() => login()}
        >
            <img
                src={googleLogo}
                alt="Google Logo"
                className='w-6 h-7 mr-1'
            />
            Sign in with Google
        </button>
    );
}
