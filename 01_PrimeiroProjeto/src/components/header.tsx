import './header.css'


interface HeaderProps{ // criando uma interface com dado title do tipo string
  title?: string  // esse ? diz que é opcional o dado 
}


export default function Header( { title = 'Curso de React + Typescript' }: HeaderProps ){  // Como o title é opicional podemos passar um title por default caso não seja repassado nada
  return (                                                                                // neste caso se não for passado nenhum titulo será passado  'Curso de React + Typescript'     
    <header className='header'>
      <h1 className='title'> {title} </h1>
      <hr />
    </header>
  )
}
