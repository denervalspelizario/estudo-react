// import {useContext} from 'react' // importando a biblioteca de contexto
// import ChangeCounter from '../component/ChangeCounter';

// REFATORANDO CONTEXT COM HOOK ( UMA OUTRA FORMA DE USAR CONTEXT) SERÁ O MESMO RESULTADO MAS DE UMA FORMA MAIS SIMPLES
  // TODOS OS COMENTADOS SÃO A ESTRUTURA DE CONTEXT QUE FUNCIONA MAS SEM REFATORAÇÃO
  import { useCounterContext } from '../hooks/useCounterContext';

  // CONTEXT MAIS COMPLEXO
  import { useTitleColorContext } from '../hooks/useTitleColorContext';

import React from 'react'

const About = () => {

  // contexto mais complexo
  const { color } = useTitleColorContext(); 

   // const {counter} = useContext(CounterContext);  // adicionando em counter o contexto

   const { counter} = useCounterContext()
  
  return (
    <div>
       <h1 style={{color: color }} >Home</h1>
       <p>Valor do contador{counter}</p>
      

    </div>
   
  )
}

export default About