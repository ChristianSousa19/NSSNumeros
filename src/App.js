import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar/SideBar";
import Home from "./pages/Home/home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contto";
// Importe as pagins isbele

const App = () => {
  return (
    <Router>
      <Sidebar open={true} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contato" element={<Contato />} />
        {/* Adicione outras rotas isa grey */}
      </Routes>
    </Router>
  );
};

export default App;
