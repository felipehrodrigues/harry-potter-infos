import React from 'react';
import styles from './Sobre.module.css';

function Sobre() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Sobre o Projeto</h1>

      <p className={styles.texto}>
        Este projeto foi desenvolvido com o objetivo de praticar React e CSS,
        explorando a API de personagens, magias e casas do universo de Harry Potter.
      </p>

      <p className={styles.texto}>
        Harry Potter é uma série de livros escrita por J.K. Rowling que narra as aventuras
        de um jovem bruxo e seus amigos na Escola de Magia e Bruxaria de Hogwarts.
      </p>

      <h2 className={styles.subtitulo}>Tecnologias Utilizadas</h2>
      <ul className={styles.lista}>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS Modules</li>
        <li>API pública de Harry Potter</li>
      </ul>

      <h2 className={styles.subtitulo}>Sobre o Desenvolvedor</h2>
      <p className={styles.texto}>
        Desenvolvido por Felipe, estudante de Análise e Desenvolvimento de Sistemas,
        fã de tecnologia e do universo mágico de Harry Potter.
      </p>

      <div className={styles.links}>
        <a href="https://github.com/felipehrodrigues" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/felipe-rodrigues-299aa817b/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

export default Sobre;
