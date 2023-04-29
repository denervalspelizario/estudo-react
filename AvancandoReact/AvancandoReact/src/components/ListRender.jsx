import {useState} from 'react';

function ListRender() {

    const [list] = useState(["Denerval", "Pedro", "Gabi"]);

    const [users, setusers] = useState([
      { id: 1, nome: 'Denerval',  idade: 35},
      { id: 2, nome: 'Francisca',  idade: 29},
      { id: 3, nome: 'Gabi',  idade: 11},
      { id: 4, nome: 'Pedro',  idade: 9},
      { id: 5, nome: 'Tom',  idade: 3},
    ]);

    const deleteRandom = () => {                   {/* deletando user de maneira aleatoria*/}

      const radomNumber = Math.floor(Math.random() * 5);
                                                                         
      setusers((prevUsers) => {
        console.log(prevUsers);
        return prevUsers.filter((user) =>  radomNumber !== user.id );

      })

    }


  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i} >{item}</li> // nao usar mais facil de quebrar
            ))}
        </ul>
        <ul>
          {users.map((user) =>   (
              <li key={user.id}>
                {user.nome} - {user.idade}  {/* mais dificil de quebrar no uso de listas de banco de dados*/}
              </li>
          ) )}
        </ul>
        <button onClick={deleteRandom} >Delete random user</button>
    </div>
  )
}

export default ListRender