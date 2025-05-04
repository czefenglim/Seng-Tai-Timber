import React from 'react'
import Navbar from './components/navbar'
import ContactUsHero from './components/ContactUs/ContactUsPageHero'
import Footer from './components/Footer'
import ContactForm from './components/ContactUs/ContactForm'
import MapComponent from './components/ContactUs/MapComponent'

function ContactUs() {
  return (
    <div>
        <Navbar />
        <ContactUsHero />
        <ContactForm />
        <MapComponent />
        <Footer />
    </div>
  )
}

export default ContactUs
