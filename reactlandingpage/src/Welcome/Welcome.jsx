import React from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (

    <div className={styles.wrapper}>
        
      <img className={styles.men} src="ab.fcda2469b98ffc37a148.png" alt="" />
      <div className={styles.text}>
    <br />
        <h1>Welcome to</h1>
        <h1 className={styles.span}>Schooling LMS Platform</h1>
        <br />
        <br />
        <p>Education is both the act of teaching knowledge to others and the act of receiving knowledge from someone else.</p>
        <br />
        <br />
        <p>Have questions? <a href="#">Get Free Guide</a></p>
        <br />
        <br /><br />
        <div>
          <p>Education also refers to the knowledge received through schooling instruction and to the institution of teaching as a whole. The main purpose of education is the integral development of a person.</p>
        </div>
        <button>Read More</button>
        <img className={styles.mess} src="./public/mess.png" alt=""  /><a className={styles.supp} href="#">support@react.com</a>
      </div>
    </div>
  );
}

export default Welcome;
