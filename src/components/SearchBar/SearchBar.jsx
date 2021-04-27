import React from 'react'
import styles from './SearchBar.module.css'

function SearchBar({ userInput, setUserInput, getGenius, searchToggle, handleInput }) {

  if (searchToggle) {
    return (
      <div className={styles['SearchBar']}>
        <label htmlFor="search">artist or song:</label>
        <input id="search" type="text" name="search" onChange={(e) => handleInput(e)}/>
        <button onClick={() => getGenius(userInput)}>search</button>
      </div>
    )
  } else return null;
};

export default SearchBar;