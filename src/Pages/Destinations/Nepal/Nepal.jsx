import React from 'react'
import Navbar from '../../../components/Navbar'
import Cards from '../../../components/Cards'
import Button from '../../../components/Button'
import Footer from '../../../components/Footer'
import Livechattidio from '../../../components/Livechattidio'




const Nepal = () => {
  return (
    <>
      <Navbar />
      <Livechattidio/>
       

      <h2 className="mt-26 text-6xl text-center">NEPAL</h2>
   

      <Cards 
       title=' City Tour '
       image='https://www.authenticindiatours.com/app/uploads/2022/06/Ancient-city-in-Kathmandu-Valley-Patan-Nepal.jpg'
       description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
       />
      <Cards 
      title='Trekking and Hiking'
      image='https://media.istockphoto.com/id/492231010/photo/group-of-3-trekkers-in-mount-everest-national-park-nepal.jpg?s=612x612&w=0&k=20&c=qziz0A7t6sULTnolfpOgziED_HUUWswe4EJM0xMD-qQ='
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />
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