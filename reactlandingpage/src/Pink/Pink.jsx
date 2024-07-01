import React from 'react'
import styles from './Pink.module.css'

const Pink = () => {
  return (
    <div class={styles.container}>
    <div class={styles.card}>
        <h2>Successfully Trained</h2>
        <p class={styles.number}>1478</p>
        <p class={styles.description}>Enrolled Learners</p>
    </div>
    <div class={styles.card}>
        <h2>Successfully Trained</h2>
        <p class={styles.number}>1731</p>
        <p class={styles.description}>Enrolled Learners</p>
    </div>
    <div class={styles.card}>
        <h2>Successfully Trained</h2>
        <p class={styles.number}>280</p>
        <p class={styles.description}>Enrolled Learners</p>
    </div>
    <div class={styles.card}>
        <h2>Successfully Trained</h2>
        <p class={styles.number}>1045</p>
        <p class={styles.description}>Enrolled Learners</p>
    </div>
</div>
  )
}

export default Pink
