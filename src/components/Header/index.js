import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <header>
            <h2>Sujeito Dev</h2>
            <br />
            <div className="menu">
            <Link to="/">Home</Link> {/* Link para a pagina Home */}
            <Link to="/sobre">Sobre</Link> {/* Link para a pagina Sobre */}
            <Link to="/contato">Contato</Link> {/* Link para a pagina Contato */}
            </div>
        </header>
    )
}

export default Header;