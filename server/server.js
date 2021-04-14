const express = require('express');
const app = express();
const cors = require('cors');
const { default: axios } = require('axios');
const port = 3001;
require('dotenv').config();

app.use(cors());
app.use(express.json());

// routes
app.get('/artists/:name', async (req, res) => {
  const { name } = req.params;
  
  let api = {
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
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})