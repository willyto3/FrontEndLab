// ? IMPORTACIÓN DE PAQUETES
// Importacion del Router Provider
import { RouterProvider } from 'react-router-dom'

// ? IMPORTACIÓN DE ELEMENTOS
// Importacion del Router
import { router } from './router'

//! INICIO DE LA FUNCIÓN APP
function App() {
  return <RouterProvider router={router} />
}

export default App
