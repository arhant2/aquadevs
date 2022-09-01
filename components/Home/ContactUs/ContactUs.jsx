import ContactForm from './ContactForm/ContactForm';
import styles from './ContactUs.module.css';

const contactUs = () => {
  return (
    <div id='register' className={styles.outer}>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay muted loop>
          <source src='/spring.mp4' type='video/mp4' />
        </video>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Get in Touch</h2>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}></div>
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
