
import './App.css';
import Mycomponent from './components/Mycomponent';
import {useState} from 'react'
import Title from './components/Title';

function App() {

  const valor = 15;

  const [name] = useState('Denerval');

  const redTitle = false

  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React com css</h1>
      {/*CSS de componente*/}
      <Mycomponent />
      <p>Paragrafo global</p>
      {/*CSS INLINE*/}
      <p style={{ color: 'blue', padding: '25px', backgroundColor: 'black', borderTop: '3px solid red' }}>
        Este elemento foi estilizado de forma inline  
      </p>
      {/*CSS Inline Dinâmico*/}
      <h2 style={valor < 10 ? {color: 'purple'} : {color: 'pink'}} >
        Css dinãmico como texto
      </h2>
      <h2 style={valor > 10 ? {color: 'purple'} : {color: 'pink'}} >
        Css dinãmico como texto
      </h2>
      <h2 style={
        name === 'Denerval' ? 
            {color: 'green', backgroundColor: '#000'} 
            : null
          } 
        >
        Css dinãmico como texto
      </h2>
      {/*Classe dinâmica*/}
      <h2 className={redTitle  ? 'red-title' : 'title'} >Este título vai ter classe dinâmica</h2>
      {/*Css Modules*/}
      <Title />
    </div>
  );
}

export default App;
