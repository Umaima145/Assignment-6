import React from 'react'
import styles from './Card.module.css';



const Card = () => {
  return (
    <div class={styles.container}>
        <div class={styles.card}>
            <img src="./public/2.ec9d013b7d4f44fa4112.png" alt="Course 1"/>
            <div class={styles.cardcontent}>
                <p>UX Design &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 5 Lessons</p>
                <h3>Dave conservatoire is the Entirely free online</h3>
                <br />
                <div class={styles.details}>
                   <span class={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                    <span class={styles.price}>$72.00</span>
                </div>
                
                <p className={styles.blue}>56 Students</p>
            </div>
        </div>
        <div class={styles.card}>
            <img src="./public/4.1e8ed20eff0c42a15afb.png" alt="Course 2"/>
            <div class={styles.cardcontent}>
                <p>UX Design &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 4 Lessons</p>
                <h3>Strategy law and Organization foundation</h3>
                <br />
                <div class={styles.details}>
                <span class={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>

                    <span class={styles.price}>$68.00</span>
                </div>
                <p className={styles.blue}>77 Students</p>
                
            </div>
        </div>
        <div class={styles.card}>
            <img src="./public/3.2f7b3c10359c070cae98.png" alt="Course 3"/>
            <div class={styles.cardcontent}>
                <p>UX Design &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 4 Lessons</p>
                <h3>Python for Data Science & Machine Learning</h3>
                <br />
                <div class={styles.details}>
                <span class={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                    <span class={styles.price}>$68.00</span>
                </div>
                <p className={styles.blue}>77 Students</p>
              
            </div>
        </div>
        <div class={styles.card}>
            <img src="./public/2.0f4fbbe4e32c8eec212e (1).png" alt="Course 4"/>
            <div class={styles.cardcontent}>
                
                
                <p>UX Design &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • 4 Lessons</p>
                <h3>The complete web development bootcamp.</h3>
                <br />
                <div class={styles.details}>
                <span class={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>

                    <span class={styles.price}>$68.00</span>
                </div>
                <p className={styles.blue}>77 Students</p>
                
            </div>
        </div>
       
       
    </div>
  )
}

export default Card
