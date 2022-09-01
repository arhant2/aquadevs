import { Fragment } from 'react';
import Person from './Person/Person';
import styles from './Team.module.css';
import PersonImage from '../../../public/person.webp';
import NotebookImage from '../../../public/notebook.png';
import TusharImage from '../../../public/Tushar-sir.jpg';
import ArhantImage from '../../../public/arhant.jpg';
import NamanImage from '../../../public/naman-sir.png';
import PenImage from '../../../public/pen.png';
import BulbImage from '../../../public/bulb.png';

const Team = () => {
  return (
    <div id='about' className={styles.team}>
      <h2 className={styles.meetHeading}>Meet our team!!</h2>
      <div className={styles.persons}>
        <Person
          name='Arhant Jain'
          description={
            <Fragment>
              <p>SDE Intern at Microsoft</p>
              <p>Master at Codeforces</p>
              <p>6* at Codechef</p>
            </Fragment>
          }
          logoSrc={NotebookImage}
          imgSrc={ArhantImage}
          linkedinUrl='https://www.linkedin.com/in/arhantjain2/'
          githubUrl='https://github.com/arhant2'
        />
        <Person
          name='Tushar'
          description={
            <Fragment>
              <p>SDE Intern at Microsoft</p>
              <p>500+ DSA Problems</p>
            </Fragment>
          }
          logoSrc={PenImage}
          imgSrc={TusharImage}
          linkedinUrl='https://www.linkedin.com/in/tushar-9a208b194/'
          githubUrl='https://github.com/tushar1999-coder'
        />
        <Person
          name='Naman Singh'
          description={
            <Fragment>
              <p>SDE Intern at cure.fit</p>
              <p>Flipkart Grid 3.0 Finalist</p>
              <p>800+ Leetcode Questions</p>
            </Fragment>
          }
          logoSrc={BulbImage}
          imgSrc={NamanImage}
          linkedinUrl='https://www.linkedin.com/in/naman-singh-93ab141ba/'
          githubUrl='https://github.com/namansingh73'
        />
      </div>
    </div>
  );
};

export default Team;
