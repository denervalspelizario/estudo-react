import React from 'react';
import './Navbar.css'
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/*
        comentando o link da resoluçao de 1 a 7 pois no curso depois se usa NavLink ao invés de Link
        
        <Link to='/'>Home</Link>     -- Atravez do Link ao invés do <a src=''> a pagina vai direto sem dar reload 
        <Link to='/about'>About</Link>    -- to indica o parametro PARA onde vai ao clicar 
      
      */}

      <NavLink to='/'// className={({isActive}) => (isActive) ? 'esta-ativo' : 'nao-ativo'} - 8 existe a possibilidade de colocar o active dinamico 
      >Home</NavLink> {/* NavLink é igual o link porem nós conseguimos demonstrar em qual link estamos na pagina */}
      <NavLink to='/about'>Sobre</NavLink>   {/* Observar a classe .active que esta estilizando o link para identificação do user onde a pagina está*/} 
      <NavLink to='/contact'>Contato</NavLink> 
        
    </nav>
  )
}

export default Navbar