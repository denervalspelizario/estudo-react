import {Link} from 'react-router-dom'

export default function NoFound(){
  return(
    <div>
      <h1>Erro... pagina não encontrada</h1>
      <br />
      <Link to='/'>ir para Home</Link>
    </div>
  )
}