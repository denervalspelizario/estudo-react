import { RouterProvider } from 'react-router-dom'
import { router } from './routes' 


function App() {
  

  return (
    <RouterProvider router={router} /> // todas as configuracoes de rotas estão em router (verificar router.tsx)
  )
}

export default App
