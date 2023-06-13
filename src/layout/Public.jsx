// ? IMPORTACIÓN DE PAQUETES
// Importacion de Outlet de React Router
import { Outlet } from 'react-router-dom'

// ? IMPORTACIÓN DE COMPONENTES
import PublicAppBar from '../components/PublicAppBar'
import Footer from '../components/Footer'

//! INICIO DEL COMPONENTE PUBLICO
const Public = () => {
  // ? VISUALIZACION DEL COMPONENTE
  return (
    <>
      <PublicAppBar />
      <Outlet />
      <Footer/>
    </>
  )
}
export default Public
