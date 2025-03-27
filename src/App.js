import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Processamento from "./pages/transaçoes-de-TI/Processamento-e-Armazenamento/Processamento";
import Pagina2 from "./pages/transaçoes-de-TI/Processamento-e-Armazenamento/Pagina2";
import Conectividade from "./pages/transaçoes-de-TI/conectividade/Conectividade";
import Atendimento from "./pages/transaçoes-de-TI/Atendimento/Atendimento";
import Ambiente from "./pages/transaçoes-de-TI/Ambiente de trabalho/Ambiente";
import Colaboracao from "./pages/transaçoes-de-TI/Colaboracao/Colaboracao";
import Telefonia from "./pages/transaçoes-de-TI/Telefonia/Telefonia";
import Nuvem from "./pages/Grandes movimentos/Nuvem/Nuvem";
import Pix from "./pages/Grandes movimentos/PIX/Pix";
import BASS from "./pages/Grandes movimentos/BAAS/BAAS";
import Lowcode from "./pages/Grandes movimentos/Low Code/Lowcode";
import Canais from "./pages/Grandes movimentos/Canais Digitais/Canais";
import CanaisPF from "./pages/Grandes movimentos/Canais Digitais/CanaisPF";
import CanaisPJ from "./pages/Grandes movimentos/Canais Digitais/CanaisPJ";
import Whtsapp from "./pages/Grandes movimentos/Canais Digitais/Whtsapp";
import Riscos from "./pages/Governança-e-Gestao/Riscos/Riscos";
import Premiacoes from "./pages/Governança-e-Gestao/Premiacoes/Premiacoes";
import Portifolio from "./pages/Governança-e-Gestao/Portifolio/Portifolio";
import Investimento from "./pages/Governança-e-Gestao/Investimento-de-TI/Investimento";
import Gerenciamento from "./pages/Governança-e-Gestao/Gerenciamento-de-Servicos/Gerenciamento";
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
        <Route path="/transacoes-de-TI/processamento-e-armazenamento/processamento" element={<Processamento />} />
        <Route path="/transacoes-de-TI/processamento-e-armazenamento/pagina2" element={<Pagina2 />} />
        <Route path="/transacoes-de-TI/conectividade/conectividade" element={<Conectividade />} />
        <Route path="/transacoes-de-TI/Atendimento/atendimento" element={<Atendimento />} />
        <Route path="/transacoes-de-TI/Ambiente de trabalho/ambiente" element={<Ambiente />} />
        <Route path="/transacoes-de-TI/Colaboracao/colaboracao" element={<Colaboracao />} />
        <Route path="/transacoes-de-TI/Telefonia/telefonia" element={<Telefonia />} />

        {/* Grandes Movimentos */}
        <Route path="/Grandes movimentos/Nuvem/nuvem" element={<Nuvem />} />
        <Route path="/Grandes movimentos/PIX/pix" element={<Pix />} />
        <Route path="/Grandes movimentos/BAAS/BAAS" element={<BASS />} />
        <Route path="/Grandes movimentos/Low Code/lowcode" element={<Lowcode />} />
        <Route path="/Grandes movimentos/Canais Digitais/canais" element={<Canais />} />
        <Route path="/Grandes movimentos/Canais Digitais/canaisPF" element={<CanaisPF />} />
        <Route path="/Grandes movimentos/Canais Digitais/canaisPJ" element={<CanaisPJ />} />
        <Route path="/Grandes movimentos/Canais Digitais/whatsapp" element={<Whtsapp />} />

        {/* Governança e Gestão */}
        <Route path="/Governança-e-Gestao/Riscos/riscos" element={<Riscos />} />
        <Route path="/Governança-e-Gestao/Premiacoes/premiacoes" element={<Premiacoes />} />
        <Route path="/Governança-e-Gestao/Portifolio/portifolio" element={<Portifolio />} />
        <Route path="/Governança-e-Gestao/Pessoas/pessoas" element={<Pessoas />} />
        <Route path="/Governança-e-Gestao/Investimento-de-TI/investimento" element={<Investimento />} />
        <Route path="/Governança-e-Gestao/Gerenciamento-de-Servicos/gerenciamento" element={<Gerenciamento />} />
        <Route path="/Governança-e-Gestao/ASG/ASG" element={<ASG />} />

        {/* Tecnologias Disruptivas */}
        <Route path="/Tecnologias Disruptivas/tecnologias" element={<Tecnologias />} />
      </Routes>
    </Router>
  );
};

export default App;
