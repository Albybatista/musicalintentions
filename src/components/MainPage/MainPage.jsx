import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.css';
const axios = require('axios');

const MainPage = ({ getGenius, hits }) => {
    const [userInput, setUserInput] = useState('');
    const [topSongs, setTopSongs] = useState([]);

    const renderHits = hits.map((hit, idx) => {
        return (
            <div key={idx}>
                {hit.result.title}
            </div>
        );
    })
    const renderTopSongs = topSongs.map((song, idx) => {
        return (
            <div key={idx}>
                <div>
                    {song.title}
                </div>
                <div className={styles['get-artist']} onClick={() => getGenius(song.subtitle)}>
                    {song.subtitle}
                </div>
            </div>
        )
    })

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
            {renderHits}
        </div>
        );
    }
    // render main page
    else {
        return (
            <div className={styles.MainPage}>
                <label htmlFor="search">artist or song:</label>
                <input id="search" type="text" name="search" onChange={(e) => setUserInput(e.target.value)}/>
                <button onClick={() => getGenius(userInput)}>search</button>
                <div>
                    {renderTopSongs}
                </div>
            </div>
        );
    }
}

export default MainPage;