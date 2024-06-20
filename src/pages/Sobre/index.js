import {Link} from 'react-router-dom'; 

function Sobre() {
  return (
    <div>
      <h1>Bem vindo a pagina Sobre</h1>
        <br />
        
            <Link to="/">Ir para a pagina Home</Link>
            <br />
            <Link to="/contato">Ir para a pagina Contato</Link>
    </div>
  );
}

export default Sobre;
