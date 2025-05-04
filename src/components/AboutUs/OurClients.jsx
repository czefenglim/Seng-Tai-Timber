import React from 'react'
import { GrUserWorker } from "react-icons/gr";
import { TbSofa } from "react-icons/tb";
import { GiWoodCabin } from "react-icons/gi";
import { FaToolbox } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function OurClients() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div className='flex flex-col gap-3 bg-[#FAF4EF] items-center justify-center py-10 px-20'>
        <img src='/Seng-Tai-Timber/Seng Tai Images/seng tai logo.png' alt='Logo' className="h-24 w-auto"/>
        <h2 className='text-[36px] md:text-[48px] lg:text-[60px] text-[#A47551] font-gidugu z-20 text-center'>OUR CLIENTS</h2>
        <div className='flex flex-col md:flex-row justify-between gap-6 py-10 w-full'>
            <div className='flex flex-row md:flex-col items-center justify-center gap-20'>
                <div className='flex flex-col rounded-md bg-[#A47551] items-center justify-evenly h-[250px] w-[350px]' ref={ref1}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView1 ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-4"
                    >
                    <GrUserWorker className='text-[#FAF4EF] w-16 h-16' />
                    <p className='font-inknut text-center text-[15px] md:text-[24px] text-[#FAF4EF]'>Real-estate Builders</p>
                </motion.div>
                </div>
                <div className='flex flex-col rounded-md bg-[#A47551] items-center justify-evenly h-[250px] w-[350px]' ref={ref2}>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={inView2 ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <TbSofa className='text-[#FAF4EF] w-16 h-16'/>
                        <p className='font-inknut text-center text-[15px] md:text-[24px] text-[#FAF4EF]'>Wooden Furniture</p>
                    </motion.div>
                </div>
            </div>

            <img src='/Seng Tai Images/OurClients.jpg' alt='OurClients' className='w-[400px] h-auto'/>

            <div className='flex flex-row md:flex-col items-center justify-center gap-20'>
                <div className='flex flex-col rounded-md bg-[#A47551] items-center justify-evenly h-[250px] w-[350px]' ref={ref3}>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={inView3 ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <GiWoodCabin className='text-[#FAF4EF] w-16 h-16'/>
                        <p className='font-inknut text-center text-[15px] md:text-[24px] text-[#FAF4EF]'>Wood Workshops</p>
                    </motion.div>
                </div>
                <div className='flex flex-col rounded-md bg-[#A47551] items-center justify-evenly h-[250px] w-[350px]' ref={ref4}>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={inView4 ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <FaToolbox className='text-[#FAF4EF] w-16 h-16'/>
                        <p className='font-inknut text-center text-[15px] md:text-[24px] text-[#FAF4EF]'>DIY</p>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurClients
