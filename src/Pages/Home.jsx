import React from 'react'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import Packages from './Packages'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Livechattidio from '../components/Livechattidio'

const Home = () => {

  return (
    <>
  
      <Navbar />
     {/* tidio live chat */}
     <Livechattidio/>



     <section
        id="home"
        className="grid place-items-center w-screen h-screen text-center bg-black/70 bg-blend-overlay bg-cover bg-center pt-[125px]"
        
        style={{
          backgroundImage:
            "url('https://trekroute.com/wp-content/uploads/2015/01/Prayer-Flags-in-nepal-1024x683.jpg')"
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
            <button className="bg-blue-600 text-black px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Learn more
            </button>
            <Link to= "/bookings">
            <button className="bg-purple-800 text-green-500 px-3 py-3 rounded-md hover:bg-gray-200 transition">
              Book now
            </button>
            </Link>
          </div>

        </div>
        </section>
<Packages
title='Nepal Tour'
image='https://tse2.mm.bing.net/th/id/OIP.d9fwHaVLReKpprhz7cqEfQHaEK?pid=Api&P=0&h=220'
price='250'
/>
      <Packages
      title='Tibet Tour'
      image='https://www.tibetfocus.travel/wp-content/uploads/2017/01/7days-Lhasa-and-beyong-tour.jpg'
      price='499'/>

      <Packages
      title='Bhutan Tour'
      image='https://tse4.mm.bing.net/th/id/OIP.W5xvAZUdZC8mrx6msPDzIQHaEK?r=0&w=700&h=393&rs=1&pid=ImgDetMain&o=7&rm=3'
      price='788'
      />
         <Packages
      title='India Tour'
      image='https://tse1.mm.bing.net/th/id/OIP.1xzhNthh2cGSmdZrqGy7PAHaE8?pid=Api&P=0&h=220'
      price='250'
      />


    
<Footer/>
    </>
  )
}

export default Home