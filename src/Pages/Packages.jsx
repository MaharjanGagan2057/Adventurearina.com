import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Packagecard from '../components/Packagecard'


const Packages = (props) => {
  return (
    <>
    <Navbar/>
    <h1 className='mt-25 text-3xl text-center'>PACKAGES</h1>

<div className='m-0.5 gap-1'>

<Link to='/Destinations/Nepal'>
    <Packagecard
    title="NEPAl"
    description="nepal "
    image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5c/54/durbar-square-bhaktapur.jpg?w=900&h=-1&s=1"
    price="200-9000"/>
    </Link>
    


<Link to ='/Destinations/India'>
  <Packagecard
    title="INDIA"
    description="India  travel packages "
    image="https://cdn.mos.cms.futurecdn.net/3FnczamRyWU6MvRMEXWaGD.jpg"
    price="200-600"/>
</Link>


<Link to ='/Destinations/China'>
      <Packagecard
    title="CHINA"
    description="China travel packages"
    image="https://ik.imagekit.io/tvlk/blog/2024/12/LAvNvlGq-budaya-china-1024x683.png?tr=q-70,c-at_max,w-500,h-300,dpr-2"
    price="200-2500"/>
    </Link>



<Link to ='/Destinations/Bhutan'>
      <Packagecard
    title="BHUTAN"
    description="Bhutan travel packages "
    image="https://www.indoasia-tours.com/wp-content/uploads/2020/10/bhutan.jpg"
    price="200-1000"/>
    </Link>

    </div>
    <Footer/>

 </>
  )
}

export default Packages