// ? IMPORTACIÓN DE PAQUETES
// Importacion de createBrowser Router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

// ? IMPORTACIÓN DE LAYOUTS
import Public from '../layout/Public'
import Root from '../layout/Root'
import Protected from '../layout/Protected'

// ? IMPORTACIÓN DE PAGINAS
import Error404 from '../pages/error404'
import Index from '../pages/index'
import Login from '../pages/login'
import DashBoard from '../pages/dashboard'
import Users from '../pages/users'
import RegisterUser from '../pages/users/RegisterUser'

//! FUNCIÓN ROUTER
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} errorElement={<Error404 />}>
      <Route path='/' element={<Public />}>
        <Route index element={<Index />} />
        <Route path='ingreso' element={<Login />} />
      </Route>
      <Route path='dashboard' element={<Protected />}>
        <Route index element={<DashBoard />} />
        <Route path='listadousuarios' element={<Users />} />
        <Route path='registrarusuario' element={<RegisterUser />} />
      </Route>
    </Route>
  )
)
