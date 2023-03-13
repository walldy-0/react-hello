import styles from './NavBar.module.scss';

const NavBar = () => {

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.navLeft}>
          <a href='/'><span className={styles.icon + ' fa fa-home'} /></a>
        </div>
        <div className={styles.navRight}>
          <a href='/'>Home</a>
          <a href='/favorite'>Favorite</a>
          <a href='/about'>About</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;