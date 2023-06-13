interface AlunoProps{  // criando a interface que recebe dado e seu tipo no caso name sendo tipo string e idade tipo number
  nome: string;
  idade: number;
}

export default function Aluno( {nome, idade}:AlunoProps ){  // adicionando a interface AlunoProps ao componente Aluno
  return(
    <div>
      <h1>Aluno : {nome}</h1>
      <h2>Idade: {idade}</h2>
    </div>
  )
}