import React from 'react'
import Navbar from '../../../components/Navbar'
import Cards from '../../../components/Cards'
import Button from '../../../components/Button'
import Footer from '../../../components/Footer'
import Livechattidio from '../../../components/Livechattidio'
import Description from '../../../components/Description'
import { Link } from 'react-router-dom'




const Nepal = () => {
  return (
    <>
  
      <Livechattidio/>
      <Navbar />
       

      <h2 className="mt-30 mb-5 text-6xl text-center ">NEPAL</h2>
{/* passing img and discription using props in nepal page */}
   <Description
   image1='https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/03/28122812/EBC-trek-feature-image-1600x900.jpg'
   image2='https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/20221108141116/636a57119c7e80680e0547bejpeg.jpg'
   image3='https://res.cloudinary.com/rehash-studio/image/upload/fl_progressive:semi,f_jpg,q_60,c_fill,g_auto:subject,ar_4:3/if_w_gt_1200,w_1200/v1738231942/upload/3d9e894f-2aae-4883-9f38-d4c48821dff4.jpg'
   image4='https://cosatravel.ch/wp-content/uploads/2023/12/nepal-kathmandu-valley-boudhanath-stupa-1440x958.jpg'
   image5='https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/20221110141132/636cfde49c7e80680e0a0c0djpeg.jpg'
   placename='Nepal-The Land Of Himalayas'
   placedescription='Welcome to Nepal, a land of breathtaking mountains, rich culture, and warm hospitality. From the towering peaks of the Himalayas to the lush jungles of the Terai, Nepal offers experiences that stay in your heart forever.
Whether you are trekking through remote villages, exploring UNESCO World Heritage sites in Kathmandu Valley, or seeking peace in the birthplace of Lord Buddha, Nepal has something for every traveler.Best Time to Visit Nepal
	•	Spring (Mar–May): Perfect for trekking, rhododendrons in bloom, clear skies.
	•	Autumn (Sep–Nov): Most popular season, ideal mountain views, cultural festivals like Dashain & Tihar.
	•	Winter (Dec–Feb): Best for cultural tours, wildlife safaris, lower-altitude treks.
	•	Summer/Monsoon (Jun–Aug): Lush greenery, fewer crowds, great for Upper Mustang & Dolpo treks.'
   />

<div className=' flex-row  justify-items-3 items-center '>


{/* passing data using props in cards.jsx */}
       <Link to='/Destinations/Nepal/Trekkinghandhiking'>
      <Cards 
      title='Trekking and Hiking'
      image='https://media.istockphoto.com/id/492231010/photo/group-of-3-trekkers-in-mount-everest-national-park-nepal.jpg?s=612x612&w=0&k=20&c=qziz0A7t6sULTnolfpOgziED_HUUWswe4EJM0xMD-qQ='
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />
      
</Link>

 <Cards 
       title=' Peak climbing '
       image='https://assets.bizclikmedia.net/668/deae15354044d6461de8e572462ddb01:05b5874218353e889920405c38da01d8/nelly-attar-in-mountain-climbing-action.jpeg'
       description='Peak climbing, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
       />

 <Cards 
      title='Soulful Journies'
      image='https://www.aaryatravel.com/user_uploads/category_images/856426494744.jpg'
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />

       <Cards 
      title='Adventure Activities'
      image='https://www.renehersecycles.com/wp-content/uploads/2025/02/Sandro_Top_1632-600x450.jpg'
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />


      <Cards 
       title=' Culture & City Tours '
       image='https://www.authenticindiatours.com/app/uploads/2022/06/Ancient-city-in-Kathmandu-Valley-Patan-Nepal.jpg'
       description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
       />
       

       

      <Cards 
      title='Helicopter Tours'
      image='https://media.nepaltrekadventures.com/uploads/socialmedia/everest-helicopter-tour-highlights-s-2.jpg'
      description='Mount Everest, known as Sagarmatha in Nepali and Chomolungma in Tibetan, is the highest mountain in the world, with its summit reaching an elevation of 8,848.86 meters (29,031.7 feet) above sea level. It is located in the Himalayas on the border between Nepal and the Tibet Autonomous Region of China.'
      />
     
      <Cards 
      title='Safari Tours'
      image='https://th.bing.com/th/id/OIP.BqF9GfIy0ba8Rp7mZQ7OOQHaEo?w=294&h=183&c=7&r=0&o=7&pid=1.7&rm=3'
      description='Mount Everest, known as Sagarmatha in Nepali and Chomolungma in Tibetan, is the highest mountain in the world, with its summit reaching an elevation of 8,848.86 meters (29,031.7 feet) above sea level. It is located in the Himalayas on the border between Nepal and the Tibet Autonomous Region of China.'
      />

       <Cards 
      title='Day Tours'
      image='https://media.istockphoto.com/id/1205815325/photo/the-upper-part-of-the-stupa-in-buddhist-temple-swayambhunath-in-kathmandu.jpg?s=170667a&w=0&k=20&c=KK7XUiSjo4MXszxjc1xOk3LR4c30PNt5bMyI2tTTZNA='
      description='Mount Everest, known as Sagarmatha in Nepali and Chomolungma in Tibetan, is the highest mountain in the world, with its summit reaching an elevation of 8,848.86 meters (29,031.7 feet) above sea level. It is located in the Himalayas on the border between Nepal and the Tibet Autonomous Region of China.'
      />

       <Cards 
      title='Unique experiences'
      image='https://th.bing.com/th/id/R.d1898cc5a326bd61c05ef9ca821e0153?rik=Coqw8E%2f7XIaQ%2bQ&pid=ImgRaw&r=0'
      description='Mount Everest, known as Sagarmatha in Nepali and Chomolungma in Tibetan, is the highest mountain in the world, with its summit reaching an elevation of 8,848.86 meters (29,031.7 feet) above sea level. It is located in the Himalayas on the border between Nepal and the Tibet Autonomous Region of China.'
      />

      </div>

      <Footer />
    </>
  )
}

export default Nepal