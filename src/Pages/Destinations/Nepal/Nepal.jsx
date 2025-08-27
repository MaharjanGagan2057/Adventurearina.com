import React from 'react'
import Navbar from '../../../components/Navbar'
import Cards from '../../../components/Cards'
import Button from '../../../components/Button'
import Footer from '../../../components/Footer'


const Nepal = () => {
  return (
    <>
      <Navbar />

      <h2 className="mt-25 text-6xl text-center">NEPAL</h2>
      <Cards 
      title='Annapurna Summit'
      image='https://tse1.mm.bing.net/th/id/OIP.ncZRVr0fxOUF8Iu-U5nEsgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />
      <Cards 
      title='Everest Summit'
      image='https://tse1.mm.bing.net/th/id/OIP.MxF3iuQuZOinuYLqrQo73gHaEH?r=0&pid=ImgDet&w=184&h=102&c=7&dpr=1.3&o=7&rm=3'
      description='Mount Everest, known as Sagarmatha in Nepali and Chomolungma in Tibetan, is the highest mountain in the world, with its summit reaching an elevation of 8,848.86 meters (29,031.7 feet) above sea level. It is located in the Himalayas on the border between Nepal and the Tibet Autonomous Region of China.'
      />
      <Cards 
      title='Annapurna Summit'
      image='https://tse1.mm.bing.net/th/id/OIP.hQ4l5MlliI7Fe_XdDUGRyQHaE8?r=0&pid=ImgDet&w=184&h=122&c=7&dpr=1.3&o=7&rm=3'
      description='Annapurna, a massif in the Himalayas in north-central Nepal, . The region is also home to the Annapurna Sanctuary, a high-altitude basin surrounded by some of the highest peaks in the world, including Annapurna I, which stands at 8,091 meters (26,545 feet).'
      />
     <Cards 
      title=' Patan Durbasquare Tour '
      image='https://peregrinetreks.com/wp-content/uploads/2022/12/City-of-Temple-Patan-Durbar-Square.webp'
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