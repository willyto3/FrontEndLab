// ? IMPORTACIÓN DE PAQUETES
// Importacion de Use State
import { useState } from 'react'
// Importación de Formik
import { Formik } from 'formik'
// Importación de NotiStack
import { useSnackbar } from 'notistack'
// Importación de JWT Decode
import jwtDecode from 'jwt-decode'
// Importacion de Use Navigate de React Router Dom
import { useNavigate } from 'react-router-dom'

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import { useMediaQuery } from '@mui/material'

// ? IMPORTACIÓN DE COMPONENTES
// Importamos la tienda
import { labStore } from '../../store/labStore'
// Importamos el esquema del formulario de Usuario
import { loginSchema, initialValues } from './loginSchema'
// Login Usuario
import { login } from '../../api/auth'

// ! COMIENZO DEL COMPONENTE LOGIN FORM
const LoginForm = () => {
  // ? CONSTANTES
  // se usa la tienda para darle valor al token
  const setToken = labStore(state => state.setToken)
  // se usa la tienda para darle valor al Usuario
  const setUser = labStore(state => state.setUser)
  const { enqueueSnackbar } = useSnackbar()
  // Se crea la constante de Navegación
  const navigate = useNavigate()
  const pantallaCompleta = useMediaQuery('(min-width:600px')
  // Use State
  const [showPassword, setShowPassword] = useState(false)

  // ? FUNCIONES
  // Función para mostrar y ocultar la contraseña
  const handleClickShowPassword = () => setShowPassword(show => !show)
  // Función para evitar que se realicen las verificaciones cuando se presiona el boton mostrar y ocultar la contraseña
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  // Funcion para manejar el boton del formulario
  const handleSubmit = async (values, onsubmitProps) => {
    const response = await login(values)

    if (response.accessToken) {
      setToken(response.accessToken)
      const user = jwtDecode(response.accessToken)
      setUser(user.UserInfo)
      enqueueSnackbar(`${response.message}`, {
        variant: 'success',
      })
      onsubmitProps.resetForm()
      navigate('/dashboard')
    } else {
      enqueueSnackbar(`${response.message}`, {
        variant: 'error',
      })
    }
  }

  // ? VISUALIZACION DEL COMPONENTE
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={loginSchema}
      validateOnChange={false}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display='grid'
            gap='30px'
            gridTemplateColumns='repeat(4,minmax(0,1fr))'
            sx={{
              '& >div': {
                gridColumn: pantallaCompleta ? undefined : 'span 4',
              },
            }}
          >
            <TextField
              label='Email'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email.toLowerCase()}
              name='email'
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: 'span 4' }}
            />
            <TextField
              label='Contraseña'
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name='password'
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: 'span 4' }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              disabled={isSubmitting}
              type='submit'
              variant='contained'
              sx={{
                m: '2rem 0',
                p: '1rem',
              }}
            >
              INGRESO
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  )
}
export default LoginForm
