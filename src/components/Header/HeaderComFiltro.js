import React, { useState } from "react";
import "./Header.css";

const HeaderComFiltro = ({ onMesSelecionado, onAnoSelecionado }) => {
  const [mesSelecionado, setMesSelecionado] = useState("janeiro");
  const [anoSelecionado, setAnoSelecionado] = useState("2023");

  const handleMesChange = (e) => {
    const mes = e.target.value;
    setMesSelecionado(mes);
    onMesSelecionado(mes); // Passa o mês selecionado para o App.js
  };

  const handleAnoChange = (e) => {
    const ano = e.target.value;
    setAnoSelecionado(ano);
    onAnoSelecionado(ano); // Passa o ano selecionado para o App.js
  };

  return (
    <header className="header-com-filtro">
      <img
        src={require("../../image/bancoicon.png")} // Importa o ícone do caminho correto
        alt="Ícone do Banco"
        className="header-icon"
      />
      
      <select value={mesSelecionado} onChange={handleMesChange}>
        <option value="janeiro">Janeiro</option>
        <option value="fevereiro">Fevereiro</option>
        {/* Adicione mais meses conforme necessário */}
      </select>
      
      <select value={anoSelecionado} onChange={handleAnoChange}>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        {/* Adicione mais anos conforme necessário */}
      </select>
    </header>
  );
};

export default HeaderComFiltro;
