import React from "react";
import styles from "./about.module.css";
import CardSlider from "../../Components/CardsSlider/CardSlider";
import CompanyCarousel from "../../Components/CompanyCarousel/CompanyCarousel";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h3 className={styles.aboutTitle}>Key Facts About MyCompany</h3>
      <div>
        <CardSlider />
      </div>
      <p className={styles.description}>
        Since 1989. For millions of users. We are responsible for delivering
        top-quality, secure, and adaptable digital solutions that satisfy the
        needs of today and unlock the opportunities of tomorrow.
      </p>

      <div>
        <CompanyCarousel />
      </div>
    </div>
  );
};

export default About;
