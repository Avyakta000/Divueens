import React, { useEffect, useState } from 'react';
import { banner } from '../../assets/assets.js';

const Banner = () => {
    const [currentBannerSlideIndex, setCurrentBannerSlideIndex] = useState(0);
    const totalSlides = banner.length;

    const changeBannerSlide = (direction) => {
        const newIndex = (currentBannerSlideIndex + direction + totalSlides) % totalSlides;
        setCurrentBannerSlideIndex(newIndex);
    };

    useEffect(() => {
        const slides = document.querySelector('.ban_slides');
        const offset = -currentBannerSlideIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;

        const interval = setInterval(() => {
            changeBannerSlide(1);
        }, 3000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [currentBannerSlideIndex, totalSlides]);

    return (
        <>
            <h2 className='primary'>Welcome to Divueens</h2>
            <section className="banner">
                <div style={{ overflow: 'hidden', width: '-webkit-fill-available' }} className="ban_slider">
                    <div className="ban_slides" style={{ display: 'flex', transition: 'transform 0.5s ease-in-out' }}>
                        {banner.map((item, index) => (
                            <div key={index} className="ban_slide" style={{ minWidth: '100%' }}>
                                <div className="banner-image">
                                    <img src={item} alt={`Banner Slide ${index + 1}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="navigation">
                        <button className="prev" onClick={() => changeBannerSlide(-1)}>❮</button>
                        <button className="next" onClick={() => changeBannerSlide(1)}>❯</button>
                    </div> */}

                    {/* <div className="banner-button">
                    <button style={{
                        color: '#ffff',
                        backgroundColor: '#000',
                        borderRadius: '10px',
                        position: 'absolute',
                        bottom: '60%',
                        left: '20px',
                        padding: '.5rem 1rem'


                    }} id="banner-button">Join Now</button>
                </div> */}
                </div>
               
            </section>
        </>
    );
};

export default Banner;
