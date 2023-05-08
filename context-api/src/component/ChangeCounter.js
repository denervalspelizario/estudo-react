import { useContext } from 'react' // importando a biblioteca de contexto
import { CounterContext } from '../context/CounterContext' // importando o contexto

export default function ChangeCounter (){

  const {counter, setCounter}= useContext(CounterContext) // como vou alterar o valor de context precisa do setCounter
                                                          // observar bem a sintaxe

  return (
    <div>
      <button 
        onClick={() => setCounter(counter + 1)} // ou seja cada vez que clicar no btn adiciona +1 ao valor de counter
      >
        Adicionando valor ao contador
      </button>
    </div>
  )
}