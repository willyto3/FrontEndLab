// ? IMPORTACIÓN DE PAQUETES
import { useState } from 'react'

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
import { InputBase } from '@mui/material'

// ? IMPORTACIÓN DE COMPONENTES

// ! INICIO DEL COMPONENTE PROTECTED NAV BAR
const ProtectedNavBar = () => {
  // ? USE STATE
  const [anchorEl, setAchorEl] = useState(null)
  const isOpen = Boolean(anchorEl)
  // ? FUNCIONES
  const handleClick = event => setAchorEl(event.currentTarget)
  const handleClose = () => setAchorEl(null)

  // ? VISUALIZACION DEL COMPONENTE
  return (
    <AppBar sx={{ position: 'static', background: 'none', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <InputBase placeholder='Buscar...' />
        <IconButton>
          <Search sx={{ fontSize: '1.5rem' }} />
        </IconButton>

        <IconButton></IconButton>

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
            gap: '1rem',
          }}
        >
          <Box
            component='img'
            alt='profile'
            height='40px'
            width='40px'
            borderRadius='50%'
            sx={{ objectFit: 'cover' }}
          />
          <Box textAlign='left'>
            <Typography variant='h6'>
              usuario.nombres usuario.apellidos
            </Typography>
            <Typography variant='subtitle1'>usuario.cargo</Typography>
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
          <MenuItem>Salir</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
export default ProtectedNavBar
