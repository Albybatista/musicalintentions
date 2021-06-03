const express = require('express');
const app = express();
const cors = require('cors');
const { default: axios } = require('axios');
const port = 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

// routes
app.get('/:name', async (req, res) => {
  const { name } = req.params;
  
  const api = {
    url: "https://api.genius.com/",
    endpoint: "search?q=",
    artistName: name, // Sia
    key: process.env.GENIUS_API
  };

  try {
    const searchByArtist = await axios.get(api.url+api.endpoint+api.artistName, {
      headers: {
        "Authorization": `Bearer ${api.key}`
      }
    })
    const artistData = searchByArtist.data;
    res.json(artistData);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/charts/track', async (req, res) => {
  const api = {
    url: "https://shazam.p.rapidapi.com",
    endpoint: "/charts/track",
    key: process.env.SHAZAM_API
  };

  try {
    const searchTopTracks = await axios.get(api.url+api.endpoint, {
      headers: {
        "x-rapidapi-key": api.key,
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "useQueryString": true
      }
    })
    const topTracksData = searchTopTracks.data;
    res.json(topTracksData.tracks);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});