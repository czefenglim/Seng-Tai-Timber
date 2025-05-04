import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

function ProductFlipImages() {
    const bookRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        { label: "Chengai", image: "/Seng Tai Images/ChengalWood.jpg" },
        { label: "Kempas", image: "/Seng Tai Images/Kempas wood.jpg" },
        { label: "Meranti", image: "/Seng Tai Images/Meranti.jpg" },
        { label: "Sepetir", image: "/Seng Tai Images/Sepetir.jpg" }
    ];

    // Auto flip every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext();
        }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Update current page on flip
    const onFlip = (e) => {
        setCurrentPage(e.data);
    };

    return (
        <div className="flex flex-col px-4 py-10 gap-6 items-center bg-[#FAF4EF]">
            <img src='/Seng Tai Images/seng tai logo.png' alt='Logo' className="h-24 w-auto"/>
            <h2 className='text-[36px] md:text-[48px] lg:text-[60px] text-[#A47551] font-gidugu z-20 text-center'>TYPES OF WOOD</h2>
            <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
                {/* Dynamic Label */}
                <h2 className="text-2xl font-semibold mb-4 text-[#A47551]">
                    {pages[currentPage]?.label || ""}
                </h2>

                {/* Flip Book */}
                <HTMLFlipBook
                    width={600}
                    height={450}
                    showCover={true}
                    ref={bookRef}
                    className="shadow-xl"
                    onFlip={onFlip}
                >
                    {pages.map((page, index) => (
                    <div key={index} className="w-full h-full flex items-center justify-center bg-white">
                        <img
                        src={page.image}
                        alt={`Page ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                        />
                    </div>
                  
                  
                    ))}
                </HTMLFlipBook>
            </div>
        </div>
        
    );
}

export default ProductFlipImages
