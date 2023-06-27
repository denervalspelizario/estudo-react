
import { createBrowserRouter } from "react-router-dom";

import Home from './pages/home'
import Sobre from './pages/sobre'
import Contato from './pages/contato'
import Produto from './pages/produto'
import NotFound from './pages/notfound'


export const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home/> 
  },
  {
    path: '/sobre',
    element: <Sobre/>
  },
  {
    path: '/contato',
    element: <Contato/>
  },
  {
    path: '/produto/:id',  // quando eu adiciono a rota /: estou sinalizando que esta rota é dinamica no caso
    element: <Produto/>    // vai receber o id do produto entao se na url eu digitar '/produto/1561516+5' ele vai funcionar e nao dar erro
  },
  {
    path: "*",                  // pagina de erro, Obs sempre deve ser a ultima rota
    element: <NotFound/>
  },

])