import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const DiaPico = ({ mes }) => {
  // Verifica se os dados estão disponíveis
  if (!mes || !Array.isArray(mes.dias)) {
    return (
      <div className="ProcessamentoDIV">
        <h3>Dados não disponíveis</h3>
      </div>
    );
  }

  return (
    <div className="ProcessamentoDIV">
      <h3>{mes.mes}</h3>
       <BarChart
              width={590}
              height={300}
              data={mes.dias}
              
            >
              
              <XAxis dataKey="dia" stroke="#343a40" axisLine={false} tickLine={false} />

              
              <Tooltip 
                contentStyle={{ backgroundColor: "#f0f0f0", border: "none" }}
                cursor={{ fill: "rgba(0,0,0,0.1)" }}
              />
              
              <Bar dataKey="valor" fill="blue" barSize={40} />
            </BarChart>
    </div>
  );
};

export default DiaPico;
