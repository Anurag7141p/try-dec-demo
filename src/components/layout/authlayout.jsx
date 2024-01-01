import React from 'react';
import LoginBanner from '../../assets/images/LoginBanner.jpg';

const Layout = (Children) => {
    const AuthLayout = (props) => {
        return (
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='md:w-1/5 mt-20 w-full px-4'>
                    {/* Your title and subtitle */}
                    <h1 className='text-lg font-medium ...'>{props?.title}</h1>
                    <h4 className='text-xlg mb-8'>{props?.subtitle}</h4>
                    <Children {...props} />
                </div>
                <div className='md:w-1/2 w-full lg:mt-20 md:mt-0 lg:ms-40'>
                    <div className='flex justify-end'>
                    </div>
                    <img src={LoginBanner} alt='' className='w-full h-auto ' />
                </div>
            </div>
        );
    };

    return AuthLayout;
};

export default Layout;
