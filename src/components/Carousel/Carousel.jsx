import React from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ topSongs }) => {
    if(topSongs.length > 0){
        return (
            // TODO: for loop to get 3 - 5 images
            // TODO: onClick for left side div or icon
            // TODO: onClick for right side div or icon
            <div className={styles['carousel-container']} 
                style={{
                    backgroundImage: `url(${(topSongs[0].images.background)})`
                }}>
                <div className={styles['left-carousel-side']}>
                    <i className="fas fa-chevron-left fa-lg"></i>
                </div>
                <div className={styles['carousel-bottom']}>
                    I am the bottom
                </div>
                <div className={styles['right-carousel-side']}>
                    <i className="fas fa-chevron-right fa-lg"></i>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        ); 
    }
}

export default Carousel;