import React from 'react';
import styles from './NavBar.module.css';

function NavBar({ searchToggle, handleSearchBar }) {
    return (
        <div className={styles.NavBar}>
          <div className={styles['logo-container']}>
            <div className={styles["logo-icon"]}>
              <div className={styles["logo-m"]}>M</div>
              <div className={styles["logo-i"]}>I</div>
            </div>
            <div className={styles["logo-header"]}>
              Musical Intentions
            </div>
          </div>
            {searchToggle === true && (
              <div className={styles['nav-search-container']} onClick={() => handleSearchBar()}>
                <i className="fas fa-times"></i>
              </div>
            )}
            {searchToggle === false && (
              <div className={styles['nav-search-container']} onClick={() => handleSearchBar()}>
                <i className="fas fa-search"></i>
              </div>
            )}
        </div>
    );
};

export default NavBar;