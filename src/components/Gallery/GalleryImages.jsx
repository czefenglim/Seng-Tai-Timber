// import React from 'react'

// function GalleryImages() {
//   return (
//     <div className='flex flex-col gap-3 bg-[#FAF4EF] items-center justify-center py-10 px-4'>
//       <img src='/Seng Tai Images/seng tai logo.png' alt='Logo' className="h-24 w-auto" />
//       <h2 className='text-[36px] md:text-[48px] lg:text-[60px] text-[#A47551] font-gidugu z-20 text-center'>OUR CLIENTS</h2>
      
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//         {[
//           'ChengalWood.jpg',
//           'Sepetir.jpg',
//           'Kempas wood.jpg',
//           'Company-background.jpg',
//           'Welcome 1.jpg',
//           'religious-supply1.jpg',
//           'raw-material.jpg',
//           'polished-woods.jpg',
//           'OurClients.jpg'
//         ].map((file, index) => (
//           <img
//             key={index}
//             src={`/Seng Tai Images/${file}`}
//             alt={`Gallery ${index}`}
//             className='w-[300px] h-[200px] object-cover rounded-md shadow-sm'
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default GalleryImages

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react' // or use your preferred icon lib

const imageFiles = [
  'ChengalWood.jpg',
  'Sepetir.jpg',
  'Kempas wood.jpg',
  'Company-background.jpg',
  'Welcome 1.jpg',
  'religious-supply1.jpg',
  'raw-material.jpg',
  'polished-woods.jpg',
  'OurClients.jpg'
]

function GalleryImages() {
  const navigate = useNavigate()

  const handleClick = (index) => {
    navigate(`/carousel/${index}`)
  }

  return (
    <div className='flex flex-col gap-3 bg-[#FAF4EF] items-center justify-center py-10 px-4'>
      <img src='/Seng Tai Images/seng tai logo.png' alt='Logo' className="h-24 w-auto" />
      <h2 className='text-[36px] md:text-[48px] lg:text-[60px] text-[#A47551] font-gidugu z-20 text-center'>OUR CLIENTS</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {imageFiles.map((file, index) => (
          <div key={index} className='relative group w-[300px] h-[200px] rounded-md overflow-hidden shadow-sm'>
            <img
              src={`/Seng Tai Images/${file}`}
              alt={`Gallery ${index}`}
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <button
              onClick={() => handleClick(index)}
              className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300'
            >
              <Search className='text-white w-10 h-10' />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryImages
