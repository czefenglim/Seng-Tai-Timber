import React from 'react'

function CompanyBackground() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-[#FAF4EF]  gap-10 px-20 py-20'>
      <img src='/Seng-Tai-Timber/Seng Tai Images/Company-background.jpg' alt='Company background' className='rounded-md w-[700px] h-auto'/>
      <div className='flex flex-col py-2 px-2'>
        <h2 className='text-[24px] md:text-[36px] lg:text-[48px] font-gidugu text-[#A47551]'>
            Company Background
        </h2>
        <p className='font-inknut text-[#A47551] text-justify text-[18px] text-base leading-loose w-[400px]'>
            Founded in 1985, Seng Tai Timber is a trusted name in the timber industry with over 40 years of experience, 
            delivering quality timber solutions through expertise, reliability, and commitment to excellence in serving construction, 
            furniture, and custom project needs.
        </p>

      </div>
    </div>
  )
}

export default CompanyBackground
