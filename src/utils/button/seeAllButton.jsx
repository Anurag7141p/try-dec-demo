import React from 'react'
import { Link } from 'react-router-dom'; 

const SeeAllButton=({ link, children })=> {
  return (
    <div className="flex items-center justify-end ">
    <Link to={link} className="text-black font-bold flex items-center">
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5 ml-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  </div>
  )
}

export default SeeAllButton