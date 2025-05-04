import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navbar() {

  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <nav className="bg-transparent h-24 px-6 py-4 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Logo*/}
            <div className="items-center pl-[100px]">
                <img src="/Seng-Tai-Timber/Seng Tai Images/seng tai logo.png" alt="Seng Tai Logo" className="h-24 w-auto object-contain" />
            </div>

            {/* Right: Navigation Links */}
            
            <ul className="hidden md:flex gap-12">
                <li  className="hover:text-blue-500 text-white font-bold"><Link to="/">Home</Link></li>
                <li  className="hover:text-blue-500 text-white font-bold"><Link to="/about">About Us</Link></li>
                <li  className="hover:text-blue-500 text-white font-bold"><Link to="/products">Products</Link></li>
                <li  className="hover:text-blue-500 text-white font-bold"><Link to="/gallery">Gallery</Link></li>
                <li  className="hover:text-blue-500 text-white font-bold"><Link to="/contactus">Contact Us</Link></li>
            </ul>
    
            
            <div onClick={handleNav} className = "block md:hidden">
                {!nav ? <AiOutlineClose size={20} className='text-[#EDD3B6]'/> : <AiOutlineMenu size={20} className='text-[#EDD3B6]'/> }    
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#A47551] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className="items-center pl-5">
                    <img src="/Seng Tai Images/seng tai logo.png" alt="Seng Tai Logo" className="h-12 w-12 object-contain" />
                </div>
                <ul className="pt-24 uppercase">
                    <li  className="hover:text-blue-500 py-6 pl-4 border-b"><Link to="/">Home</Link></li>
                    <li  className="hover:text-blue-500 py-6 pl-4 border-b"><Link to="/about">About Us</Link></li>
                    <li  className="hover:text-blue-500 py-6 pl-4 border-b"><Link to="/products">Products</Link></li>
                    <li  className="hover:text-blue-500 py-6 pl-4 border-b"><Link to="/gallery">Gallery</Link></li>
                    <li  className="hover:text-blue-500 py-6 pl-4 border-b"><Link to="/contactus">Contact Us</Link></li>
                </ul>
            </div>
            

        </div>
    </nav>
  )
}

export default Navbar
