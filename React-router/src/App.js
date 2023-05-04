import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // importando as configs para rotas

import Home from './pages/Home.js';
import About from './pages/About.js';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm'; // 9 - search
import Search from './pages/Search'; // 9 search

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter> {/* define onde é a area do app vai trocar as paginas */}
        
        <Navbar /> {/* Obs como a navbar tem elementos do react-router ela tem que ficar dentro do BrowserRouter senão ficaria de fora */}
        
        {/*  Search ou Busca - Entre a Navbar e o Router colocando um formulário de busca */}
        <SearchForm />
        
        <Routes> {/* Define as rotas */}

          <Route path="/" element={<Home />} /> {/* trabalhando com routes a pasta das rotas é pages e não components - o path é o nome do endereço por isso a principal é só '/' */}
        
          <Route path="/about" element={<About />} />
        
          {/* 4 - Rota dinámica */}
          <Route path="/products/:id" element={<Product />} /> {/* o :id é a rota dinamica  */}
        
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} /> {/* path o endereço na url e o element(a rota verdadeiro)  que leva ao component Info*/}
        
          {/* 9 - Search*/}
          <Route path='/search'  element={<Search />}/> {/* 9 - path o endereço na url e o element(a rota verdadeiro)  que leva ao page Search*/}
        
          {/* 10 - Redirect - maneira de redirecionamento se caso necessitar fazer durante o projeto */}
          <Route path='/company' element={<Navigate to='/about'/>} /> {/* 10 - company que é arota antiga - o to=''  é para onde vai direcionar no caso about */}
        
          {/* 7 - Rota de erro user colocar qualquer coisa na barra que não exista ele direciona para este caminho */}
          <Route path='*'  element={<NotFound />}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
