import React from 'react'
import Navbar from '../components/Navbar'
import ashmita from '../assets/ashmita.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Aboutus = () => {
  return (
    <>
 <Navbar />

<div class="w-full lg:h-screen  mt-18 flex items-center justify-cetner py-20 bg-blue-50 dark:bg-slate-800 ">
    <div class="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
       
        <div class="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div class="relative">
        
               {/* // Main Img */}
                <img
  className="rounded-full  relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500"
  src={ashmita}
  alt="About us"
/>
            </div>
        {/* // Content */}
            <div
                class="lg:w-[90%] p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                <h2 class="text-4xl text-center text-green-600 dark:text-green-400 font-bold px-4 py-1 md:mt-0 mt-10">
                    About Us
                </h2>
                <p class="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-200 font-bold my-5">We are
                    Adventure Arina
                </p>
                <p class="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300"> 

Founder’s Message <br />

“Namaste! I’m  <b className='text-amber-300 text-3xl'>Ashmita Lama</b>, founder of Adventure Arina. With over  <b className='text-amber-300'>8</b> years of experience as Assistant Operations Manager in a renowned trekking and tours company, and my current role in the Operations Department at San Francisco International Airport, I’ve dedicated my career to ensuring travelers have safe, smooth, and memorable journeys.

I’ve been fortunate to travel to more than 19 countries myself, which gives me a deep understanding of what travelers look for comfort, safety, cultural immersion, and those unforgettable little details. Over the years, I’ve guided and supported clients through countless successful trips, and I’m honored to have received awards for excellence in customer service.

Adventure Arina is my way of combining this professional expertise with a deeply personal mission. In memory of my late mother Arina, we created the Purple Promise: every journey you take with us also contributes to supporting pancreatic cancer patients. With us, your adventure not only takes you across breathtaking landscapes, but also touches lives along the way.

I warmly welcome you to join us and discover the Himalayas and beyond with heart, safety, and meaning.”.
                </p>
<Link to="/teams" className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2  rounded-sm lg:text-xl text-lg text-white font-semibold"> <u>Our Teams</u>
</Link>
                

            </div>

        </div>
    </div>
</div>
{/* Footer */}
<Footer/>
   </>
  )
}

export default Aboutus