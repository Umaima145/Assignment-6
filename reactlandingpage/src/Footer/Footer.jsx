import React from 'react'
import styles from './Footer.module.css' 

const Footer = () => {
  return (
    <footer class={styles.footer}>
    <div class={styles.footercontainer}>
      <div class={styles.footercolumn} className={styles.footerabout}>
        <h2 class={styles.footerlogo}>Echooling.</h2>
        <p>There are course and event custom post types so you can easily create and manage course, events.</p>
        <ul class={styles.footercontact}>
          <li>📞 (402) 762 441 83</li>
          <li>✉️ info@echooling.com</li>
        </ul>
      </div>
      <div class={styles.footercolumn}>
        <h3>About Us</h3>
        <ul class={styles.footerlinks}>
          <li><a href="#">About</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Become a Teacher</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class={styles.footercolumn}>
        <h3>Useful Links</h3>
        <ul class={styles.footerlinks}>
          <li><a href="#">Browse Library</a></li>
          <li><a href="#">Library</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">News & Blog</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Tutorials</a></li>
        </ul>
      </div>
      <div class={styles.footercolumn} className={styles.footernewsletter}>
        <h3>Newsletter</h3>
        <p>Get the latest Echooling news delivered to your inbox</p>
        <form class={styles.footerform}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">➔</button>
        </form>
      </div>
    </div>
    <div class={styles.footerbottom}>
      <p>© 2022 <span>Echooling.</span> All Rights Reserved</p>
      <div class={styles.footersocial}>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
