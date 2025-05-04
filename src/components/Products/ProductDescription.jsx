import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ProductDescription() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className='flex flex-col'>
        <div className='flex flex-col md:flex-row items-stretch w-full'>
            <img
                src='/Seng Tai Images/polished-woods.jpg'
                alt='raw Material'
                className='w-full md:w-1/2 h-full object-cover'
            />
            <div className='flex flex-col py-4 px-4 items-center justify-center bg-[#FAF4EF] text-[#A47551] w-full md:w-1/2'>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={inView1 ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-10"
                >
                    <div ref={ref1}>
                        <h1 className='text-[36px] md:text-[48px] lg:text-[60px] font-gidugu z-20 text-center'>
                            Polished Woods
                        </h1>
                        <p className='font-inknut text-[#A47551] text-justify text-[18px] text-base leading-loose w-[400px]'>
                            We carefully select high-quality wood and expertly polish it to perfection, transforming raw material into smooth, 
                            elegant forms. Each product reflects craftsmanship, durability, and timeless design—crafted to elevate your living space with warmth, 
                            character, and natural beauty.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row items-stretch w-full'>
            <div className='flex flex-col py-4 px-4 items-center justify-center gap-10 bg-[#FAF4EF] text-[#A47551] w-full md:w-1/2' ref={ref2}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView2 ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-10"
                >
                    <div ref={ref2}>
                        <h1 className='text-[36px] md:text-[48px] lg:text-[60px] font-gidugu z-20 text-center'>
                            Wooden Furniture
                        </h1>
                        <p className='font-inknut text-[#A47551] text-justify text-[18px] text-base leading-loose w-[400px]'>
                            We specialize in crafting high-quality wooden furniture, combining traditional craftsmanship with modern design. 
                            Our products are meticulously crafted to offer durability, elegance, and comfort, 
                            providing you with timeless pieces that enhance any space in your home or office.
                        </p>
                    </div>
                </motion.div>
            </div>
            <img
                src='/Seng Tai Images/Furniture.jpg'
                alt='Furniture'
                className='w-full md:w-1/2 h-full object-cover'
            />
        </div>
        <div className='flex flex-col md:flex-row items-stretch w-full'>
            <img
                src='/Seng Tai Images/religious-supply1.jpg'
                alt='Religious Supplies'
                className='w-full md:w-1/2 h-full object-cover'
            />
            <div className='flex flex-col py-4 px-4 items-center justify-center gap-10 bg-[#FAF4EF] text-[#A47551] w-full md:w-1/2' ref={ref3}>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={inView3 ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 1.2 }}
                    className="flex flex-col items-center gap-10"
                >
                    <div ref={ref3}>
                        <h1 className='text-[36px] md:text-[48px] lg:text-[60px] font-gidugu z-20 text-center'>
                            Religious Supplies
                        </h1>
                        <p className='font-inknut text-[#A47551] text-justify text-[18px] text-base leading-loose w-[400px]'>
                            We create high-quality Chinese religious supplies, offering a range of products for spiritual practices. 
                            From incense and altars to ritual tools, our items are crafted with respect for tradition, 
                            ensuring authenticity and reverence for your religious needs.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>

  )
}

export default ProductDescription
