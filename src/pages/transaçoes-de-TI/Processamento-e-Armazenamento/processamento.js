import React from "react";
import Highend from "./Graficos/Highend";
import Capacidade from "./Graficos/Capacidade";
import MainFrame from "./Graficos/MainFrame";
import DiaPico from "./Graficos/DiaPico";
import "./Processamento.css";

const Processamento = () => {
  return (
    <section className="ContainerProcessamento">
      <div className="ProcessamentoDIV">
        <Highend />
      </div>
      <div className="ProcessamentoDIV">
        <Capacidade />
      </div>
      <div className="ProcessamentoDIV">
        <MainFrame />
      </div>
      <div className="ProcessamentoDIV">
        <DiaPico />
      </div>
    </section>
  );
};

export default Processamento;
