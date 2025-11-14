import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Whyus = () => {
  return (
    <>
 <Navbar/>
<section className="my-40 m-w-full  items-center px-2 dark:text-white pl-40">
    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white  ">
        Why Choose Our Platform?
    </h2>
    <ul className="mt-6 space-y-4 text-lg text-gray-600 dark:text-white">
        <li className="flex items-start">
            <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="ml-3">Experienced Local Guides Our guides are licensed professionals born and raised in the Himalayas, offering authentic cultural insights and ensuring safety.</span>
        </li>
        <li className="flex items-start">
            <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="ml-3">Customized Itineraries

Whether you’re a first-time trekker or a seasoned adventurer, we design trips tailored to your pace, interests, and fitness level.</span>
        </li>
        <li className="flex items-start">
            <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="ml-3">Safety First Approach

Equipped with first-aid, oxygen cylinders, and satellite communication devices. Your safety is always our top priority.</span>
        </li>
        <li className="flex items-start">
            <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="ml-3">Transparent Pricing No hidden costs everything is clearly explained so you can plan without surprises.</span>
        </li>
        <li className="flex items-start">
            <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="ml-3">24/7 Support From booking to the end of your trip, our team is always available to assist.</span>
        </li>
         <li className="flex items-start">
            <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="ml-3">Top Reviews & Reputation Recognized by past travelers for professionalism, warmth, and unforgettable experiences.</span>
       
     
      
     
        </li>
    </ul>
</section>



 <Footer/>
    </>
    
  )
}

export default Whyus