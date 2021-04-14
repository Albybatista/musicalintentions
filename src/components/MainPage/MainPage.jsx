import React, { useState } from 'react';
import getGenius from '../../utils/getGenius';
import styles from './MainPage.module.css';

const MainPage = () => {
    const [userInput, setUserInput] = useState('');

    return (
        <div className={styles.MainPage}>
            <div>
                <label htmlFor="search">artist or song:</label>
                <input id="search" type="text" name="search" onChange={(e) => setUserInput(e.target.value)}/>
                <button onClick={() => getGenius(userInput)}>search</button>
            </div>
        </div>
    );
}

export default MainPage;