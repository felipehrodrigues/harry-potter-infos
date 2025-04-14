import api from "../services/api";
import { useEffect, useState } from "react";
import styles from "./Magias.module.css";

function Magias() {
  const [magias, setMagias] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    async function buscarMagias() {
      try {
        const response = await api.get("spells");
        setMagias(response.data);
      } catch (erro) {
        <p>Erro ao buscar Magias</p>;
      }
    }
    buscarMagias();
  }, []);

  const magiasFiltradas = magias.filter((magia) =>
    magia.name.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h1>Magias do Universo Harry Potter</h1>
      <p className={styles.texto_apresentacao}>
        As magias no universo bruxo são manifestações poderosas do conhecimento,
        da prática e da intenção do bruxo que as executa. Cada feitiço carrega
        um propósito específico — desde a iluminação de ambientes até a defesa
        contra forças das trevas. Dominá-las exige disciplina, concentração e
        uma profunda conexão com a varinha, que atua como um canal entre o bruxo
        e a magia. Os feitiços são classificados de acordo com sua natureza e
        complexidade: encantamentos, azarações, maldições e feitiços de
        proteção, entre outros. Cada magia possui um nome, origem e efeito
        únicos, e sua correta aplicação pode ser determinante em situações
        decisivas. Nesta seção, você encontrará uma seleção das magias mais
        conhecidas e utilizadas pelos bruxos e bruxas ao longo da história do
        mundo mágico.
      </p>
        <input className={styles.input_pesquisa}
          type="text"
          placeholder="Digite o nome da magia..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        ></input>
      <div className={styles.container_magias}>
        {magiasFiltradas.map((magia) => (
          <div key={magia.id} className={styles.lista_magias}>
            <h3>{magia.name}</h3>
            <p>{magia.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Magias;
