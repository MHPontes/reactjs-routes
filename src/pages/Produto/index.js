import { useParams } from "react-router-dom";  // Importando o hook useParams do pacote react-router-dom

function Produto() {

const { id } = useParams();   // Atribuindo o valor do parametro id a variavel id

  return (
    <div>
      <h1>Produto</h1>
        <h2>Produto de id: {id}</h2> {/* Exibindo o valor do parametro id */}
    </div>
  )
}

export default Produto;