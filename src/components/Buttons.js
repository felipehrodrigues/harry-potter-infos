// src/components/BotoesFiltro.jsx
import React from "react";
import styles from "./Button.module.css";

function BotoesFiltro({
  personagens,
  setPersonagensFiltrados,
  filtrarPersongens,
}) {
  return (
    <div className={styles.botoes}>
      <button
        className={styles.botao_todos}
        onClick={() => setPersonagensFiltrados(personagens)}
      >
        Mostrar todos
      </button>

      <div className={styles.botoes_casa}>
        <button
          className={styles.botao_Gryffindor}
          onClick={() => filtrarPersongens({ nomeCasa: "Gryffindor" })}
        >
          Mostrar Gryffindor
        </button>
        <button
          className={styles.botao_Slytherin}
          onClick={() => filtrarPersongens({ nomeCasa: "Slytherin" })}
        >
          Mostrar Slytherin
        </button>
        <button
          className={styles.botao_Hufflepuff}
          onClick={() => filtrarPersongens({ nomeCasa: "Hufflepuff" })}
        >
          Mostrar Hufflepuff
        </button>
        <button
          className={styles.botao_Ravenclaw}
          onClick={() => filtrarPersongens({ nomeCasa: "Ravenclaw" })}
        >
          Mostrar Ravenclaw
        </button>
      </div>
    </div>
  );
}

export default BotoesFiltro;
