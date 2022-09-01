import { useEffect, useState, useCallback, useRef } from 'react';
import styles from './MainText.module.css';

const words = ['serious?', 'worried?', 'tensed?'];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text

const MainText = () => {
  const timeRef = useRef(null);

  const [indexes, setIndexes] = useState({
    arrayIndex: 0,
    wordIndex: words[0].length,
    typing: false,
  });

  const updateText = useCallback(() => {
    setIndexes(({ arrayIndex, wordIndex, typing, timeoutId }) => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
      if (typing) {
        if (wordIndex < words[arrayIndex].length) {
          ++wordIndex;
          timeRef.current = setTimeout(updateText, typingDelay);
        } else {
          typing = false;
          timeRef.current = setTimeout(updateText, newTextDelay);
        }
      } else {
        if (wordIndex > 0) {
          --wordIndex;
          timeRef.current = setTimeout(updateText, erasingDelay);
        } else {
          typing = true;
          arrayIndex = arrayIndex + 1 !== words.length ? arrayIndex + 1 : 0;
          timeRef.current = setTimeout(updateText, typingDelay + 1100);
        }
      }

      return { arrayIndex, wordIndex, typing, timeoutId };
    });
  }, []);

  useEffect(() => {
    updateText();

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, [updateText]);

  return (
    <div className={styles.text}>
      Why so{' '}
      <span className={styles.secondaryText}>
        {words[indexes.arrayIndex].substr(0, indexes.wordIndex)}
        <span className={styles.cursor}>&nbsp;</span>
      </span>
    </div>
  );
};

export default MainText;
