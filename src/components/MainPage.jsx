import React, { Fragment, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
    const [artist, setArtist] = useState("");
    const [songTitle, setSongTitle] = useState("");
    const [lyrics, setLyrics] = useState("");

   
    const getLyrics = async (artist, songTitle) => {
        try {
            const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`);
            const apiLyrics = response.data.lyrics;
            setLyrics(apiLyrics);
        } catch(err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <div>
                <h1>Musical Intentions</h1>
                <label>
                    Artist: 
                </label>
                    <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)}/>
                <label>
                    Song Title: 
                </label>
                    <input type="text" value={songTitle} onChange={(e) => setSongTitle(e.target.value)}/>
                <button onClick={() => getLyrics(artist, songTitle)}>Search</button>
                <h2>Lyrics</h2>
                <p id="lyrics">{lyrics}</p>
            </div>
        </Fragment>
    )
}

export default MainPage;
