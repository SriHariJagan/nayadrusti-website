import React from 'react';
import styles from './stories.module.css';
import { ArrowRight } from 'lucide-react';

const StoryCard = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
          <img src={image} alt="Story" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <button className={styles.button}>
          Project details <ArrowRight size={16} className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
