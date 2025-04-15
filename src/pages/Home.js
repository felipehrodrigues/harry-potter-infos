import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>✨ Bem-vindo ao Mundo de Harry Potter ✨</h1>
      <p className={styles.descricao}>Explore os personagens e as magias do Mundo Bruxo.</p>

      <div className={styles.botoes}>
        <Link to="/personagens" className={styles.botao}>
          Ver Personagens
        </Link>

        <Link to="/Magias" className={styles.botao}>
          Ver Magias
        </Link>

        <Link to="/sobre" className={styles.botao}>
          Sobre o Projeto
        </Link>


      </div>
    </div>
  );
}

export default Home;
