import EachFeature from './EachFeature/EachFeature';
import BrainImage from '../../../public/brain.png';
import DiamondImage from '../../../public/diamond.png';
import CodeImage from '../../../public/code.png';
import styles from './Features.module.css';

const Features = () => {
  return (
    <div id='explore' className={styles.features}>
      <h2 className={styles.heading}>Explore How we can Help you</h2>
      <p className={styles.secondaryText}>
        We are here to help you in refining what you know and nurture what you
        don&apos;t!
      </p>

      <div className={styles.featuresMain}>
        {/* for clipping path to triangee */}
        <svg
          height='0'
          width='0'
          style={{
            position: 'absolute',
          }}
        >
          <defs>
            <clipPath
              id='home-features-traingle-clip'
              clipPathUnits='objectBoundingBox'
            >
              <path d='M1,.21 Q1,0 .81,.09L.187,.4 Q0,.5 .187,.59L.81,.90 Q1,1 1,.79Z' />
            </clipPath>
          </defs>
        </svg>

        <div className={styles.featuresItem}>
          <EachFeature
            heading='Intution'
            text='How about building intuitions rather than solutions?'
            image={BrainImage}
          />
        </div>
        <div className={styles.featuresItem}>
          <EachFeature
            heading='Clarity'
            text='Have absolute clarity of solutions and solve silliest of your doubts.'
            color='pink'
            image={DiamondImage}
          />
        </div>
        <div className={styles.featuresItem}>
          <EachFeature
            heading='Implementation'
            text='Learn to write clean, concise and easy to understand code.'
            color='yellowOrange'
            image={CodeImage}
            smallIcon
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
