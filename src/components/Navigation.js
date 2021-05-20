import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to="/project" activeClassName={styles.active}>
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-me" activeClassName={styles.active}>
            About Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
