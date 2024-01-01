import React from 'react';
import FaceBook from '../../../assets/images/FaceBookLogo.svg';
import FacebookLogin from '@greatsumini/react-facebook-login';

const FacebookBtn = () => {
    const handleFacebookLogin = (response) => {
        console.log(response);
    };

    return (
        <FacebookLogin
            appId={import.meta.env.VITE_FB_APP}
            onSuccess={handleFacebookLogin}
            onFail={handleFacebookLogin}
            render={(renderProps) => (
                <button
                    className='border border-black px-4 py-2 rounded-md w-full flex items-center justify-center mb-3'
                    onClick={renderProps.onClick}
                >
                    <img
                        src={FaceBook}
                        alt="Facebook Logo"
                        className='w-6 h-7 mr-1'
                    />
                    Sign in with Facebook
                </button>
            )}
        />
    );
};

export default FacebookBtn;
