import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
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
            <div className={styles["nav-links-container"]}>
              <i className="fas fa-search"></i>
            </div>
        </div>
    );
};

export default NavBar;