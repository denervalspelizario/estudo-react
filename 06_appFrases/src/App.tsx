import { useState } from 'react'

import './App.css'
import logoImg from './assets/logofrases.png' // importando a imagem

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <img 
        src={logoImg} 
        alt="Logo frases" 
      />

      <h2 className='title'>Categorias</h2>
      <section className='categoria-area'>
        <button className='categoria-button'>Motivacao</button>
        <button className='categoria-button'>Bem estar</button>
      </section>

      <button className='button-frase'>Gerar frase</button>

      <h2 className='textoFrase' >Alguma frase vai vir aqui iahsihaishaishjiahs</h2>
    </div>
  )
}

export default App
