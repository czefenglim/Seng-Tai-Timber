import React from 'react'

function WhatWeProvide() {
  return (
    <div className='flex flex-col items-center justify-center bg-[#EDD3B6] py-10 gap-3'>
      <img src='/Seng-Tai-Timber/Seng Tai Images/seng tai logo.png' alt='Logo' className="h-24 w-auto"/>
      <h2 className='text-[40px] md:text-[64px] text-[#3E2723] text-center font-gidugu px-10'>
        WHAT WE PROVIDE
      </h2>
      <h3 className='text-[15px] text-[#3E2723] text-center font-inknut px-10'>
        From premium timbers to beautifully crafted wooden furniture like doors, tables,<br/> 
        and more — we offer natural elegance for every space. 
      </h3>
      <div className='flex flex-col md:flex-row items-center justify-center w-full gap-5' >
        <div className="flex flex-col justify-center items-center px-2 py-6 gap-5">
            <img
                src='/Seng-Tai-Timber/Seng Tai Images/polished-woods.jpg'
                alt='raw Material'
                className='w-[300px] h-auto'
            />
            <p className='font-fjalla text-[20px] text-center text-[#3E2723]'>
              Polished Woods
            </p>
            <p className='text-[20px] text-justify text-[#3E2723] w-[300px]'>
              Expertly polished high-quality wood, crafted into elegant, durable pieces that add warmth, character, and timeless beauty to your space.
            </p>
        </div>
        <div className="flex flex-col justify-center items-center px-2 py-6 gap-5">
            <img
                src='/Seng-Tai-Timber/Seng Tai Images/Furniture.jpg'
                alt='Furniture'
                className='w-[300px] h-auto'
            />
            <p className='font-fjalla text-[20px] text-center text-[#3E2723]'>
              Furnitures
            </p>
            <p className='text-[20px] text-justify text-[#3E2723] w-[300px]'>
              We craft high-quality wooden furniture blending tradition and modern design—durable, elegant, and timeless pieces for home or office spaces.
            </p>
        </div>
        <div className="flex flex-col justify-center items-center px-2 py-6 gap-5">
            <img
              src='/Seng-Tai-Timber/Seng Tai Images/religious-supply1.jpg'
              alt='Religious Supplies'
              className='w-[300px] h-[200px] object-cover rounded'
            />
            <p className='font-fjalla text-[20px] text-center text-[#3E2723]'>
              Religious Supplies
            </p>
            <p className='text-[20px] text-justify text-[#3E2723] w-[300px]'>
              We offer high-quality Chinese religious supplies—incense, altars, and tools—crafted with tradition, authenticity, and reverence for spiritual practices.
            </p>
        </div>
      </div>
    </div>
  )
}

export default WhatWeProvide
