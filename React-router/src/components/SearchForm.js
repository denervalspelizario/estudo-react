
import { useNavigate } from 'react-router-dom' //  9 - para poder redirecionar o usuário dentro do codigo do componente
import { useState } from 'react'

const SearchForm = () => {

    const navigate = useNavigate(); // 9 - puxando a usenavigate para a const
    const [query, setQuery] = useState()  // 9 -  query = busca -  manipular o estado para fazer a busca

    const handleSubmit = (e) => { //9 - funcao  
        e.preventDefault() //9 pra nao carregar a pagina  quando o user clicar no botão de submit

        navigate('/search?q=' + query) // 9 busca com base no user digitar e direcionando a pagina da busca
    }


  return (
    // 9 vai executar a funcao
    <form onSubmit={handleSubmit}> 
        {/* 9 o onChange pega atravéz do evento de digitar e extraindo o valor do input ou seja começa com value = query depois de digitar(onChange) vira setQuery*/}
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        {/* Botão que aciona a busca*/}
        <input type="submit" value='Buscar' />
    </form>
  )
}

export default SearchForm