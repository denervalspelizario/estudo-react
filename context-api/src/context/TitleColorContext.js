import { createContext, useReducer } from 'react';
/*  O hook "useReducer" é uma funcionalidade da biblioteca React que é usada para gerenciar o estado de um componente. 
    Ele oferece uma alternativa ao uso do hook "useState", permitindo que você gerencie estados mais complexos e com lógicas mais elaboradas.
    o useState muda um dado por vez o useReducer muda 2 dados ou mais por vez
*/

export const TitleColorContext = createContext() //  title recebendo criacao de contexto e podendo exporta-lo

export const titleColorReducer = (state, action) => {

  switch(action.type){
    case "RED":
      return {...state, color: "red"}  // caso RED a state altera de roxo para red
    case "BLUE":
      return {...state, color: "blue"}  // caso RED a state altera de roxo para blue
    default:
      return state;  // caso não mude retorna o state normal que é roxo

  }
  
}

export const TitleColorContextProvider = ({children}) => {

  // state é o conexto inicial e dispatch é o que vai receber a alteração do contexto parecido com useState
  const [ state, dispatch] = useReducer(titleColorReducer, {color: "purple"}) // tittleColorReducer(state inicial) inicia com a cor roxo a state

  console.log("Title color context: ", state)                                                                            

  return <TitleColorContext.Provider
            value={{...state, dispatch}}  // por default da linguagen essa é a sintaxe para passar todo o valor de state
          >
              {children}
         </TitleColorContext.Provider>

}