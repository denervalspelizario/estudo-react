import { useContext } from 'react' // importando a biblioteca de contexto
import { TitleColorContext } from '../context/TitleColorContext' // importando o contexto

export const useTitleColorContext = () => {

  const context = useContext(TitleColorContext)  // adicionando em counter o contexto

  if(!context){
    console.log("Contexto não encontrado!")  // condicional para ver se o context está funcionando senão retorna clg

  }

  return context  // contexto funcionando então será retornado

}