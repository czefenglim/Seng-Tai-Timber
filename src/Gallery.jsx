import React from 'react'
import Navbar from './components/navbar'
import GalleryPageHero from './components/Gallery/GalleryPageHero'
import GalleryImages from './components/Gallery/GalleryImages'
import Footer from './components/Footer'
import GalleryFooter from './components/Gallery/GalleryFooter'

function Gallery() {
  return (
    <div>
        <Navbar />
        <GalleryPageHero />
        <GalleryImages />
        <GalleryFooter />
        <Footer />
    </div>
  )
}

export default Gallery
