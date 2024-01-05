import React from 'react';
import Layout from '../../components/layout/homelayout';
import { Link } from 'react-router-dom';

const SelectStoretype = () => {
    return (
        <div>
            <Layout>
                {{
                    leftContent: (
                        <div className='lg:h-screen text-white'>
                            <div className='flex ms-4 lg:ms-80 lg:mt-20'>
                                <button className='bg-blue-400 rounded h-16 me-10' style={{ width: '150px' }}>
                                    Product Rental
                                </button>
                                <button className='bg-blue-400 rounded lg:h-16' style={{ width: '150px' }}>
                                    Advertising Boards
                                </button>
                            </div>
                        </div>
                    ),
                   
                    rightContent: (
                        <div className='text-white md:mt-40 md:px-0 lg:ms-5 max-w-md md:max-w-full h-screen '>
                        <div className='lg:mb-10 text-xl'>
                            <h1>Select your Rental store type</h1>
                        </div>
                        <div className='text-blue-400 lg:mb-10 text-sm'>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, laboriosam mollitia explicabo, eius quaerat sunt molestiae ducimus placeat aut laborum nesciunt illum asperiores vero id quod tempora magni in!
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-4 mb-4 md:mb-8">
                            <Link to={'/'}>
                                <button className='bg-blue-500 rounded px-4 py-2 lg:py-1 w-full md:w-auto mb-2 md:mb-0'>Back</button>
                            </Link>
                            <Link to={'/create-store'}>
                                <button className='bg-blue-500 rounded px-4 py-2 lg:py-1 w-full md:w-auto'>Next</button>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className='outer-circle mr-2 mt-10'></div>
                            <div className='outer-circle mr-2 indot'></div>
                            <div className='outer-circle mr-2 indot'></div>
                        </div>
                    </div>
                    
                    
                    )
                }}
            </Layout>
        </div>
    );
};

export default SelectStoretype;
