import React, { useEffect, useState } from "react";
import Highend from "./Graficos/Highend";
import Capacidade from "./Graficos/Capacidade";
import MainFrame from "./Graficos/MainFrame";
import DiaPico from "./Graficos/DiaPico";
import "./Processamento.css";
import dadosJSON from "../../../db.json";

const Processamento = ({ mesSelecionado }) => {
  const [dadosFiltrados, setDadosFiltrados] = useState([]);

  useEffect(() => {
    // Filtrar os dados com base no mês selecionado
    const dados = dadosJSON.dados.filter((dado) => dado.mes === mesSelecionado);
    setDadosFiltrados(dados);
  }, [mesSelecionado]); // Atualiza quando o mês selecionado muda

  return (
    <section className="ContainerProcessamento">
      {dadosFiltrados.map((mes, index) => (
        <React.Fragment key={index}>
          <div className="ProcessamentoDIV">
            <Highend mes={mes} />
          </div>
          <div className="ProcessamentoDIV">
            <Capacidade mes={mes} />
          </div>
          <div className="ProcessamentoDIV">
            <MainFrame mes={mes} />
          </div>
          <div className="ProcessamentoDIV">
            <DiaPico mes={mes} />
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Processamento;
