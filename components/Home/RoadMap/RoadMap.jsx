import LazyShow from '../../../utils/LazyShow/LazyShow.jsx';
import CheckPoint from './CheckPoint/CheckPoint.jsx';
import styles from './RoadMap.module.css';
import Image from 'next/future/Image';
import jigsaw from '../../../public/jigsaw.png';
import tools from '../../../public/tools.png';
import goal from '../../../public/goal.png';
import cube from '../../../public/cube.png';
import finishFlag from '../../../public/finish-flag.png';

const RoadMap = () => {
  return (
    <section className={styles.roadMapContainer} id='masterplan'>
      <div className={styles.roadMap}>
        <LazyShow>
          <CheckPoint
            color='blue'
            heading='Puzzled?'
            description={
              <p>
                Have you ever wondered why are you not able to solve a slight
                variation of a standard problem even after solving{' '}
                <strong>hundreds</strong> of questions across multiple coding
                platforms? Well maybe you never understood them well enough!
              </p>
            }
            checkpointIcon={jigsaw}
          />
        </LazyShow>

        <LazyShow rightToLeft>
          <CheckPoint
            right
            color='pink'
            heading='Approach'
            description={
              <p>
                The most important element while <strong>understanding</strong>{' '}
                a solution is it&apos;s <strong>intuition</strong> so apart from
                knowing why a solution works for a problem, it is equally
                important to know why others don&apos;t.
              </p>
            }
            checkpointIcon={tools}
          />
        </LazyShow>

        <LazyShow>
          <CheckPoint
            color='yellowOrange'
            heading='Next step'
            description={
              <p>
                So after sucessfully building the intuitions and being able to
                crack new and relatively difficult questions, are we done now?
                There is a lot more than just knowing how to solve the problems
                which includes explaining the same to the other person and make
                sure they <strong>understood</strong> it.
              </p>
            }
            checkpointIcon={goal}
          />
        </LazyShow>

        <LazyShow rightToLeft>
          <CheckPoint
            right
            color='blue'
            heading='Art of problem solving'
            description={
              <p>
                So just knowing the various data structures and algorithmic
                techniques might not really be enough to get you through the
                interview. Mastering the skill of quickly figuring out the{' '}
                <strong>right</strong> data structure in{' '}
                <strong>various</strong> situations is a must.
              </p>
            }
            checkpointIcon={cube}
          />
        </LazyShow>

        <LazyShow>
          <CheckPoint
            color='pink'
            heading='Efficiency and Speed'
            description={
              <p>
                You may have all the knowledge and understanding of the
                solutions and the concepts but imparting the same to your
                interviewer is equally important and that too in the limited
                timespan of your interview! So your interview involves{' '}
                <strong>effciently</strong> managing your <em>time</em> while
                using it to think, understand, explain and implement the code!
              </p>
            }
            checkpointIcon={finishFlag}
          />
        </LazyShow>
      </div>
    </section>
  );
};

export default RoadMap;
