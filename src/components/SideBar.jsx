// ? IMPORTACIÓN DE PAQUETES
import { PropTypes } from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { useState } from 'react'

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { ChevronLeft, ReceiptLongOutlined } from '@mui/icons-material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import { Avatar } from '@mui/material'

// ? IMPORTACIÓN DE COMPONENTES
import { labStore } from '../store/labStore'

const navItems = [
  {
    title: 'Dashboard',
    to: '/dashboard',
    view: 'user',
    icon: <HomeOutlinedIcon />,
  },
  {
    title: 'Usuarios',
    icon: null,
  },
  {
    title: 'Listado Usuarios',
    to: 'listadousuarios',
    view: 'user',
    icon: <PeopleOutlinedIcon />,
  },
  {
    title: 'Registro Usuarios',
    to: 'registro',
    view: 'admin',
    icon: <ReceiptLongOutlined />,
  },
  {
    title: 'Clientes',
    icon: null,
  },
  {
    title: 'Listado Clientes',
    to: 'clientlist',
    view: 'user',
    icon: <PeopleOutlinedIcon />,
  },
  {
    title: 'Registro Clientes',
    to: 'registro',
    view: 'admin',
    icon: <ReceiptLongOutlined />,
  },
]

// ! INICIO DEL COMPONENTE SIDE BAR
const SideBar = () => {
  // ? CONSTANTES
  // se usa la tienda para conocer el valor del usuario
  const user = labStore(state => state.user)
  const navigate = useNavigate()
  const { collapseSidebar, collapsed } = useProSidebar()

  const [selected, setSelected] = useState('dashboard')

  const Item = ({ title, to, icon, view, selected }) => {
    return (
      (user.role === 'superAdmin' ||
        user.role === 'admin' ||
        user.role === view) && (
        <MenuItem
          active={selected === title}
          onClick={() => {
            setSelected(title)
            navigate(to)
          }}
          icon={icon}
        >
          <Typography>{title}</Typography>
        </MenuItem>
      )
    )
  }

  // ? VISUALIZACION DEL COMPONENTE
  return (
    <Box
      sx={{
        position: 'sticky',
        display: 'flex',
        height: '100vh',
        top: 0,
        bottom: 0,
        zIndex: 10000,
        '& .sidebar': {
          border: 'none',
        },
        '& .ps-menu-icon': {
          backgroundColor: 'transparent !important',
        },
        '& .ps.menu-item': {
          backgroundColor: 'transparent !important',
        },
        '& .ps-menu-anchor': {
          color: 'inherit !important',
          backgroundColor: 'transparent !important',
        },
        '& .ps-menu-item:hover': {
          backgroundColor: 'transparent !important',
        },
        '& .ps-menu-item.ps-active': {
          backgroundColor: 'transparent !important',
        },
      }}
    >
      <Sidebar>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => collapseSidebar()}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 10px 0',
            }}
          >
            {!collapsed && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='10px'
              >
                <Typography variant='h4'>Lab APIAY </Typography>
                <ChevronLeft />
              </Box>
            )}
          </MenuItem>

          {!collapsed ? (
            <Box mb='10px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <Avatar alt='Picture Profile' sx={{ width: 90, height: 90 }} />
              </Box>
              <Box textAlign='center'>
                <Typography variant='h5' sx={{ m: '10px 0 0 0' }}>
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant='subtitle1'>{user.cargo}</Typography>
              </Box>
            </Box>
          ) : (
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar alt='Picture Profile' sx={{ width: 50, height: 50 }} />
            </Box>
          )}

          <Box paddingLeft={collapsed ? undefined : '10%'}>
            {navItems.map(({ title, to, icon, view }) => {
              if (!icon) {
                return (
                  <Typography
                    key={title}
                    variant='subtitle2'
                    sx={{ m: '10px 0 5px 10px' }}
                  >
                    {title}
                  </Typography>
                )
              }
              return (
                <Item
                  key={title}
                  title={title}
                  to={to}
                  icon={icon}
                  selected={selected}
                  setSelected={setSelected}
                  view={view}
                />
              )
            })}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}
export default SideBar

SideBar.propTypes = {
  title: PropTypes.string,
  view: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.string,
  selected: PropTypes.string,
}
