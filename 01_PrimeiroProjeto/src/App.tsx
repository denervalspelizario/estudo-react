import Header from "./components/header";
import Aluno from './components/aluno';

export default function App(){
  return(
    <div>
      <Header/>
      <h1>Meu projeto</h1>
      <Aluno  
       nome="Ana Caroline"  // adicionando dado ao props que é uma interface tipada chamada AlunoProps
       idade={19}
      /> 

      <Aluno  
       nome="Fabio Silva"  // adicionando dado ao props que é uma interface tipada chamada AlunoProps
       idade={22}
      /> 
    </div>
  )
}


