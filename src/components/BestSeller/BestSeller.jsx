import React, { useState } from 'react';
import './BestSeller.css';
import { imageUrls } from '../../assets/assets';

const BestSeller = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesToShow = 4; // Number of images to show at a time
    const [activeIndex, setActiveIndex] = useState(0);
    // Calculate the total number of slides
    const totalSlides = Math.ceil(imageUrls.length / imagesToShow);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            // num=prevIndex
            prevIndex + imagesToShow >= imageUrls.length ? 0 : prevIndex + imagesToShow

        );
        setActiveIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));

    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            // console.log(prevIndex,'prevslide')
            prevIndex === 0 ? imageUrls.length - imagesToShow : prevIndex - imagesToShow

        );
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1));
    };


    const goToSlide = (index) => {
        setCurrentIndex(index * imagesToShow);
        setActiveIndex(index);
    };

    const currentImages = imageUrls.slice(currentIndex, currentIndex + imagesToShow);

    return (
        <>

            <div className="heading">
                <hr className="hr-left" />
                <h2>Best Seller</h2>
                <hr className="hr-right" />
            </div>
            <div class="subheading">
                <p>Your Cosmetics and Skincare Products</p>
            </div>
            <div class="slideBtn">
                <button class="first">New Arrivals</button>
                <button class="second">Trending Now</button>
            </div>
            <div className="product-container">

                {currentImages.map((image, index) => (
                    <div className="product-card ">
                        <img src={image} alt={`product ${index + currentIndex}`} />
                        <div class="product-info">
                            <h3>MAC' Face Mask</h3>
                            <p>Rs. 5000/-</p>
                            <button>Buy Now</button>
                        </div>
                    </div>
                ))}

            </div>

            <div class="pagination">

                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)}>
                        <span className={`dot ${activeIndex === index ? 'active' : ''}`}></span>
                    </button>
                ))}

               

            </div>
            <div class="see-all">
                <button>See All</button>
            </div>

        </>


    );
};

export default BestSeller;
