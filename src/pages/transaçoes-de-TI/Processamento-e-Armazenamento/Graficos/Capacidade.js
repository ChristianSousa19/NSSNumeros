// Highend.jsx
import React, { useContext, useMemo } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend,ResponsiveContainer, } from "recharts";
import { FilterContext } from "../../../../contexts/FilterContext";
import jsonData from '../../../../db.json'; // Seu JSON com os registros



const Capacidade = () => {
    const { anoSelecionado, agrupamentoSelecionado } = useContext(FilterContext);
  
    // Filtra os registros (somente para "inf15" e para o ano selecionado)
    const getChartData = (ano, agrupamento) => {
      const registrosFiltrados = jsonData.dados.filter((item) => {
        const anoDoRegistro = new Date(item.Data).getFullYear().toString();
        return item.ID_Assunto === "inf15" && anoDoRegistro === ano;
      });
  
      // Se o agrupamento for mensal, agrupa por nome do mês
      if (agrupamento === "mensal") {
        const agrupadosPorMes = {};
        registrosFiltrados.forEach((item) => {
          const mesNome = new Date(item.Data).toLocaleString("pt-BR", { month: "long" });
          if (!agrupadosPorMes[mesNome]) {
            agrupadosPorMes[mesNome] = 0;
          }
          agrupadosPorMes[mesNome] += Number(item.Valor);
        });
        return Object.keys(agrupadosPorMes).map((mes) => ({
          dia: mes, // aqui a chave "dia" representa o nome do mês
          valor: agrupadosPorMes[mes],
        }));
      }
      // Se o agrupamento for trimestral, agrupa por trimestre
      else if (agrupamento === "trimestral") {
        const agrupadosPorTrimestre = {};
        registrosFiltrados.forEach((item) => {
          const mes = new Date(item.Data).getMonth(); // 0 a 11
          const trimestre = Math.floor(mes / 3) + 1;
          const labelTrimestre = `${trimestre}º Trimestre`;
          if (!agrupadosPorTrimestre[labelTrimestre]) {
            agrupadosPorTrimestre[labelTrimestre] = 0;
          }
          agrupadosPorTrimestre[labelTrimestre] += Number(item.Valor);
        });
        return Object.keys(agrupadosPorTrimestre).map((trimestre) => ({
          dia: trimestre,
          valor: agrupadosPorTrimestre[trimestre],
        }));
      }
      return []; // Caso não haja agrupamento definido
    };
  
    // Recalcula os dados sempre que o ano ou tipo de agrupamento mudar
    const chartData = useMemo(
      () => getChartData(anoSelecionado, agrupamentoSelecionado),
      [anoSelecionado, agrupamentoSelecionado]
    );
  
    if (!chartData || chartData.length === 0) {
      return (
        <div className="ProcessamentoDIV">
          <h3>Dados não disponíveis</h3>
        </div>
      );
    }
  
    return (
        <div className="ProcessamentoDIV">
        <h3>Highend - Ano {anoSelecionado}</h3>
        <ResponsiveContainer width={500} height={300}>
          <BarChart
            data={chartData}
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
              contentStyle={{
                backgroundColor: "#f0f0f0",
                border: "none",
              }}
              cursor={{ fill: "rgba(0,0,0,0.1)" }}
            />
            <Legend />
            <Bar dataKey="valor" fill="blue" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default Capacidade;