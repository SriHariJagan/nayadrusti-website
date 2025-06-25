// Contact.jsx
import React from 'react';
import styles from './contact.module.css';
import { Phone, Mail, MessageCircleMore, Mic, UploadCloud, Globe, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Need a Consultation?</h2>
          <p className={styles.subheading}>
            Drop us a line! We are here to answer your questions 24/7.
          </p>

          <form className={styles.form}>
            <textarea placeholder="How can we help you?" rows={5}></textarea>

            <div className={styles.uploadSection}>
              <UploadCloud size={18} />
              Drag and drop or <span>browse</span> to upload your file(s)
            </div>

            <div className={styles.row}>
              <input type="text" placeholder="Full name" />
              <input type="text" placeholder="Company" />
            </div>

            <div className={styles.row}>
              <input type="email" placeholder="Work email" />
              <input type="number" placeholder="+91 9876543210" min={0} />
            </div>

            <button type="submit" className={styles.sendBtn}>Send</button>
          </form>
        </div>

        <div className={styles.right}>
          <h3 className={styles.contactTitle}>Get in touch instantly</h3>
          <ul className={styles.contactList}>
            <li><Phone size={18} /> Call us</li>
            <li><Mail size={18} /> Email us</li>
            <li><MessageCircleMore size={18} color="green" /> WhatsApp</li>
            <li><MessageCircleMore size={18} /> Live chat</li>
          </ul>

          <h4 className={styles.sectionTitle}>For journalists</h4>
          <p className={styles.linkRow}><Linkedin size={18} /> Get unique insights</p>

          <h4 className={styles.sectionTitle}>Join our team</h4>
          <p className={styles.linkRow}><UploadCloud size={18} /> Upload your CV</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
