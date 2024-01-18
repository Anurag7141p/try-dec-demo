export const MobileBtn = ({
    pages,
    currentPage = 1,
    handlePrevPage,
    handleNextPage,
    buttonText,
    showSingleButton = false,
}) => {
    return (
        <div>
            
                <div className="bottom-0 left-0 right-0 flex mt-3 px-4 md:px-8 py-4 md:py-6 fixed w-full  rounded-t-2xl border border-4 bg-white ">
                    {showSingleButton ? (
                        <button
                            type="button"
                            className='mx-auto text-gray-400 font-medium border-r-4 border-r-4 border-transparent border-b-4 border-transparent hover:border-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-md px-3 py-2 hover:text-blue-500'
                            onClick={handleNextPage}
                        >
                            {buttonText ? buttonText : "single"}
                        </button>
                    ) : (
                        <>
                            <button
                                type="button"
                                className='mx-auto text-gray-400 font-medium border-r-4 border-r-4 border-transparent border-b-4 border-transparent hover:border-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-md px-3 py-2 hover:text-blue-500'
                                onClick={handlePrevPage}
                            >
                                Back
                            </button>
                            {currentPage === pages ? (
                                <button
                                    type="submit"
                                    className='mx-auto text-gray-400 font-medium border-r-4 border-r-4 border-transparent border-b-4 border-transparent hover:border-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-md px-3 py-2 hover:text-blue-500'
                                >
                                    {buttonText ? buttonText : "Cancel"}
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className='mx-auto text-gray-400 font-medium border-r-4 border-r-4 border-transparent border-b-4 border-transparent hover:border-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-md px-3 py-2 hover:text-blue-500'
                                    onClick={handleNextPage}
                                >
                                    {buttonText ? buttonText : "Next"}
                                </button>
                            )}
                        </>
                    )}
                </div>
        </div>
    );
};

export default MobileBtn;
