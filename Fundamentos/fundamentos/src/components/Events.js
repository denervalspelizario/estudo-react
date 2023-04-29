

const Event = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('Ativou o Evento');
    };
    const renderSomething = (x) => {
        if(x){

            return <h1>Renderizando isso</h1>

            }  else {

                return <h1>também posso renderizar isso !!</h1>
            }
    };


    return (
        <div>
            <div>
                <button onClick={handleMyEvent} >Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou')}>Clique aqui também</button>
                <button onClick={() => { if (true) {console.log('Isso não deveria existir!!')}}}  >Clique Aqui Por Favor!</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}

        </div>
    )
};

export default Event;