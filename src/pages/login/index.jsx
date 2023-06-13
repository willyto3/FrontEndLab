// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useMediaQuery } from '@mui/material'

// ? IMPORTACIÓN DE COMPONENTES
import LoginForm from './LoginForm'

// ! INICIO DEL COMPONENTE LOGIN
const Login = () => {
  // Constante para identificar si se encuentra en modo Movil
  const pantallaCompleta = useMediaQuery('(min-width:1000px)')

  // ? VISUALIZACION DEL COMPONENTE
  return (
    <Box>
      <Box
        width={pantallaCompleta ? '50%' : '93%'}
        p='2rem'
        m='2rem auto'
        borderRadius='1.5rem'
      >
        <Typography fontWeight='500' variant='h5' sx={{ mb: '1.5rem' }}>
          Bienvenido al Laboratorio Apiay
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  )
}
export default Login
