import { useState } from "react"


interface UserProps { // interface com 2 dados (nome e cargo)
  nome: string;
  cargo: string;
}



export default function App(){
  const [user, setUser] = useState<UserProps>({  // tipando a state com UserProps
    nome: 'visitante',
    cargo: ''
  })
  
  function handleLogin(){
    setUser({
    nome: 'Denerval Pelizario',
    cargo: 'Desenvolvedor de Software Senior e Youtuber' 
    })
  }

  function handleLogout(){
    setUser({
      nome: 'visitante',
      cargo: '' 
      })
  }


  return(
    <div>
      <h1>Conhecendo useState</h1>

      <button onClick={handleLogin}>
        Entrar
      </button>

      <button onClick={handleLogout}>
        Logout
      </button>

      <h4>Olá {user.nome}</h4>
      <strong>{user.cargo}</strong>  
    </div>
  )
}


