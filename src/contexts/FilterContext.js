// src/contexts/FilterContext.js
import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  // Embora o filtro de mês não seja usado na agregação para o gráfico,
  // mantemos-o caso seja necessário para outras finalidades.
  const [mesSelecionado, setMesSelecionado] = useState("janeiro");
  const [anoSelecionado, setAnoSelecionado] = useState("2023");
  // Novo filtro: "mensal" ou "trimestral"
  const [agrupamentoSelecionado, setAgrupamentoSelecionado] = useState("mensal");

  return (
    <FilterContext.Provider
      value={{
        mesSelecionado,
        setMesSelecionado,
        anoSelecionado,
        setAnoSelecionado,
        agrupamentoSelecionado,
        setAgrupamentoSelecionado,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
