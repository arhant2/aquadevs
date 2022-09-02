import styles from './Logo.module.css';
import { Fragment } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
import whaleLogo from '../../../../public/whale-transparent.png';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Link href='/'>
        <span>
          <Image src={whaleLogo} alt='logo' className={styles.image} />
        </span>
      </Link>
      <h3 className={styles.logoHeading}>
        Aqua<span className={styles.blueHeading}>devs</span>
      </h3>
    </div>
  );
};

export default Logo;
