'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/ReadingProgress.module.css';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const article = document.querySelector('article');
      if (!article) return;

      const windowHeight = window.innerHeight;
      const articleHeight = article.offsetHeight;
      const scrollTop = window.scrollY;
      const scrollHeight = articleHeight - windowHeight;
      
      if (scrollHeight <= 0) {
        setProgress(100);
        return;
      }

      const currentProgress = (scrollTop / scrollHeight) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    // Calcul initial
    calculateProgress();

    // Mise à jour lors du scroll
    window.addEventListener('scroll', calculateProgress);
    // Mise à jour lors du redimensionnement
    window.addEventListener('resize', calculateProgress);

    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
}
