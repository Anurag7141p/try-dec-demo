import React from 'react';

export default function Bottombtn({ onClick }) {
  return (
    <div className="bottom-0 left-0 right-0 flex mt-3 px-4 md:px-8 py-4 md:py-6 fixed w-full rounded-t-2xl border border-4 bg-white z-50">
      <button
        type="button"
        className='mx-auto w-60 block text-center text-gray-400 font-medium border-r-4 border-r-4 border-transparent border-b-4 border-transparent hover:border-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-md px-3 py-2 hover:text-blue-500'
        onClick={onClick}
      >
        Save
      </button>
    </div>
  );
}
