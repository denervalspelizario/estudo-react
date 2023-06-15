import { useState } from "react"

interface InfoAlunoProps{  // criando uma interface com dados nome e idade
  nome: string;
  idade: string;
}


export default function App(){
  const [input, setInput] = useState("") // state iniciando vazio
  const [idade, setIdade] = useState("") // state iniciando vazio
  const [contador, setContador] = useState(0)
  

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>() // tipei essa state que recebe InfoAlunoProps ou seja ele TEM que receber orbigatoriamente
                                                               // um name e uma idade ou seja essa state é um objeto com 2 dados 

  function mostrarAluno(){ // função que ao clicar la no btn pega-se dados dos inputs que estao nas states input e idade e adicona na state
                           // infoAluno que é um objeto que recebe tanto nome quanto idade atravez da interafce InfoAlunoProps
    setInfoAluno({
      nome: input,
      idade: idade,
    })
  }

  function adicionar(){ // função que adiciona 1 ao state
    setContador(valorAtual => valorAtual + 1)
  }

  function retirar(){ // função que diminui 1 ao state

    if(contador === 0){ // impedindo que fique negativo
      return
    }

    setContador(valorAtual => valorAtual - 1)
  }


  return(
    <div>
      <h1>Conhecendo useState</h1>
      
      <input 
        placeholder="Digite seu nome"
        value={input}
        onChange={(event) => setInput(event.target.value)} // ou seja o dado do input será adicionando ao state input
      />

      <br />
      <br />

      <input 
        placeholder="Digite sua idade"
        value={idade}
        onChange={(event) => setIdade(event.target.value)} // ou seja o dado do input será adicionando ao state input
      />

      <br />
      <br />

      <button onClick={mostrarAluno}> Mostrar Aluno </button>

      <hr />

      <h3>Bem vindo: {infoAluno?.nome}</h3>
      <h3>Sua idade: {infoAluno?.idade}</h3>


      <button onClick={adicionar}>+</button> {contador} <button onClick={retirar}>-</button>
    </div>
  )
}


