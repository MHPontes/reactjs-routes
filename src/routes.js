import { BrowserRouter, Routes,Route } from "react-router-dom"; // Importando o BrowserRouter e o Route do pacote react-router-dom

import Home from "./pages/Home"; // Importando o componente Home
import Sobre from "./pages/Sobre"; // Importando o componente Sobre
import Contato from "./pages/Contato"; // Importando o componente Contato

function RoutesApp(){
   return(
        <BrowserRouter>
             <Routes>

                <Route path="/" element={<Home />} />     

                <Route path="/sobre" element={<Sobre />} />

                <Route path="/contato" element={<Contato />} />

             </Routes>
        </BrowserRouter>
   ) 
}

export default RoutesApp; 