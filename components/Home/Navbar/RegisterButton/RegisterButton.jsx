import Link from 'next/link';
import Button, { ButtonLinkDomElement } from '../../../../utils/Button/Button';
import { analyticsEvent } from '../../../../utils/gtag';
import styles from './RegisterButton.module.css';

const RegisterButton = () => {
  return (
    <Button
      href='#register'
      DomElement={ButtonLinkDomElement}
      rounded
      color='blue'
      className={styles.btn}
      onClick={() =>
        analyticsEvent({
          action: 'NAVBAR_REGISTER_BUTTON_CLICKED',
          category: 'engagement',
        })
      }
    >
      Register Now
    </Button>
  );
};

export default RegisterButton;
