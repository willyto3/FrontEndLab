// ? IMPORTACIÓN DE PAQUETES
// Importacion de Outlet de React Router
import { Outlet } from 'react-router-dom'

// ? IMPORTACIÓN DE COMPONENTES
import ProtectedNavBar from '../components/ProtectedNavBar'
import SideBar from '../components/SideBar'

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'

// ! INICIO DEL COMPONENTE PROTECTED
const Protected = () => {
  // ? VISUALIZACION DEL COMPONENTE
  return (
    <Box display='flex' width='100%' height='100%'>
      <SideBar />
      <Box flexGrow={1}>
        <ProtectedNavBar />
        <Outlet />
      </Box>
    </Box>
  )
}
export default Protected
