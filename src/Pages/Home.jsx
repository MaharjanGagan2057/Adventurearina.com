import React from 'react'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import Packages from './Packages'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Livechattidio from '../components/Livechattidio'
import Packagecard from '../components/Packagecard'
import Button from '../components/Button'
import Reviewcard from '../components/Reviewcard'
import Aoseffect from '../components/Aoseffect'

const Home = () => {

  return (
    <>
<Aoseffect/>
      <Navbar />
     {/* tidio live chat */}
     <Livechattidio/>



     <section
        id="home"
        className="grid place-items-center w-screen h-150 text-center bg-black/20 bg-blend-overlay bg-cover bg-center pt-[125px]"
        
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
        “Adventure Arina is your trusted travel and trekking partner, offering unforgettable journeys across Nepal and beyond. From breathtaking Himalayan treks to cultural tours and thrilling adventures, we specialize in crafting safe, personalized, and memorable experiences for every traveler.”
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3">
            <button className="bg-blue-600 text-black px-6 py-3 rounded-full dark:text-white hover:bg-blue-700 transition">
              Learn more
            </button>

              {/* Book Now button */}
           <Link to="/bookings"> 
            <Button/>
            </Link>

          </div>

        </div>
        </section>

        <div className=" w-screen h-auto flex flex-col sm:flex-col   md:flex-row  lg:flex-row justify-center items-center  ">


        {/* linking nepal package to nepal page */}
        <Link to='/Destinations/Nepal'data-aos="fade-up"
     data-aos-duration="3000">
        {/* passing prorps to packagecard */}
<Packagecard
title='Nepal Tour'
image='https://tse2.mm.bing.net/th/id/OIP.d9fwHaVLReKpprhz7cqEfQHaEK?pid=Api&P=0&h=220'
price='250'
/>
</Link>

<Link to='/Destinations/China'data-aos="fade-up" data-aos-duration="3000">
      <Packagecard
      title='Tibet Tour'
      image='https://www.tibetfocus.travel/wp-content/uploads/2017/01/7days-Lhasa-and-beyong-tour.jpg'
      price='499'/>
      </Link>

<Link to='/Destinations/Bhutan'data-aos="fade-up" data-aos-duration="3000">
      <Packagecard
      title='Bhutan Tour'
      image='https://tse4.mm.bing.net/th/id/OIP.W5xvAZUdZC8mrx6msPDzIQHaEK?r=0&w=700&h=393&rs=1&pid=ImgDetMain&o=7&rm=3'
      price='788'/>
</Link>

<Link to='/Destinations/India'data-aos="fade-up"data-aos-duration="3000">
         <Packagecard
      title='India Tour'
      image='https://tse1.mm.bing.net/th/id/OIP.1xzhNthh2cGSmdZrqGy7PAHaE8?pid=Api&P=0&h=220'
      price='250'
      />
      </Link>

</div>
    <Reviewcard/>
<Footer/>
    </>
  )
}

export default Home