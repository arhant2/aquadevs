import Link from 'next/link';
import Image from 'next/future/image';
import MainText from './MainText/MainText';
import Button, { ButtonLinkDomElement } from '../../../utils/Button/Button';
import styles from './MainHeader.module.css';
import submarineLogo from '../../../public/submarine.png';
import arrowLogo from '../../../public/arrow.png';
import singleLadkaLogo from '../../../public/singleLadka.jpg';
import { analyticsEvent } from '../../../utils/gtag';

const MainHeader = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.left}>
        <MainText />
        <p className={styles.secondaryText}>Let&apos;s dive deep in</p>
        <Button
          href='#explore'
          DomElement={ButtonLinkDomElement}
          className={styles.btn}
          big
          rounded
          color='blue'
          onClick={() => {
            analyticsEvent({
              action: 'DEEP_DIVE_BUTTON_CLICKED',
              category: 'enagement',
            });
          }}
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
