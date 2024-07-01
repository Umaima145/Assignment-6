import React from 'react'
import styles from './CardAca.module.css';


const CardAca = ({title,imageUrl}) => {
  return (
    <div className={styles.in}>
        <div className={styles.bg}
       style={{backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), transparent), url(${imageUrl})`}}

         >
            <div className={styles.nam}>
            <h1 className={styles.talk}>{title}</h1>
            <p className={styles.tal}>Learn More <svg className={styles.sv} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></p>
            </div>
        </div>
      
    </div>
  )
}

export default CardAca
