import React, { useEffect, useState } from 'react'
// import './banner.js'
import { banner } from '../../assets/assets.js'


const Banner = () => {
    // console.log(banner, 'banner')
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const totalSlides = 4; // Update this according to the number of slides you have

    const changeSlide = (direction) => {
        const newIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
        setCurrentSlideIndex(newIndex);
    };

    const currentSlide = (index) => {
        setCurrentSlideIndex(index);
    };

    const updateSlidePosition = () => {
        const slides = document.querySelector('.slides');
        const offset = -currentSlideIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
        // updateDots();
    };

    // const updateDots = () => {
    //     const dots = document.querySelectorAll('.dot');
    //     dots.forEach(dot => dot.classList.remove('active'));
    //     dots[currentSlideIndex].classList.add('active');
    // };

    useEffect(() => {

        const interval = setInterval(() => {
            changeSlide(1); // Move to the next slide
        }, 3000); // Change slide every 3 seconds
        updateSlidePosition();

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [currentSlideIndex]); // Add currentSlideIndex as a dependency


    return (
        <>
            <h2 className='primary'> Welcome to Divueens</h2>
            <section className="banner">
                <div className="slider">
                    <div className="slides">
                        {/* Slide 1 */}

                        {
                            banner.map((item, index) => (
                                <div key={index} className="slide">
                                    <div className="banner-image">
                                    <img src={item} alt="Beauty Combo 1" />
                                    </div>
                                  
                                
                                    {/* <div className='main' style={{
                                        backgroundImage: `url(${item})`
                                    }}>
                                        </div> */}
                                        {/* <p style={{ marginLeft: '20px' }}>Beauty Combo<br />Rs. 12000/-</p>
                                    <button onClick={() => buyNow('Beauty Combos', 6000)} style={{ marginLeft: '50px', marginBottom: '10px' }}>Buy Now</button> */}
                                </div>

                            ))
                        }
         

                        {/* end slide */}

                    </div>
                    <div className="navigation">
                        <button className="prev" onClick={() => changeSlide(-1)}>❮</button>
                        <button className="next" onClick={() => changeSlide(1)}>❯</button>
                    </div>
                    <div className="banner-button">
            <button style={{
                color:'#ffff',
                backgroundColor:'#000',
                borderRadius:'10px',
                position:'absolute',
                bottom:'60px',
                left:'30px',
                padding:'.5rem 1rem'


            }} id="banner-button">Join Now</button>
            </div>
                </div>
            </section>

        </>
    )
}
 export default Banner