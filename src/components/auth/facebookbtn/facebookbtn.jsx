import React from 'react';
import FaceBook from '../../../assets/images/FaceBookLogo.svg';
import { LoginSocialFacebook } from 'reactjs-social-login';
const FacebookBtn = () => {
    return (
        
        <LoginSocialFacebook
            appId={import.meta.env?.VITE_FB_APP}
            onResolve={(response) => {
            console.log(response);
            }}
            onReject={(error) => {
                console.log(error);
            }}>
            <button
                type='submit'
                className='border border-black px-4 py-1 rounded-md w-full flex items-center justify-center mb-3'
            > <img
                src={FaceBook}
                alt="Facebook Logo"
                className='w-14 '
                />
                Sign in with Facebook
            </button>
        </LoginSocialFacebook>
        )

}

export default FacebookBtn;
