import React from 'react'
import styles from './SearchBar.module.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SearchBar({ userInput, setUserInput, getGenius, searchToggle, handleInput }) {

  if (searchToggle) {
    return (
      <div className={styles['SearchBar']}>
        <label htmlFor="search">artist or song:</label>
        <input id="search" type="text" name="search" onChange={(e) => setUserInput(e.target.value)} />
        <Router>
          <Link to='/search'>
            <button onClick={() => getGenius(userInput)}>search</button>
          </Link>
        </Router>
      </div>
    )
  } else return null;
};

export default SearchBar;