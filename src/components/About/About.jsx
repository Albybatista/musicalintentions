import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div>
            <div className={styles['about-container']}>
                <div className={styles['top']}>
                    <div className={styles['image']}>
                        Picture: Alby Batista
                    </div>
                    <section className={styles['text-section']}>
                        Text: Alby Batista
                    </section>
                </div>
                <div className={styles['bottom']}>
                    <section className={styles['text-section']}>
                        Text: Noa Kim
                    </section>
                    <div className={styles['image']}>
                        Picture: Noa Kim
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
