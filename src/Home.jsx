import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Home/Hero'
import Quality from './components/Home/Quality'
import ContactUsHero from './components/Home/ContactUsHero'
import WhatWeProvide from './components/Home/WhatWeProvide'
import GalleryHero from './components/Home/GalleryHero'
import Footer from './components/Footer'


function Home() {
    const [count, setCount] = useState(0)

    return (
      <>
        <Navbar />
        <Hero />
        <Quality />
        <ContactUsHero />
        <WhatWeProvide />
        <GalleryHero />
        <Footer />
      </>
    )
}

export default Home
