import styles from './NavbarLink.module.css';

const NavbarLink = (props) => {
  return (
    <li className={styles.item}>
      <a
        href={props.href}
        onClick={props.closeNavbar}
        className={styles.linkLocation}
      >
        {props.listItem}
      </a>
    </li>
  );
};

export default NavbarLink;
