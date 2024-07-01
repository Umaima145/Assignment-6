import React, { useState } from "react";
import styles from './Navbar.module.css'

const Navbar = () => {
  const [navLinksActive, setNavLinksActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#">
          <img src="./public/download.png" alt="Logo"/>
        </a>
      </div>
      <div className={styles.navtoggle}>
        <button className={styles.togglebutton} onClick={() => setNavLinksActive(!navLinksActive)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`${styles.navlinks} ${navLinksActive ? styles.active : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className={styles.searchbox}>
          <input type="search" placeholder="Search Courses"/>
          <button type="submit">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;