import './Home.css'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'

const Home = () => {
  //  carregamento de dados
  const url = "http://localhost:3000/products/";   // url da api para fazer requisição dos dados da data ** o run server tem que estar ativo senao nao funciona atentar a url***

  const {data: items, loading, error} = useFetch(url)   // chamando o useFectch la do hook com o parametro url da json //  chamando o httpConfig e o loading tb
                                                        // o items é uma renomeacao de data mas poderia ser qualquer nome ou seja data vira items   
  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>} {/*debug ja condicvionando se caso ouver o erro ja diz qual o erro */}
      
      {loading && <p>{loading}</p>}
      <ul className='products'>
        {/* verificando se chegou os itens se chegou fazer looping  usando 'map' para */}
        {items && items.map((item) => (  
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$ - {item.price}</p>
            
            {/* 4 - Rota Dinâmica */}
            <Link to={`products/${item.id}`}>Detalhes</Link> {/* 4 - Cria um link em cada card chamado Detalhes que tera rota dinâmica de acordo com id do produto */}
          </li>
        ))}
          
      </ul>
    </div>
  )
}

export default Home