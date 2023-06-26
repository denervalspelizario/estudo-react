import { useState } from 'react'

import './App.css'
import logoImg from './assets/chorao.jpg' // importando a imagem
import {frasesCharlieBrown} from './data/Frases'

function App() {
  const [textFrase, setTextoFrase] = useState('') // state que se inicia vazia
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0) // state iniciada em 0,  

  
  // FUNCAO QUE ALTERAR A CATEGORIA
  function alterarCategoria(index: number){ // adicionando o parametro index pq eu preciso dele para alterar de posicao 
    
    setCategoriaSelecionada(index) // ao clicar no botao da categoria desejada será alterado na state categoriaSelecionanda o index
                                   // aletrando o index ele renderiza o index que foi clicado 
  }

  function gerarFrase(){
    
    let numeroAleatorio = Math.floor(Math.random() * frasesCharlieBrown[categoriaSelecionada].frases.length)   
    /* floor gera numero interio, random gera numero aleatorio com bases nas posicoes de frases da categoria selecionada
       categoriaSelecionada = posicao do objeto que sera indicado ao clicar no btn categoria-btn 
    */

    setTextoFrase(`" ${frasesCharlieBrown[categoriaSelecionada].frases[numeroAleatorio]} "`) // passando para state textoFrase a frase aleatoria 

  }

  return (
    <div className='container'>
      <img 
        src={logoImg} 
        alt="Logo frases" 
        className='logoImg'
      />

      <h2 className='title'>Charlie Brown Junior</h2>
      <section className='categoria-area'>
        
        {frasesCharlieBrown.map((item, index) => ( // attravez do map vou renderizar todos os dados de frases (item é o dado em sí, index é a posicao do dado no objeto)
            <button 
              key={item.id} // indicando a posicao
              className='categoria-button'
              style={{
                borderWidth: item.nome === frasesCharlieBrown[categoriaSelecionada].nome ? 2 : 0, // se item.nome for igual a categoriaSelecionada.nome a grossura da borda sera 2 senao 0 
                borderColor: '#B22222' // sendo true a cor da borda tb será azul
              }}
              onClick={ () => alterarCategoria(index)} // como eu vou usar a posicao para alterar a posicao eu preciso do parametro index para faze a troca 
            >
                {item.nome} {/* renderizando o dado nome do objeto */}
            </button>


          ))
        }
        
      </section>

      <button
        onClick={gerarFrase} 
        className='button-frase'
      >
          Gerar frase
      </button>

    
      {
        textFrase !== ''  ? <p className='textoFrase'>{textFrase}</p> :  <p style={{display: 'none'}}>{textFrase}</p> 
      }
      
    </div>
  )
}

export default App
