import React from 'react'
import { Parallax } from 'react-parallax'

function GalleryPageHero() {
  return (
    
    <Parallax
        bgImage="/Seng-Tai-Timber/Seng Tai Images/ContactUsHero.jpg" 
        bgImageAlt="Hero" 
        strength={400}
        >
        <div className='h-[658px] flex items-center justify-center relative'>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#211F1F] opacity-40 z-10"></div>
            <h1 className='text-[40px] md:text-[64px] lg:text-[96px] text-white font-gidugu z-20 text-center'>
                Gallery
            </h1>
        </div>
    </Parallax>
  )
}

export default GalleryPageHero
