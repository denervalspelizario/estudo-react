import { useState, useEffect } from "react";

// 4 - custom hook  

export const useFetch = (url) => {  // funcao que sera exportada que recebe url(api)  pra puxar os dados

    const [data, setData] = useState(null)  // dados que virarao setDados  // inicialmente os dados serão nulos

    // 5 - refatorando o post
    const [config, setConfig] = useState(null) // 5 -  vai configurar o post e os cabeçalhos
    const [method, setMethod] = useState(null) // 5 - vai dizer qual o tipo de methodo vai ser usado na função GET ou POST
    const [callFetch, setCallFetch] = useState(false) // 5 -

    // 6 - loading 
    const [loading, setLoading] = useState(false); // começa nao carregando nada por isso false

    // 7 - tratando erros
    const [error, setError] = useState(null)

    // 8 - deletando dados
    const [itemId, setItemId] = useState(null); // cfiando o estado id que vai ser usado para pegar o dado que vai ser buscado para ser deletado


    const httpConfig = (data, method) => { // 5 - funcao para alterar as configuracoes
        if(method === 'POST'){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method);
        } else if(method ==="DELETE"){   // 8 criando a comando DELETE de dados usando uma nova condição
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
            });

            setMethod(method)
            setItemId(data) // 8 - vai pegar o id do produto que esta na base de dados(data) 
        }
    };


    useEffect(() => {

        

        const fetchData = async () => {  // uma requisição assincrona

            // 6 - loading quando inica a função
            setLoading(true);

            try {  // 7 eu tento fazer ocarregamento de dados        

                const res = await fetch(url)  // pega os dados url e joga na res  // 7 - adiciona o try catch  

                const json = await res.json() // pega os dados no formato no caso json // 7 - adiciona o try catch  
    
                setData(json)  // aqui jogando no estado setData od dados  // 7 - adiciona o try catch  
                
            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro no carregamento de dados!") // 7 - se houver algum errro ele altera o estado no setError e informa a msg
            }
            

        // 6 - loading terminado de carregar toda a funcao agora o setLoading vira false
        setLoading(false);     

        };

        fetchData(); // chama a funcao para ser executada

    },[url, callFetch]) // dependencia dele a nossa url // 5 callFetch diz adicionando dados ao sistema e o callFetch traz os dados atualizados

    // 5 refatorando post

    useEffect(() => {  //  5 - o nome useEffect é uma convensão para ato de trazer dados

        const httpResquest = async () => {  // 5 - sempre que houver uma alteração na dependencia esse useEfect vai ser chamado -
            if(method === 'POST'){ // 5 - faz a checagem se o metodo for post

                let fecthOptions = [url, config]; // 5 - fazendo aray com  url e as configs pois ela é dinamica pode ser reultilizado
    
                const res = await fetch(...fecthOptions); // 5 - resquisicao
    
                const json = await res.json(); // 5 - automaticamente fazendo uma requisição de GET quando o post for concluido
    
                setCallFetch(json);
    
            } else if (method === "DELETE"){  // 8 criando method de exclusão

                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                const json = await res.json()

                setCallFetch(json)

            }
        }

        httpResquest(); // chamando a funcao

    }, [config, method, url]) // 5 config method e url sendo mapeados, quando houver alteração na config o useEffect é chamado
 
    return { data, httpConfig, loading, error }; // retorna data que é a base dos dados // 5 exportando o httpConfig // 6 exportando o loading tb //7 exportando error kkk

}