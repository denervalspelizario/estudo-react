import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - contolled inputs

    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : " ");  // manipulacao do input tipo 1  * 6 controlled inputs, é usado para pré preenchimento de um input  
    const [email, setEmail] = useState(user ? user.email : " ");  // manipulacao do input  tipo 2  * 6 controlled inputs, é usado para pré preenchimento de um input  

    const [bio, setBio] = useState(user ? user.bio : " ");

    const [role, setRole] = useState(user ? user.role : " ");

    const handleName = (e) => {  // recebe o valor do input e na variavel name para podermos manipular os dados
        setName(e.target.value)
    }

    console.log(name);
    console.log(email); // 

    const handleSubmit = (event) => {  /*  funcao para Envio de form  e ocasionalmente validacao de dados*/
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role);

        // 7 - limpar formulário
        setName("");
        setEmail("");
        setBio("");
    }


  return (
    <div>
        
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit} >  {/* 5 - Envio de form */}
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name'  placeholder=' Digite seu nome' onChange={handleName}  value={name} /> {/* O comando onchange  recebe  o input na variavel handle */}
            </div>
            {/* 2 - label envolvendo input esta segunda abordagem é sugeria pela documentação porem vc vai encontrar as 2 abordagens*/} 
            <label >
                <span>E-mail: </span>
                {/* 3 - simplificacao de manipulacao  de state*/}
                <input type="email" name='email' placeholder=' e-mail' onChange={(e) => setEmail(e.target.value)} value={email}/> {/*  Maneir a mais direta de maninupulacao porem mais direta*/}
            </label>
            {/* 8 - textarea */}
            <label >
                <span>Bio: </span>
                <textarea name="bio" placeholder='Descrição do usuário'  onChange={(e) => setBio(e.target.value)} value={bio} ></textarea>
            </label>
            {/* 9 - select */}
            <label >
                <span>Função no sistema</span>
                <select name="role"  onChange={(e) => setRole(e.target.value)}  value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            
            <input type="submit" value=" Enviar " />
        </form>
    </div>
  )
}

export default MyForm