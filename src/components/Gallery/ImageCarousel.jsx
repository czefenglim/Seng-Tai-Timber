import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { X } from 'lucide-react'

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

function ImageCarousel() {
  const { index } = useParams()
  const navigate = useNavigate()
  const startIndex = parseInt(index, 10) || 0

  return (
    <div className='w-screen h-screen bg-black relative'>
      {/* Close Button */}
      <button
        onClick={() => navigate(-1)}
        className='absolute top-5 right-5 z-50 bg-white rounded-full p-2 shadow-md'
      >
        <X className='w-6 h-6 text-black' />
      </button>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        initialSlide={startIndex}
        className='w-full h-full'
      >
        {imageFiles.map((file, idx) => (
          <SwiperSlide key={idx}>
            <div className='flex items-center justify-center h-full'>
              <img
                src={`/Seng Tai Images/${file}`}
                alt={`Slide ${idx}`}
                className='max-w-[90%] max-h-[90%] object-contain'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageCarousel
