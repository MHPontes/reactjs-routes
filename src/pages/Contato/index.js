import {Link} from 'react-router-dom'; 

function Contato() {
  return (
    <div>
      <h1>Contato: (ddd)xxxx-xxxx</h1>
        <br />
        
            <Link to="/">Ir para a pagina Home</Link> 
            <br />
            <Link to="/sobre">Ir para a pagina Sobre</Link>
    </div>
  );
}

export default Contato;
