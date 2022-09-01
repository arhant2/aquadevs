import styles from './StayConnected.module.css';
import Image from 'next/future/image';
import handshake from '../../../public/handshake.png';
import gmail from '../../../public/gmail.png';

const StayConnected = () => {
  return (
    <div id='contact' className={styles.stayConnected}>
      <Image
        className={styles.handshake}
        src={handshake}
        alt='Connect with us'
      />

      <h2 className={styles.heading}>Stay Connected</h2>
      <address>New Delhi, India</address>
      <div className={styles.mailLogo}>
        <Image className={styles.gmail} src={gmail} alt='mail' />
      </div>
      <a
        className={styles.mailLink}
        href='mailto:contact@aquadevs.com'
        target='_blank'
        rel='noreferrer'
      >
        contact@aquadevs.com
      </a>
    </div>
  );
};

export default StayConnected;
