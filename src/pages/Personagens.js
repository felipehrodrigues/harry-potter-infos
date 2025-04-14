import api from "../services/api";
import { useEffect, useState } from "react";
import styles from "./Persongens.module.css";
import BotoesFiltro from "../components/Buttons";

function Personagens() {
  const semFoto =
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Sem_imagem.jpg";

  const [personagens, setPersonagens] = useState([]);
  const [personagensFiltrados, setPersonagensFiltrados] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  const personagensPesquisa = personagensFiltrados.filter((personagens) =>
    personagens.name.toLowerCase().includes(pesquisa.toLowerCase())
  );

  useEffect(() => {
    async function buscarPersonagens() {
      try {
        const response = await api.get("characters");
        setPersonagens(response.data);
        setPersonagensFiltrados(response.data);
      } catch (erro) {
        <p>Erro ao buscar personagens</p>;
      }
    }
    buscarPersonagens();
  }, []);

  function filtrarPersongens({ nomeCasa }) {
    const filtrados = personagens.filter((p) => p.house === nomeCasa);
    setPersonagensFiltrados(filtrados);
  }

  return (
    <div>
      <h1>Personagens Harry Potter</h1>
      <p className={styles.texto_apresentacao}>
        Em Hogwarts, cada bruxo possui uma identidade singular, moldada por suas
        origens, habilidades e escolhas. A divisão entre as <strong>
            Casas — Gryffindor,
            Slytherin, Hufflepuff e Ravenclaw
        </strong> — representa diferentes valores e
        virtudes, como coragem, ambição, lealdade e sabedoria. A <strong>Espécie</strong> à qual
        pertence um personagem revela aspectos importantes de sua natureza
        mágica, sejam humanos, elfos ou outras criaturas do universo bruxo. A
        <strong>Varinha</strong>, elemento essencial para a prática da magia, é composta por uma
        combinação única de madeira, núcleo e comprimento — aspectos que se
        alinham intimamente com as características do seu portador. Já o 
        <strong> Patrono</strong>, encantamento avançado e altamente pessoal, manifesta-se como a
        representação mágica da força interior e da memória mais feliz de quem o
        conjura.
      </p>
      <BotoesFiltro
        personagens={personagens}
        setPersonagensFiltrados={setPersonagensFiltrados}
        filtrarPersongens={filtrarPersongens}
      />
      <input className={styles.input_pesquisa}
          type="text"
          placeholder="Digite o nome do personagem"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        ></input>
      <container className={styles.personagens}>
        {personagensPesquisa.map((item) => (
          <div key={item.id} className={styles.card_personagens}>
            {item.image === "" ? (
              <img src={semFoto} alt={item.nome} />
            ) : (
              <img src={item.image} alt={item.nome} />
            )}
            <strong>
              <p>{item.name}</p>
            </strong>
            {item.house === "" ? (
              <p>Sem informações sobre a casa</p>
            ) : (
              <p>Casa: {item.house}</p>
            )}

            {item.species === "" ? (
              <p>Sem informações sobre a espécie</p>
            ) : (
              <p>Espécie: {item.species}</p>
            )}
            {item.wand.wood || item.wand.core || item.wand.length === "" ? (
              <p>
                Varinha: {item.wand.wood} {item.wand.core} {item.wand.length}
              </p>
            ) : (
              <p>Sem informações sobre a varinha</p>
            )}
            {item.patronus === "" ? (
              <p>Sem informações sobre o patronus</p>
            ) : (
              <p>Patrono: {item.patronus}</p>
            )}
          </div>
        ))}
      </container>
    </div>
  );
}

export default Personagens;
