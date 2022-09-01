import Link from 'next/link';
import MainText from './MainText/MainText';
import Button from '../../../utils/Button/Button';
import styles from './MainHeader.module.css';
import submarineLogo from '../../../public/submarine.png';
import arrowLogo from '../../../public/arrow.png';
import singleLadkaLogo from '../../../public/singleLadka.jpg';
import Image from 'next/future/image';

const MainHeader = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.left}>
        <MainText />
        <p className={styles.secondaryText}>Let&apos;s dive deep in</p>
        <Button
          DomElement={({ children, ...otherProps }) => (
            <Link href='#explore'>
              <a {...otherProps}>{children}</a>
            </Link>
          )}
          className={styles.btn}
          big
          rounded
          color='blue'
        >
          <Image
            style={{ transform: 'translateY(3px)' }}
            src={submarineLogo}
            alt='Dive deep in'
            className={styles.submarine}
          />
          &nbsp;&nbsp;&nbsp;
          <Image
            className={styles.arrow}
            src={arrowLogo}
            alt='Go ahead'
            width={20}
          />
        </Button>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.singleLadkaLogo}
          src={singleLadkaLogo}
          alt='Header'
        />
      </div>
    </div>
  );
};

export default MainHeader;
