import * as yup from 'yup'

export const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('El nombre es Requerido')
    .min(2, 'El Nombre debe tener minimo dos (2) caracteres'),
  lastName: yup
    .string()
    .required('El Apellido es Requerido')
    .min(2, 'El Apellido debe tener minimo dos (2) caracteres'),
  documentID: yup
    .string()
    .required('El Documento es Requerido')
    .min(2, 'El Documento debe tener minimo dos (2) caracteres'),
  email: yup
    .string()
    .email('Por Favor Ingrese un Correo Electronico Válido')
    .required('El Correo Electronico es Requerido'),
  cargo: yup.string().required('Por Favor Elige un Cargo'),
  contrasena: yup
    .string()
    .required('Debe Asignar una Contraseña Válida')
    .min(5, 'La Contraseña debe ser de minimo cinco (5) caracteres'),

  rutaFoto: yup.string(),
})

export const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  documentID: '',
  cargo: '',
  rutaFoto: '',
}

// Opciones de Selección
export const cargoOptions = ['Analista', 'Inspector Profesional']
