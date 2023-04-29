
import './App.css';

import Cars from './components/Cars';

function App() {
  
  const carros = [
    {id: 1, modelo: '458', marca:'Ferrari', km: 0, color: 'vermelho'},
    {id: 2, modelo: 'Cayman', marca:'Porsche', km: 1500, color: 'cinza'},
    {id: 3, modelo: 'M5', marca:'BmW', km: 25000, color: 'azul'},
    {id: 4, modelo: 'Panamera', marca:'Porsche', km: 0, color: 'preto'},
  ]


  return (
    <div className="App">
      <h1>Carros estilizados com escoped</h1>
      <div className='card__component'>
        {carros.map((car) => (
          <Cars  marca={car.marca} modelo={car.modelo} color={car.color} km={car.km} />
        ))}
      </div>
      
    </div>
  )
}

export default App
