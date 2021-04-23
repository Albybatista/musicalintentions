import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {

    return(
        <div className={styles['footer-container']}>
            <span className={styles['logo']}>
                Musical Intentions
            </span>
            <span className={styles['name']}>
                Alby Batista
            </span>
            <div className={styles['left-side-footer']}>
                <div className={styles['socials-links']}>
                    <a href='https://www.linkedin.com/in/albybatista'>
                        <i className='fab fa-linkedin fa-lg'></i>
                    </a>
                    <a href='https://www.github.com/albybatista'>
                        <i className='fab fa-github fa-lg'></i>
                    </a>
                    <a href='https://www.albybatista.com'>
                        <i className='fas fa-user-circle fa-lg'></i>
                    </a>
                </div>
            </div>
            <div className={styles['middle-divider']}>
            </div>
            <span className={styles['name']}>
                Noa Kim
            </span>
            <div className={styles['right-side-footer']}>
                <div className={styles['socials-links']}>
                    <a href='https://www.linkedin.com/in/noakim'>
                        <i className='fab fa-linkedin fa-lg'></i>
                    </a>
                    <a href='https://www.github.com/noanonoa/'>
                        <i className='fab fa-github fa-lg'></i>
                    </a>
                    <a href='https://www.noakim.io'>
                        <i className='fas fa-user-circle fa-lg'></i>
                    </a>
                </div>
            </div>
            <span className={styles['copyright']}>
                <i className="far fa-copyright"> Copyright 2021</i>
            </span>
        </div>
    )
}

export default Footer;