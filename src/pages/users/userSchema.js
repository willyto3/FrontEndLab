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
  phoneNumber: yup
    .number()
    .required('El Celular es Requerido'),
  email: yup
    .string()
    .email('Por Favor Ingrese un Correo Electronico Válido')
    .required('El Correo Electronico es Requerido'),
  cargo: yup.string().required('Por Favor Elige un Cargo'),
  password: yup
    .string()
    .required('Debe Asignar una Contraseña Válida')
    .min(5, 'La Contraseña debe ser de minimo cinco (5) caracteres'),
})

export const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  documentID: '',
  cargo: '',
  phoneNumber:''
}

// Opciones de Selección
export const cargoOptions = ['Analista', 'Inspector Profesional']
