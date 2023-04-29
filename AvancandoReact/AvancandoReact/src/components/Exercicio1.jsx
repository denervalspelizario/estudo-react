import React from 'react'

const Exercicio1 = ({nome, idade, profissao}) => {
  return (
    <div>
        <h1>Dados do usuário</h1>
        <h2>Nome do cliente {nome}</h2>
        <p>profissão {profissao}</p>
        <p>idade {idade}</p>
        { idade > 18 ? (<p>Pode tirar habilitação</p>) : ( <p>Menor de idade</p> )};
    </div>
  )
}

export default Exercicio1