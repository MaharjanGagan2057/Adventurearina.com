import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logofinal from "../assets/logofinal.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menu = () => {
    setIsOpen(!isOpen);
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
      setIsOpen(false); // close menu on mobile after select
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between p-4">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logofinal} className="h-16 rounded-xl" alt="Logo" />
          <span className="text-xl font-bold text-purple-800 dark:text-white">
            Adventure Arina
          </span>
        </Link>

        {/* Mobile Button */}
        <button onClick={menu} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* MENU */}
      <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center md:justify-between p-4 `}>

        <ul className="flex flex-col md:flex-row md:space-x-6 text-black">

          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/packages" onClick={() => setIsOpen(false)}>Packages</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/whyus" onClick={() => setIsOpen(false)}>WhyUs</Link></li>

        {/* Destination dropdown */}
        <select
          onChange={handleDestinationChange}
          defaultValue=""
          className="mt-4 md:mt-0 px-4 py-2 rounded-md border dark:bg-gray-800 dark:text-white"
        >
          <option value="" disabled hidden>Destinations</option>
          <option value="/Destinations/Nepal">NEPAL</option>
          <option value="/Destinations/India">INDIA</option>
          <option value="/Destinations/Bhutan">BHUTAN</option>
          <option value="/Destinations/China">TIBET</option>
        </select>
        </ul>


      </div>
    </nav>
  );
}