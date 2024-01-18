
const TopBlueBox = ({
    pages,
    currentPage = 1,
    Tittle,
    boxDiscription,
    subTittle,
    centertittle,
    backarrow,
    showBottomBar = true,
}) => {
    return (
        <>
            <div className='mb-1 relative'>
                <div className='flex justify-between items-end'>
                    <div>
                        <h1 className="font-bold text-2xl mt-6 ms-5">{Tittle}</h1>
                        <p className="ms-2 "> {backarrow}</p>

                        <div className='mt-1 font-medium ms-6'>
                            <h2>{subTittle}</h2>
                        </div>
                        <div className='text-sm mt-3 text-blue-100 ms-6'>
                            <p>{boxDiscription}</p>
                        </div>
                    </div>
                </div>
                <div className='text-center py-2'>
                    <h1 className="text-xl font-medium ">{centertittle}</h1>
                </div>
                {showBottomBar && (
                    <div className="bottom-0 left-0 right-0 flex justify-center mt-3 py-3">
                        {Array.from({ length: pages }).map((_, index) => (
                            <div key={index} className="mr-2">
                                {currentPage === index + 1 ? (
                                    <div className="h-2 w-20 bg-white rounded-lg"></div>
                                ) : (
                                    <div className="h-2 w-20 bg-gray-500 rounded-lg"></div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default TopBlueBox;
