import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Cards from '../../../components/Cards'

const India = () => {
  return (
   <>
   <Navbar/>
      <h2 className="mt-26 text-6xl text-center">India</h2>
   <Cards
       title=' City Tour '
       image='https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/utlfzgnz5axta4rsgnaf/Private%20Mumbai%20Half%20Day%20City%20Tour%20in%20India.jpg'
       description='India city tour with stunning view,cultural places.'
       />
   
   <Cards
       title='Spritual North-India '
       image='https://cdn.kimkim.com/files/a/images/b0176864e87e314537b6180107dd3c7b9442e08b/original-5fe595bdac34d492ace4db8ff6b61a15.jpg'
       description='India city tour with stunning view,cultural places.'
       />

       <Cards
       title='Kerela Backwaters & Ayurveda'
       image='https://www.touracle.in/wp-content/uploads/2025/01/kerala.webp'
       description='India city tour with stunning view,cultural places.'
       />

       <Cards
       title='Ladakh-Kashmir Tour '
       image='https://www.nirmalatravels.com/wp-content/uploads/2022/03/ftrd-kashmir-ladakh.jpg'
       description='India city tour with stunning view,cultural places.'
       />



   <Footer/>
   </>
  )
}

export default India