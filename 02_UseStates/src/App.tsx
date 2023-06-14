import { useState } from "react"

export default function App(){
  const [input, setInput] = useState("") // state iniciando vazio
  const [aluno, setAluno] = useState("Sem nenhum nome") // state iniciando com string
  const [idade, setIdade] = useState("") // state iniciando vazio

  function mostrarAluno(){
    setAluno(input)
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

      <h3>Bem vindo: {aluno}</h3>
      <h3>Sua idade: {idade}</h3>
    </div>
  )
}


