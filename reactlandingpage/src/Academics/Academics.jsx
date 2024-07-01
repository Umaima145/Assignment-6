import React from "react";
import styles from './Academics.module.css';

const Academics =({heading})=>{
    
    return(
    <div className={styles.aca}>
          <h1 className={styles.head}>{heading}</h1>
          <img className={styles.img} src="green.png" alt="" />
      
    </div>



    )
}
export default Academics