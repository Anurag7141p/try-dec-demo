export const MobileBtn = ({
    isValid,
    pages,
    currentPage = 1,
    handlePrevPage,
    handleNextPage,
    buttonText,
}) => {
    return (
        <div>
            <div className="bottom-0 left-0 right-0 flex mt-3 px-4 md:px-8 py-4 md:py-6 fixed w-full justify-between rounded-t-2xl border border-4 bg-white">
                <button
                    type="button"
                    className='text-gray-400 font-medium border-l-4 border-transparent border-b-4 border-transparent hover:border-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-md px-3 py-2 hover:text-blue-500' 
                    onClick={handlePrevPage}
                >
                    Back
                </button>
                {currentPage == pages ? (
                    <button
                        type="submit"
                        disabled={!isValid}
                        className='text-gray-400 font-medium border-r-4 border-transparent border-b-4 border-transparent hover:border-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-md px-3 py-2 hover:text-blue-500'          >
                        {buttonText ? buttonText : "save"}
                    </button>
                ) : (
                    <button
                        type="button"
                        className='text-gray-400 font-medium border-r-4 border-transparent border-b-4 border-transparent hover:border-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-md px-3 py-2 hover:text-blue-500' 
                        onClick={handleNextPage}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>

    );
};
export default MobileBtn;