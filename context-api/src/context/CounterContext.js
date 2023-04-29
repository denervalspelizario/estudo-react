// 1 - o nome counterContext é opcional 
// 1 - criar contexto
import { createContext, useState } from  'react';  // 1 - importando tanto o criado de contetxo quanto o alterador de estado

export const CounterContext = createContext() // 1 - invocando essa funcao que foi criada com o criador de contexto - ou seja vai jogar esse contexto em algum lugar

// 2 - criando o provider
export const CounterContextProvider = ({children}) => { // 2 - exportar uma const com nome relativa ao contexto + provider - onde o counter vai mudar dependendo do tipo de contexto

    const [counter, setCounter] = useState(5);  // 2 - alteração doe stado do counter

    return (  // 2 que vai ser chamado para encapsular componentes 
        // 2 - a sintaxe é igual de um component - 2 o value é sobre os valores que serão enviados
        <CounterContext.Provider value={{counter, setCounter}}>                                  
            {children}
        </CounterContext.Provider>


    )


}