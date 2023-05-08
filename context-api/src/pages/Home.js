// import {useContext} from 'react' // importando a biblioteca de contexto
import ChangeCounter from '../component/ChangeCounter' // importando o contexto
// import ChangeCounter from '../component/ChangeCounter';


  // REFATORANDO CONTEXT COM HOOK ( UMA OUTRA FORMA DE USAR CONTEXT) SERÁ O MESMO RESULTADO MAS DE UMA FORMA MAIS SIMPLES
  // TODOS OS COMENTADOS SÃO A ESTRUTURA DE CONTEXT QUE FUNCIONA MAS SEM REFATORAÇÃO
  import { useCounterContext } from '../hooks/useCounterContext';

  // CONTEXT MAIS COMPLEXO
  import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  // const {counter} = useContext(CounterContext);  // adicionando em counter o contexto

  const { counter} = useCounterContext();

  // contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  // aletarndo state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color}) // qual o tipo da ação 
  }

  return (
    <div>
      <h1 style={{color: color}} >Home</h1>
      <p>Valor do contador{counter}</p>

      {/* Alterando valor ao contexto */}
      <ChangeCounter />

      {/*Alterando contexto complexo*/}
      <div>
         <button onClick={ () => setTitleColor("RED") }> Vermelho </button> 
         <button onClick={ () => setTitleColor("BLUE") }> Azul </button> 
      </div>

    </div>
  )
}

export default Home