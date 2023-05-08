import {useContext} from 'react' // importando a biblioteca de contexto
import {CounterContext} from '../context/CounterContext' // importando o contexto

import React from 'react'

const Contact = () => {

  const {counter} = useContext(CounterContext);  // adicionando em counter o contexto
  
  return (
    <div>
       <h1>Home</h1>
       <p>Valor do contador{counter}</p>

    </div>
   
  )
}

export default Contact