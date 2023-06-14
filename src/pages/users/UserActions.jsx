// ? IMPORTACIÓN DE PAQUETES
import { useState } from 'react'

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'
import { IconButton, Tooltip } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { Delete } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

// ? IMPORTACIÓN DE COMPONENTES

import { labStore } from '../../store/labStore'

// ? IMPORTACION DE HOOKS
import { useDeleteUser } from '../../hooks/useUsers'

// ! COMIENZO DEL COMPONENTE USER ACTIONS
const UserActions = ({ params }) => {
  // ? CONSTANTES
  // Se utiliza la mutacion de Eliminar Usuario
  const { mutate: deleteUser } = useDeleteUser()
  // se usa la tienda para conocer el valor del usuario
  const user = labStore(state => state.user)
  // se usa la tienda para conocer el valor del usuario
  const token = labStore(state => state.token)

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Eliminar Auditor'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            ¿Esta Seguro de Eliminar este Auditor?.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancelar
          </Button>
          <Button onClick={() => deleteUser(params.id, token)}>Eliminar</Button>
        </DialogActions>
      </Dialog>
      <Tooltip title='Ver Detalles del Auditor'>
        <IconButton>
          <VisibilityOutlinedIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
      </Tooltip>

      {user.role !== 'user' && (
        <Tooltip title='Eliminar Auditor'>
          <IconButton onClick={handleClickOpen}>
            <Delete sx={{ fontSize: '1.5rem', color: 'red' }} />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  )
}

export default UserActions
