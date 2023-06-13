// ? IMPORTACIÓN DE PAQUETES
// Importación del modulo Axios
import axios from 'axios'

// Se coloca la URL como una constante
const BASE_URL = 'http://localhost:8001/api/v1'

// Se genera la conexión por Axios con la base de Datos
const usersAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
})

// Se crea y exporta el enlace para conectar a los usuarios
export const userUrlEndPoint = '/auth'

// ? INGRESO DE UN USUARIO
// Se crea y exporta la funcion para manejar el ingreso de un usuario
export const login = async values => {
  try {
    const response = await usersAPI.post(`${userUrlEndPoint}`, values, {
      withCredentials: true,
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
}
