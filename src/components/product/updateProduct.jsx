import React from 'react';
import Layout from '../../components/layout/homelayout';
import Card from '../reusable/procard';
const UpdateProduct = () => {
    const products = [
        {
            id: 1,
            img: localStorage.getItem('uploadedImage'),
            productName: localStorage.getItem('productname'),
            amount: localStorage.getItem('amount'),
            discount: localStorage.getItem('discount')
        },
    ];    return (
        <div>
            <Layout>{{
                leftContent: (
                    <div className='h-screen lg:mt-10 '>
                    <h2 className='lg:ms-12 ms-1'>Inventory</h2>
                    <div className="inventory-container">
                        {products.map((product) => (
                            <Card 
                                key={product.id}
                                title={product.productName}
                                description={""}
                                imageUrl={product.img}
                                amount={product.amount}
                                discount={product.discount}
                            />
                        ))}
                    </div>
                </div>

                ),

                rightContent: (
                    <div className='text-white md:mt-40 md:px-20  mx-auto '>
                        <div className='mb-10 text-lg'>
                            <h1>Create Your Inventory</h1>
                        </div>
                        <div className='text-blue-400'>
                            <p>Add all the items you would like to host in your rental store</p>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center  lg:space-x-4 mb-8 mt-40 h-8 lg:w-80">
                            <button className='bg-blue-500 rounded px-4 py-2 lg:py-1 mb-2 lg:mt-2 '>Add products</button>
                            <button className='bg-blue-500 rounded px-4 py-2 lg:py-1  '>Update Store</button>
                        </div>
                        <div className="flex">
                            <div className='outer-circle mr-8 indot'></div>
                            <div className='outer-circle mr-8 mt-40'>
                                <div className='inner-dot'></div>
                            </div>
                            <div className='outer-circle mr-8 indot'></div>
                        </div>
                    </div>
                )
            }}</Layout>
        </div>
    );
};

export default UpdateProduct