import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Processamento from "./pages/transaçoes-de-TI/Processamento-e-Armazenamento/Processamento";
import Pagina2 from "./pages/transaçoes-de-TI/Processamento-e-Armazenamento/Pagina2";
import Conectividade from "./pages/transaçoes-de-TI/conectividade/Conectividade";
import Atendimento from "./pages/transaçoes-de-TI/Atendimento/Atendimento";
import Ambiente from "./pages/transaçoes-de-TI/Ambiente de trabalho/Ambiente";
import Colaboracao from "./pages/transaçoes-de-TI/Colaboraçao/Coraboracao";
import Telefonia from "./pages/transaçoes-de-TI/Telefonia/Telefonia";
import Nuvem from "./pages/Grandes movimentos/Nuvem/Nuvem";
import Pix from "./pages/Grandes movimentos/PIX/Pix";
import BASS from "./pages/Grandes movimentos/BAAS/BAAS";
import Lowcode from "./pages/Grandes movimentos/Low Code/lowcode";
import Canais from "./pages/Grandes movimentos/Canais Digitais/Canais";
import CanaisPF from "./pages/Grandes movimentos/Canais Digitais/CanaisPF";
import CanaisPJ from "./pages/Grandes movimentos/Canais Digitais/CanaisPJ";
import Whtsapp from "./pages/Grandes movimentos/Canais Digitais/Whatsapp";
import Riscos from "./pages/Governança-e-Gestao/Riscos/Riscos";
import Pessoas from "./pages/Governança-e-Gestao/Pessoas/Pessoas";
import Premiacoes from "./pages/Governança-e-Gestao/Premiaçoes-e-certificaçoes/Premiacoes";
import Portifolio from "./pages/Governança-e-Gestao/Portifolio/Portifolio";
import Investimento from "./pages/Governança-e-Gestao/Investimento-de-TI/Investimento";
import Gerenciamento from "./pages/Governança-e-Gestao/Gerenciamento-de-Serviços/Gerenciamento";
import ASG from "./pages/Governança-e-Gestao/ASG/ASG";
import Tecnologias from "./pages/Tecnologias Disruptivas/Tecnologias";

const App = () => {
  return (
    <Router>
      <Sidebar open={true} />
      <Routes>
        {/* Páginas principais */}
        <Route path="/home" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contato" element={<Contato />} />

        {/* Transações de TI */}
        <Route path="/transacoes-de-TI/processamento-e-armazenamento/Processamento" element={<Processamento />} />
        <Route path="/transacoes-de-TI/processamento-e-armazenamento/Pagina2" element={<Pagina2 />} />
        <Route path="/transacoes-de-TI/conectividade/Conectividade" element={<Conectividade />} />
        <Route path="/transacoes-de-TI/Atendimento/Atendimento" element={<Atendimento />} />
        <Route path="/transacoes-de-TI/Ambiente de Trabalho/ambiente" element={<Ambiente />} />
        <Route path="/transacoes-de-TI/Colaboraçao/Colaboracao" element={<Colaboracao />} />
        <Route path="/transacoes-de-TI/Telefonia/Telefonia" element={<Telefonia />} />

        {/* Grandes Movimentos */}
        <Route path="/Grandes movimentos/Nuvem/Nuvem" element={<Nuvem />} />
        <Route path="/Grandes movimentos/PIX/Pix" element={<Pix />} />
        <Route path="/Grandes movimentos/BAAS/BAAS" element={<BASS />} />
        <Route path="/Grandes movimentos/Low Code/lowcode" element={<Lowcode />} />
        <Route path="/Grandes movimentos/Canais Digitais/Canais" element={<Canais />} />
        <Route path="/Grandes movimentos/Canais Digitais/CanaisPF" element={<CanaisPF />} />
        <Route path="/Grandes movimentos/Canais Digitais/CanaisPJ" element={<CanaisPJ />} />
        <Route path="/Grandes movimentos/Canais Digitais/Whatsapp" element={<Whtsapp />} />

        {/* Governança e Gestão */}
        <Route path="/Governança-e-Gestao/Riscos/Riscos" element={<Riscos />} />
        <Route path="/Governança-e-Gestao/Premiaçoes-e-certificaçoes/Premiacoes" element={<Premiacoes />} />
        <Route path="/Governança-e-Gestao/Portifolio/Portifolio" element={<Portifolio />} />
        <Route path="/Governança-e-Gestao/Pessoas/Pessoas" element={<Pessoas />} />
        <Route path="/Governança-e-Gestao/Investimento-de-TI/Investimento" element={<Investimento />} />
        <Route path="/Governança-e-Gestao/Gerenciamento-de-Servicos/Gerenciamento" element={<Gerenciamento />} />
        <Route path="/Governança-e-Gestao/ASG/ASG" element={<ASG />} />

        {/* Tecnologias Disruptivas */}
        <Route path="/Tecnologias Disruptivas/Tecnologias" element={<Tecnologias />} />
      </Routes>
    </Router>
  );
};

export default App;
