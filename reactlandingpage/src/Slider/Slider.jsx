import React, { useState, useEffect } from "react";
import styles from './Slider.module.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Great Quality Cocial Life",
      content: "Discover the world of possible university.",
      image: "./public/1.ddb463a076b58bbe0ea3.jpg"
    },
    {
      title: "Great Quality Cocial Life",
      content: "Discover the world of possible university.",
      image: "./public/slid.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
        >
          <div className={styles.slidecontent}>
            <h3>{slide.title}</h3>
            <h2>{slide.content}</h2>
            <button>Addmissions</button>
          </div>
          <img src={slide.image} alt={slide.title} />
        </div>
      ))}
      <div className={styles.slidernav}>
        <button className={styles.prev} onClick={handlePrev}>Prev</button>
        <button className={styles.next} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
