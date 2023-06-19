import { useState } from "react"


export default function App(){

  const [ input, setInput] = useState('')
  const [ tasks, setTasks] = useState<string[]>([]) // state que é uma array de string lembre-se string[] estou tipando como array de string


  const [editTask, setEditTask] = useState({ // state que é um array
    
    enable: false, // dado que vai indicar se vai editar ou não estando true sinaliza uma edicao 
    task: '' // tarefa que inicia vazia
  
  })

  // FUNCAO DE REGISTRAR UMA TAREFA 
  function handleRegister(){
    
    if(!input){ // se input estiver false ou seja nda foi adicionado a ele então
      alert("Preencha todos os dados") // de o alerta
      return // return para parar a execução
    }


    if(editTask.enable){ // se enable estiver true siginifica que esta editando uma task
      
      handleSaveEdit(); // então chama a funcao para editar o edit
      return
    } 





    setTasks(tarefas => [...tarefas, input]) // estou pegando atravez do spread operator(...tarefas) todos os dados que já tem e adicionando mais uma tarefa 
                                             // ou seja ...tarefas(tarefas antigas) + input(tarefa adicionada) e jogando em tarefas e depois na state tasks
                                             // no final tasks vai ter tarefas antigas + a nova tarefa 

    setInput('') // zerando input após adicionar a tarefa                                         
  }



  // FUNCAO DELETANDO UMA TAREFA
  function handleDelete(item: string){
    
    const removeTask = tasks.filter( task => task !== item) // filter vai percorrer os dados de task e retornar todas as task MENOS
                                                            // o item do parametro no caso o item clicado

    setTasks(removeTask) //depois que removeTask recebe todos os dados MENOS o dado cliclado 
                         // então state task recebe removeTask                                                         
  }

  // FUNCAO EDITAR TAREFA
  function handleEdit(item: string){
    
    setInput(item) // clicou la no btn adiciona o item no input
    
    setEditTask({
      enable: true, // sinalizando que estamos editando
      task: item   // tasks recebe o item que foi clicado
    })
                                                          
  }

  function handleSaveEdit(){
    
    const findIndexTask = tasks.findIndex(task => task === editTask.task) // jogando em find a posicao do item que sera editado
                                                                          // tasks.findIndex = ou seja usando a funcao nativa do js para encontra posicao  na state tasks   
                                                                          // task === editTask.task = indicar a mesma task da state task e da editTask 

    const allTasks = [...tasks] // joguei a state tasks na variavel

    allTasks[findIndexTask] = input // joguei o dado do input NA POSIÇÂO  do item que sera editado

    setTasks(allTasks)

    /* RESUMINDO O CODIGO  
      1 - ENCONTRO A POSICAO DO ITEM QUE SERA EDITADO ATRAVEZ DO FINDiNDEX  
      2 - JOGO A ARRAY COM TODOS OS DADOS EM 1 CONSTANTE
      3 - JOGO O DADO DO INPUT(DADO QUE EU EDITEI) NA MESMA POSICAO DO DADO QUE EU ESCOLHI EDITAR 
      4 - E DEPOIS JOGO ESSA CONSTANTE JA COM OS DADOS ATUALIZADO NA STATE TASK  
       
    */

    setEditTask({
      
      enable: false, 
      task: '' 
      
    })

    setInput('')
                        
  }             




  
  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <input 
        placeholder="Digite o nome da tarefa"  
        value={input}  // input recebe valor de state input
        onChange={(event) => setInput(event.target.value)} // dados digitados no input serão adicionados no state input
      />
      <button onClick={handleRegister}>
        {editTask.enable ? 'Atualizar tarefa' : 'Adicionar tarefa'} 
      </button>
      <hr />


      {tasks.map((item, index) => ( // map faz percorrer todos os dados de task
                                    // item é o dado e index é a posicao 
                                    // ou seja percorre todos os dados em todas posições neste caso vai fazer 3 section com cada item
        <section key={item}>
          <span>{item}</span>
          
          <button 
            onClick={() => handleEdit(item) // a funcão handle delete esta dentro de um funcao anonima para que se execute somente ao clicar
                                              // se adicionar parametro nessa funcao sem ser anonima ela vai ficar em loop executando 
          }>
            Editar
          </button>

          <button 
            onClick={() => handleDelete(item) // a funcão handle delete esta dentro de um funcao anonima para que se execute somente ao clicar
                                              // se adicionar parametro nessa funcao sem ser anonima ela vai ficar em loop executando 
          }>
            Excluir
          </button>
        </section>

      ) )}
    </div>
  )
}


