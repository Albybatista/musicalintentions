import React from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.MainPage}>
            <div>
                <label htmlFor="search">artist or song:</label>
                <input id="search" type="text" name="search" />
                <button>search</button>
            </div>
        </div>
    );
}

export default MainPage;