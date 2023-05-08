import { useContext } from 'react' // importando a biblioteca de contexto
import { CounterContext } from '../context/CounterContext' // importando o contexto

export const useCounterContext = () => {

  const context = useContext(CounterContext)  // adicionando em counter o contexto

  if(!context){
    console.log("Contexto não encontrado!")  // condicional para ver se o context está funcionando senão retorna clg

  }

  return context  // contexto funcionando então será retornado

}