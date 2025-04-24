// HeaderComFiltro.jsx
import React, { useContext } from "react";
import "./Header.css";
import { FilterContext } from "../../contexts/FilterContext";

const HeaderComFiltro = () => {
  const { anoSelecionado, setAnoSelecionado, agrupamentoSelecionado, setAgrupamentoSelecionado } =
    useContext(FilterContext);

  const handleAnoChange = (e) => {
    setAnoSelecionado(e.target.value);
  };

  const handleAgrupamentoChange = (e) => {
    setAgrupamentoSelecionado(e.target.value);
  };

  return (
    <header className="header-com-filtro">
      <img
        src={require("../../image/bancoicon.png")}
        alt="Ícone do Banco"
        className="header-icon"
      />
      {/* Filtro de ano */}
      <select value={anoSelecionado} onChange={handleAnoChange}>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      {/* Filtro de agregação: mensal ou trimestral */}
      <select value={agrupamentoSelecionado} onChange={handleAgrupamentoChange}>
        <option value="mensal">Mensal</option>
        <option value="trimestral">Trimestral</option>
      </select>
    </header>
  );
};

export default HeaderComFiltro;