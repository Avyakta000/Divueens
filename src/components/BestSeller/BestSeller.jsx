import React, { useState } from 'react';
import './BestSeller.css';
import { imageUrls } from '../../assets/assets';

const BestSeller = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesToShow = 4; // Number of images to show at a time

    var num;
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            // num=prevIndex
          prevIndex + imagesToShow >= imageUrls.length ? 0 : prevIndex + imagesToShow
        
    );
    console.log(num,'nextslide')
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        // console.log(prevIndex,'prevslide')
            prevIndex === 0 ? imageUrls.length - imagesToShow : prevIndex - imagesToShow
        
        );
    };

    const currentImages = imageUrls.slice(currentIndex, currentIndex + imagesToShow);

    return (
        <div className="slider">
            <button className="left-arrow" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="slider-content">
                {currentImages.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`product ${index + currentIndex}`} />
                    </div>
                ))}
            </div>
            <button className="right-arrow" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default BestSeller;
