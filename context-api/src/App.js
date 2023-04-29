import './App.css';
// 1 - config react router
import { BrowserRouter, Routes, Route, } from 'react-router-dom'; // importando as confuigs para rotas

// imports das rotas -pages
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

// componets

import Navbar from './component/Navbar';

// 
function App() {
  return (
    <div className="App">
      <h1>Contexto Api</h1>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* trabalhando com routes a pasta das rotas é pages e não components - o path é o nome do endereço por isso a principal é só '/' */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
