// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'

// ? IMPORTACIÓN DE COMPONENTES
import Header from '../../components/Header'
import UserForm from './UserForm'



const RegisterUser = () => {
  return (
    <Box>
      <Header title='Usuarios' subtitle='Crear Usuario'/>
      <Grid container>
        <Grid item md={12} m='0 2rem'>
          <UserForm/>
        </Grid>
      </Grid>
    </Box>
  )
}
export default RegisterUser
