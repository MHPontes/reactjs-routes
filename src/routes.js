import { BrowserRouter, Routes,Route } from "react-router-dom"; // Importando o BrowserRouter e o Route do pacote react-router-dom

import Home from "./pages/Home"; // Importando o componente Home
import Sobre from "./pages/Sobre"; // Importando o componente Sobre
import Contato from "./pages/Contato"; // Importando o componente Contato
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";

function RoutesApp(){
   return(
        <BrowserRouter>
            <Header />    {/* Componente Header que contem os links para as paginas Home, Sobre e Contato */}
             <Routes>

                <Route path="/" element={<Home />} />     

                <Route path="/sobre" element={<Sobre />} />

                <Route path="/contato" element={<Contato />} />

                <Route path="/produto/:id" element={<Produto />} /> {/* Rota dinamica que recebe um parametro id */}

                <Route path="*" element={<Erro />} /> {/* Caso navegue por pagina inexistente*/}

             </Routes>
        </BrowserRouter>
   ) 
}

export default RoutesApp; 