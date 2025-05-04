import React from 'react'
import { Parallax } from 'react-parallax'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'

function ContactUsHero() {
    const [ref1, inView1] = useInView({ triggerOnce: true });

  return (
    <Parallax bgImage='/Seng Tai Images/seng_tai_welcome.jpg' bgImageAlt='Welcome' strength={400}>
    
        <div className='relative w-full h-screen flex flex-col items-center justify-center'>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#211F1F] opacity-50 z-10"></div>

            <motion.div
                ref={ref1} 
                initial={{ y: -100, opacity: 0 }}
                animate={inView1 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0 }}
                className="flex flex-col items-center gap-10"
            >

                <h2 className='text-[40px] md:text-[64px] text-white text-center font-gidugu px-10 py-6 z-20'>
                    Discover our diverse collection of high-quality timber and wood products — designed to bring natural beauty 
                    and lasting strength to every project.
                </h2>
                <Link to="/contactus" className='z-20'>
                    <button className='text-[24px] md:text-[35px] bg-[#8D6E63] text-white rounded-md font-imbue px-4 py-2'>
                        Contact Us
                    </button>
                </Link>
            </motion.div>
        </div>
       
    </Parallax>
    )
}


export default ContactUsHero
