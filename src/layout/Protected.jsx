// ? IMPORTACIÓN DE PAQUETES
// Importacion de Outlet de React Router
import { Outlet } from 'react-router-dom'
import ProtectedNavBar from '../components/ProtectedNavBar'

const Protegido = () => {
  return (
    <>
      <ProtectedNavBar />
      <Outlet />
    </>
  )
}
export default Protegido
