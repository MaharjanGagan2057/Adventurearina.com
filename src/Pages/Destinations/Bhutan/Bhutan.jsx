import React from 'react'
import Navbar from '../../../components/Navbar'
import Cards from '../../../components/Cards'
import Footer from '../../../components/Footer'

const Bhutan = () => {
  return (
    <>
    <Navbar/>
     <h2 className='mt-26 text-6xl text-white-600 text-center'>BHUTAN</h2>
   <Cards 
      title='Bhutan City Tour'
      image='https://www.gokitetours.com/wp-content/uploads/2025/02/Top-8-Bhutan-Tourist-Places-to-Visit-in-2025.webp'
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />
      <Cards 
      title='Cultural Tour'
      image='https://b-cdn.springnest.com/media/img/kd/img_3098a4d0390.jpg?width=800'
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />
      <Cards 
      title='Trongsa Dzong'
      image=' https://lp-cms-production.imgix.net/2019-06/GettyImages-148593835_high.jpg'
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />
      <Cards 
      title='Punakha Dzong'
      image='https://cdn.britannica.com/84/137384-050-6F2A5AB4/dzong-Punakha-Bhutan.jpg'
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      /> 

      <Footer />
    </>
  )
}

export default Bhutan