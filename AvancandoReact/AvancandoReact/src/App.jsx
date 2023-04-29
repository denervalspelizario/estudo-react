
import './App.css';
import ImageImportada from '/image/imag5.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import {Fragment, useState} from 'react';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import Exercicio1 from './components/Exercicio1';


function App() {
  const name = 'Gabi';  
  const [userName] = useState("Pedro");  // pode se passar valores diretos ou  dinamicos pelo props

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Vermelha', novoCarro: true, km: 0},
    {id: 2, brand: 'BMW', color: 'Azul', novoCarro: true, km: 0},
    {id: 3, brand: 'Mercedez', color: 'cinza', novoCarro: false, km: 2000},
    {id: 4, brand: 'Porsche', color: 'azul', novoCarro: true, km: 0},
    {id: 5, brand: 'Fiat', color: 'cinza', novoCarro: false, km: 10000}

  ]

  function showMessage(){
    console.log("Evento do componente pai!");
  }

  const [ message, setMessage ] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }



  const exercicio = [
    {id: 1, nome: 'Denerval', idade: 37, profissao: 'Front-end React junior'},
    {id: 2, nome: 'Francisca', idade: 29, profissao: 'Sales'},
    {id: 3, nome: 'Gabi', idade: 11, profissao: 'estudante'},
    {id: 4, nome: 'Pedro', idade: 9, profissao: 'estudante'},
    {id: 5, nome: 'Tom', idade: 2, profissao: 'estudante'}

  ]

  
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <img src="/image/imag2.jpg" alt="" />
      {/*Imagem importada public */}
      <img src={ImageImportada} alt="" />
      <ManageData />
      <ListRender />
      <ConditionalRender /> 
        {/*  PROPS */}
      <ShowUserName name={userName} />
        {/*  destructuring */}
      <CarDetails  brand='vw' km={1000} color='Azul' novo={false} />
        {/*  reaproveitamento */}
      <CarDetails brand='Ford' color='Vermelho' km={2000}  novo={true}/>  
      <CarDetails brand='Fiat' color='Branco' km={4500} novo={false}/> 
        {/*  loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails  key={car.id} brand={car.brand} color={car.color} km={car.km}   novoCarro={car.novoCarro}/>
      ))}
      {/*  fragment */}
      <Fragments propFragment='teste' />
      {/*  children */}
      <Container valor='1520'>

        <p>Este é o conteudo</p> 

      </Container> 

      {/*  Funções com prop */} 
      <ExecuteFunction  myFunction={showMessage} />

      {/* state lift */}

      <Message msg={message}/>  
      <ChangeMessageState handleMessage={handleMessage} />    

      {/* Lista e Condicional   */}

      {exercicio.map((dados) => (
             <Exercicio1       nome={dados.nome}  profissao={dados.profissao} idade={dados.idade}/>
      ))}  
    
    </div>
  )
}

export default App
