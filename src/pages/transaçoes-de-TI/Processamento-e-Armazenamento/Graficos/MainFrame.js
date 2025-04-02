import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const MainFrame = ({ mes, anoSelecionado }) => {
  // Verifica se os dados foram passados corretamente (ou seja, se mes e mes.dias existem)
  if (!mes || !Array.isArray(mes.dias)) {
    return (
      <div className="ProcessamentoDIV">
        <h3>Dados não disponíveis</h3>
      </div>
    );
  }

  return (
    <div className="ProcessamentoDIV">
      <h3>{mes.mes} - {anoSelecionado}</h3>
      <BarChart
        width={590}
        height={300}
        data={mes.dias}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis 
          dataKey="dia" 
          stroke="#343a40" 
          axisLine={false} 
          tickLine={false} 
        />
        <YAxis stroke="#343a40" />
        <Tooltip 
          contentStyle={{ backgroundColor: "#f0f0f0", border: "none" }}
          cursor={{ fill: "rgba(0,0,0,0.1)" }}
        />
        <Legend />
        <Bar dataKey="valor" fill="blue" barSize={40} />
      </BarChart>
    </div>
  );
};

export default MainFrame;
