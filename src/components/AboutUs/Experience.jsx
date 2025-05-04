import React from 'react'
import { Cloud, PackageSearch, ChartColumnIncreasing } from 'lucide-react';
import CountUp from 'react-countup'
import { Parallax } from 'react-parallax';


function Experience() {
  return (
    <Parallax
        bgImage="/Seng Tai Images/Experience.jpg" 
        bgImageAlt="Hero" 
        strength={400}
    >
        <div className='h-[658px] flex flex-col items-center justify-center relative '>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#211F1F] opacity-40 z-10"></div>

            <h2 className='text-[36px] md:text-[48px] lg:text-[60px] text-white font-gidugu z-20 text-center pb-5'>
                Our expertise, commitment and excellence
            </h2>
            <div className='w-full px-10 flex flex-col md:flex-row gap-6 items-center justify-between z-20 pt-5 text-center'>
                <div className='flex flex-col justify-center items-center w-1/3'>
                    <Cloud className="text-white w-16 h-16" />

                    <h3 className='text-[18px] md:text-[24px] text-white'>YEARS OF EXPERIENCE</h3>
                    <p className='font-inknut text-white text-[26px] md:text-[36px]'>
                        <CountUp end={40} duration={2} enableScrollSpy scrollSpyOnce scrollSpyDelay={100}/>+
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center w-1/3'>
                    <PackageSearch className="text-white w-16 h-16"/>
                    <h3 className='text-[18px] md:text-[24px] text-white'>SOLD PRODUCTS</h3>
                    <p className='font-inknut text-white text-[26px] md:text-[36px]'>
                        <CountUp end={5000} duration={2.5} separator="," enableScrollSpy scrollSpyOnce scrollSpyDelay={100} />+
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center w-1/3'>
                    <ChartColumnIncreasing className="text-white w-16 h-16"/>
                    <h3 className='text-[18px] md:text-[24px] text-white'>SATISFIED CLIENTS</h3>
                    <p className='font-inknut text-white text-[26px] md:text-[36px]'>
                        <CountUp end={300} duration={2} enableScrollSpy scrollSpyOnce scrollSpyDelay={100}/>+
                    </p>
                </div>
            </div>
        </div>
    </Parallax>
  )
}

export default Experience
