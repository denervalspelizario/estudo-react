import './App.css';
import { useState, useEffect } from 'react';

// 4 custom hook

import { useFetch } from './hooks/useFetch';  //  importando o hook 

const url = "http://localhost:3000/produtcs";  // url da api para fazer requisição dos dados da data ** o run server tem que estar ativo senao nao funciona

function App() {

  const [products, setProducts] = useState([]);  // chamando a alteração de estado

  // 4 - custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url); // chamando o useFectch la do hook com o parametro url da json // 5 chamando o httpConfig // 6 - chamando o loading tb
                                        // o items é uma renomeacao mas poderia ser qualquer nome ou seja data vira items   

  const [name, setName] = useState("") // states da adicao e dados
  const [price, setPrice] = useState("") // states da adicao de dados

  // 1 - resgatando dados  - virou comentado para fazer mesma coisa mas via hook aula 4
  //useEffect(() => {  // function para chamar os dados server  ** obs no projeto managem tem algo parecido mas sem precisar do sevidor ligado
    //async function fetchData(){
    //  const res = await fetch(url); // chamando a url que vem em texto puro e enviando para const res

    //  const data = await res.json();  // transforma o texto puro em json 

    //  setProducts(data);
    //}

    //fetchData();
    
  //},[]);

  // 2 - adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

      const product = {
        name,   // 2 - quando o valor  tem o mesmo nome da chave pode se resumir senao teria que colocar name: name * Obs até aqui é um Get dos dados
        price
      };
      
      // 5 - comantando tudo isso aqui em baixo 
      // 2 - aqui ele tranforma(requisição) aqueles dados inseridos e inseri na json(que é um texto em javascript) que usamos como data
      //codigo - const res = await fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(product), }); 

      // 3 - carregamento dinamico forma dinamica para adicionar um dado ao json **mais perfomático sem precisar de reload

      // codigo - const addedProduct = await res.json(); // tranformando a string json(const res) em objeto javascript

      //codigo - setProducts((prevProducts) => [...prevProducts, addedProduct]); // adiciona os produtos de forma dinamica e mais performática

      // 5 - refatorando post
      httpConfig(product, "POST");

      setName(""); // zerando os inputs
      setPrice(""); // zerando os inputs
  };

  // 8 - remoção e dados
   const handleRemove = (id) => {  // 8 variavel que pega o id para remoção
      httpConfig(id, "DELETE");
   } 
  

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6  - loading  fazendo validacao enquando o loading esta funcionando ele vai mostrar o paragrafo*/}
      {loading && <p>Carregando dados...</p>} 
      {error && <p>{error}</p>} {/* 7 adicionando mensgaem de erro   */}
      <ul>
        {items && items.map((product) => (  //1 looping pra chamar os dados    // 4 - alterei products.map por items && items.map - o items é a renomeacao os dados estao nele
          <li key={product.id}>  {/*items que joga o looping no product que joga seu indices*/}
            {product.name} - R$ {product.price}  
            <button onClick={() => handleRemove(product.id)}>Excluir</button> {/* 8 botão de exclusão de id */}
          </li>       
        ))}
      </ul>
      <div className='add-product'>
        <form onSubmit={handleSubmit}> {/* onSumit chama o evento */}
          <label>
            Nome:
            {/* o onChange pega atravéz do evento de digitar e extraindo o valor do input ou seja começa com value = name depois de digitar(onChange) vira setName*/}
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />  
          </label>
          <label>
            Preço:
            {/* o onChange pega atravéz do evento de digitar e extraindo o valor do input ou seja começa com value = price depois de digitar(onChange) vira setPrice*/}
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />  
          </label>
          {/* <input type="submit" value="criar"/> no original sem o 7 - loading  */}
          {/* 7 -  alteracao de estado de loading no post usado para usuário nao conseguir clicar duas vezes enquanto carrega item*/}
          {loading && <input type="submit" disabled value="Aguarde"/>}
          {!loading && <input type="submit" value="criar"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
