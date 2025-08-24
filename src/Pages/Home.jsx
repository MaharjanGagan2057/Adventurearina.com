import React from 'react'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import Packages from './Packages'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <Navbar />
     
     <section
        id="home"
        className="grid place-items-center w-screen h-screen text-center bg-black/70 bg-blend-overlay bg-cover bg-center pt-[125px]"
        
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/540840250/photo/view-of-mount-everest-and-nuptse-with-buddhist-prayer-flags.jpg?s=612x612&w=0&k=20&c=bqWFn65MpOMRgbEaL66RIPQf3toFQFY3-s3KCO1Cz9s=')"
        }}
      >
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Journey to explore world
          </h2>

          <p className="text-white text-base md:text-lg mb-10">
            Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos
            voluptatibus habitant?
            Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Learn more
            </button>
            <Link to= "/bookings">
            <button className="bg-white text-green-500 px-3 py-3 rounded-md hover:bg-gray-200 transition">
              Book now
            </button>
            </Link>
          </div>

        </div>
      </section>
      <Packages/>

<Contact/>
    

    </>
  )
}

export default Home