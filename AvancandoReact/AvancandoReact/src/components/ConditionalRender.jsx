import {useState} from 'react';




function ConditionalRender() {
    const [x] = useState(false);

    const [name, setName] = useState("Francisca");

    

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é false mas aparace mesmo assim por causa do !</p>}
        <h1>If ternario</h1>
        {name === "Francisca" ? (
            <div>
                <p>O nome é Francisca</p>
            </div>
        ) : (
            <div>
                <p>O nome é Denerval</p>
            </div>
        ) }
        <button onClick={() => setName ('Denerval')}> Clique Aqui!</button>
    </div>
  )
}

export default ConditionalRender