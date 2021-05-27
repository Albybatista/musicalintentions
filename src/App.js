import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Hits from './components/Hits/Hits';
const axios = require('axios');

const routes = [
  {
    Component: MainPage,
    key: 'MainPage',
    path: '/main'
  },
  {
    Component: SearchBar,
    key: 'Search',
    path: '/search'
  },
  {
    Component: Hits,
    key: 'Hits',
    path: '/hits'
  },
  {
    Component: About,
    key: 'About',
    path: '/about'
  }
]

function App() {
  const [userInput, setUserInput] = useState('');
  const [hits, setHits] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);
  const [aboutToggle, setAboutToggle] = useState(false);
  
  const getGenius = async (userInput) => {
    try {
        const getApi = await axios.get(`http://localhost:3001/${userInput}`);
        const hits = getApi.data.response.hits; // an array of hits
        setHits(hits);
        scrollToTop();
    } catch (err) {
        console.error(err.message);
    }
  };
  
  const handleSearchBar = () => {
    setSearchToggle(searchToggle ? false : true);
  };

  const renderAboutSection = () => {
    setAboutToggle(aboutToggle ? false : true);
    scrollToTop();
    if(hits) {
      setHits([]);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          {
            routes.map(({Component, key, path}) => {
              return (
                <Route
                  key={key}
                  path={path}
                  component={() => <Component page={key} />}
                  />
              )
            })
          }
        </Switch>
      </Router>
      <NavBar
        handleSearchBar={handleSearchBar}
        searchToggle={searchToggle}
      />
      <MainPage
        getGenius={getGenius}
        hits={hits}
        setHits={setHits}
        aboutToggle={aboutToggle}
        renderAboutSection={renderAboutSection}
      />
      <SearchBar
        userInput={userInput}
        setUserInput={setUserInput}
        getGenius={getGenius}
        searchToggle={searchToggle}
      />
    </div>
  );
}

export default App;