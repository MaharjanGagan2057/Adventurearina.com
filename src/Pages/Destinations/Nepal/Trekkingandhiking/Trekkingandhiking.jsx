import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import Cards from '../../../../components/Cards'

export const Trekkingandhiking = () => {
  return (
    <>
    <Navbar/>
    <h1 className='mt-28 text-center'>Trekking And Hiking</h1>
<div className='p-20px'>

    {/* passing data using props in cards.jsx */}
    <Cards
     title='Langtang Valley Short Trek '
     image='https://basecampadventure.com/wp-content/uploads/2024/05/Permits-Required-for-Langtang-Trek.jpg'
     description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
     />

      <Cards
       title=' Tsum Valley Short Trek '
       image='https://www.nepalhightrek.com/wp-content/uploads/2024/07/Tsum-Valley-Trek.jpg'
       description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'/>
       
        <Cards
         title=' Everest Base Camp Short Trek '
       image='https://www.trekkingtoeverest.com/wp-content/uploads/2022/06/Old-Everest-Base-Camp-Trek.jpg'
       description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'/>
          <Cards
           title=' Annapurna Base camp Trek '
           image='https://www.adventurehimalayacircuit.com/public/uploads/annapurna-base-camp-trek-1.jpg'
           description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
          />
            <Cards
           title=' Everest View Trek '
           image='https://himalayaguidenepal.com/wp-content/uploads/2024/01/Where-is-Mount-Everest-Located.jpg'
       description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
          />  <Cards
           title=' Evrest Heli Trek '
           image='https://www.nepalhorizontreks.com/uploads/everest-base-camp-helicopter-tour.jpg'
       description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
          />  <Cards
           title=' City Tour '
       image='https://www.authenticindiatours.com/app/uploads/2022/06/Ancient-city-in-Kathmandu-Valley-Patan-Nepal.jpg'
       description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
          />  <Cards
          title=' City Tour '
          image='https://www.authenticindiatours.com/app/uploads/2022/06/Ancient-city-in-Kathmandu-Valley-Patan-Nepal.jpg'
          description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
          />

          </div>


    <Footer/>
    </>
  )
}
