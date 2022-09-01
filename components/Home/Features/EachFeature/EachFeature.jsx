import Image from 'next/future/image';
import styles from './EachFeature.module.css';

// colors = 'blue'(default), 'yellowOrange', 'pink'
const EachFeature = (props) => {
  return (
    <div
      className={`${styles.eachFeature} ${
        props.color === 'yellowOrange'
          ? styles.eachFeature__yellowOrange
          : props.color === 'pink'
          ? styles.eachFeature__pink
          : ''
      }`}
    >
      <div className={styles.eachFeatureTriangleOuter}>
        <div className={styles.eachFeatureTriangle}>
          <Image
            className={`${styles.eachFeatureTriangleImage} ${
              props.smallIcon ? styles.eachFeatureTriangleImage__small : ''
            }`}
            src={props.image}
            alt={props.heading}
          />
        </div>
      </div>

      <h2 className={styles.heading}>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default EachFeature;
