// ? IMPORTACIÓN DE PAQUETES
import { Form, Formik } from 'formik'
import { useState } from 'react'
// import Dropzone from 'react-dropzone'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

// ? IMPORTACIÓN DE COMPONENTES
// Importamos el esquema del formulario de Usuario
import { userSchema, cargoOptions, initialValues } from './userSchema'
import { useCreateNewUser } from '../../hooks/useUsers'

// ! COMIENZO DEL COMPONENTE USER FORM
const UserForm = () => {
  // ? CONSTANTES
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const pantallaCompleta = useMediaQuery('(min-width:600px')
  const { mutate: anadirUsuario } = useCreateNewUser()

  // ? USE STATE
  const [cargo, setCargo] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // ? FUNCIONES
  // Función para mostrar y ocultar la contraseña
  const handleClickShowPassword = () => setShowPassword(show => !show)
  // Función para evitar que se realicen las verificaciones cuando se presiona el boton mostrar y ocultar la contraseña
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  // Funcion para registrar un usuario
  const registrarUsuario = async (values, onsubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData()

    for (const value in values) {
      formData.append(value, values[value])
    }

    formData.append('picturePath', values.picture.name)

    anadirUsuario(formData)
    enqueueSnackbar(
      `Se creo el Auditor ${values.nombres} ${values.apellidos}`,
      {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      }
    )
    onsubmitProps.resetForm()
    navigate('/dashboard')
  }

  // Funcion para controlar los eventos en el input Cargo
  const inputHandler = event => {
    setCargo(event.target.value)
  }

// ? VISUALIZACION DEL COMPONENTE
  return (
    <Box m='1rem 1rem'>
      <Formik
        onSubmit={registrarUsuario}
        initialValues={initialValues}
        validationSchema={userSchema}
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
          setFieldValue,
          resetForm,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4,minmax(0, 1fr))'
              sx={{
                '& >div': {
                  gridColumn: pantallaCompleta ? undefined : 'span 4',
                },
              }}
            >
              <TextField
                required
                label='Nombres'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name='firstName'
                error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                color='secondary'
                backgroundColor='transparent'
                inputProps={{
                  style: { fontSize: '20px' },
                }}
                sx={{ gridColumn: 'span 2', fontSize: '18px' }}
              />
              <TextField
                required
                label='Apellidos'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name='lastName'
                error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                color='secondary'
                backgroundColor='transparent'
                inputProps={{
                  style: { fontSize: '20px' },
                }}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                required
                label='Documento'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.documentID}
                name='documentID'
                error={
                  Boolean(touched.documentID) && Boolean(errors.documentID)
                }
                helperText={touched.documentID && errors.documentID}
                color='secondary'
                backgroundColor='transparent'
                inputProps={{
                  style: { fontSize: '20px' },
                }}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                required
                label='Email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='email'
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                color='secondary'
                backgroundColor='transparent'
                inputProps={{
                  style: { fontSize: '20px' },
                }}
                sx={{ gridColumn: 'span 2' }}
              />

              {/* <Box gridColumn='span 2'>
                <Dropzone
                  acceptedFiles='.jpg,.jpeg,.png'
                  multiple={false}
                  onDrop={acceptedFiles =>
                    setFieldValue('picture', acceptedFiles[0])
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <Box
                      {...getRootProps()}
                      borderRadius='5px'
                      border={`2px dashed ${colors.grey[100]}`}
                      sx={{ '&:hover': { cursor: 'pointer' } }}
                      p='0 1rem'
                    >
                      <input {...getInputProps()} />
                      {!values.picture ? (
                        <p>Elija la foto de Perfil</p>
                      ) : (
                        
                          <p>{values.picture.name}</p>
                          <EditOutlinedIcon />
                        
                      )}
                    </Box>
                  )}
                </Dropzone>
              </Box> */}

              <TextField
                required
                select
                label='Selecciona el Cargo'
                type='text'
                onBlur={handleBlur}
                onChange={(inputHandler, handleChange)}
                value={(cargo, values.cargo)}
                name='cargo'
                error={Boolean(touched.cargo) && Boolean(errors.cargo)}
                helperText={touched.cargo && errors.cargo}
                color='secondary'
                backgroundColor='transparent'
                inputProps={{
                  style: { fontSize: '20px' },
                }}
                sx={{ gridColumn: 'span 2' }}
              >
                {cargoOptions.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                label='Contraseña'
                type='password'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name='password'
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                color='secondary'
                backgroundColor='transparent'
                inputProps={{
                  style: { fontSize: '20px' },
                }}
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
                sx={{ gridColumn: 'span 2' }}
              />
            </Box>

            {/* BUTTONS */}
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4,minmax(0, 1fr))'
              sx={{
                '& >div': {
                  gridColumn: pantallaCompleta ? undefined : 'span 4',
                },
              }}
            >
              <Button
                onClick={resetForm}
                sx={{
                  gridColumn: 'span 2',
                  m: '2rem 0',
                  p: '1rem',
                }}
              >
                <Typography variant='h5'>LIMPIAR USERFORM</Typography>
              </Button>

              <Button
                type='submit'
                sx={{
                  gridColumn: 'span 2',
                  m: '2rem 0',
                  p: '1rem',
                }}
              >
                <Typography variant='h5'>REGISTRO</Typography>
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
export default UserForm
