import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
const axios = require('axios');

function App() {
  const [userInput, setUserInput] = useState('');
  const [hits, setHits] = useState([]);
  
  const getGenius = async (userInput) => {
    try {
        const getApi = await axios.get(`http://localhost:3001/${userInput}`);
        const hits = getApi.data.response.hits; // an array of hits

        setHits(hits);
    } catch (err) {
        console.error(err.message);
    }
  };
  
  return (
    <div className="App">
      <NavBar />
      <MainPage
        getGenius={getGenius}
        hits={hits}
        setHits={setHits}
      />
      <SearchBar
        userInput={userInput}
        setUserInput={setUserInput}
        getGenius={getGenius}
      />
    </div>
  );
}

export default App;