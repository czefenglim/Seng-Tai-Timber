import React from 'react'
import { PackageCheck, HandCoins, ClockArrowDown } from "lucide-react";

function Quality() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full bg-[#A47551]' >
        <div className="flex flex-col justify-center items-center px-2 py-6 w-1/3">
            <PackageCheck size={100} className='text-[#F0D7BF] py-3'/>
            <h3 className='font-bold text-[22px] text-[#F0D7BF]'>QUALITY EXPERTISE & CARE</h3>
            <p className=' text-[20px] text-justify text-[#F0D7BF] py-3 w-[300px]'>
                Meticulous craftsmanship backed by years of expertise ensures exceptional quality and lasting performance.
            </p>
        </div>
        <div className="flex flex-col justify-center items-center px-2 py-6 w-1/3">
            <HandCoins size={100} className='text-[#F0D7BF] py-3'/>
            <h3 className='font-bold text-[22px] text-[#F0D7BF]'>VALUABLE PRODUCTS</h3>
            <p className=' text-[20px] text-justify text-[#F0D7BF] py-3 w-[300px]'>
                Competitive pricing without compromising quality—offering excellent value for your investment.
            </p>
        </div>
        <div className="flex flex-col justify-center items-center px-2 py-6 w-1/3">
            <ClockArrowDown size={100} className="text-[#F0D7BF] py-3" />
            <h3 className='font-bold text-[22px] text-[#F0D7BF]'>RELIABLE LEAD TIME</h3>
            <p className=' text-[20px] text-justify text-[#F0D7BF] py-3 w-[300px]'>
                We deliver on schedule with consistent and reliable timelines, ensuring no costly delays in your project."
            </p>
        </div>
    </div>
  )
}

export default Quality
