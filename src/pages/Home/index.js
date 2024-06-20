import {Link} from 'react-router-dom'; // Importando o componente Link do pacote react-router-dom

function Home() {
  return (
    <div>
      <h1>Bem vindo a pagina HOME</h1>
      <br />


        <Link to="/sobre">Ir para a pagina Sobre</Link> {/* Link para a pagina Sobre */}
        <br />
        <Link to="/contato">Ir para a pagina Contato</Link> {/* Link para a pagina Contato */}
    </div>
  );
}

export default Home;
