import Link from 'next/link';
import Button from '../../../../utils/Button/Button';
import styles from './RegisterButton.module.css';

const RegisterButton = () => {
  return (
    <Button
      DomElement={({ children, ...otherProps }) => (
        <Link href='#register'>
          <a {...otherProps}>{children}</a>
        </Link>
      )}
      rounded
      color='blue'
      className={styles.btn}
    >
      Register Now
    </Button>
  );
};

export default RegisterButton;
