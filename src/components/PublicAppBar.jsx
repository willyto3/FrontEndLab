// ? IMPORTACION DE PAQUETES
import { useState } from 'react'
// Se Importa el Use Navigate de React Router
import { useNavigate } from 'react-router-dom'

// ? IMPORTACION DE ELEMENTOS DE DISEÑO
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ArrowDropDownOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'

// ? IMPORTACIÓN DE COMPONENTES
// Importamos la tienda
import { labStore } from '../store/labStore'

// ! INICIO DEL COMPONENTE PUBLIC APP BAR
const PublicAppBar = () => {
  // ? CONSTANTES
  // se usa la tienda para conocer el valor del usuario
  const user = labStore(state => state.user)
  // se usa la tienda para conocer el valor del Token
  const token = labStore(state => state.token)
  // se usa la tienda para ejeutat la funcion logout
  const logout = labStore(state => state.logout)
  // Usamos la navegacion
  const navigate = useNavigate()
  const drawerWidth = 340
  const navItems = token
    ? ['inicio', 'nosotros', 'contacto']
    : ['inicio', 'nosotros', 'contacto', 'ingreso']

  // Use State
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAchorEl] = useState(null)
  const isOpen = Boolean(anchorEl)

  // ? FUNCIONES
  const handleClick = event => setAchorEl(event.currentTarget)
  // Función para cerrar el menú
  const handleClose = () => setAchorEl(null)
  // Función de Cambio de Estado para mostrar la ventana movil
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  // Ventana Movil
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h3' sx={{ my: 2 }}>
        Lab APIAY
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                navigate(item === 'inicio' ? '/' : `/${item}`)
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{ variant: 'h4' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  // ? VISUALIZACION DEL COMPONENTE
  return (
    <Box>
      <AppBar component='nav'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h3'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            onClick={() => navigate('/')}
          >
            Lab APIAY
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            {navItems.map(item => (
              <Button
                key={item}
                sx={{ color: '#fff' }}
                onClick={() => {
                  navigate(item === 'inicio' ? '/' : `/${item}`)
                }}
              >
                <Typography variant='h5' letterSpacing='0.1rem'>
                  {item}
                </Typography>
              </Button>
            ))}

            {token ? (
              <>
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
                  <Avatar
                    alt='Picture Profile'
                    sx={{ width: 40, height: 40 }}
                  />

                  <Box textAlign='left'>
                    <Typography variant='body2' color='white'>
                      {user.firstName} {user.lastName}
                    </Typography>
                    <Typography variant='body2' color='white'>
                      {user.cargo}
                    </Typography>
                  </Box>
                  <ArrowDropDownOutlined
                    sx={{ fontSize: '2rem', color: 'white' }}
                  />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={isOpen}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                  <MenuItem
                    onClick={() => {
                      console.log('Menu')
                    }}
                  >
                    Ver Perfil
                  </MenuItem>
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
              </>
            ) : (
              ''
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component='main'>
        <Toolbar />
      </Box>
    </Box>
  )
}
export default PublicAppBar
