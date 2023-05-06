
import { useNavigate } from 'react-router-dom' //   para poder redirecionar o usuário dentro do codigo do componente
import { useState } from 'react'

const SearchForm = () => {

    const navigate = useNavigate(); // puxando a usenavigate para a const
    const [query, setQuery] = useState()  //  query = busca -  manipular o estado para fazer a busca

    const handleSubmit = (e) => { 
        e.preventDefault() // pra nao carregar a pagina  quando o user clicar no botão de submit

        navigate('/search?q=' + query) //  busca com base no user digitar e direcionando a pagina da busca
    }


  return (
    // cliclou no btn dispara  a funcao
    <form onSubmit={handleSubmit}> 
        {/* 9 o onChange pega atravéz do evento de digitar e extraindo o valor do input ou seja começa com value = query depois de digitar(onChange) vira setQuery*/}
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        {/* Botão que aciona a busca*/}
        <input type="submit" value='Buscar' />
    </form>
  )
}

export default SearchForm;