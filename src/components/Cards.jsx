import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  return (
    < >
    <div className=" inline-block justify-items-center m-3 mt-10 mb-20"><br />
      <div className="w-80 h-[430px] bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-4 ">
        {/* passing img using props */}
        <a href="#">
          <img
            className="rounded-t-3xl w-80 h-60 object-cover"
            src={props.image}
            alt=""
          />
        </a>
        <div className="p-5  ">
          {/* passing title using props */}
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </a>
          {/* passing description using props */}
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm line-clamp-3">
            {props.description}
          </p>
            {/* Book Now button */}
           <Link to="/bookings"> <button  className="items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Book Now </button>
            </Link>
         
        </div>
      </div>
    </div>







    </>
  )
}

export default Cards