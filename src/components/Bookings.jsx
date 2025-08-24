import React from 'react'
import Navbar from './Navbar'

const Bookings = () => {
  return (
    
    <>
    <Navbar/>
    {/* Booking Form */}
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md ml-150 mt-15  text-black ">
   <h3 className="text-lg font-medium text-gray-900 mb-6">Book Your Appointment</h3>
   <form action="#" method="POST" className="space-y-4">
       <div>
           <label for="appointment-name" className="block text-sm font-medium text-gray-700">Full Name</label>
           <input type="text" name="appointment-name" id="appointment-name" autocomplete="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="John Doe"/>
       </div>
       <div>
           <label for="appointment-email" className="block text-sm font-medium text-gray-700">Email Address</label>
           <input type="email" name="appointment-email" id="appointment-email" autocomplete="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="you@example.com"/>
       </div>
       <div>
           <label for="appointment-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
           <input type="tel" name="appointment-phone" id="appointment-phone" autocomplete="tel"  required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="(123) 456-7890"/>
       </div>
       <div>
            <label for="appointment-service" className="block text-sm font-medium text-gray-700">Travel Destination</label>
            <select id="appointment-service" name="appointment-service" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>NEPAL</option>
                <option>BHUTAN</option>
                <option>TIBET</option>
                <option>Other</option>
            </select>
        </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div>
               <label for="appointment-date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
               <input type="date" name="appointment-date" id="appointment-date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
           </div>
           <div>
               <label for="appointment-time" className="block text-sm font-medium text-gray-700">Preferred Time</label>
               <input type="time" name="appointment-time" id="appointment-time" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
           </div>
       </div>
       <div>
           <label for="appointment-notes" className="block text-sm font-medium text-gray-700">Additional Notes (Optional)</label>
           <textarea id="appointment-notes" name="appointment-notes" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Any specific requests or information?"></textarea>
       </div>
       <div>
           <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
               Request Appointment
           </button>
       </div>
   </form>
</div>
    
   
    </>
  )
}

export default Bookings