import { useState } from 'react'
import './App.css'

function App() {
  const [ signed, setsigned] = useState(false);

  const [ username, setUsername] = useState('Desenvolvedor Denerval Pelizario')

  

  return (
    <div>

    <button 
      onClick={() => setsigned(true)} // ao cliclar altera a state signed para true
    > 
        Entrar
    </button>  
     
     {signed && ( // se state signed estiver true  renderiza esta div

      <div>
        <h1>Bem vindo desenvolvedor Denerval Pelizario</h1>
        <p>Usuário online!</p>
        <button onClick={() => setsigned(false)} >Sair</button>
      </div>

     )}

      <hr />
      <hr />
     
     
     <div>
      { 
        username.length >= 8 && <h1>Username muito grande </h1> // se state username for igual o maior que 8 renderiza esta msg  
      } 
     </div>

    </div>
  )
}

export default App
