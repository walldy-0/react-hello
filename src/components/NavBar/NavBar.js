import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.navLeft}>
          <Link to='/'><span className={styles.icon + ' fa fa-home'} /></Link>
        </div>
        <div className={styles.navRight}>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;