import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}> <Link to="/">⚡ Harry Potter</Link></h2>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/personagens">Personagens</Link>
        <Link to="/Magias">Magias</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    </nav>
  );
}

export default Navbar;
