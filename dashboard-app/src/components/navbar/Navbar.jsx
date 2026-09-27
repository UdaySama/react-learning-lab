import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.search}>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.profile}>Hello, Admin</div>
    </header>
  );
}