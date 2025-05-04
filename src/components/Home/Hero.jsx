import React from 'react'
import { Parallax } from 'react-parallax'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'

function Hero() {

    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });
    

    return (
      <Parallax 
        bgImage="/Seng Tai Images/hero.jpg" 
        bgImageAlt="Header" 
        strength={400}
      >
        <div className="relative w-full h-screen flex flex-col items-center justify-center px-4 py-12">
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#211F1F] opacity-40 z-10"></div>
            <motion.div
              ref={ref1}
              initial={{ y: -100, opacity: 0 }}
              animate={inView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0 }}
              className="flex flex-col items-center gap-10"
            >
            <h1 className="text-[40px] md:text-[64px] lg:text-[96px] text-white font-gidugu z-20 text-center pb-10">
              Crafted by nature, perfected by us
            </h1>
          </motion.div>
          
            <motion.div
              ref={ref2}
              initial={{ y: 100, opacity: 0 }}
              animate={inView2 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center gap-10"
            >
            
                <h2 className="text-[20px] md:text-[24px] lg:text-[30px] text-white font-inknut z-20 text-center pb-10">
                  Premium Timber Products for Construction, Furniture, <br />
                  and Design – Sustainably Sourced & Expertly Crafted
                </h2>
             
              
            </motion.div>
        
            <motion.div
              ref={ref3}
              initial={{ y: 100, opacity: 0 }}
              animate={inView3 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col items-center gap-10"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 pt-4 z-20">
                <button className="bg-[#F0D7BF]  text-[#A47551] font-imbue text-[24px] md:text-[40px] px-4 py-2 md:px-6 md:py-3">
                  Shop Now
                </button>
                <Link to="/contactus">
                  <button className="bg-[#A47551] text-[#F0D7BF] font-imbue text-[24px] md:text-[40px] px-4 py-2 md:px-6 md:py-3">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
        </div>
      </Parallax>
    )
  }

export default Hero
