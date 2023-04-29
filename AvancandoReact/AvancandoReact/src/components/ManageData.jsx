import { useState } from "react";


const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(false);

    function alter(){
        setNumber(!number);
            
    }



    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={ () => (someData = 15)} >Mudar Variavel</button>
            <p>Valor: {number ? 10 : 25}</p>
            <button onClick={alter}>clque Aqui!</button>
        </div>
    )
}


export default ManageData