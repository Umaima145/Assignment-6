import React from 'react'
import style from '../Academics/Academics.module.css';
import styles from './What.module.css';


const What = () => {
  return (
    <div className={styles.cen}>
     < h1 className={style.head}>What our student saying</h1>
          <img className={style.img} src="green.png" alt="" />

          <div class={styles.testimonialcontainer}>
    <div class={styles.testimonialcard}>
      <img src="./public/testimonial.b4a97b69f2bf8c02fc4f.png" alt="User Image" class={styles.testimonialimage} />
      <div class={styles.testimonialcontent}>
        <h3>Justin Case</h3>
        <p class={styles.role}>Student</p>
        <br /><br /><br />
        <p class={styles.testimonialtext}>Nulla porttitor accumsan tincidunt. Vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.</p>
        <br /><br />
        <div class={styles.rating}>
          <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span>4.9 (14 Reviews)</span>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default What
