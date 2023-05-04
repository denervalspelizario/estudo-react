import { Link, useParams } from "react-router-dom"   // traz os parametros da url por exemplo id ou name
import { useFetch } from "../hooks/useFetch"  //  importando o useFetch

/*
  O useParams é um hook do React que faz parte da biblioteca react-router-dom. 
  Ele permite que você acesse e extraia os parâmetros de uma URL em um componente funcional do React.
*/

const Product = () => {

    //  rota dinamica
    const { id } = useParams()  // useParams traz o id do produto - obs ta recebendo o id porque la app.js a route é products/id
    console.log(id)

    // 5 - carregamento dado individual
    const url = "http://localhost:3000/products/" + id;   // url da api para fazer requisição dos dados da data ** o run server tem que estar ativo senao nao funciona atentar a url***
                                                         // concatenada com id ** nao esquecer o '/' no final

    const {data: product, loading, error} = useFetch(url); // chamando o useFectch la do hook com o parametro url da json //  chamando o httpConfig e o loading tb
                                                          // o items é uma renomeacao mas poderia ser qualquer nome ou seja data vira items   

    console.log(product);                                                          

  return (
    <div>
        <p>ID do produto: {id}</p>
        {error && <p>Ocorreu um erro...</p>}  {/*debug ja condicionando se caso ouver o erro ja diz qual o erro */}
        {loading && <p>Carregando...</p>}  {/* Carregamento se houver demora */}
        {product && (  
          <div>
            <h1>{product.name}</h1>  {/* Carregamento dinamico do name do produto*/}
            <p>R${product.price}</p> {/* Carregamento dinamico do preco do produto*/}
            {/* 6 - nested routes */}
            <Link to={`/products/${product.id}/info`}>Mais Informações</Link> {/* me leva a rota da page Info  que esta linkada la na app.js */}
            
          </div>  

        )}
    </div>
  )
}

export default Product