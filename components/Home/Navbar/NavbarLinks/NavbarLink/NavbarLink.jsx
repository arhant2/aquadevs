import Link from 'next/link';
import { analyticsEvent } from '../../../../../utils/gtag';
import styles from './NavbarLink.module.css';

const NavbarLink = (props) => {
  return (
    <li className={styles.item}>
      <Link href={props.href}>
        <a
          onClick={() => {
            analyticsEvent({
              action: `NAVBAR_BUTTON_CLICKED - ${props.listItem}`,
              category: 'enagement',
            });
            props.closeNavbar();
          }}
          className={styles.linkLocation}
        >
          {props.listItem}
        </a>
      </Link>
    </li>
  );
};

export default NavbarLink;
