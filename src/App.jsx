// src/App.jsx

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Products from './Products'
import ContactUs from './ContactUs'
import Gallery from './Gallery'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImageCarousel from './components/Gallery/ImageCarousel'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/carousel/:index" element={<ImageCarousel />} />
      </Routes>
    </Router>
  )
}

export default App
