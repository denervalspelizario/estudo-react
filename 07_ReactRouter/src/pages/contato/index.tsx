import {Link} from 'react-router-dom'

export default function Contato(){
  return(
    <div>
      <h1>Bem vindo a pagina Contado!!!</h1>
      <h3>Telefone: (xx) xxxxx-xxxx</h3>

      <hr />
      <Link to='/'>ir para Home</Link>
      <br />
      <Link to='/sobre'>ir para Sobre</Link>
    </div>
  )
}