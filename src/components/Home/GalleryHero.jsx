import { link } from 'framer-motion/client';
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const carouselData = [
    {
        image: '/Seng Tai Images/Welcome 1.jpg',
        title: 'Sustainability Meets Strength',
        description: 'Crafted timber for modern living spaces. Responsibly sourced.',
        buttonText: 'Read More About Us',
        link: '/aboutus'
    },
    {
        image: '/Seng Tai Images/Wood image Seng Tai 2.jpg',
        title: 'Beauty in Every Grain',
        description: 'Elevate your furniture with natural elegance.',
        buttonText: 'View Products',
        link: '/products'
    },
    {
        image: '/Seng Tai Images/header Seng Tai.jpg',
        title: 'Precision and Quality',
        description: 'Built for durability, designed for beauty.',
        buttonText: 'Contact Us',
        link: '/contactus'
    }
];

function GalleryHero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
    };

    const { image, title, description, buttonText, link } = carouselData[currentIndex];

  return (
    <div className='flex flex-col items-center justify-center bg-color[#FAF4EF] '>
        <h2 className='text-[40px] md:text-[64px] text-[#3E2723] text-center font-gidugu px-10 py-6'>
            Gallery
        </h2>
        <h3 className='text-[15px] md:text-[25px] text-[#3E2723] text-center font-inknut px-10 py-3'>
            At Seng Tai Timber, our final objective is: Quality, Service, and WholeSale! 
        </h3>
        <div className="relative w-full flex items-center justify-center py-10">
            <div className="flex flex-col md:flex-row items-center max-w-6xl">
            
                {/* Image */}
                <div className="w-[600px] h-[450px] overflow-hidden shadow-lg">
                    <img 
                        src={image} 
                        alt="carousel" 
                        className="w-full h-full object-cover transition-all duration-500" 
                    />
                </div>

                {/* Dark Rectangle */}
                <div className="bg-[#4C483D] text-[#F0D7BF] p-8  flex flex-col justify-center items-center w-[600px] h-[450px] shadow-lg">
                    <h2 className="text-2xl font-inknut mb-4">{title}</h2>
                    <p className="text-lg mb-6">{description}</p>
                    <Link to={link}>
                        <button className="bg-[#8D6E63] text-[#FFFFFF] px-4 py-2 text-lg font-semibold font-imbue w-fit">
                            {buttonText}
                        </button>
                    </Link>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2"> 
                <button 
                    onClick={prevSlide} 
                    className="text-[150x] md: text-[30px] text-black bg-[#A47551] rounded-full w-12 h-12 flex items-center justify-center"
                    >
                    <FaChevronLeft />
                </button>
            </div>
            <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
                <button 
                    onClick={nextSlide} 
                    className="text-[150x] md: text-[30px] text-black bg-[#A47551] rounded-full w-12 h-12 flex items-center justify-center"
                    >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default GalleryHero
