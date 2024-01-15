import Card from "../../reusable/procard";

const UpdateProducts = () => {
    const products = [
        {
            id: 1,
            img: localStorage.getItem('uploadedImage'),
            productName: localStorage.getItem('productname'),
            amount: localStorage.getItem('amount'),
            discount: localStorage.getItem('discount')
        },
    ];
    return (
        <div>
            <div className='h-screen lg:mt-20 '>
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
        </div>
    )
}

export default UpdateProducts