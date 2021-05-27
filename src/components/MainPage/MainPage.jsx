import React, { useEffect, useState } from 'react';
import Hits from '../Hits/Hits';
import styles from './MainPage.module.css';
import TopSongs from '../Charts/TopSongs';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import About from '../About/About';
const axios = require('axios');

const MainPage = ({ getGenius, hits, setHits, aboutToggle, renderAboutSection }) => {
    const [topSongs, setTopSongs] = useState([]);

    // to display top songs on first render
    useEffect(() => {
        const getShazam = async () => {
            try {
                const getTopCharts = await axios.get(`http://localhost:3001/charts/track`);
                const topCharts = getTopCharts.data;

                setTopSongs(topCharts);
            } catch (err) {
                console.error(err.message);
            }
        }

        getShazam();
    }, []);

    // render hits
    if (hits.length > 0) {
        return (
            <div className={styles.MainPage}>
            <Hits
                hits={hits}
                setHits={setHits}
                renderAboutSection={renderAboutSection}
            />
        </div>
        );
    }
    //render about
    else if (aboutToggle){
        return (
            <div>
            <About
                renderAboutSection={renderAboutSection}
            />
            </div>
        )
    }
    // render main page
    else {
        return (
            <div className={styles.MainPage}>
                <Carousel
                    topSongs={topSongs}
                />
                <TopSongs
                    topSongs={topSongs}
                    getGenius={getGenius}
                />
                <Footer 
                    renderAboutSection={renderAboutSection}
                    aboutToggle={aboutToggle}
                />
            </div>
        );
    }
}

export default MainPage;