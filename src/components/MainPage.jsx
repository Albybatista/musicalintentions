import React, { Fragment, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
    const [songTitle, setSongTitle] = useState("");
    const [artist, setArtist] = useState("");

    const getLyrics = async (e) => {
        e.preventDefault();
        let artist = "Coldplay";
        let songTitle = "Adventure of a Lifetime";
        try {
            await axios.get(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`).then((response) => {
                console.log(response.data);
            })
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
            <input type="text" value={artist} onChange={(e) => setArtist(e.value.target)}/>
            <label>
                Song Title: 
            </label>
            <input type="text" value={songTitle} onChange={(e) => setSongTitle(e.value.target)}/>
                <button onClick={getLyrics}>Search</button>
        </div>
        </Fragment>
    )
}

export default MainPage;
