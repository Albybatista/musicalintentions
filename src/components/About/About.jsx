import React from 'react';
import styles from './About.module.css';

const About = ({ renderAboutSection }) => {
        return (
            <div>
                <div className={styles['about-container']}>
                    <h2>About the Developers</h2>
                    <div>
                        <button onClick={() => renderAboutSection()} className={styles['back-button']}>Back</button>
                    </div>
                    <div className={styles['top']}>
                        <div className={styles['image']}>
                            Picture: Alby Batista
                        </div>
                        <section className={styles['text-section']}>
                            <p>Text: Alby Batista</p>
                                <p className={styles['socials-links']}>
                                    <a href='https://www.linkedin.com/in/albybatista'>
                                        <i className='fab fa-linkedin fa-lg'></i>
                                    </a>
                                    <a href='https://www.github.com/albybatista'>
                                        <i className='fab fa-github fa-lg'></i>
                                    </a>
                                    <a href='https://www.albybatista.com'>
                                        <i className='fas fa-user-circle fa-lg'></i>
                                    </a>
                                </p>
                        </section>
                    </div>
                    <span className={styles['divider']}>
                    </span>
                    <div className={styles['bottom']}>
                        <section className={styles['text-section']}>
                            <p>Text: Noa Kim</p>
                                <p className={styles['socials-links']}>
                                    <a href='https://www.linkedin.com/in/noakim'>
                                        <i className='fab fa-linkedin fa-lg'></i>
                                    </a>
                                    <a href='https://www.github.com/noanonoa/'>
                                        <i className='fab fa-github fa-lg'></i>
                                    </a>
                                    <a href='https://www.noakim.io'>
                                        <i className='fas fa-user-circle fa-lg'></i>
                                    </a>
                                </p>
                        </section>
                        <div className={styles['image']}>
                            Picture: Noa Kim
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default About;
