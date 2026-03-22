import React from 'react'
import Navbar from '../components/Navbar'
import ashmita from '../assets/ashmita.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { Teams } from '../components/Teams'
const Aboutus = () => {
  return (
    <>
 <Navbar />

<div class="w-full h-screen lg:h-100  mt-30 flex items-center justify-cetner  bg-blue-50 dark:bg-slate-800  ">
    <div class="w-full  flex flex-col justify-center items-center sm:px-4 px-2 ">
       
        <div class="lg:w- w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div class="relative">
        
               {/* // Main Img */}
                <img
  className="  relative object-cover right-0 lg:w-[30rem] lg:h-[100] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem]  mt-0 rounded-2xl "
  src="/trecker.png"
  alt="About us"
/>
            </div>
        {/* // Content */}
            <div
                class="lg:w-full p-5 w-full h-full shadow-xl  shadow-green-300/40 flex flex-col justify-center items-center sm:px-6  rounded-xl ">
                
                <p class="md:text-4xl text-xl text-center text-purple-800 dark:text-gray-200 font-bold  italic  font-[great_vibes] ">Ashmita Lama
                    <br />
                </p>
        <span className='text-xl font-[great_vibes] text-purple-500 font-bold '>------- Founder & Director ------- </span>  <br /> <br />
                <p class="md:text-xl sm:text-lg text-base mt-2  sm:px-2 dark:text-gray-300 text-gray-300-500 text-center font-light "> 

Adventure Arina was created in loving memory of my mother. With years of experience leading treks across Nepal, I founded this company to share the beauty of the Himalayas and create unforgettable journeys. <br /> <br />
My goal is to make every adventure personal and meaningful. <br /> <br />
Sharing the Journey, From My Heart 💜
                </p>
            </div>

        </div>
    </div>
</div>
<Teams/>
{/* Footer */}
<Footer/>
   </>
  )
}

export default Aboutus