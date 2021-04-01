import React, { Fragment, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
    const [artist, setArtist] = useState("");
    const [songTitle, setSongTitle] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [apiDetails, setApiDetails] = useState("");

   
    const getLyrics = async (artist, songTitle) => {
        try {
            const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`);
            const apiLyrics = response.data.lyrics;
            setLyrics(apiLyrics);
        } catch(err) {
            console.error(err.message);
        }
    }

    // SHAZAM API CALL -- AXIOS
    const shazamApiDetails = async () => {
        let responseMap = {
            "artist": "",
            "song": "",
            "image": "",
            "shazam": "",
            "apple_music_audio": "",
        };
        
        const API_KEY = process.env.REACT_APP_MUSICAL_INTENTIONS_API_KEY;
        let userTermInput = "michael jackson thriller";

        const shazamApiCall = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: `${userTermInput}`, locale: 'en-US', offset: '0', limit: '5' },
            headers: {
                'x-rapidapi-key': `${API_KEY}`,
                'x-rapidapi-host':'shazam.p.rapidapi.com'
            }
        };

        await axios.request(shazamApiCall)
        .then(function (response) {
            let allHits = response.data.tracks.hits;
            
            console.log(allHits);
            for(let i = 0; i < allHits.length; i++) {
                let artistName = allHits[i].track.subtitle;
                let trackTitle = allHits[i].track.title;
                if("thriller".toUpperCase() == trackTitle.toUpperCase()) {
                    let trackImage = allHits[i].track.images.coverarthq;
                    let shazamLink = allHits[i].track.url;
                    let appleMusicAudio = allHits[i].track.hub.actions[1].uri;

                    responseMap.artist = artistName;
                    responseMap.song = trackTitle;
                    responseMap.image = trackImage;
                    responseMap.shazam = shazamLink;
                    responseMap.apple_music_audio = appleMusicAudio;
                }
            }
        })       
        .catch(function (error) {
            console.error(error);
        });
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
            <div>
                <h1>More Details</h1>
                <label>
                    Shazam Artist Name:
                </label>
                <input type="text"/>
                <label>
                    Shazam Song Title Name:
                </label>
                <input type="text"/>
                <p id="moreDetails">{apiDetails}</p>
                <button onClick={() => shazamApiDetails()}>Search</button>
            </div>

        </Fragment>
    )
}

export default MainPage;