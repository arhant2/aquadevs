import { analyticsEvent } from '../../../../utils/gtag';
import styles from './Person.module.css';
import Image from 'next/future/image';
import linkedinImage from '../../../../public/linkedin.png';
import githubImage from '../../../../public/github.png';

const Person = (props) => {
  return (
    <div className={styles.person}>
      <div className={styles.imageContainer}>
        <Image src={props.imgSrc} className={styles.image} alt={props.name} />
        <div className={styles.logoContainer}>
          <Image
            className={styles.logoIcon}
            src={props.logoSrc}
            alt={'person'}
          />
        </div>
      </div>

      <div>
        <div className={styles.contentContainer}>
          <h3 className={styles.personName}>{props.name}</h3>
          {props.description}
          {/* <p>lorem ipsum dolor mite halo</p> */}
          {/* <p>dolor mite abc aai</p> */}

          <div>
            <a
              href={props.linkedinUrl}
              className={styles.contactLogo}
              target='_blank'
              rel='noreferrer'
              onClick={() =>
                analyticsEvent({
                  action: `Linkedin - ${props.name}`,
                  category: 'engagement',
                })
              }
            >
              <Image
                src={linkedinImage}
                alt='linkedin'
                className={styles.linkedinGithub}
              />
            </a>
            <a
              href={props.githubUrl}
              className={styles.contactLogo}
              target='_blank'
              rel='noreferrer'
              onClick={() =>
                analyticsEvent({
                  action: `Github - ${props.name}`,
                  category: 'engagement',
                })
              }
            >
              <Image
                width={30}
                src={githubImage}
                className={styles.linkedinGithub}
                alt='github'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
