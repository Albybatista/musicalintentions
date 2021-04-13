const express = require('express');
const app = express();
const cors = require('cors');
const { default:axios }

app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {
    let api = {
        url: "https://api.genius.com/",
        endpoint: "artists/",
        artistId: "16775"
    };

    try {
        
        
    } catch(err) {
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});