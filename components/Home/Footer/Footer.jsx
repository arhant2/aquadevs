import Link from 'next/link';
import { analyticsEvent } from '../../../utils/gtag';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* brand */}
        <div className={styles.brand}>Aquadevs</div>

        {/* links */}
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href='#explore'>
              <a
                onClick={() => {
                  analyticsEvent({
                    action: 'FOOTER_BUTTON_CLICKED - Explore',
                    category: 'enagement',
                  });
                }}
                className={styles.link}
              >
                Explore
              </a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href='#about'>
              <a
                onClick={() => {
                  analyticsEvent({
                    action: 'FOOTER_BUTTON_CLICKED - About Us',
                    category: 'enagement',
                  });
                }}
                className={styles.link}
              >
                About Us
              </a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href='#masterplan'>
              <a
                onClick={() => {
                  analyticsEvent({
                    action: 'FOOTER_BUTTON_CLICKED - Masterplan',
                    category: 'enagement',
                  });
                }}
                className={styles.link}
              >
                Masterplan
              </a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href='#register'>
              <a
                onClick={() => {
                  analyticsEvent({
                    action: 'FOOTER_BUTTON_CLICKED - Register',
                    category: 'enagement',
                  });
                }}
                className={styles.link}
              >
                Register
              </a>
            </Link>
          </li>
        </ul>

        <div className={styles.copyright}>
          &copy; Aquadevs 2022. All Rights Reserved.
        </div>
      </div>

      <div className={styles.lines}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </footer>
  );
};

export default Footer;
