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
      <Navbar />
      <Livechattidio/>
       

      <h2 className="mt-26 mb-5 text-6xl text-center ">NEPAL</h2>
{/* passing img and discription using props in nepal page */}
   <Description
   image1='https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/03/28122812/EBC-trek-feature-image-1600x900.jpg'
   image2='https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/20221108141116/636a57119c7e80680e0547bejpeg.jpg'
   image3='https://res.cloudinary.com/rehash-studio/image/upload/fl_progressive:semi,f_jpg,q_60,c_fill,g_auto:subject,ar_4:3/if_w_gt_1200,w_1200/v1738231942/upload/3d9e894f-2aae-4883-9f38-d4c48821dff4.jpg'
   image4='https://leisure.vesnatours.com/wp-content/uploads/2014/10/nepal.jpg'
   image5='https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/20221110141132/636cfde49c7e80680e0a0c0djpeg.jpg'
   placename='Nepal-The Land Of Himalayas'
   placedescription='Welcome to Nepal, a land of breathtaking mountains, rich culture, and warm hospitality. From the towering peaks of the Himalayas to the lush jungles of the Terai, Nepal offers experiences that stay in your heart forever.
Whether you are trekking through remote villages, exploring UNESCO World Heritage sites in Kathmandu Valley, or seeking peace in the birthplace of Lord Buddha, Nepal has something for every traveler.Best Time to Visit Nepal
	•	Spring (Mar–May): Perfect for trekking, rhododendrons in bloom, clear skies.
	•	Autumn (Sep–Nov): Most popular season, ideal mountain views, cultural festivals like Dashain & Tihar.
	•	Winter (Dec–Feb): Best for cultural tours, wildlife safaris, lower-altitude treks.
	•	Summer/Monsoon (Jun–Aug): Lush greenery, fewer crowds, great for Upper Mustang & Dolpo treks.'
   />

{/* passing data using props in cards.jsx */}
      <Cards 
       title=' City Tour '
       image='https://www.authenticindiatours.com/app/uploads/2022/06/Ancient-city-in-Kathmandu-Valley-Patan-Nepal.jpg'
       description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
       />
       
       <Link to='/Destinations/Nepal/Trekkinghandhiking'>
      <Cards 
      title='Trekking and Hiking'
      image='https://media.istockphoto.com/id/492231010/photo/group-of-3-trekkers-in-mount-everest-national-park-nepal.jpg?s=612x612&w=0&k=20&c=qziz0A7t6sULTnolfpOgziED_HUUWswe4EJM0xMD-qQ='
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />
</Link>

      <Cards 
      title='Cultural Tour'
      image='https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/475523323_1187228253402347_2955125854583527778_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-NmN9L66NpMQ7kNvwEwwEPK&_nc_oc=AdntJMqaLqq8g-lUwvvh7PdoYYKbzsXVbJyx4IuMxDFJ88agSCpdWj62u6eZjvPhDhlDojIlAGsIrSTPy9IgIKQp&_nc_zt=23&_nc_ht=scontent.fktm20-1.fna&_nc_gid=KhyIysHtpj86PmcfIZJafQ&oh=00_AfXVg-SkqLWeRAcmJ5AtVLQGWsuRyHq36_osiddH2Ahuhg&oe=68B8AF6F'
      description='Mount Everest, known as Sagarmatha in Nepali and Chomolungma in Tibetan, is the highest mountain in the world, with its summit reaching an elevation of 8,848.86 meters (29,031.7 feet) above sea level. It is located in the Himalayas on the border between Nepal and the Tibet Autonomous Region of China.'
      />
      <Cards 
      title='Spritual Tour'
      image='https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/475307701_1187228186735687_6883334503072732041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yBsZSajrFHoQ7kNvwFhQn_n&_nc_oc=AdnP5M6UyC3pENKjn-zSwlYcRj4CIQ5xcAlKIdBCai7IbnrBkRY9eF7aRvhh98fweYhjmgi3aEEibemQpyDC-_J3&_nc_zt=23&_nc_ht=scontent.fktm20-1.fna&_nc_gid=iDuyD-peUewAQ253SZTYdw&oh=00_AfXhRSgy4JYUQXHAW_41PD_rHyDBp8NScQ1m2jjJKP4CNA&oe=68B8B34A'
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />

      {/* Download ISMT DOCX from public folder
      <a
        href="/ismt.docx"
        download="ismt.docx"
        className="inline-block px-4 py-2  text-white rounded transition mt-8"
      >
       <u> Download Itenery</u>
      <Button />
      </a> */}

      <Footer />
    </>
  )
}

export default Nepal