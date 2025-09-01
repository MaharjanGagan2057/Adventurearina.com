
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Packages from './Pages/Packages'
import { Teams } from './Pages/Teams'
import Destinations from './Pages/Destinations/Destinations'
import Nepal from './Pages/Destinations/Nepal/Nepal'
import Bhutan from './Pages/Destinations/Bhutan/Bhutan'
import China from './Pages/Destinations/China/China'
import India from './Pages/Destinations/India/India'
import Bookings from './components/Bookings'
import Whyus from './Pages/Whyus'
import { Trekkingandhiking } from './Pages/Destinations/Nepal/Trekkingandhiking/Trekkingandhiking'
function App() {
  
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/Destinations/Nepal" element={<Nepal />} />
          <Route path="/Destinations/Bhutan" element={<Bhutan />} />
          <Route path="/Destinations/China" element={<China />} />
          <Route path="/Destinations/India" element={<India />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/whyus" element={<Whyus/>}/>
          <Route path="/Destinations/Nepal/Trekkinghandhiking" element={<Trekkingandhiking/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App  
