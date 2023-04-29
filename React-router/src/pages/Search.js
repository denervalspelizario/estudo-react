import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"; //9 - sempre usando o useFetch para poder buscar os dados

const Search = () => {
  
  const [searchParams] = useSearchParams(); //9 -  jogando o valor de searchParams para a constante
  
  const url = 'http://localhost:3000/products?' + searchParams; // 9 - extraindo os parametros de busca da url e criando umanova url com isso

  const {data: items, loading, error} = useFetch(url); //9 -  chamando o useFectch la do hook com o parametro url da json //  chamando o httpConfig e o loading tb
                                                          //9 - o items é uma renomeacao mas poderia ser qualquer nome ou seja data vira items   

  
  return (
    <div>
      <h1>Resultado disponíveis</h1>
      <ul className='products'>
        {/* 9 - faz um looping buscabdo o item buscado */}
        {items && items.map((item) => (  
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$ - {item.price}</p>
            <Link to={`products/${item.id}`}>Detalhes</Link> {/* 9 - Cria um link em cada card chamado detalhe que leva page product do item escolhido */}
          </li>
        ))}
          
      </ul>
    </div>
  )
}

export default Search