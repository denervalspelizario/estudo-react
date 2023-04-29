import './Cars.css';

const Cars = (props) => {
  return (
    <div className="card__container">
      <div className='card'>
        <h2>Modelo: {props.modelo}</h2>
        <p>Montadora: {props.marca}</p>
        <p>Cor: {props.color}</p>
        <p>Kilometragem:  {props.km}</p>
      </div>
    </div>
  )
}

export default Cars