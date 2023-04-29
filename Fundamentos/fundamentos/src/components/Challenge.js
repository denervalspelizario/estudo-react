

const Challenge = () => {
    let a = 10;
    let b = 50;

    const botaoSoma = () => {
        console.log(a + b);
    }


    return (
        <div>
            <h1>Os numeros do exericios são</h1>
            <p>O numero da variavel a é {a}</p> 
            <p>O numero da variavel a é {b}</p> 
            <button onClick={botaoSoma} >Clique no Botão</button>
        </div>
    )
}


export default Challenge;