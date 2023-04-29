


const Template = () => {
    const name = 'Denerval';
    const data = {
        age: 35,
        job: 'Programador',
    };



    return(
        <div>
            <h1>Olá {name} tudo bem?</h1>
            <p>Sua profissão é {data.job}</p>
            <p>Sua idade é {data.age}</p>
        </div>

    )


}


export default Template;