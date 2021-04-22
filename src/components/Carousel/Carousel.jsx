import React, { useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ topSongs }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = topSongs.length;

    const slideLeft = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    };
    
    const slideRight = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    };

    if(topSongs.length > 0){
        return (
            <section className={styles['carousel-container']}>
                <div className={styles['left-carousel-side']} onClick={() => slideLeft()}>
                    <i className="fas fa-chevron-left fa-lg"></i>
                </div>
                <div className={styles['carousel-bottom']}>
                    <span className={styles['highlight']}></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles['right-carousel-side']} onClick={() => slideRight()}>
                    <i className="fas fa-chevron-right fa-lg"></i>
                </div>
                {topSongs.map((slide, index) => {
                    return (
                        <div className={(index === currentSlide) ? styles['slide-active'] : styles['slide']} key={index}>
                            {index === currentSlide && (
                                <img src={slide.images.background} alt="artist" className={styles['image']} />
                            )}
                        </div>
                    )
                })}
            </section>
        )
    } else {
        return (
            <div></div>
        ); 
    }
}

export default Carousel;