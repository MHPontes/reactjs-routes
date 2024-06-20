import {Link} from 'react-router-dom'; // Importando o componente Link do pacote react-router-dom


function Erro(){
    return(
        <div>
            <h1>Página não encontrada</h1>

            <span>Voltar para as paginas: </span>
            <br />
            <Link to="/"> Home</Link>
            <br />
            <Link to="/sobre">Sobre</Link>
            <br /> 
            <Link to="/contato"> Contato</Link>
        </div>
    );
}

export default Erro;