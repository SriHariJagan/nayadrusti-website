import React from 'react';
import styles from './stories.module.css';
import StoryCard from './StoryCard';

const Stories = () => {
  const stories = [
    {
      title: 'GAMP4-Compliant Software to Automate Cancer & TPN Drugs Manufacturing',
      image: 'https://wallpapercave.com/uwp/uwp4794860.jpeg',
    },
    {
      title: 'Custom Software for End-to-End Loan Management Automation',
      image: 'https://wallpapercave.com/wp/wp13766511.png',
    },
    {
      title: 'AI-Powered Diagnostics Tool for Radiologists',
      image: 'http://wallpapercave.com/uwp/uwp4392062.jpeg',
    },
    {
      title: 'Loan App Backend Scaling with Microservices',
      image: 'https://wallpapercave.com/uwp/uwp4794863.jpeg',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Success Stories</h2>
      <div className={styles.grid}>
        {stories.map((story, idx) => (
          <StoryCard key={idx} image={story.image} title={story.title} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
