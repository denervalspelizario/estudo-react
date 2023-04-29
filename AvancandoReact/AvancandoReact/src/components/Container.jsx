

function Container({children, valor}) {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        <p>O valor da propriedade {valor}</p>
    </div>
  )
}

export default Container