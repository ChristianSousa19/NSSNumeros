import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar/SideBar";
import Home from "./pages/Home/home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import processamento from "./pages/transaçoes-de-TI/Processamento-e-Armazenamento/processamento"
import pagina2 from "./pages/transaçoes-de-TI/Processamento-e-Armazenamento/pagina2"
import conectividade from "./pages/transaçoes-de-TI/conectividade/conectividade"
import atendimento from "./pages/transaçoes-de-TI/Atendimento/atendimento"
import ambiente from "./pages/transaçoes-de-TI/Ambiente de trabalho/ambiente"
import colaboracao from "./pages/transaçoes-de-TI/Colaboraçao/coraboracao"
import telefonia from "./pages/transaçoes-de-TI/Telefonia/telefonia"
import nuvem from "./pages/Grandes movimentos/Nuvem/nuvem"
import pix from "./pages/Grandes movimentos/PIX/pix"
import BASS from "./pages/Grandes movimentos/BAAS/BAAS"
import lowcode from "./pages/Grandes movimentos/Low Code/lowcode"
import canais from "./pages/Grandes movimentos/Canais Digitais/canais"
import canaisPF from "./pages/Grandes movimentos/Canais Digitais/canaisPF"
import canaisPJ from "./pages/Grandes movimentos/Canais Digitais/canaisPJ"
import whtsapp from "./pages/Grandes movimentos/Canais Digitais/whatsapp"
import riscos from "./pages/Governança-e-Gestao/Riscos/riscos" 
import premiacoes from "./pages/Governança-e-Gestao/Premiaçoes-e-certificaçoes/premiacoes" 
import portifolio from "./pages/Governança-e-Gestao/Portifolio/portifolio" 
import pessoas from "./pages/Governança-e-Gestao/Pessoas/pessoas" 
import investimento from "./pages/Governança-e-Gestao/Investimento-de-TI/investimento" 
import gerencimento from "./pages/Governança-e-Gestao/Gerenciamento-de-Serviços/gerenciamento" 
import ASG from "./pages/Governança-e-Gestao/ASG/ASG"
import tecnologias from "./pages/Tecnologias Disruptivas/tecnologias"





// Importe as pagins isbele

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
        <Route path="/transacoes-de-TI/processamento-e-armazenamento/processamento" element={<processamento />} />
        <Route path="/transacoes-de-TI/processamento-e-armazenamento/pagina2" element={<pagina2 />} />
        <Route path="/transacoes-de-TI/conectividade/conectividade" element={<conectividade />} />
        <Route path="/transacoes-de-TI/Atendimento/atendimento" element={<atendimento />} />
        <Route path="/transacoes-de-TI/Ambiente de trabalho/ambiente" element={<ambiente />} />
        <Route path="/transacoes-de-TI/Colaboraçao/coraboracao" element={<colaboracao />} />
        <Route path="/transacoes-de-TI/Telefonia/telefonia" element={<telefonia />} />

        {/* Grandes Movimentos */}
        <Route path="/Grandes movimentos/Nuvem/nuvem" element={<nuvem />} />
        <Route path="/Grandes movimentos/PIX/pix" element={<pix />} />
        <Route path="/Grandes movimentos/BAAS/BAAS" element={<BASS />} />
        <Route path="/Grandes movimentos/Low Code/lowcode" element={<lowcode />} />
        <Route path="/Grandes movimentos/Canais Digitais/canais" element={<canais/>} />
        <Route path="/Grandes movimentos/Canais Digitais/canaisPF" element={<canaisPF />} />
        <Route path="/Grandes movimentos/Canais Digitais/canaisPJ" element={<canaisPJ />} />
        <Route path="/Grandes movimentos/Canais Digitais/whatsapp" element={<whtsapp />} />

        {/* Governança e Gestão */}
        <Route path="/Governança-e-Gestao/Riscos/riscos" element={<riscos />} />
        <Route path="/Governança-e-Gestao/Premiaçoes-e-certificaçoes/premiacoes" element={<premiacoes />} />
        <Route path="/Governança-e-Gestao/Portifolio/portifolio" element={<portifolio />} />
        <Route path="/Governança-e-Gestao/Pessoas/pessoas" element={<pessoas />} />
        <Route path="/Governança-e-Gestao/Investimento-de-TI/investimento" element={<investimento />} />
        <Route path="/Governança-e-Gestao/Gerenciamento-de-Serviços/gerenciamento" element={<gerencimento />} />
        <Route path="/Governança-e-Gestao/ASG/ASG" element={<ASG />} />

        {/* Tecnologias Disruptivas */}
        <Route path="/Tecnologias Disruptivas/tecnologias" element={<tecnologias />} />
      </Routes>
    </Router>
  );
};

export default App;

