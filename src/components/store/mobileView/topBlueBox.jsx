const TopBlueBox = ({
    pages,
    currentPage = 1,
    Tittle,
    boxDiscription,
    subTittle
}) => {
    return (
        <div className='ms-4'>
            <h1 className={`text-xl font-bold py-2 ${Tittle === 'Store' ? 'text-center h-20 py-5' : ''}`}>
                {Tittle}
            </h1>
            {Tittle !== 'Store' && (
                <div className='mt-1'>
                    <h2>{subTittle}</h2>
                </div>
            )}
            <div className='text-sm mt-3 text-blue-100'>
                <p>{boxDiscription}</p>
            </div>
            {Tittle !== 'Store' && (
                <div className="bottom-0 left-0 right-0 flex justify-center mt-3 py-3">
                    {Array.from({ length: pages }).map((_, index) => (
                        <div key={index} className="mr-2" >
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
    )
}

export default TopBlueBox;
