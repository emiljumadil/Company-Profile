"use client"

import React, { useState, useEffect } from 'react';

const Layer: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        'https://abffreightsolution.com/wp-content/uploads/2023/10/Slider-Image.jpg',
        'https://abffreightsolution.com/wp-content/uploads/2023/10/Sea-Freight-Slider.jpg',
        'https://abffreightsolution.com/wp-content/uploads/2023/10/Land-Freight-Slider.jpg',
    ];

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="relative w-full h-64 cursor-pointer fixed inset-0 cursor-pointer h-[463px]" onClick={handleNextImage}>
            <img
                src={images[currentImage]}
                alt={`Gambar ${currentImage + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl flex flex-col space-y-4">
                <h1 className='font-semibold text-5xl'>Your One Stop <a className="text-[#109cc7]"> Logistics Solutions </a></h1>
                <p>We are ypur comprehensive logistics Partner.
                    We provide end-to-end solution for all your freight and logistics needs.
                </p>
            </div>
        </div>
    );
};

export default Layer;
