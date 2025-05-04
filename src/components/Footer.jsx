import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        
        <div className='grid grid-cols-2 pl-5 md:grid-cols-3 md:pl-20 justify-items-start bg-[#4C483D] pr-8  py-20 gap-x-8'>
    
            {/* Left Section */}
            <div className='flex flex-col justify-start w-1/3 text-[#F0D7BF]'>
                <img 
                    src='/Seng Tai Images/seng tai logo.png' 
                    alt='Footer Logo' 
                    className='w-[97px] h-[83px] md:w-[193px] md:h-[165px] mb-4'
                />
                <p className='w-[150px] md:w-[250px] text-sm text-justify'>
                    Lorem ipsum dolor sit amet consectetur. Elementum lacus convallis libero cras ut. Aenean at in odio vel lectus. 
                    Sagittis senectus pulvinar felis vel urna feugiat volutpat. Leo pretium odio ullamcorper gravida diam aenean adipiscing.
                </p>
                <p className='text-[#F0D7BF] py-10 w-[150px] md:w-[250px]'>
                    © 2025 Seng Tai Timber. All rights reserved | <span className='text-[#A47551]'>LimCraft Solutions</span>
                </p>
            </div>
    
            {/* Middle Section */}
            <div className='flex flex-col justify-start w-1/3 text-[#F0D7BF] px-20 gap-5'>
                <h2 className='font-inknut text-lg'>Contact Us</h2>
                <p className='text-sm w-[150px] md:w-[250px] '>
                    Jalan Kim Kee, Taman Sakeh, <br />
                    84000 Muar, Johor
                </p>
                <p className='text-sm w-[150px] md:w-[250px] '>
                    Email: abc@gmail.com <br />
                    Phone: 012-345-6789
                </p>
                <p className='text-sm w-[150px] md:w-[250px] '>
                    Opening Hours: <br />
                    Mon-Fri: 8am - 5pm <br />
                    Sat: 8am - 1pm
                </p>
            </div>
    
            {/* Right Section */}
            <div className='flex flex-col justify-start w-1/3 text-[#F0D7BF] gap-5'>
                <div>
                    <h2 className='font-inknut text-lg mb-2 w-[150px] md:w-[250px]'>Follow Us</h2>
                    <div className='flex gap-4 text-xl'>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    </div>
                </div>
    
                
                    <h2 className='font-inknut text-lg mb-2 w-[150px] md:w-[250px]'>
                        Site Map
                    </h2>
                    <ul className='text-sm'>
                        <Link to="/"><li>Home</li></Link> <br />
                        <Link to="/aboutus"><li>About Us</li></Link> <br />
                        <Link to="/products"><li>Products</li></Link> <br />
                        <Link to="/gallery"><li>Gallery</li></Link> <br />
                        <Link to="/contactus"><li>Contact Us</li></Link> <br />
                    </ul>
                
            </div>
    
        </div>

        
        
    )
  }

export default Footer
