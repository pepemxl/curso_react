// components/Menu.js

import Link from 'next/link';
import styles from './Menu.module.css'; // Importar los estilos CSS

const Menu = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}><Link href="/"><a className={styles.navbarLink}>Home</a></Link></li>
        <li className={styles.navbarItem}><Link href="/graph_connection"><a className={styles.navbarLink}>Graph</a></Link></li>
        <li className={styles.navbarItem}><Link href="/barras"><a className={styles.navbarLink}>Barras</a></Link></li>
        <li className={styles.navbarItem}><Link href="/about"><a className={styles.navbarLink}>About</a></Link></li>
        {/* Agrega más elementos del menú según sea necesario */}
      </ul>
    </nav>
  );
};

export default Menu;
