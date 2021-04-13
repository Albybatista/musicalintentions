import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <div className={styles.NavBar}>
            <div className={styles["logo-container"]}>
              <div className={styles["logo-m"]}>M</div>
              <div className={styles["logo-i"]}>I</div>
            </div>
            <div className={styles["logo"]}>
              Musical Intentions
            </div>
            <div className={styles["nav-links-container"]}>
              <div>menu</div>
            </div>
        </div>
    );
};

export default NavBar;