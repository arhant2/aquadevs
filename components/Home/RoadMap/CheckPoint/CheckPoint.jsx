import styles from './CheckPoint.module.css';
import Image from 'next/future/image';

const CheckPoint = (props) => {
  return (
    <div
      className={`${styles.checkPoint} ${
        props.right ? styles.checkPoint__right : ''
      } ${styles[`checkPoint__${props.color || 'blue'}`]}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={props.checkpointIcon}
          className={styles.image}
          alt={props.heading}
        />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>{props.heading}</h2>
        <div className={styles.text}>{props.description}</div>
      </div>
    </div>
  );
};

export default CheckPoint;
