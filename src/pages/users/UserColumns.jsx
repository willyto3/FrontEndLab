// ? IMPORTACIÓN DE PAQUETES
import { useMemo } from 'react'

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

// ? IMPORTACIÓN DE COMPONENTES
import UserActions from './UserActions'

const columnas = () => {
  // Columnas de la tabla de Auditores

  const columns = useMemo(
    () => [
      {
        field: 'picturePath',
        headerName: '',
        width: '50',
        renderCell: params => (
          <Avatar
            alt='Picture Profile'
            sx={{ width: 30, height: 30 }}
          />
        ),
        sortable: false,
        filterable: false,
      },
      { field: 'documentID', headerName: 'Documento', flex: 0.5 },
      {
        field: 'fullName',
        headerName: 'Nombre Completo',
        flex: 0.8,
        valueGetter: params =>
          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        cellClassName: 'name-column--cell',
      },
      { field: 'email', headerName: 'Email', flex: 0.6 },
      { field: 'cargo', headerName: 'Cargo', flex: 0.5 },
      {
        field: 'role',
        headerName: 'Rol',
        flex: 0.35,
        renderCell: ({ row: { role } }) => {
          return (
            <Box
              width='95%'
              m='0 auto'
              p='5px'
              display='flex'
              justifyContent='space-between'
              borderRadius='4px'
            >
              {role === 'admin' && (
                <AdminPanelSettingsOutlinedIcon sx={{ fontSize: '1.5rem' }} />
              )}
              {role === 'superAdmin' && (
                <SecurityOutlinedIcon sx={{ fontSize: '1.5rem' }} />
              )}
              {role === 'user' && (
                <LockOpenOutlinedIcon sx={{ fontSize: '1.5rem' }} />
              )}
              <Typography sx={{ ml: '5px' }} variant='subtitle1'>
                {role}
              </Typography>
            </Box>
          )
        },
      },
      {
        field: 'isActive',
        headerName: '',
        width: 50,
        renderCell: ({ row: { isActive } }) => {
          return (
            <Box
              width='90%'
              m='0 auto'
              p='5px'
              display='flex'
              justifyContent='center'
            >
              {isActive && (
                <CheckCircleOutlineIcon sx={{ fontSize: '1.5rem', color:'green' }} />
              )}
              {!isActive && <CancelOutlinedIcon sx={{ fontSize: '1.5rem', color:'red' }} />}
            </Box>
          )
        },
      },
      {
        field: 'actions',
        headerName: 'Acciones',
        type: 'actions',
        flex: 0.4,
        renderCell: params => <UserActions {...{ params }} />,
      },
    ],
    []
  )
  return columns
}
export default columnas
