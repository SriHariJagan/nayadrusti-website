import React from "react";
import styles from "./clients.module.css";
import ClientCard from "./ClientCard";

const Clients = () => {
  const clientData = [
    {
      logo: "https://www.creativefabrica.com/wp-content/uploads/2022/05/06/Best-Creative-R-Logo-Design-Graphics-30151648-1-1-580x387.jpg",
      avatar: "https://cdn-icons-png.flaticon.com/512/5951/5951752.png",
      name: "Heather Owen Nigl",
      role: "Chief Financial Officer",
      linkedIn: "https://linkedin.com/in/heather",
      feedback:
        "ScienceSoft’s team members proved to be extremely flexible and responsive. They stayed in daily contact with us and delivered demos every other week so that we could be sure that the invoicing system was aligned with our business needs. We have already engaged ScienceSoft in supporting the solution.",
      rating: 5,
      originalLink: "#",
      projectLink: "#",
    },
    {
      logo: "https://i.pinimg.com/736x/5c/9e/56/5c9e56f8d2ee277d5c43b7258a8001fa.jpg",
      avatar: "https://cdn-icons-png.flaticon.com/512/5951/5951752.png",
      name: "Maria Zannes",
      role: "President & CEO",
      linkedIn: "https://linkedin.com/in/maria",
      feedback:
        "ScienceSoft has been a competent partner for application development. Their developers are reliable, thorough, smart, available, extremely good communicators and very friendly. We look forward to working with them over the long term and would recommend hiring ScienceSoft.",
      rating: 5,
      originalLink: "#",
      projectLink: "#",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Clients Say</h2>
      {clientData.map((client, i) => (
        <ClientCard key={i} {...client} />
      ))}
    </div>
  );
};

export default Clients;
