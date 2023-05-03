import { useState, useEffect } from "react";


 //  USEFETCH  RECEBERA DADOS DA API - CONTEM VARIAS FUNÇÕES PARA MANIPULAR OS DADOS DA API 
 //  RESGATA OS DADOS DO DATA  - ATUALIZA O POST DE PRODUTOS DE ACORDO COM OS PRODUTOS LA DO DATA -  ALTERAR CONFIGURAÇÕES
export const useFetch = (url) => {  // funcao que sera exportada que recebe url(api)  pra puxar os dados

    const [data, setData] = useState(null)  // inicialmente os dados serão nulos

    //  refatorando o post
    const [config, setConfig] = useState(null) //  vai configurar o post e os cabeçalhos
    const [method, setMethod] = useState(null) // vai dizer qual o tipo de methodo vai ser usado na função GET ou POST
    const [callFetch, setCallFetch] = useState(false) // será usado para mapear o useEffect que resgata os dados atualizou lá ele indica aqui

    // 6 - state LOADING
    const [loading, setLoading] = useState(false); // começa nao carregando nada por isso false

    // 7 - tratando erros
    const [error, setError] = useState(null)

    // 8 - deletando dados
    const [itemId, setItemId] = useState(null); // cfiando o estado id que vai ser usado para pegar o dado que vai ser buscado para ser deletado


    // FUNÇÃO ALTERAR CONFIGURAÇÕES
    const httpConfig = (data, method) => { 
        
        if(method === 'POST'){ // se o metodo for post 
            setConfig({
                method: "POST",
                headers: {
                    "Content-type": "application/json"  // o conteudo do header será um arquivo do tipo json
                },
                body: JSON.stringify(data) // O comando "JSON.stringify" é utilizado para converter um objeto JavaScript em uma string no formato JSON(no caso data), 
                                           // para que possa ser usado no body do json para que posso ser adicionado no arquivo json.
            })

            setMethod(method);

        } else if(method ==="DELETE"){   // criando a comando DELETE de dados usando uma nova condição
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
            });

            setMethod(method) // alterando a state method de acordo com com a requsicao pois apartir dai ele vai agora se for GET ou POST
            setItemId(data) // 8 - vai pegar o id do produto que esta na base de dados(data) 
        }
    };

    // FUNÇÃO QUE RESGATA OS DADOS DO DATA 
    useEffect(() => {

        const fetchData = async () => {  // uma requisição  que chamara os dados
            setLoading(true); // ligando loading até carregar os dados

            try {  // deu certo carregou os dados   

                const res = await fetch(url)  // pega os dados url e joga na res  
                const json = await res.json() // pega os dados no formato no caso json   
    
                setData(json)  // jogando os dados na state data 
                
            } catch (error) { // deu erro não carregou os dados
                console.log(error.message);
                setError("Houve algum erro no carregamento de dados!") // se houver algum errro ele altera o estado no setError e informa a msg
            }
            
            setLoading(false);  // desligando loading depois de carregar dados 
        };

        fetchData(); // chama a funcao para ser executada

    },[url, callFetch]) // dependencia dele a nossa url,  callFetch traz os dados atualizados


    // FUNÇÃO QUE ATUALIZA O POST DE PRODUTOS DE ACORDO COM OS PRODUTOS LA DO DATA
    useEffect(() => {  

        const httpResquest = async () => {  //  sempre que houver uma alteração na dependencia esse useEfect vai ser chamado -
            
            if(method === 'POST'){ //  checagem se o metodo for post

                let fecthOptions = [url, config]; //  fazendo uma array com  url e as configs pois ela é dinamica pode ser reutilizado
    
                const res = await fetch(...fecthOptions); // fazendo a  resquisicao
    
                const json = await res.json(); // tranformando res em json e jogando em const  
     
                setCallFetch(json);  //  Quando o post for concluido automaticamente fazendo uma requisição de GET
    
            } else if (method === "DELETE"){  // 8 criando method exclusão de dado

                const deleteUrl = `${url}/${itemId}` // pega url + id do produto joha na const

                const res = await fetch(deleteUrl, config)  //item que sera excluso + tipo de post que no caso é delete

                const json = await res.json() // transforma em json joga na const

                setCallFetch(json) // atualiza o state com esta json do item que será excluido

            }
        }

        httpResquest(); // chamando a funcao

    }, [config, method, url]) // config method e url sendo mapeados, quando houver alteração na config o useEffect é chamado
 
    return { data, httpConfig, loading, error }; // retorna data que é a base dos dados // 5 exportando o httpConfig // 6 exportando o loading tb //7 exportando error kkk

}