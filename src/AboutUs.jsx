import React from 'react'
import Navbar from './components/navbar'
import AboutUsHero from './components/AboutUs/AboutUsHero'
import CompanyBackground from './components/AboutUs/CompanyBackground'
import Experience from './components/AboutUs/Experience'
import OurClients from './components/AboutUs/OurClients'
import Footer from './components/Footer'
import AboutUsFooter from './components/AboutUs/AboutUsFooter'

function AboutUs() {
  return (
    <div>
        <Navbar />
        <AboutUsHero />
        <CompanyBackground />
        <Experience />
        <OurClients />
        <AboutUsFooter />
        <Footer />
    </div>
  )
}

export default AboutUs
