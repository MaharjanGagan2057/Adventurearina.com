import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <>
<Link to="/bookings">
<button
  className="relative py-2 px-8  text-black text-base font-bold  overflow-hidden bg-white rounded-full  transition-all duration-100 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-purple-800 before:to-purple-200 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
>
  Book Now
</button>
</Link>


    </>
  )
}

export default Button

