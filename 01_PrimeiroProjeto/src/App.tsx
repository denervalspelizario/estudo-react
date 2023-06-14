import Header from "./components/header";
import Aluno from './components/aluno';
import Footer from "./components/footer";

export default function App(){
  return(
    <div>
      <Header  title="Curso React + Typescript"/>
      <h1>Meu projeto</h1>
      <Aluno  
       nome="Ana Caroline"  // adicionando dado ao props que é uma interface tipada chamada AlunoProps
       idade={19}
      /> 

      <Aluno  
       nome="Fabio Silva"  // adicionando dado ao props que é uma interface tipada chamada AlunoProps
       idade={22}
      /> 
      <Footer />
    </div>
  )
}


