// ? IMPORTACIÓN DE PAQUETES

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'

// ? IMPORTACIÓN DE COMPONENTES
import Header from '../../components/Header'
import UserTable from './UserTable'

const Users = () => {
  return (
    <Box m='0 0.5rem'>
      <Header title='Usuarios' subtitle='Listado de Usuarios' />
      <Grid container>
        <Grid item md={12}>
          <UserTable />
        </Grid>
      </Grid>
    </Box>
  )
}
export default Users
