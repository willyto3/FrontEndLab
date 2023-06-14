// ? IMPORTACIÓN DE PAQUETES
import { useState } from 'react'
// Se Importa el Use Navigate de React Router
import { useNavigate } from 'react-router-dom'

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import {
  ArrowDropDownOutlined,
  Search,
  SettingsOutlined,
} from '@mui/icons-material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { InputBase, Avatar } from '@mui/material'

// ? IMPORTACIÓN DE COMPONENTES
// Importamos la tienda
import { labStore } from '../store/labStore'

// ! INICIO DEL COMPONENTE PROTECTED NAV BAR
const ProtectedNavBar = () => {
  // ? CONSTANTES
  // se usa la tienda para conocer el valor del usuario
  const user = labStore(state => state.user)
  // se usa la tienda para ejeutat la funcion logout
  const logout = labStore(state => state.logout)
  // Usamos la navegacion
  const navigate = useNavigate()
  // ? USE STATE
  const [anchorEl, setAchorEl] = useState(null)
  const isOpen = Boolean(anchorEl)
  // ? FUNCIONES
  const handleClick = event => setAchorEl(event.currentTarget)
  const handleClose = () => setAchorEl(null)

  // ? VISUALIZACION DEL COMPONENTE
  return (
    <AppBar sx={{ position: 'static', background: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <InputBase placeholder='Buscar...' />
        <IconButton>
          <Search sx={{ fontSize: '1.5rem' }} />
        </IconButton>

        <Box display='flex'>
          <IconButton>
            <NotificationsOutlinedIcon sx={{ fontSize: '1.5rem' }} />
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: '1.5rem' }} />
          </IconButton>
          <Button
            onClick={handleClick}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textTransform: 'none',
              gap: '0.5rem',
            }}
          >
            <Avatar alt='Picture Profile' sx={{ width: 45, height: 45 }} />
            <Box textAlign='left'>
              <Typography variant='subtitle2'>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant='subtitle2'>{user.cargo}</Typography>
            </Box>
            <ArrowDropDownOutlined sx={{ fontSize: '1.5rem' }} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MenuItem>Ver Perfil</MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                logout()
                navigate('/')
              }}
            >
              Salir
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default ProtectedNavBar
